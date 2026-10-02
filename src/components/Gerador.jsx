import { useState } from "react";

const MSG_PADRAO =
  "Olá, {nome}! Com muita alegria convidamos você para o nosso casamento (Rapos & Sheil), sábado 21 de Novembro, às 11h. Abra o seu convite aqui: {link}";

function linkPara(base, nome) {
  try {
    const url = new URL(base);
    url.searchParams.set("convidado", nome);
    return url.toString();
  } catch {
    return "";
  }
}

export default function Gerador() {
  const [base, setBase] = useState(
    window.location.protocol.startsWith("http") ? window.location.origin + window.location.pathname : ""
  );
  const [nomes, setNomes] = useState("");
  const [msg, setMsg] = useState(MSG_PADRAO);
  const [lista, setLista] = useState([]);
  const [copiado, setCopiado] = useState("");

  const gerar = () => {
    const itens = nomes
      .split("\n")
      .map((n) => n.trim())
      .filter(Boolean)
      .map((nome) => ({ nome, link: linkPara(base, nome) }))
      .filter((i) => i.link);
    setLista(itens);
  };

  const copiar = async (chave, texto) => {
    await navigator.clipboard.writeText(texto);
    setCopiado(chave);
    setTimeout(() => setCopiado(""), 1500);
  };

  return (
    <main className="gen">
      <h1>Convites</h1>
      <p>Escreva um nome por linha. Cada convidado recebe um link com o seu nome na capa.</p>

      <label htmlFor="base">Endereço do site do convite</label>
      <input id="base" type="url" placeholder="https://o-seu-site.com/" value={base} onChange={(e) => setBase(e.target.value)} />

      <label htmlFor="nomes">Convidados (um por linha)</label>
      <textarea id="nomes" placeholder={"Maria Silva\nFamília Macuácua\nPastor João"} value={nomes} onChange={(e) => setNomes(e.target.value)} />

      <label htmlFor="msg">Mensagem do WhatsApp</label>
      <textarea id="msg" className="short" value={msg} onChange={(e) => setMsg(e.target.value)} />

      <div className="actions left">
        <button className="btn" type="button" onClick={gerar}>Gerar links</button>
        <button
          className="btn ghost"
          type="button"
          disabled={!lista.length}
          onClick={() => copiar("todos", lista.map((i) => `${i.nome}: ${i.link}`).join("\n"))}
        >
          {copiado === "todos" ? "Copiado" : "Copiar todos os links"}
        </button>
      </div>

      <ul className="lista">
        {lista.map(({ nome, link }) => {
          const texto = msg.replaceAll("{nome}", nome).replaceAll("{link}", link);
          return (
            <li key={nome}>
              <span className="nome">{nome}</span>
              <span className="url">{link}</span>
              <div className="row">
                <a className="btn" target="_blank" rel="noopener noreferrer" href={`https://wa.me/?text=${encodeURIComponent(texto)}`}>
                  Enviar por WhatsApp
                </a>
                <button className="btn ghost" type="button" onClick={() => copiar(nome, link)}>
                  {copiado === nome ? "Copiado" : "Copiar link"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
