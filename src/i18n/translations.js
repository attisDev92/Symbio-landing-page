// Textos de la landing por idioma. Las claves "seo" y "faq" alimentan meta tags, JSON-LD y llms.txt.
export const translations = {
  en: {
    meta: {
      title: "Symbio | AI Technical Support for Medical Equipment on WhatsApp",
      description: "Symbio is an AI agent that resolves medical and lab equipment issues over WhatsApp, 24/7, and dispatches field engineers only when needed.",
      ogAlt: "Symbio — AI technical support for medical equipment on WhatsApp",
      locale: "en_US"
    },
    nav: {
      ariaHome: "Go to home",
      howItWorks: "How it works",
      features: "Features",
      faq: "FAQ",
      cta: "Request demo"
    },
    hero: {
      eyebrow: "AI technical support for medical equipment on WhatsApp",
      title: "Intelligence that resolves",
      lead: "Symbio guides medical equipment users step-by-step to resolve incidents.",
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
    faq: {
      title: "Frequently asked questions",
      subtitle: "What medical equipment distributors, labs and hospitals ask us most.",
      items: [
        {
          q: "What is Symbio?",
          a: "Symbio is an AI technical support agent for medical and laboratory equipment. It attends equipment users over WhatsApp 24/7, guides them step by step to resolve faults remotely and, when a fault cannot be solved remotely, opens a ticket and schedules the right field engineer."
        },
        {
          q: "Who is Symbio for?",
          a: "Symbio is built for medical and laboratory equipment distributors, manufacturers and service providers that support clinical laboratories, hospitals and clinics, and for in-house biomedical engineering teams."
        },
        {
          q: "Do equipment users need to install a new app?",
          a: "No. Lab and hospital staff write to Symbio on WhatsApp, the app they already use. There is nothing new to install for the operator."
        },
        {
          q: "Where do the agent's answers come from?",
          a: "The agent only answers using the company's verified knowledge base: manuals, procedures and solutions documented by its engineers. If there is no documented source for a solution, it escalates the case instead of improvising."
        },
        {
          q: "What happens if the problem cannot be solved over WhatsApp?",
          a: "Symbio opens a ticket, escalates it to the technical team and proposes a specialist and time slot for an on-site visit, based on business rules such as certifications, shifts, daily workload and SLAs."
        },
        {
          q: "Does Symbio replace field service engineers?",
          a: "No. Symbio is a first-tier support agent. It resolves the cases that can be handled remotely and frees up specialists' time so they focus on the visits that truly require them. Any intervention on electrical components must be done by qualified personnel."
        },
        {
          q: "How much on-site work can be avoided?",
          a: "Around 60% of technical support cases for medical equipment can be resolved remotely, without an on-site visit, freeing up to 30% of a specialist's time."
        },
        {
          q: "Where is Symbio available?",
          a: "Symbio operates from Ecuador and is expanding throughout Latin America. It works in Spanish, English and Portuguese."
        }
      ]
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
      title: "Symbio | Soporte técnico con IA para equipos médicos por WhatsApp",
      description: "Symbio es un agente de IA que resuelve fallas de equipos médicos y de laboratorio por WhatsApp, 24/7, y agenda visitas técnicas solo cuando hacen falta.",
      ogAlt: "Symbio — Soporte técnico con IA para equipos médicos por WhatsApp",
      locale: "es_419"
    },
    nav: {
      ariaHome: "Ir al inicio",
      howItWorks: "Cómo funciona",
      features: "Funcionalidades",
      faq: "Preguntas",
      cta: "Solicitar demo"
    },
    hero: {
      eyebrow: "Soporte técnico con IA para equipos médicos por WhatsApp",
      title: "Inteligencia que resuelve",
      lead: "Symbio guía a los usuarios de equipos médicos en el paso a paso para resolver incidentes.",
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
    faq: {
      title: "Preguntas frecuentes",
      subtitle: "Lo que más nos preguntan distribuidores de equipos médicos, laboratorios y hospitales.",
      items: [
        {
          q: "¿Qué es Symbio?",
          a: "Symbio es un agente de soporte técnico con inteligencia artificial para equipos médicos y de laboratorio. Atiende a los usuarios de los equipos por WhatsApp 24/7, los guía paso a paso para resolver fallas de forma remota y, cuando la falla no se puede resolver a distancia, abre un ticket y agenda al ingeniero de servicio adecuado."
        },
        {
          q: "¿Para quién es Symbio?",
          a: "Symbio está pensado para distribuidores, fabricantes y proveedores de servicio técnico de equipos médicos y de laboratorio que dan soporte a laboratorios clínicos, hospitales y clínicas, y para equipos internos de ingeniería biomédica."
        },
        {
          q: "¿Los usuarios de los equipos tienen que instalar una app nueva?",
          a: "No. El personal del laboratorio u hospital escribe a Symbio por WhatsApp, la aplicación que ya usa todos los días. No hay nada nuevo que instalar para el operador."
        },
        {
          q: "¿De dónde salen las respuestas del agente?",
          a: "El agente responde solo con la base de conocimiento verificada de la empresa: manuales, procedimientos y soluciones documentadas por sus ingenieros. Si no hay una fuente que respalde la solución, escala el caso en vez de improvisar."
        },
        {
          q: "¿Qué pasa si el problema no se resuelve por WhatsApp?",
          a: "Symbio abre un ticket, lo escala al equipo técnico y propone un especialista y un horario para la visita en sitio, según reglas de negocio como certificaciones, turnos, carga de trabajo del día y SLA."
        },
        {
          q: "¿Symbio reemplaza a los ingenieros de servicio en campo?",
          a: "No. Symbio es un agente de soporte de primer nivel. Resuelve los casos que se pueden atender a distancia y libera tiempo de los especialistas para que se enfoquen en las visitas que realmente los necesitan. Toda intervención sobre componentes eléctricos debe realizarla personal calificado."
        },
        {
          q: "¿Cuántas visitas técnicas se pueden evitar?",
          a: "Alrededor del 60% de los casos de soporte técnico de equipos médicos pueden resolverse de forma remota, sin visita en sitio, liberando hasta un 30% del tiempo de un especialista."
        },
        {
          q: "¿Dónde está disponible Symbio?",
          a: "Symbio opera desde Ecuador y está en expansión por Latinoamérica. Funciona en español, inglés y portugués."
        }
      ]
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
      title: "Symbio | Suporte técnico com IA para equipamentos médicos no WhatsApp",
      description: "Symbio é um agente de IA que resolve falhas de equipamentos médicos e de laboratório pelo WhatsApp, 24/7, e agenda visitas técnicas só quando necessário.",
      ogAlt: "Symbio — Suporte técnico com IA para equipamentos médicos no WhatsApp",
      locale: "pt_BR"
    },
    nav: {
      ariaHome: "Ir para o início",
      howItWorks: "Como funciona",
      features: "Funcionalidades",
      faq: "Perguntas",
      cta: "Solicitar demo"
    },
    hero: {
      eyebrow: "Suporte técnico com IA para equipamentos médicos no WhatsApp",
      title: "Inteligência que resolve",
      lead: "Symbio orienta usuários de equipamentos médicos passo a passo para resolver incidentes.",
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
    faq: {
      title: "Perguntas frequentes",
      subtitle: "O que distribuidores de equipamentos médicos, laboratórios e hospitais mais nos perguntam.",
      items: [
        {
          q: "O que é o Symbio?",
          a: "Symbio é um agente de suporte técnico com inteligência artificial para equipamentos médicos e de laboratório. Ele atende os usuários dos equipamentos pelo WhatsApp 24/7, orienta passo a passo para resolver falhas remotamente e, quando a falha não pode ser resolvida à distância, abre um chamado e agenda o engenheiro de campo adequado."
        },
        {
          q: "Para quem é o Symbio?",
          a: "Symbio foi criado para distribuidores, fabricantes e prestadores de assistência técnica de equipamentos médicos e de laboratório que atendem laboratórios clínicos, hospitais e clínicas, e para equipes internas de engenharia clínica."
        },
        {
          q: "Os usuários dos equipamentos precisam instalar um novo aplicativo?",
          a: "Não. A equipe do laboratório ou hospital escreve para o Symbio pelo WhatsApp, o aplicativo que já usa todos os dias. Não há nada novo para instalar."
        },
        {
          q: "De onde vêm as respostas do agente?",
          a: "O agente responde apenas com a base de conhecimento verificada da empresa: manuais, procedimentos e soluções documentadas pelos seus engenheiros. Se não houver fonte que embase a solução, ele escala o caso em vez de improvisar."
        },
        {
          q: "O que acontece se o problema não for resolvido pelo WhatsApp?",
          a: "O Symbio abre um chamado, encaminha para a equipe técnica e sugere um especialista e um horário para a visita presencial, com base em regras de negócio como certificações, turnos, carga de trabalho diária e SLAs."
        },
        {
          q: "O Symbio substitui os engenheiros de campo?",
          a: "Não. O Symbio é um agente de suporte de primeiro nível. Ele resolve os casos que podem ser atendidos remotamente e libera o tempo dos especialistas para as visitas que realmente precisam deles. Qualquer intervenção em componentes elétricos deve ser feita por profissionais qualificados."
        },
        {
          q: "Quantas visitas técnicas podem ser evitadas?",
          a: "Cerca de 60% dos casos de suporte técnico de equipamentos médicos podem ser resolvidos remotamente, sem visita presencial, liberando até 30% do tempo de um especialista."
        },
        {
          q: "Onde o Symbio está disponível?",
          a: "O Symbio opera a partir do Equador e está em expansão por toda a América Latina. Funciona em espanhol, inglês e português."
        }
      ]
    },
    footer: {
      disclaimer: "Symbio é um agente de IA para suporte técnico de primeiro nível e não substitui a assistência técnica especializada. Qualquer intervenção em componentes elétricos ou fora dos manuais deve ser realizada por profissionais qualificados.",
      location: "Equador, em expansão para toda a América Latina",
      privacy: "Política de privacidade e proteção de dados",
      rights: "Symbio. Todos os direitos reservados."
    }
  }
};

export const SUPPORTED_LANGS = ['en', 'es', 'pt'];
export const DEFAULT_LANG = 'en';
