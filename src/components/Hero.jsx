import Contagem from "./Contagem.jsx";

const Canto = ({ className }) => (
  <svg className={`corner ${className}`} viewBox="0 0 120 120" aria-hidden="true">
    <path d="M4 116V30C4 14 16 4 32 4h84M14 116V40c0-14 10-26 26-26h76M30 30c0-12 12-18 22-12s6 20-6 20-16-8-16-8z" />
  </svg>
);

export default function Hero({ convidado }) {
  return (
    <header className="hero">
      <div className="frame" aria-hidden="true">
        <Canto className="tl" />
        <Canto className="br" />
      </div>

      <div className="hero-inner">
        <p className="invite-line">
          {convidado ? (
            <>
              <strong>{convidado},</strong>
              <br />
              convidamos você para celebrar nosso casamento!
            </>
          ) : (
            <>
              Convidamos você para
              <br />
              <strong>celebrar nosso casamento!</strong>
            </>
          )}
        </p>

        <div className="monogram" aria-hidden="true">
          <span>R</span>
          <span>S</span>
        </div>
        <h1 className="names">
          Raposo <small>&amp;</small> Sheila
        </h1>

        <div className="when">
          <span className="when-day">Sábado</span>
          <span className="when-date">
            <em>Nov</em>
            <b>21</b>
          </span>
          <span className="when-hour">11 horas</span>
        </div>

        <p className="church">
          Igreja Assembleia de Deus
          <br />
          (Kongolote)
        </p>

        <Contagem />
      </div>
    </header>
  );
}