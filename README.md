# Convite de Casamento — Rapos & Sheil (React + Vite)

## Correr no computador
```bash
npm install
npm run dev
```

## Colocar as fotos
Copie as fotos para `src/assets/fotos/`. A primeira (ordem alfabética) é a principal.

## Personalizar
Tudo está em `src/config.js`: número de WhatsApp, data, locais, links dos mapas, programa e cores.

## Convites por convidado
Abra `https://o-seu-site/#/gerador`, escreva os nomes (um por linha) e envie cada link por WhatsApp.
Cada link tem a forma `https://o-seu-site/?convidado=Maria%20Silva`.

## Publicar
```bash
npm run build
```
Envie a pasta `dist/` para o Netlify, Vercel, GitHub Pages ou outro alojamento estático.
