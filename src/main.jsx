import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Gerador from "./components/Gerador.jsx";
import "./styles.css";

// Duas "páginas" sem precisar de router: o convite e o gerador (#/gerador)
function Raiz() {
  const [hash, setHash] = React.useState(window.location.hash);
  React.useEffect(() => {
    const on = () => setHash(window.location.hash);
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return hash === "#/gerador" ? <Gerador /> : <App />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Raiz />
  </React.StrictMode>
);