import { CORES_A_EVITAR } from "../config.js";

export default function Cores() {
  return (
    <section className="colors" aria-labelledby="t-cores">
      <h2 id="t-cores" className="section-title">Cores a evitar</h2>
      <p className="colors-note">
        Para que cada pessoa se destaque no seu papel, pedimos que não use estas cores.
      </p>
      <ul className="swatches">
        {CORES_A_EVITAR.map((c) => (
          <li key={c.nome}>
            <i style={{ "--c": c.cor }} />
            <b>{c.nome}</b>
            <span>{c.papel}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}