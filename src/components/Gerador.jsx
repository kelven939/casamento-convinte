import { useState } from "react";

const MSG_PADRAO =
  "Olá, {nome}! Com muita alegria convidamos você para o nosso casamento (Rapos & Sheil), sábado 21 de Novembro, às 11h. Abra o seu convite aqui: {link}";

function linkPara(base, nome, mesa) {
  try {
    const url = new URL(base);
    url.searchParams.set("convidado", nome);
    if (mesa) url.searchParams.set("mesa", mesa);
    return url.toString();
  } catch {
    return "";
  }
}

export default function Gerador() {
  const [base, setBase] = useState(
    window.location.protocol.startsWith("http") ? window.location.origin + window.location.pathname : ""
  );
  const [mesaGeral, setMesaGeral] = useState("");
  const [nomes, setNomes] = useState("");
  const [msg, setMsg] = useState(MSG_PADRAO);
  const [lista, setLista] = useState([]);
  const [copiado, setCopiado] = useState("");

  const gerar = () => {
    const itens = nomes
      .split("\n")
      .map((linha) => linha.trim())
      .filter(Boolean)
      .map((linha) => {
        // "Maria Silva | Mesa 3" - mesa própria; sem "|" usa o campo "Nome da mesa"
        const [nome, mesaLinha] = linha.split("|").map((p) => p.trim());
        const mesa = mesaLinha || mesaGeral.trim();
        return { nome, mesa, link: linkPara(base, nome, mesa) };
      })
      .filter((i) => i.nome && i.link);
    setLista(itens);
  };

  const copiar = async (chave, texto) => {
    await navigator.clipboard.writeText(texto);
    setCopiado(chave);
    setTimeout(() => setCopiado(""), 1500);
  };

  return (
    <main className="gen">
      <h1>Gerador de convites</h1>
      <p>Escreva um nome por linha. Cada convidado recebe um link com o seu nome e a sua mesa.</p>

      <label htmlFor="base">Endereço do site do convite</label>
      <input id="base" type="url" placeholder="https://o-seu-site.com/" value={base} onChange={(e) => setBase(e.target.value)} />

      <label htmlFor="mesa">Nome da mesa</label>
      <input
        id="mesa"
        type="text"
        placeholder="Ex.: Mesa 3, Mesa da Família, Mesa Rosa"
        value={mesaGeral}
        onChange={(e) => setMesaGeral(e.target.value)}
      />

      <label htmlFor="nomes">Convidados (um por linha)</label>
      <textarea
        id="nomes"
        placeholder={"Maria Silva\nFamília Macuácua\nPastor João | Mesa do Pastor"}
        value={nomes}
        onChange={(e) => setNomes(e.target.value)}
      />
      <p className="hint">
        Todos os nomes da lista ficam na mesa indicada acima. Para uma pessoa ter outra mesa, escreva{" "}
        <code>Nome | Mesa</code> nessa linha. Dica: gere por mesa, mude o "Nome da mesa" e repita.
      </p>

      <label htmlFor="msg">Mensagem do WhatsApp</label>
      <textarea id="msg" className="short" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <p className="hint">
        Pode usar <code>{"{nome}"}</code>, <code>{"{mesa}"}</code> e <code>{"{link}"}</code> na mensagem.
      </p>

      <div className="actions left">
        <button className="btn" type="button" onClick={gerar}>Gerar links</button>
        <button
          className="btn ghost"
          type="button"
          disabled={!lista.length}
          onClick={() =>
            copiar("todos", lista.map((i) => `${i.nome}${i.mesa ? ` (${i.mesa})` : ""}: ${i.link}`).join("\n"))
          }
        >
          {copiado === "todos" ? "Copiado" : "Copiar todos os links"}
        </button>
      </div>

      <ul className="lista">
        {lista.map(({ nome, mesa, link }, idx) => {
          const texto = msg
            .replaceAll("{nome}", nome)
            .replaceAll("{mesa}", mesa)
            .replaceAll("{link}", link);
          return (
            <li key={`${nome}-${idx}`}>
              <span className="nome">
                {nome}
                {mesa && <small className="mesa-tag"> · {mesa}</small>}
              </span>
              <span className="url">{link}</span>
              <div className="row">
                <a className="btn" target="_blank" rel="noopener noreferrer" href={`https://wa.me/?text=${encodeURIComponent(texto)}`}>
                  Enviar por WhatsApp
                </a>
                <button className="btn ghost" type="button" onClick={() => copiar(`${nome}-${idx}`, link)}>
                  {copiado === `${nome}-${idx}` ? "Copiado" : "Copiar link"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}