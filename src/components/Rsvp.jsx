import { useState } from "react";
import { CONFIG } from "../config.js";
import { baixarICS } from "../calendario.js";
import { useMesa } from "../useConvidado.js";

export default function Rsvp({ convidado }) {
  const mesa = useMesa();
  const [nome, setNome] = useState(convidado);
  const [erro, setErro] = useState(false);

  const enviar = (vai) => {
    const n = nome.trim();
    if (!n) {
      setErro(true);
      return;
    }
    setErro(false);
    const texto = vai
      ? `Olá! Sou ${n} e confirmo a minha presença no casamento de ${CONFIG.noivos} (21 de Novembro, 11h).` +
        (mesa ? ` A minha mesa é: ${mesa}.` : "") +
        " Parabéns aos noivos!"
      : `Olá! Sou ${n}. Infelizmente não poderei estar presente no casamento de ${CONFIG.noivos}. Desejo-vos toda a felicidade!`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
  };

  return (
    <section className="rsvp" aria-labelledby="t-rsvp">
      <h2 id="t-rsvp" className="section-title">Confirme a sua presença</h2>
      <p className="rsvp-note">A sua resposta chega-nos por WhatsApp.</p>

      <div className="rsvp-form">
        <label htmlFor="guest-name">O seu nome</label>
        <input
          id="guest-name"
          type="text"
          autoComplete="name"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        {mesa && (
          <div className="table-card">
            <span>A sua mesa</span>
            <b>{mesa}</b>
          </div>
        )}

        <div className="actions">
          <button className="btn" type="button" onClick={() => enviar(true)}>Confirmar presença</button>
          <button className="btn ghost" type="button" onClick={() => enviar(false)}>Não poderei ir</button>
        </div>
        {erro && <p className="form-error" role="alert">Escreva o seu nome para continuar.</p>}
      </div>

      <button className="link-btn" type="button" onClick={baixarICS}>
        Guardar a data no calendário
      </button>
    </section>
  );
}