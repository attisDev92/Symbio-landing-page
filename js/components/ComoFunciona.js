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
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  const rawSteps = t('stepsSection.steps') || [];
  const dashboardText = t('stepsSection.dashboard.text');
  const steps = [...rawSteps, { t: dashboardText, dashboard: true }];

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
  }, [steps.length]);

  return (
    <section className="wrap" id="como-funciona">
      <div className="section-head reveal">
        <h2>{t('stepsSection.title')}</h2>
        <p>{t('stepsSection.subtitle')}</p>
      </div>
      <div className="flow-scrolly-grid">
        <StepList steps={steps} activeStep={activeStep} stepRefs={stepRefs} />
        <PhoneMockup steps={steps} activeStep={activeStep} />
      </div>
    </section>
  );
}
