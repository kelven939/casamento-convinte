import { useEffect, useState } from "react";
import { CONFIG } from "../config.js";

const alvo = new Date(CONFIG.dataCerimonia).getTime();
const pad = (n) => String(n).padStart(2, "0");

export default function Contagem() {
  const [agora, setAgora] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setAgora(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = alvo - agora;
  if (diff <= 0) return <p className="church">Hoje é o grande dia!</p>;

  const s = Math.floor(diff / 1000);
  const partes = [
    [Math.floor(s / 86400), "dias"],
    [pad(Math.floor((s % 86400) / 3600)), "horas"],
    [pad(Math.floor((s % 3600) / 60)), "min"],
    [pad(s % 60), "seg"],
  ];

  return (
    <div className="countdown" aria-live="polite">
      {partes.map(([valor, rotulo]) => (
        <div key={rotulo}>
          <b>{valor}</b>
          <span>{rotulo}</span>
        </div>
      ))}
    </div>
  );
}