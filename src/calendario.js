import { CONFIG } from "./config.js";

export function baixarICS() {
  const inicio = new Date(CONFIG.dataCerimonia);
  const fim = new Date(inicio.getTime() + CONFIG.duracaoHoras * 3600 * 1000);
  const fmt = (d) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Convite//PT", "BEGIN:VEVENT",
    `UID:casamento-${inicio.getTime()}@convite`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(inicio)}`,
    `DTEND:${fmt(fim)}`,
    `SUMMARY:Casamento de ${CONFIG.noivos}`,
    `LOCATION:${CONFIG.igreja}`,
    `DESCRIPTION:Cerimónia às 11h. Secção de fotos às 14h30 e copo de água às 15h no ${CONFIG.salao}.`,
    "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");

  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  a.download = "casamento.ics";
  a.click();
  URL.revokeObjectURL(a.href);
}