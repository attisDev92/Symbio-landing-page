const rawSteps = [
  {
    t: "El usuario envía un mensaje a Symbio a través de WhatsApp.",
    chat: [
      { from: "laboratorio", text: "Hola, tengo problemas con el lls del equipo 🔴" },
      { from: "soporte", text: "¡Hola! Soy el agente Symbio 👋 ¿Cuéntame en que equipo te dio el código?" },
    ],
  },
  {
    t: "Symbio te hace preguntas y te guía paso a paso dependiendo el equipo.",
    chat: [
      { from: "soporte", text: "Entendido. ¿El equipo muestra algún código de error en pantalla?" },
      { from: "laboratorio", text: "Sí, dice: 02106974 🔴, no vacuum" },
    ],
  },
  {
    t: "Si no se resuelve por whatsapp, se abre un ticket",
    chat: [
      { from: "laboratorio", text: "No se pudo resolver. Aparecio el error de nuevo" },
      { from: "soporte", text: "Es un error de hardware, necesitas un ingeniero de servicio. Abrí el ticket #4521 y lo escalé al equipo técnico." },
    ],
  },
  {
    t: "Symbio propone un especialista y horario para asistencia de un especialista",
    chat: [
      { from: "soporte", text: "Asignamos a Andrés  hoy a las 15h00 para la visita. ¿Confirmamos?" },
      { from: "coordinador", text: "Confirmado 👍" },
    ],
  },
  {
    t: "El especialista visita el laboratorio, solo si es necesario, y soluciona el problema",
    chat: [
      { from: "soporte", text: "Andrés llegó al laboratorio y está revisando el equipo 🔧" },
      { from: "soporte", text: "Diagnóstico: sensor de tapa. Reemplazado en sitio." },
    ],
  },
  {
    t: "Una vez resuelto el problema, se cierra el caso con una encuesta de satisfacción.",
    chat: [
      { from: "soporte", text: "Caso #4521 cerrado ✅ ¿Cómo calificarías la atención?" },
      { from: "laboratorio", text: "⭐⭐⭐⭐⭐" },
      { from: "soporte", text: "Gracias por tu calificación 😊" },
    ],
  },
];

const dashboardStep = {
  t: "Conoces en tiempo real el estado de todos los casos y puedes descargar reportes y métricas de los equipos.",
  dashboard: true,
};

const steps = [...rawSteps, dashboardStep];

function StepList({ steps, activeStep, stepRefs }) {
  return (
    <div className="flow-scrolly-steps">
      {steps.map((s, i) => (
        <div
          key={i}
          ref={(el) => (stepRefs.current[i] = el)}
          data-step-index={i}
          className={`flow-scrolly-step${activeStep === i ? ' active' : ''}`}
        >
          <div className="flow-num">{i + 1}</div>
          <div><h3>{s.t}</h3></div>
        </div>
      ))}
    </div>
  );
}

function ComoFunciona() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.dataset.stepIndex);
          setActiveStep(idx);
        }
      });
    }, { threshold: 0, rootMargin: '-45% 0px -45% 0px' });

    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="wrap" id="como-funciona">
      <div className="section-head reveal">
        <h2>De la falla a la solución, en una sola conversación</h2>
        <p>Todo el ciclo ocurre dentro de WhatsApp: el cliente nunca necesita aprender una herramienta nueva.</p>
      </div>
      <div className="flow-scrolly-grid">
        <StepList steps={steps} activeStep={activeStep} stepRefs={stepRefs} />
        <PhoneMockup steps={steps} activeStep={activeStep} />
      </div>
    </section>
  );
}
