import { CONFIG } from "../config.js";

export default function Local() {
  return (
    <section className="place gold-band" aria-labelledby="t-local">
      <h2 id="t-local" className="section-title dark">Salão: Princesa Eventos</h2>
      <p className="directions">
        Rua a seguir à paragem Machimbombo.
        <br />
        Entrada para quem vai ao posto policial.
      </p>
      <div className="actions">
        <a className="btn dark" href={CONFIG.mapaSalao} target="_blank" rel="noopener noreferrer">
          Ver o salão no mapa
        </a>
        <a className="btn dark ghost" href={CONFIG.mapaIgreja} target="_blank" rel="noopener noreferrer">
          Ver a igreja no mapa
        </a>
      </div>
    </section>
  );
}