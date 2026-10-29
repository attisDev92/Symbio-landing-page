const { createContext, useContext, useState, useEffect, useCallback } = React;

const translations = {
  en: {
    meta: {
      title: "Symbio — WhatsApp-Powered Technical Support for Medical Equipment",
      description: "Symbio guides medical equipment users step by step through WhatsApp, from fault to resolution."
    },
    nav: {
      ariaHome: "Go to home",
      howItWorks: "How it works",
      features: "Features",
      cta: "Request demo"
    },
    hero: {
      title: "Intelligence that resolves",
      lead: "Symbio guides medical equipment users step-by-step.",
      waBtn: "Chat on WhatsApp",
      waMsg: "Hello, I'd like to learn more about Symbio",
      demoBtn: "Request a demo"
    },
    problem: {
      title: "A case resolved via WhatsApp saves time, money, and builds trust",
      lead: "Medical equipment is critical to the operation of laboratories and hospitals. Downtime means financial loss, delays, frustration for clinical and lab staff, and an overall poor customer experience. Most of these issues can be resolved through remote technical assistance.",
      stats: [
        { value: "24/7", text: "SUPPORT AVAILABLE FOR YOUR CLIENTS DIRECTLY ON WHATSAPP" },
        { value: "60%", text: "OF SUPPORT CASES CAN BE RESOLVED WITHOUT ON-SITE VISITS" },
        { value: "+250", text: "MONTHLY CASES THAT CAN BE HANDLED AUTOMATICALLY" },
        { value: "30%", text: "OF SPECIALIST TIME FREED UP" }
      ]
    },
    stepsSection: {
      title: "From fault to fix, in a single conversation",
      subtitle: "No new apps for the operator. Zero friction.",
      senderLabels: {
        laboratorio: "Laboratory",
        soporte: "Support",
        coordinador: "Coordinator"
      },
      phoneStatus: {
        online: "online",
        dashboard: "Ticket dashboard"
      },
      dashboard: {
        title: "Monthly summary",
        kpis: [
          { value: "128", label: "Cases handled" },
          { value: "96%", label: "Resolved via chat" },
          { value: "4.9", label: "Satisfaction" },
          { value: "18", label: "On-site visits" }
        ],
        text: "Track real-time status of all tickets and download equipment reports & metrics."
      },
      steps: [
        {
          t: "The user sends a message to Symbio via WhatsApp.",
          chat: [
            { from: "laboratorio", text: "Hi, having trouble with the equipment's LLS 🔴" },
            { from: "soporte", text: "Hello! I'm the Symbio agent 👋 Which equipment showed you the code?" }
          ]
        },
        {
          t: "Symbio asks questions and guides you step by step according to the equipment.",
          chat: [
            { from: "soporte", text: "Understood. Does the machine display an error code on screen?" },
            { from: "laboratorio", text: "Yes, it says: 02106974 🔴, no vacuum" }
          ]
        },
        {
          t: "If it can't be resolved over WhatsApp, a ticket is created",
          chat: [
            { from: "laboratorio", text: "Couldn't resolve it. The error showed up again" },
            { from: "soporte", text: "It's a hardware fault, you need a field service engineer. I opened ticket #4521 and escalated it to technical support." }
          ]
        },
        {
          t: "Symbio suggests a specialist and schedule for an on-site visit",
          chat: [
            { from: "soporte", text: "We've assigned Andrés today at 3:00 PM for the visit. Shall we confirm?" },
            { from: "coordinador", text: "Confirmed 👍" }
          ]
        },
        {
          t: "The specialist visits the lab only if needed, and fixes the issue",
          chat: [
            { from: "soporte", text: "Andrés arrived at the lab and is inspecting the equipment 🔧" },
            { from: "soporte", text: "Diagnosis: lid sensor. Replaced on-site." }
          ]
        },
        {
          t: "Once resolved, the ticket closes with a satisfaction survey.",
          chat: [
            { from: "soporte", text: "Ticket #4521 closed ✅ How would you rate the service?" },
            { from: "laboratorio", text: "⭐⭐⭐⭐⭐" },
            { from: "soporte", text: "Thank you for your rating 😊" }
          ]
        }
      ],
      composerPlaceholder: "Type a message…"
    },
    features: {
      title: "More than a platform, more than a simple agent. Symbio is your partner across the complete support cycle",
      subtitle: "What is currently coordinated through disjointed calls and messages, Symbio organizes into a unified flow.",
      items: [
        {
          title: "Support guided by company knowledge",
          desc: "The agent only answers using verified company knowledge. If there is no documented source for the solution, it escalates rather than improvising."
        },
        {
          title: "Business rules dispatching",
          desc: "Certifications, shifts, daily workload, and SLAs determine the right specialist assigned for on-site visits."
        },
        {
          title: "Shifts and on-call rotations",
          desc: "The agent responds continuously 24/7 and integrates with your field engineers' schedules for seamless, accurate escalation."
        },
        {
          title: "Vendor portal",
          desc: "Configure machines, client facilities, engineers, shifts, and SLA policies without messy spreadsheets."
        },
        {
          title: "Full auditability",
          desc: "Every action, whether taken by human or agent, is logged with timestamps, actors, and data—ready for compliance audits."
        },
        {
          title: "Continuous learning",
          desc: "Real-world field solutions enrich the knowledge base of each machine model, case after case."
        }
      ]
    },
    contact: {
      title: "Let's talk about your organization",
      subtitle: "Tell us about your organization, or message us directly on WhatsApp if you prefer an immediate response.",
      success: "We received your details. We'll be in touch shortly — if you'd like to proceed right now, chat with us on WhatsApp.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      orgLabel: "Organization",
      orgPlaceholder: "e.g. Medical equipment distributor",
      phoneLabel: "Phone / WhatsApp",
      phonePlaceholder: "Phone number",
      emailLabel: "Email (optional)",
      emailPlaceholder: "you@company.com",
      msgLabel: "Message or organization description",
      msgPlaceholder: "e.g. Medical equipment distributor with 15 analyzers across 6 locations",
      submit: "Request demo",
      submitting: "Sending…",
      waCardTitle: "Prefer to message us directly?",
      waCardDesc: "Tell us how many machines and facilities you manage, and we'll reply on the very same channel your medical equipment will use.",
      waCardBtn: "Chat on WhatsApp",
      waCardMsg: "Hello, I'd like to schedule a Symbio demo for my company"
    },
    footer: {
      disclaimer: "Symbio is a first-tier AI technical support agent and does not replace certified field service. Any intervention on electrical components or outside manufacturer manuals must be conducted by qualified personnel.",
      location: "Ecuador, expanding throughout Latin America",
      privacy: "Privacy Policy and Data Protection",
      rights: "Symbio. All rights reserved."
    }
  },

  es: {
    meta: {
      title: "Symbio — Soporte técnico de equipos médicos por WhatsApp",
      description: "Symbio guía a los usuarios de equipos médicos en el paso a paso a través de WhatsApp, de la falla a la solución."
    },
    nav: {
      ariaHome: "Ir al inicio",
      howItWorks: "Cómo funciona",
      features: "Funcionalidades",
      cta: "Solicitar demo"
    },
    hero: {
      title: "Inteligencia que resuelve",
      lead: "Symbio guía a los usuarios de equipos médicos en el paso a paso.",
      waBtn: "Hablar por WhatsApp",
      waMsg: "Hola, quiero conocer más sobre Symbio",
      demoBtn: "Solicitar una demo"
    },
    problem: {
      title: "Un caso resuelto por WhatsApp optimiza tiempo, dinero y genera confianza",
      lead: "Los equipos médicos son sumamente importantes en el funcionamiento de laboratorios y hospitales. Un equipo detenido puede significar perdidas en dinero, retrasos, malestar en el personal de laboratorio y/o hospital, y en general, una mala experiencia para los clientes. La mayoría de estos inconvenientes se resuelven con asistencia técnica remota.",
      stats: [
        { value: "24/7", text: "SOPORTE DISPONIBLE PARA TUS CLIENTES DIRECTAMENTE POR WHATSAPP" },
        { value: "60%", text: "DE LOS CASOS DE SOPORTE PUEDEN RESOLVERSE SIN VISITAS TÉCNICAS" },
        { value: "+250", text: "CASOS AL MES QUE PUEDEN SER ATENDIDOS AUTOMATICAMENTE" },
        { value: "30%", text: "DEL TIEMPO DE UN ESPECIALISTA LIBERADO" }
      ]
    },
    stepsSection: {
      title: "De la falla a la solución, en una sola conversación",
      subtitle: "Sin apps nuevas para el operador. Cero fricción.",
      senderLabels: {
        laboratorio: "Laboratorio",
        soporte: "Soporte",
        coordinador: "Coordinador"
      },
      phoneStatus: {
        online: "en línea",
        dashboard: "Panel de casos"
      },
      dashboard: {
        title: "Resumen del mes",
        kpis: [
          { value: "128", label: "Casos atendidos" },
          { value: "96%", label: "Resueltos por chat" },
          { value: "4.9", label: "Satisfacción" },
          { value: "18", label: "Visitas en sitio" }
        ],
        text: "Conoces en tiempo real el estado de todos los casos y puedes descargar reportes y métricas de los equipos."
      },
      steps: [
        {
          t: "El usuario envía un mensaje a Symbio a través de WhatsApp.",
          chat: [
            { from: "laboratorio", text: "Hola, tengo problemas con el lls del equipo 🔴" },
            { from: "soporte", text: "¡Hola! Soy el agente Symbio 👋 ¿Cuéntame en que equipo te dio el código?" }
          ]
        },
        {
          t: "Symbio te hace preguntas y te guía paso a paso dependiendo el equipo.",
          chat: [
            { from: "soporte", text: "Entendido. ¿El equipo muestra algún código de error en pantalla?" },
            { from: "laboratorio", text: "Sí, dice: 02106974 🔴, no vacuum" }
          ]
        },
        {
          t: "Si no se resuelve por whatsapp, se abre un ticket",
          chat: [
            { from: "laboratorio", text: "No se pudo resolver. Apareció el error de nuevo" },
            { from: "soporte", text: "Es un error de hardware, necesitas un ingeniero de servicio. Abrí el ticket #4521 y lo escalé al equipo técnico." }
          ]
        },
        {
          t: "Symbio propone un especialista y horario para asistencia de un especialista",
          chat: [
            { from: "soporte", text: "Asignamos a Andrés hoy a las 15h00 para la visita. ¿Confirmamos?" },
            { from: "coordinador", text: "Confirmado 👍" }
          ]
        },
        {
          t: "El especialista visita el laboratorio, solo si es necesario, y soluciona el problema",
          chat: [
            { from: "soporte", text: "Andrés llegó al laboratorio y está revisando el equipo 🔧" },
            { from: "soporte", text: "Diagnóstico: sensor de tapa. Reemplazado en sitio." }
          ]
        },
        {
          t: "Una vez resuelto el problema, se cierra el caso con una encuesta de satisfacción.",
          chat: [
            { from: "soporte", text: "Caso #4521 cerrado ✅ ¿Cómo calificarías la atención?" },
            { from: "laboratorio", text: "⭐⭐⭐⭐⭐" },
            { from: "soporte", text: "Gracias por tu calificación 😊" }
          ]
        }
      ],
      composerPlaceholder: "Escribe un mensaje…"
    },
    features: {
      title: "Más que una plataforma, más que un simple agente. Symbio es tu partner en el ciclo completo de soporte",
      subtitle: "Lo que hoy se coordina con llamadas y mensajes, Symbio lo ordena en un solo flujo.",
      items: [
        {
          title: "Soporte guiado por la base de conocimiento de la empresa",
          desc: "El agente responde solo con base en el conocimiento de la empresa. Si no hay una fuente que respalde la solución, escala en vez de improvisar."
        },
        {
          title: "Asignación por reglas de negocio",
          desc: "Certificación, turno, carga del día y SLA deciden el especialista asignado para resolver un caso presencial."
        },
        {
          title: "Turnos y guardias",
          desc: "El agente responde de forma continua 24/7 y se integra con los turnos de tus técnicos en terreno para escalar de forma correcta."
        },
        {
          title: "Panel para el proveedor",
          desc: "Configura equipos, sedes, ingenieros, turnos y reglas de SLA sin depender de hojas sueltas."
        },
        {
          title: "Trazabilidad total",
          desc: "Cada acción, humana o del agente, queda registrada con actor, fecha y datos, lista para auditoría."
        },
        {
          title: "Aprendizaje continuo",
          desc: "Las soluciones de campo alimentan la base de conocimiento de cada modelo, caso a caso."
        }
      ]
    },
    contact: {
      title: "Hablemos de tu organización",
      subtitle: "Cuéntanos sobre tu organización, o escríbenos directo por WhatsApp si prefieres una respuesta inmediata.",
      success: "Recibimos tus datos. Te contactaremos pronto — si quieres avanzar ahora mismo, escríbenos por WhatsApp.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      orgLabel: "Organización",
      orgPlaceholder: "Ej. Distribuidora de equipos médicos",
      phoneLabel: "Teléfono / WhatsApp",
      phonePlaceholder: "Número de teléfono",
      emailLabel: "Correo (opcional)",
      emailPlaceholder: "tu@empresa.com",
      msgLabel: "Mensaje o descripción de la organización",
      msgPlaceholder: "Ej. Distribuidora de equipos médicos con 15 analizadores en 6 sedes",
      submit: "Solicitar demo",
      submitting: "Enviando…",
      waCardTitle: "¿Prefieres escribirnos directo?",
      waCardDesc: "Cuéntanos cuántos equipos y sedes manejas, y te respondemos por el mismo canal que usarán tus equipos médicos.",
      waCardBtn: "Escribir por WhatsApp",
      waCardMsg: "Hola, quiero agendar una demo de Symbio para mi distribuidora"
    },
    footer: {
      disclaimer: "Symbio es un agente IA de soporte técnico de primer nivel y no reemplaza al servicio técnico especializado. Toda intervención sobre componentes eléctricos o fuera del manual debe realizarla personal calificado.",
      location: "Ecuador, con expansión a Latinoamérica",
      privacy: "Política de privacidad y protección de datos",
      rights: "Symbio. Todos los derechos reservados."
    }
  },

  pt: {
    meta: {
      title: "Symbio — Suporte técnico para equipamentos médicos via WhatsApp",
      description: "Symbio orienta usuários de equipamentos médicos passo a passo pelo WhatsApp, da falha à solução."
    },
    nav: {
      ariaHome: "Ir para o início",
      howItWorks: "Como funciona",
      features: "Funcionalidades",
      cta: "Solicitar demo"
    },
    hero: {
      title: "Inteligência que resolve",
      lead: "Symbio orienta usuários de equipamentos médicos passo a passo.",
      waBtn: "Falar pelo WhatsApp",
      waMsg: "Olá, gostaria de saber mais sobre o Symbio",
      demoBtn: "Solicitar uma demo"
    },
    problem: {
      title: "Um caso resolvido pelo WhatsApp otimiza tempo, dinheiro e gera confiança",
      lead: "Equipamentos médicos são vitais para o funcionamento de laboratórios e hospitais. Um equipamento parado representa prejuízos financeiros, atrasos, insatisfação na equipe hospitalar e uma experiência negativa para os clientes. A maioria desses problemas pode ser resolvida com assistência técnica remota.",
      stats: [
        { value: "24/7", text: "SUPORTE DISPONÍVEL PARA SEUS CLIENTES DIRETAMENTE PELO WHATSAPP" },
        { value: "60%", text: "DOS CASOS DE SUPORTE PODEM SER RESOLVIDOS SEM VISITAS PRESENCIAIS" },
        { value: "+250", text: "CASOS POR MÊS QUE PODEM SER ATENDIDOS AUTOMATICAMENTE" },
        { value: "30%", text: "DO TEMPO DE UM ESPECIALISTA LIBERADO" }
      ]
    },
    stepsSection: {
      title: "Da falha à solução, em uma única conversa",
      subtitle: "Sem novos aplicativos para o operador. Zero atrito.",
      senderLabels: {
        laboratorio: "Laboratório",
        soporte: "Suporte",
        coordinador: "Coordenador"
      },
      phoneStatus: {
        online: "online",
        dashboard: "Painel de chamados"
      },
      dashboard: {
        title: "Resumo do mês",
        kpis: [
          { value: "128", label: "Chamados atendidos" },
          { value: "96%", label: "Resolvidos por chat" },
          { value: "4.9", label: "Satisfação" },
          { value: "18", label: "Visitas no local" }
        ],
        text: "Acompanhe em tempo real o status de todos os chamados e baixe relatórios e métricas dos equipamentos."
      },
      steps: [
        {
          t: "O usuário envia uma mensagem para o Symbio pelo WhatsApp.",
          chat: [
            { from: "laboratorio", text: "Olá, estou com problemas no LLS do equipamento 🔴" },
            { from: "soporte", text: "Olá! Sou o agente Symbio 👋 Conte-me, em qual equipamento surgiu o código?" }
          ]
        },
        {
          t: "Symbio faz perguntas e orienta passo a passo de acordo com o equipamento.",
          chat: [
            { from: "soporte", text: "Entendido. O equipamento exibe algum código de erro na tela?" },
            { from: "laboratorio", text: "Sim, diz: 02106974 🔴, no vacuum" }
          ]
        },
        {
          t: "Se não for resolvido pelo WhatsApp, um chamado é aberto",
          chat: [
            { from: "laboratorio", text: "Não deu para resolver. O erro apareceu novamente" },
            { from: "soporte", text: "É um erro de hardware, você precisa de um engenheiro de serviço. Abri o chamado #4521 e encaminhei para a equipe técnica." }
          ]
        },
        {
          t: "Symbio sugere um especialista e horário para a visita técnica",
          chat: [
            { from: "soporte", text: "Agendamos o André hoje às 15h00 para a visita. Confirmamos?" },
            { from: "coordinador", text: "Confirmado 👍" }
          ]
        },
        {
          t: "O especialista visita o laboratório apenas se necessário e resolve o problema",
          chat: [
            { from: "soporte", text: "André chegou ao laboratório e está avaliando o equipamento 🔧" },
            { from: "soporte", text: "Diagnóstico: sensor de tampa. Substituído no local." }
          ]
        },
        {
          t: "Assim que resolvido o problema, o chamado é encerrado com uma pesquisa de satisfação.",
          chat: [
            { from: "soporte", text: "Chamado #4521 encerrado ✅ Como você avalia o atendimento?" },
            { from: "laboratorio", text: "⭐⭐⭐⭐⭐" },
            { from: "soporte", text: "Obrigado pela sua avaliação 😊" }
          ]
        }
      ],
      composerPlaceholder: "Digite uma mensagem…"
    },
    features: {
      title: "Mais do que uma plataforma, mais do que um simples agente. Symbio é seu parceiro em todo o ciclo de suporte",
      subtitle: "O que hoje é coordenado por ligações e mensagens dispersas, o Symbio organiza em um fluxo unificado.",
      items: [
        {
          title: "Suporte baseado no conhecimento da empresa",
          desc: "O agente responde exclusivamente com base no conhecimento da empresa. Se não houver fonte que embase a solução, ele escala em vez de improvisar."
        },
        {
          title: "Atribuição por regras de negócio",
          desc: "Certificação, turno, carga de trabalho diária e SLAs definem o especialista alocado para atendimentos presenciais."
        },
        {
          title: "Turnos e plantões",
          desc: "O agente atende ininterruptamente 24/7 e integra-se com os plantões dos técnicos de campo para escalonamentos precisos."
        },
        {
          title: "Painel do fornecedor",
          desc: "Configure equipamentos, unidades, engenheiros, turnos e regras de SLA sem depender de planilhas dispersas."
        },
        {
          title: "Rastreabilidade total",
          desc: "Cada ação, seja humana ou do agente, fica registrada com autor, data e histórico, pronta para auditorias."
        },
        {
          title: "Aprendizado contínuo",
          desc: "As soluções encontradas em campo retroalimentam a base de conhecimento de cada equipamento, caso a caso."
        }
      ]
    },
    contact: {
      title: "Vamos conversar sobre a sua organização",
      subtitle: "Conte-nos sobre sua organização ou fale diretamente pelo WhatsApp para uma resposta imediata.",
      success: "Recebemos suas informações. Entraremos em contato em breve — se preferir adiantar agora, nos chame no WhatsApp.",
      nameLabel: "Nome",
      namePlaceholder: "Seu nome",
      orgLabel: "Organização",
      orgPlaceholder: "Ex: Distribuidora de equipamentos médicos",
      phoneLabel: "Telefone / WhatsApp",
      phonePlaceholder: "Número de telefone",
      emailLabel: "E-mail (opcional)",
      emailPlaceholder: "seu@empresa.com",
      msgLabel: "Mensagem ou descrição da organização",
      msgPlaceholder: "Ex: Distribuidora de equipamentos médicos com 15 analisadores em 6 unidades",
      submit: "Solicitar demo",
      submitting: "Enviando…",
      waCardTitle: "Prefere nos escrever diretamente?",
      waCardDesc: "Conte-nos quantos equipamentos e unidades você gerencia, e responderemos pelo mesmo canal que seus clientes usarão.",
      waCardBtn: "Conversar pelo WhatsApp",
      waCardMsg: "Olá, gostaria de agendar uma demonstração do Symbio para minha empresa"
    },
    footer: {
      disclaimer: "Symbio é um agente de IA para suporte técnico de primeiro nível e não substitui a assistência técnica especializada. Qualquer intervenção em componentes elétricos ou fora dos manuais deve ser realizada por profissionais qualificados.",
      location: "Equador, em expansão para toda a América Latina",
      privacy: "Política de privacidade e proteção de dados",
      rights: "Symbio. Todos os direitos reservados."
    }
  }
};

const SUPPORTED_LANGS = ['en', 'es', 'pt'];

function safeGetStorage(key) {
  try {
    return window.localStorage ? window.localStorage.getItem(key) : null;
  } catch (e) {
    return null;
  }
}

function safeSetStorage(key, val) {
  try {
    if (window.localStorage) {
      window.localStorage.setItem(key, val);
    }
  } catch (e) {}
}

function detectInitialLanguage() {
  try {
    // 1. URL Query Param: ?lang=en|es|pt
    if (typeof window !== 'undefined' && window.location) {
      const urlParams = new URLSearchParams(window.location.search);
      const paramLang = urlParams.get('lang')?.toLowerCase();
      if (paramLang && SUPPORTED_LANGS.includes(paramLang)) {
        return paramLang;
      }
    }

    // 2. Safe LocalStorage preference
    const saved = safeGetStorage('symbio_lang')?.toLowerCase();
    if (saved && SUPPORTED_LANGS.includes(saved)) {
      return saved;
    }

    // 3. Browser locale detection (navigator.languages / navigator.language)
    if (typeof window !== 'undefined' && window.navigator) {
      const browserLangs = window.navigator.languages && window.navigator.languages.length
        ? window.navigator.languages
        : [window.navigator.language || ''];

      for (const raw of browserLangs) {
        if (!raw) continue;
        const code = raw.toLowerCase().split('-')[0];
        if (code === 'es') return 'es';
        if (code === 'pt') return 'pt';
        if (code === 'en') return 'en';
      }
    }
  } catch (e) {
    // Fallback safe catch
  }

  // 4. Default primary language
  return 'en';
}

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
  translations: translations.en
});

function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLanguage);

  const changeLang = useCallback((newLang) => {
    if (!SUPPORTED_LANGS.includes(newLang)) return;
    setLangState(newLang);
    safeSetStorage('symbio_lang', newLang);
    try {
      if (typeof window !== 'undefined' && window.history) {
        const url = new URL(window.location);
        url.searchParams.set('lang', newLang);
        window.history.replaceState({}, '', url);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
        if (translations[lang]?.meta?.title) {
          document.title = translations[lang].meta.title;
        }
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && translations[lang]?.meta?.description) {
          metaDesc.setAttribute('content', translations[lang].meta.description);
        }
      }
    } catch (e) {}
  }, [lang]);

  const t = useCallback((path) => {
    const keys = path.split('.');
    
    // Check current language
    let current = translations[lang];
    for (const key of keys) {
      if (current === undefined || current === null) break;
      current = current[key];
    }
    if (current !== undefined) return current;

    // Fallback to English
    current = translations.en;
    for (const key of keys) {
      if (current === undefined || current === null) break;
      current = current[key];
    }
    return current !== undefined ? current : path;
  }, [lang]);

  const value = {
    lang,
    setLang: changeLang,
    t,
    translations: translations[lang] || translations.en
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

function useTranslation() {
  return useContext(LanguageContext);
}

// Guarantee global availability in window scope across Babel scripts
if (typeof window !== 'undefined') {
  window.translations = translations;
  window.LanguageContext = LanguageContext;
  window.LanguageProvider = LanguageProvider;
  window.useTranslation = useTranslation;
}
