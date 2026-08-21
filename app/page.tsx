"use client";

import { useState } from "react";

export default function Home() {
  const [celsius, setCelsius] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  function convert() {
    if (!celsius) return;

    const fahrenheit = ((Number(celsius) * 9) / 5 + 32).toFixed(1);

    setHistory((prev) => [
      `${celsius}°C = ${fahrenheit}°F`,
      ...prev,
    ]);
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>Conversor de Temperatura</h1>

      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />

      <button onClick={convert}>
        Converter
      </button>

      <h2>Histórico</h2>

      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
}