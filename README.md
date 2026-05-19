# Den Patrick — Carta Digital

Carta digital per a crêperie & gelateria artesana, optimitzada per mòbil i accés per QR.

## Tecnologies

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- next/font (Cinzel + DM Sans)
- Estàtic — sense backend ni base de dades

## Estructura

```
app/
  page.tsx               → Selector d'idioma (/)
  [lang]/
    page.tsx             → Grid de categories (/ca, /es, /fr)
    [categoria]/
      page.tsx           → Productes de categoria
lib/
  carta-data.ts          → Tots els productes i categories
  i18n.ts                → Textos UI en 3 idiomes
components/
  Header.tsx
  CategoriaButton.tsx
  ProducteCard.tsx
```

## Desenvolupament local

```bash
npm install
npm run dev
```

Obre http://localhost:3000

## Desplegament a Vercel

### Opció 1 — Via CLI
```bash
npm i -g vercel
vercel
```

### Opció 2 — Via GitHub
1. Puja el repositori a GitHub
2. Connecta'l a [vercel.com](https://vercel.com)
3. Framework: Next.js (detectat automàticament)
4. Deploy

### Variables d'entorn
Cap — el projecte no necessita cap variable d'entorn.

## Actualitzar la carta

Edita `/lib/carta-data.ts`. Tots els preus i productes estan en aquest fitxer.

## QR per a les taules

Un cop desplegat, genera un QR apuntant a:
- `https://[el-teu-domini].vercel.app` — redirigeix al selector d'idioma

Eines gratuïtes per generar QR: qr-code-generator.com, qrcode-monkey.com

## Idiomes

- `ca` — Català (per defecte)
- `es` — Castellano
- `fr` — Français

L'idioma es guarda a `localStorage` per no tornar a preguntar.
