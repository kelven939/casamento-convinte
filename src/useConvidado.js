import { useEffect } from "react";
import { CONFIG } from "./config.js";

const lerParam = (...chaves) => {
  const params = new URLSearchParams(window.location.search);
  for (const chave of chaves) {
    const valor = params.get(chave);
    if (valor) return valor.trim();
  }
  return "";
};

// Lê ?convidado=Maria%20Silva (ou ?c=) do endereço
export function useConvidado() {
  const nome = lerParam("convidado", "c").slice(0, 60);

  useEffect(() => {
    if (nome) document.title = `${nome}, você está convidado(a) | ${CONFIG.noivos}`;
  }, [nome]);

  return nome;
}

// Lê ?mesa=Mesa%203 (ou ?m=) do endereço
export function useMesa() {
  return lerParam("mesa", "m").slice(0, 40);
}