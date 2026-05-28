import sql from "@/app/api/utils/sql";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ADMIN_EMAIL = "vitaliksep@yandex.ru";

// ВАЖНО: onboarding@resend.dev может слать письма ТОЛЬКО на email владельца аккаунта Resend.
// Чтобы слать на любые адреса — добавьте переменную RESEND_FROM_EMAIL с адресом
// на верифицированном домене, например: no-reply@yourdomain.ru
// Инструкция: https://resend.com/docs/dashboard/domains/introduction
const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const BRAND_FROM = `Shirokov Deus Capital <${RESEND_FROM_EMAIL}>`;

// ─── Вспомогательная функция отправки через Resend с полным логированием ──────
async function sendEmail({ to, subject, html, tag }) {
  if (!RESEND_API_KEY) {
    console.warn(`[email/${tag}] RESEND_API_KEY не задан, пропускаем отправку`);
    return { ok: false, error: "RESEND_API_KEY не задан" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from: BRAND_FROM, to, subject, html }),
    });

    // Читаем тело ответа ВСЕГДА — и при успехе, и при ошибке
    let resBody;
    try {
      resBody = await res.json();
    } catch {
      resBody = { raw: await res.text().catch(() => "(пусто)") };
    }

    if (!res.ok) {
      // Выводим полную диагностику: статус + тело ответа Resend
      console.error(
        `[email/${tag}] ❌ Resend вернул ${res.status}:`,
        JSON.stringify(resBody, null, 2),
      );

      // Самая частая причина: onboarding@resend.dev не может слать на чужие адреса
      if (res.status === 403 || res.status === 422) {
        console.error(
          `[email/${tag}] ⚠️  Вероятная причина: адрес отправителя "${RESEND_FROM_EMAIL}" не верифицирован для рассылки на "${to}".`,
          `Добавьте переменную RESEND_FROM_EMAIL с адресом на верифицированном домене Resend.`,
        );
      }

      return { ok: false, status: res.status, error: resBody };
    }

    console.log(`[email/${tag}] ✅ Отправлено на ${to}, id: ${resBody.id}`);
    return { ok: true, id: resBody.id };
  } catch (err) {
    console.error(`[email/${tag}] 🔥 Сетевая ошибка:`, err.message);
    return { ok: false, error: err.message };
  }
}

// ─── Брендированный HTML-wrapper ──────────────────────────────────────────────
function emailWrapper(content) {
  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shirokov Deus Capital</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f4f8;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#0A2466 0%,#0d3a8a 60%,#00CED1 100%);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
              <div style="display:inline-block;border:2px solid rgba(0,206,209,0.4);border-radius:12px;padding:10px 20px;margin-bottom:16px;">
                <span style="color:#00CED1;font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;">SHIROKOV DEUS CAPITAL</span>
              </div>
              <div style="color:white;font-size:20px;font-weight:700;letter-spacing:-0.02em;line-height:1.3;">
                Инвестиции в премиальную<br/>курортную недвижимость
              </div>
              <div style="width:48px;height:3px;background:#00CED1;border-radius:2px;margin:16px auto 0;"></div>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px;">
              ${content}
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#0A2466;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
              <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:0 0 8px;">
                © ${new Date().getFullYear()} Shirokov Deus Capital. Все права защищены.
              </p>
              <p style="color:rgba(255,255,255,0.35);font-size:11px;margin:0;">
                г. Сочи, ул. Юных Ленинцев, д.10 &nbsp;·&nbsp;
                <a href="tel:+70000000000" style="color:#00CED1;text-decoration:none;">8(000)-000-00-00</a> &nbsp;·&nbsp;
                <a href="https://shirokov-deus-capital.created.app" style="color:#00CED1;text-decoration:none;">shirokov-deus-capital.ru</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Письмо АДМИНИСТРАТОРУ ─────────────────────────────────────────────────────
function buildAdminEmail({
  name,
  phone,
  email,
  messenger,
  message,
  formType,
  clientId,
  utmSource,
  utmMedium,
  utmCampaign,
  utmContent,
  utmTerm,
  createdAt,
  clientEmailSent,
}) {
  const hasUTM = utmSource || utmMedium || utmCampaign || utmContent || utmTerm;
  const hasClientId = clientId && clientId.trim();

  const content = `
    <div style="display:inline-block;background:#00CED1;color:#0A2466;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:0.08em;margin-bottom:20px;">
      НОВАЯ ЗАЯВКА
    </div>

    <h2 style="color:#0A2466;font-size:22px;font-weight:700;margin:0 0 6px;">${formType}</h2>
    <p style="color:#6b7280;font-size:13px;margin:0 0 28px;">
      Получена: ${new Date(createdAt).toLocaleString("ru-RU", { dateStyle: "long", timeStyle: "short" })}
      ${
        email
          ? clientEmailSent
            ? ` &nbsp;·&nbsp; <span style="color:#059669;">✓ письмо клиенту отправлено</span>`
            : ` &nbsp;·&nbsp; <span style="color:#dc2626;">⚠ письмо клиенту НЕ отправлено (нужен верифицированный домен Resend)</span>`
          : ""
      }
    </p>

    <!-- Контакты -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0"
      style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;margin-bottom:20px;">
      <tr><td style="padding:20px 24px;">
        <p style="color:#6b7280;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 16px;">Контактные данные</p>
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="50%" style="vertical-align:top;padding-bottom:12px;">
              <p style="color:#9ca3af;font-size:11px;margin:0 0 3px;">Имя</p>
              <p style="color:#111827;font-size:15px;font-weight:600;margin:0;">${name}</p>
            </td>
            <td width="50%" style="vertical-align:top;padding-bottom:12px;">
              <p style="color:#9ca3af;font-size:11px;margin:0 0 3px;">Телефон</p>
              <a href="tel:${phone}" style="color:#0A2466;font-size:15px;font-weight:600;text-decoration:none;">${phone}</a>
            </td>
          </tr>
          ${
            email
              ? `
          <tr>
            <td width="50%" style="vertical-align:top;padding-bottom:12px;">
              <p style="color:#9ca3af;font-size:11px;margin:0 0 3px;">Email</p>
              <a href="mailto:${email}" style="color:#0A2466;font-size:14px;text-decoration:none;">${email}</a>
            </td>
            <td width="50%" style="vertical-align:top;padding-bottom:12px;">
              ${
                messenger
                  ? `<p style="color:#9ca3af;font-size:11px;margin:0 0 3px;">Мессенджер</p>
              <p style="color:#111827;font-size:14px;margin:0;">${messenger}</p>`
                  : ""
              }
            </td>
          </tr>`
              : messenger
                ? `
          <tr>
            <td width="50%" style="vertical-align:top;padding-bottom:12px;">
              <p style="color:#9ca3af;font-size:11px;margin:0 0 3px;">Мессенджер</p>
              <p style="color:#111827;font-size:14px;margin:0;">${messenger}</p>
            </td>
            <td></td>
          </tr>`
                : ""
          }
        </table>
      </td></tr>
    </table>

    ${
      message
        ? `
    <table width="100%" cellpadding="0" cellspacing="0" border="0"
      style="background:#fffbeb;border:1px solid #fde68a;border-radius:12px;margin-bottom:20px;">
      <tr><td style="padding:20px 24px;">
        <p style="color:#92400e;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 10px;">Комментарий клиента</p>
        <p style="color:#1f2937;font-size:14px;line-height:1.6;margin:0;">${message}</p>
      </td></tr>
    </table>`
        : ""
    }

    ${
      hasUTM || hasClientId
        ? `
    <table width="100%" cellpadding="0" cellspacing="0" border="0"
      style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:12px;margin-bottom:20px;">
      <tr><td style="padding:20px 24px;">
        <p style="color:#0369a1;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 14px;">📊 Аналитика</p>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:13px;">
          ${
            hasClientId
              ? `<tr>
            <td style="color:#6b7280;padding-bottom:8px;width:140px;">Yandex ClientID</td>
            <td style="color:#0c4a6e;font-family:monospace;font-weight:600;padding-bottom:8px;">${clientId}</td>
          </tr>`
              : ""
          }
          ${utmSource ? `<tr><td style="color:#6b7280;padding-bottom:6px;width:140px;">utm_source</td><td style="color:#0c4a6e;padding-bottom:6px;">${utmSource}</td></tr>` : ""}
          ${utmMedium ? `<tr><td style="color:#6b7280;padding-bottom:6px;">utm_medium</td><td style="color:#0c4a6e;padding-bottom:6px;">${utmMedium}</td></tr>` : ""}
          ${utmCampaign ? `<tr><td style="color:#6b7280;padding-bottom:6px;">utm_campaign</td><td style="color:#0c4a6e;padding-bottom:6px;">${utmCampaign}</td></tr>` : ""}
          ${utmContent ? `<tr><td style="color:#6b7280;padding-bottom:6px;">utm_content</td><td style="color:#0c4a6e;padding-bottom:6px;">${utmContent}</td></tr>` : ""}
          ${utmTerm ? `<tr><td style="color:#6b7280;padding-bottom:6px;">utm_term</td><td style="color:#0c4a6e;padding-bottom:6px;">${utmTerm}</td></tr>` : ""}
        </table>
      </td></tr>
    </table>`
        : ""
    }

    <div style="text-align:center;padding-top:8px;">
      <a href="tel:${phone}"
        style="display:inline-block;background:linear-gradient(135deg,#00CED1,#0A2466);color:white;font-size:15px;font-weight:700;padding:14px 36px;border-radius:10px;text-decoration:none;">
        📞 Позвонить клиенту
      </a>
    </div>
  `;

  return emailWrapper(content);
}

// ─── Письмо КЛИЕНТУ ───────────────────────────────────────────────────────────
function buildClientEmail({ name, formType }) {
  const content = `
    <h2 style="color:#0A2466;font-size:22px;font-weight:700;margin:0 0 16px;">
      Здравствуйте, ${name}! 👋
    </h2>
    <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 24px;">
      Ваша заявка <strong style="color:#0A2466;">«${formType}»</strong> успешно получена.
      Наш эксперт свяжется с вами <strong>в течение 5–10 минут</strong> в рабочее время.
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" border="0"
      style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;margin-bottom:28px;">
      <tr><td style="padding:24px;">
        <p style="color:#6b7280;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 18px;">Что вас ждёт на консультации</p>
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr><td style="padding-bottom:14px;">
            <span style="display:inline-block;width:28px;height:28px;background:#00CED1;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#0A2466;margin-right:12px;">1</span>
            <span style="color:#374151;font-size:14px;">Разберём ваш инвестиционный запрос и бюджет</span>
          </td></tr>
          <tr><td style="padding-bottom:14px;">
            <span style="display:inline-block;width:28px;height:28px;background:#00CED1;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#0A2466;margin-right:12px;">2</span>
            <span style="color:#374151;font-size:14px;">Подберём оптимальный объект с доходностью 29–45%</span>
          </td></tr>
          <tr><td>
            <span style="display:inline-block;width:28px;height:28px;background:#00CED1;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:700;color:#0A2466;margin-right:12px;">3</span>
            <span style="color:#374151;font-size:14px;">Покажем реальные расчёты окупаемости и доходности</span>
          </td></tr>
        </table>
      </td></tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" border="0"
      style="background:linear-gradient(135deg,rgba(10,36,102,0.04),rgba(0,206,209,0.06));border:1px solid rgba(0,206,209,0.2);border-radius:12px;margin-bottom:28px;">
      <tr><td style="padding:20px 24px;">
        <p style="color:#0A2466;font-size:13px;font-weight:700;margin:0 0 12px;">🏖 Наши объекты на побережье Чёрного моря</p>
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:13px;color:#374151;">
          <tr><td style="padding-bottom:8px;"><span style="color:#00CED1;margin-right:8px;">▸</span> Alean Select Agoy — доходность 29–40%, от 20,7 млн ₽</td></tr>
          <tr><td style="padding-bottom:8px;"><span style="color:#00CED1;margin-right:8px;">▸</span> Палаццо Де Агой — доходность 32–45%, от 29,7 млн ₽</td></tr>
          <tr><td style="padding-bottom:8px;"><span style="color:#00CED1;margin-right:8px;">▸</span> ГК Белые Ночи (Сочи) — доходность 30–42%, от 21,2 млн ₽</td></tr>
          <tr><td><span style="color:#00CED1;margin-right:8px;">▸</span> Mandarin Garden (Адлер) — доходность 28–38%, от 72,4 млн ₽</td></tr>
        </table>
      </td></tr>
    </table>

    <p style="color:#6b7280;font-size:13px;line-height:1.6;margin:0 0 24px;">
      Если у вас есть вопросы — позвоните нам или напишите в мессенджер. Мы всегда на связи.
    </p>

    <div style="text-align:center;">
      <a href="https://shirokov-deus-capital.created.app"
        style="display:inline-block;background:linear-gradient(135deg,#00CED1,#0A2466);color:white;font-size:15px;font-weight:700;padding:14px 36px;border-radius:10px;text-decoration:none;margin-bottom:12px;">
        Посмотреть объекты на сайте →
      </a><br/>
      <a href="tel:+70000000000" style="color:#00CED1;font-size:13px;text-decoration:none;">
        📞 8(000)-000-00-00
      </a>
    </div>
  `;
  return emailWrapper(content);
}

// ─── POST ──────────────────────────────────────────────────────────────────────
export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      messenger,
      message,
      formType,
      clientId,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent,
      utmTerm,
    } = body;

    if (!name || !phone || !formType) {
      return Response.json(
        { error: "Не заполнены обязательные поля" },
        { status: 400 },
      );
    }

    // Сохранение в БД
    const result = await sql`
      INSERT INTO leads (
        name, phone, email, messenger, message, form_type,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term, client_id
      ) VALUES (
        ${name}, ${phone}, ${email || null}, ${messenger || null},
        ${message || null}, ${formType},
        ${utmSource || null}, ${utmMedium || null}, ${utmCampaign || null},
        ${utmContent || null}, ${utmTerm || null}, ${clientId || null}
      )
      RETURNING *
    `;
    const lead = result[0];

    let clientEmailSent = false;

    if (RESEND_API_KEY) {
      const emailPayload = {
        name,
        phone,
        email,
        messenger,
        message,
        formType,
        clientId,
        utmSource,
        utmMedium,
        utmCampaign,
        utmContent,
        utmTerm,
        createdAt: lead.created_at,
        clientEmailSent: false, // заполним ниже
      };

      // 1. Сначала шлём письмо клиенту (если есть email)
      if (email) {
        const clientResult = await sendEmail({
          to: email,
          subject: "Мы получили вашу заявку — Shirokov Deus Capital",
          html: buildClientEmail({ name, formType }),
          tag: "client",
        });
        clientEmailSent = clientResult.ok;
      }

      // 2. Шлём письмо администратору (со статусом отправки клиенту)
      emailPayload.clientEmailSent = clientEmailSent;
      await sendEmail({
        to: ADMIN_EMAIL,
        subject: `🔔 Новая заявка: ${formType} — ${name}`,
        html: buildAdminEmail(emailPayload),
        tag: "admin",
      });
    }

    return Response.json({ success: true, lead, clientEmailSent });
  } catch (error) {
    console.error("Lead creation error:", error);
    return Response.json(
      { error: "Ошибка при обработке заявки" },
      { status: 500 },
    );
  }
}

// ─── GET ───────────────────────────────────────────────────────────────────────
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");

    const leads = status
      ? await sql`SELECT * FROM leads WHERE status = ${status} ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`
      : await sql`SELECT * FROM leads ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;

    const totalCount = await sql`SELECT COUNT(*) FROM leads`;

    return Response.json({
      leads,
      total: parseInt(totalCount[0].count),
      limit,
      offset,
    });
  } catch (error) {
    console.error("Leads fetch error:", error);
    return Response.json(
      { error: "Ошибка при получении заявок" },
      { status: 500 },
    );
  }
}
