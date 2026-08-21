"use client";

import { useState } from "react";

export default function Home() {
  const [celsius, setCelsius] = useState("");

  const fahrenheit =
    celsius === ""
      ? ""
      : ((Number(celsius) * 9) / 5 + 32).toFixed(1);

  return (
    <main style={{ padding: "40px" }}>
      <h1>Conversor de Temperatura</h1>

      <input
        type="number"
        placeholder="Digite Celsius"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />

      <h2>{fahrenheit} °F</h2>
    </main>
  );
}