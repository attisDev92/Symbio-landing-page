// Generadores de llms.txt / llms-full.txt (https://llmstxt.org) a partir de las traducciones,
// para que el contenido que leen las IA siempre coincida con el de la web.
import { translations } from '../i18n/translations.js';
import { LANG_PATHS, absUrl, waLink, LINKEDIN_URL } from './site.js';

const en = translations.en;
const es = translations.es;

export function buildLlmsTxt() {
  return `# Symbio

> ${en.faq.items[0].a}

Symbio is built for medical and laboratory equipment distributors, manufacturers and service providers in Latin America. Equipment users (lab and hospital staff) write on WhatsApp; Symbio guides them step by step using the company's verified knowledge base, and when a fault cannot be solved remotely it opens a ticket and schedules the right field engineer based on certifications, shifts, workload and SLAs. Based in Ecuador, expanding throughout Latin America. Available in English, Spanish and Portuguese.

## Website

- [Symbio (English)](${absUrl(LANG_PATHS.en)}): AI technical support for medical equipment on WhatsApp
- [Symbio (Español)](${absUrl(LANG_PATHS.es)}): ${es.hero.eyebrow}
- [Symbio (Português)](${absUrl(LANG_PATHS.pt)}): ${translations.pt.hero.eyebrow}
- [Full description for LLMs](${absUrl('/llms-full.txt')}): product details, how it works, features and FAQ

## Key facts

${en.problem.stats.map((s) => `- ${s.value}: ${s.text.charAt(0) + s.text.slice(1).toLowerCase()}`).join('\n')}

## Contact

- [Request a demo](${absUrl('/#contacto')})
- [WhatsApp](${waLink(en.hero.waMsg)})
- [LinkedIn](${LINKEDIN_URL})

## Optional

- [Privacy policy (Spanish, Ecuador LOPDP)](${absUrl('/privacy.html')})
`;
}

function section(t, label) {
  return `## ${label}

### ${t.hero.eyebrow}

${t.hero.title}. ${t.hero.lead}

### ${t.problem.title}

${t.problem.lead}

${t.problem.stats.map((s) => `- ${s.value} — ${s.text.charAt(0) + s.text.slice(1).toLowerCase()}`).join('\n')}

### ${t.stepsSection.title}

${t.stepsSection.subtitle}

${t.stepsSection.steps.map((s, i) => `${i + 1}. ${s.t}`).join('\n')}
${t.stepsSection.steps.length + 1}. ${t.stepsSection.dashboard.text}

### ${t.features.title}

${t.features.subtitle}

${t.features.items.map((f) => `- **${f.title}**: ${f.desc}`).join('\n')}

### ${t.faq.title}

${t.faq.items.map((f) => `**${f.q}**\n${f.a}`).join('\n\n')}

### Disclaimer

${t.footer.disclaimer}
`;
}

export function buildLlmsFullTxt() {
  return `# Symbio — full description

> ${en.faq.items[0].a}

- Website: ${absUrl('/')} (EN), ${absUrl('/es/')} (ES), ${absUrl('/pt/')} (PT)
- Contact: WhatsApp ${waLink(en.hero.waMsg)} · LinkedIn ${LINKEDIN_URL}
- Location: ${en.footer.location}

${section(en, 'English')}
${section(es, 'Español')}`;
}

