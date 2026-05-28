"use client";
import { useState } from "react";

// Тестовая страница: намеренно нарушает правила хуков (Hook Rules)
// useState вызывается внутри условного блока — это запрещено React
// Используется для проверки React DevTools / error boundary
function BadHook({ flag }) {
  // ⚠️ Намеренное нарушение: хук внутри if-блока (Rules of Hooks)
  if (flag) {
    const [n, setValue] = useState(0);
    return (
      <div>
        {n}
        <button onClick={() => setValue(n + 1)}>Increment</button>
      </div>
    );
  }
  return <span>ok</span>;
}

export default function HookRulePage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Bad Hook Example</h1>
      <BadHook flag={count % 2 === 0} />
      <button onClick={() => setCount(count + 1)}>Toggle Hook</button>
    </div>
  );
}
