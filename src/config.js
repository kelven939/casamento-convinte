export const CONFIG = {
  noivos: "Raposo & Sheila",
  whatsapp: "258863901454",
  // Data e hora da cerimónia (Moçambique = UTC+2)
  dataCerimonia: "2026-11-21T11:00:00+02:00",
  duracaoHoras: 8,
  igreja: "Igreja Assembleia de Deus (Kongolote)",
  salao: "Quinta Maloa Eventos",
  // links Google Maps
  mapaIgreja: "https://www.google.com/maps/search/?api=1&query=Igreja+Assembleia+de+Deus+Kongolote",
  mapaSalao: "https://www.google.com/maps/place/6JP5%2B4QX+Quinta+Maloa,+Marracuene/@-25.7646418,32.6094752,17z/data=!4m6!3m5!1s0x1ee69341e0530f71:0xc1282cefe4b307f!8m2!3d-25.7646418!4d32.6094752!16s%2Fg%2F11c2ly8tt0?utm_campaign=ml-ardl&g_ep=Eg1tbF8yMDI2MTEwM18wIJvbDyoASAJQAQ%3D%3D",
};

export const PROGRAMA = [
  { hora: "11h00", titulo: "Cerimónia", local: "Igreja Assembleia de Deus (Kongolote). Paragem Cemitério, Rua das Bombas" },
  { hora: "14h30", titulo: "Secção de fotos", local: "Quinta Maloa Eventos. Endereço: Bairro Mumemo, Paragem Agostinho Neto, em Marracuene" },
  { hora: "15h00", titulo: "Copo de água", local: "Quinta Maloa Eventos" },
];

export const CORES_A_EVITAR = [
  { cor: "#7fd3f5", nome: "Azul céu", papel: "Damas" },
  { cor: "#f4f4f4", nome: "Branco", papel: "Noiva" },
  { cor: "#fffdd0", nome: "Creme", papel: "Decoração" },
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
