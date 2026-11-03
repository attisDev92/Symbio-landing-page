// Constantes y helpers compartidos entre componentes Astro y React.

export const SITE_URL = 'https://www.symbioec.com';
export const WHATSAPP_NUMBER = '593982230654';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/symbioec';
export const GTM_ID = 'GTM-PQL9W6LQ';

export const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Ruta pública de cada idioma. Inglés vive en la raíz (x-default).
export const LANG_PATHS = { en: '/', es: '/es/', pt: '/pt/' };
// Códigos hreflang (genéricos: "es" cubre toda Latinoamérica, "pt" Brasil/Portugal).
export const HREFLANG = { en: 'en', es: 'es', pt: 'pt' };
export const absUrl = (path) => new URL(path, SITE_URL).href;

// Logo SVG de Symbio. `gid` permite IDs de gradiente únicos cuando hay varios logos en la página.
export function logoSvg(gid, { title = 'Symbio' } = {}) {
  const id = `symbioGrad-${gid}`;
  return `<svg viewBox="0 0 380 170" role="img" preserveAspectRatio="xMidYMid meet"><title>${title}</title>`
    + `<defs><linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="40" y1="0" x2="310" y2="0"><stop offset="0" stop-color="var(--accent1)"/><stop offset="1" stop-color="var(--accent2)"/></linearGradient></defs>`
    + `<g transform="translate(32,0)" fill="none" stroke="url(#${id})" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="logo-strokes">`
    + `<path d="M63,66 C58,58 43,59 42,69 C41,79 64,78 64,90 C64,102 45,103 40,94"/>`
    + `<path d="M78,60 L92,94"/>`
    + `<path d="M106,60 L94,108 Q90,124 106,124 L284,124 Q300,124 300,110"/>`
    + `<path d="M118,100 V74 C118,57 141,57 141,74 V100 M141,74 C141,57 164,57 164,74 V100"/>`
    + `<path d="M177,40 V100"/><circle cx="195" cy="81" r="18"/>`
    + `<path d="M226,64 V100"/><circle cx="262" cy="81" r="19"/>`
    + `<g fill="url(#${id})" stroke="none" class="logo-nodes"><circle cx="226" cy="46" r="5"/><circle cx="300" cy="97" r="7"/><circle cx="141" cy="124" r="7"/><circle cx="195" cy="124" r="7"/><circle cx="262" cy="124" r="7"/></g>`
    + `<g fill="var(--nodefill)" stroke="none" class="logo-inner-nodes"><circle cx="141" cy="124" r="2.5"/><circle cx="195" cy="124" r="2.5"/><circle cx="262" cy="124" r="2.5"/></g>`
    + `</g></svg>`;
}

