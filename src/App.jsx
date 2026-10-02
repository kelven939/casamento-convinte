import { useConvidado } from "./useConvidado.js";
import Hero from "./components/Hero.jsx";
import Frase from "./components/Frase.jsx";
import Noivos from "./components/Noivos.jsx";
import Programa from "./components/Programa.jsx";
import Local from "./components/Local.jsx";
import Cores from "./components/Cores.jsx";
import Rsvp from "./components/Rsvp.jsx";
import Rodape from "./components/Rodape.jsx";

export default function App() {
  const convidado = useConvidado();
  return (
    <>
      <Hero convidado={convidado} />
      <main>
        <Frase />
        <Noivos />
        <Programa />
        <Local />
        <Cores />
        <Rsvp convidado={convidado} />
      </main>
      <Rodape />
    </>
  );
}