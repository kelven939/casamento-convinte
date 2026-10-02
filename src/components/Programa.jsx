import { PROGRAMA } from "../config.js";

export default function Programa() {
  return (
    <section className="program" aria-labelledby="t-programa">
      <h2 id="t-programa" className="section-title">Agenda</h2>
      <ol className="timeline">
        {PROGRAMA.map((p) => (
          <li key={p.hora}>
            <time>{p.hora}</time>
            <div>
              <h3>{p.titulo}</h3>
              <p>{p.local}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}