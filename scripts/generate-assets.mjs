// Genera los assets SEO estáticos en /public: iconos PNG, logo para JSON-LD e imágenes Open Graph.
// Uso: npm run assets   (requiere `sharp`, instalado como devDependency)
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { translations } from '../src/i18n/translations.js';
import { logoSvg } from '../src/lib/site.js';

const PUBLIC = path.resolve('public');
const BG = '#140B26';
const BG2 = '#1E1033';
const A1 = '#8B5CF6';
const A2 = '#E879F9';

// Logo con colores concretos (librsvg no resuelve variables CSS).
const solidLogo = (gid) => logoSvg(gid)
  .replace(/var\(--accent1\)/g, A1)
  .replace(/var\(--accent2\)/g, A2)
  .replace(/var\(--nodefill\)/g, BG)
  .replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');

// Icono cuadrado: "S." de Symbio (misma S del logo) sobre fondo oscuro, igual que favicon.ico.
function iconSvg(size, { rounded = true } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${A1}"/><stop offset="1" stop-color="${A2}"/></linearGradient></defs>
  <rect width="512" height="512" rx="${rounded ? 112 : 0}" fill="#1A1030"/>
  <g transform="translate(-97.4,-243.1) scale(6.2)">
    <path d="M63,66 C58,58 43,59 42,69 C41,79 64,78 64,90 C64,102 45,103 40,94" fill="none" stroke="url(#g)" stroke-width="8.4" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <circle cx="352" cy="372" r="36" fill="url(#g)"/>
</svg>`;
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Parte el texto en líneas de ~maxChars para el título del OG.
function wrap(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > maxChars) { lines.push(line.trim()); line = w; }
    else line += ' ' + w;
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}

function ogSvg(lang) {
  const t = translations[lang];
  const logo = solidLogo(`og-${lang}`).replace('<svg ', '<svg x="60" y="40" width="560" height="250" ');
  const lines = wrap(t.hero.eyebrow, 34);
  const titleY = 345;
  const title = lines.map((l, i) => `<text x="100" y="${titleY + i * 62}" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="52" font-weight="700" fill="#F3EEFF">${esc(l)}</text>`).join('\n  ');
  const subY = titleY + lines.length * 62 + 22;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${BG}"/><stop offset="1" stop-color="${BG2}"/></linearGradient>
    <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${A1}"/><stop offset="1" stop-color="${A2}"/></linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.15" r="0.6"><stop offset="0" stop-color="${A2}" stop-opacity="0.28"/><stop offset="1" stop-color="${A2}" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  ${logo}
  ${title}
  <text x="100" y="${subY}" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="30" fill="#B9A9DE">${esc(t.hero.title)} · WhatsApp · 24/7</text>
  <rect x="100" y="560" width="160" height="6" rx="3" fill="url(#bar)"/>
  <text x="1100" y="570" text-anchor="end" font-family="Segoe UI, Inter, Arial, sans-serif" font-size="26" fill="#B9A9DE">symbioec.com</text>
</svg>`;
}

async function png(svg, out, size) {
  const img = sharp(Buffer.from(svg));
  await (size ? img.resize(size, size) : img).png({ compressionLevel: 9 }).toFile(path.join(PUBLIC, out));
  console.log('✓', out);
}

fs.mkdirSync(path.join(PUBLIC, 'og'), { recursive: true });

await png(iconSvg(512), 'favicon-32x32.png', 32);
await png(iconSvg(512, { rounded: false }), 'apple-touch-icon.png', 180);
await png(iconSvg(512), 'icon-192.png', 192);
await png(iconSvg(512), 'icon-512.png', 512);
await png(iconSvg(512, { rounded: false }), 'icon-maskable-512.png', 512);
await png(iconSvg(512, { rounded: false }), 'logo.png', 512);
for (const lang of Object.keys(translations)) {
  await png(ogSvg(lang), `og/og-${lang}.png`);
}

