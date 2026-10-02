export const CONFIG = {
  noivos: "Raposo & Sheila",
  whatsapp: "258863901454",
  // Data e hora da cerimónia (Moçambique = UTC+2)
  dataCerimonia: "2026-11-21T11:00:00+02:00",
  duracaoHoras: 8,
  igreja: "Igreja Assembleia de Deus (Kongolote)",
  salao: "Salão Princesa Eventos",
  // links Google Maps
  mapaIgreja: "https://www.google.com/maps/search/?api=1&query=Igreja+Assembleia+de+Deus+Kongolote",
  mapaSalao: "https://www.google.com/maps/search/?api=1&query=Princesa+Eventos+Kongolote",
};

export const PROGRAMA = [
  { hora: "11h00", titulo: "Cerimónia", local: "Igreja Assembleia de Deus (Kongolote)" },
  { hora: "14h30", titulo: "Secção de fotos", local: "Salão Princesa Eventos" },
  { hora: "15h00", titulo: "Copo de água", local: "Salão Princesa Eventos" },
];

export const CORES_A_EVITAR = [
  { cor: "#7fd3f5", nome: "Azul céu", papel: "Damas" },
  { cor: "#f4f4f4", nome: "Branco", papel: "Noiva" },
  { cor: "#7cb342", nome: "Verde", papel: "Decoração" },
  { cor: "#e53935", nome: "Vermelho", papel: "Protocolo" },
];

// 01-noivos.jpg, 02-noivos.jpg, ...
const modulos = import.meta.glob("./assets/fotos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
});
export const FOTOS = Object.keys(modulos)
  .sort()
  .map((caminho) => modulos[caminho]);