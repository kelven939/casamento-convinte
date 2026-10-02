import { useRef, useState } from "react";
import { FOTOS } from "../config.js";

export default function Noivos() {
  const dialogRef = useRef(null);
  const [aberta, setAberta] = useState(0);

  if (FOTOS.length === 0) {
    if (import.meta.env.PROD) return null;
    return (
      <section className="couple" aria-labelledby="t-noivos">
        <h2 id="t-noivos" className="section-title">Os noivos</h2>
        <p className="photo-hint">
          Coloque as fotos.
        </p>
      </section>
    );
  }

  const abrir = (i) => {
    setAberta(i);
    dialogRef.current?.showModal();
  };
  const fechar = () => dialogRef.current?.close();

  return (
    <section className="couple" aria-labelledby="t-noivos">
      <h2 id="t-noivos" className="section-title">Os noivos</h2>

      <div className={`gallery n${Math.min(FOTOS.length, 5)}`}>
        {FOTOS.map((src, i) => (
          <button
            key={src}
            type="button"
            className={`photo ${i === 0 ? "photo-main" : ""}`}
            onClick={() => abrir(i)}
            aria-label={`Ampliar foto ${i + 1} de ${FOTOS.length}`}
          >
            <img src={src} alt={`Rapos e Sheil, foto ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClick={(e) => e.target === dialogRef.current && fechar()}
      >
        <img src={FOTOS[aberta]} alt={`Rapos e Sheil, foto ${aberta + 1}`} />
        <button type="button" className="lightbox-close" onClick={fechar} aria-label="Fechar foto">
          Fechar
        </button>
      </dialog>
    </section>
  );
}