import { useEffect } from "react";
import { CONFIG } from "./config.js";

// Le ?convidado=Maria%20Silva (ou ?c=) do endereço
export function useConvidado() {
  const params = new URLSearchParams(window.location.search);
  const nome = (params.get("convidado") || params.get("c") || "").trim().slice(0, 60);

  useEffect(() => {
    if (nome) document.title = `${nome}, você está convidado(a) | ${CONFIG.noivos}`;
  }, [nome]);

  return nome;
}