# ════════════════════════════════════════════════════════════════════════════════
#  Shirokov Deus Capital — Production Dockerfile
#  Stack : Next.js 15 + React 19 + Node 20 LTS
#  Based : Docker Inc best-practices + official Next.js Docker example
#  Docs  : https://nextjs.org/docs/deployment#docker-image
#          https://github.com/vercel/next.js/tree/canary/examples/with-docker
# ════════════════════════════════════════════════════════════════════════════════

# ─────────────────────────────────────────────
#  STAGE 1 — base
#  Общий образ для всех стадий
# ─────────────────────────────────────────────
FROM node:20-alpine AS base

# ─────────────────────────────────────────────
#  STAGE 2 — deps
#  Устанавливаем зависимости
#  Слой кешируется до изменения package.json
# ─────────────────────────────────────────────
FROM base AS deps

# libc6-compat — совместимость Alpine с glibc-бинарями
RUN apk add --no-cache libc6-compat

# Нативные зависимости: argon2 требует компилятора C/C++
RUN apk add --no-cache python3 make g++ gcc

WORKDIR /app

# Копируем ТОЛЬКО манифест — Docker закеширует слой
# и не будет переустанавливать deps при изменении только кода
COPY package.json package-lock.json* ./

# npm ci — если есть lock-файл (быстро и детерминировано)
# npm install — если lock-файла нет (гибко)
RUN if [ -f package-lock.json ]; then \
      npm ci --prefer-offline; \
    else \
      npm install; \
    fi

# ─────────────────────────────────────────────
#  STAGE 3 — builder
#  Сборка Next.js-приложения
# ─────────────────────────────────────────────
FROM base AS builder

# Нативные зависимости нужны и здесь (постинсталл-скрипты)
RUN apk add --no-cache libc6-compat python3 make g++ gcc

WORKDIR /app

# Берём node_modules из стадии deps
COPY --from=deps /app/node_modules ./node_modules

# Копируем весь исходный код
COPY . .

# Отключаем телеметрию Next.js при сборке
ENV NEXT_TELEMETRY_DISABLED=1

# NEXT_PUBLIC_* переменные читаются во время BUILD — передаём через ARG
# Runtime-секреты (DATABASE_URL и др.) НЕ нужны при сборке
ARG NEXT_PUBLIC_CREATE_ENV=production
ENV NEXT_PUBLIC_CREATE_ENV=$NEXT_PUBLIC_CREATE_ENV

# Сборка приложения
# output: 'standalone' в next.config.js создаёт минимальный server bundle
RUN npm run build

# ─────────────────────────────────────────────
#  STAGE 4 — runner
#  Финальный production-образ (~150 MB)
# ─────────────────────────────────────────────
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Security best-practice: запускаем от непривилегированного пользователя
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Статические файлы (папка public/ может отсутствовать)
COPY --from=builder /app/public* ./public/

# standalone-сборка: server.js + минимальные node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Статические чанки JS/CSS с хеш-именами (долгое кеширование)
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check — Docker перезапустит контейнер при недоступности
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD wget -qO- http://localhost:3000/ || exit 1

CMD ["node", "server.js"]
