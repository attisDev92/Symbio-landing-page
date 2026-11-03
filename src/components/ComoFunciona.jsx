import { Fragment, useEffect, useRef, useState } from 'react';
import Logo from './Logo.jsx';

function ChatBubble({ from, text, delay = 0, active }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!active) return;
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add('in-view'), delay);
    return () => clearTimeout(timer);
  }, [active, delay]);

  return (
    <div ref={ref} className={`chat-bubble from-${from}`}>
      {text}
    </div>
  );
}

function buildThread(steps, upToIndex) {
  const flat = [];
  for (let s = 0; s <= upToIndex; s++) {
    const chat = steps[s]?.chat;
    if (!chat) continue;
    chat.forEach((m, i) => flat.push({ ...m, stepIndex: s, msgIndex: i }));
  }
  return flat;
}

function PhoneMockup({ steps, activeStep, s }) {
  const senderLabels = s.senderLabels || {};
  const current = steps[activeStep];
  const isDashboard = !!current?.dashboard;
  const thread = isDashboard ? [] : buildThread(steps, activeStep);
  const kpis = s.dashboard.kpis || [];

  let lastFrom = null;

  return (
    <div className="phone-stage" aria-hidden="true">
      <div className="phone-frame">
        <div className="phone-island"></div>
        <div className="phone-screen">
          <div className="phone-statusbar">
            <span>9:41</span>
            <span className="icons">
              <span>●●●</span><span>Wi-Fi</span><span>100%</span>
            </span>
          </div>
          <div className="phone-chat-header">
            <Logo id="phone" className="phone-logo" />
            <div className="who">
              <b>Symbio</b>
              <span>{isDashboard ? s.phoneStatus.dashboard : s.phoneStatus.online}</span>
            </div>
          </div>

          {isDashboard ? (
            <div className="phone-dashboard in-view">
              <h4>{s.dashboard.title}</h4>
              <div className="dash-kpis">
                {kpis.map((k, idx) => (
                  <div key={idx} className="dash-kpi">
                    <b>{k.value}</b>
                    <span>{k.label}</span>
                  </div>
                ))}
              </div>
              <div className="dash-chart" aria-hidden="true">
                <span style={{ height: '35%' }}></span>
                <span style={{ height: '55%' }}></span>
                <span style={{ height: '40%' }}></span>
                <span style={{ height: '70%' }}></span>
                <span style={{ height: '50%' }}></span>
                <span style={{ height: '85%' }}></span>
                <span style={{ height: '60%' }}></span>
              </div>
            </div>
          ) : (
            <>
              <div className="phone-messages">
                {thread.map((m) => {
                  const showLabel = m.from !== lastFrom;
                  lastFrom = m.from;
                  const isLast = m.stepIndex === activeStep;
                  return (
                    <Fragment key={`${m.stepIndex}-${m.msgIndex}`}>
                      {showLabel && (
                        <div className={`chat-group-label from-${m.from}`}>{senderLabels[m.from] || m.from}</div>
                      )}
                      <ChatBubble
                        from={m.from}
                        text={m.text}
                        delay={isLast ? m.msgIndex * 220 : 0}
                        active={true}
                      />
                    </Fragment>
                  );
                })}
              </div>
              <div className="phone-composer">
                <div className="field">{s.composerPlaceholder}</div>
                <div className="send">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2 11 13" />
                    <path d="M22 2 15 22l-4-9-9-4 20-7z" />
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function StepList({ steps, activeStep, stepRefs }) {
  return (
    <ol className="flow-scrolly-steps">
      {steps.map((step, i) => (
        <li
          key={i}
          ref={(el) => (stepRefs.current[i] = el)}
          data-step-index={i}
          className={`flow-scrolly-step${activeStep === i ? ' active' : ''}`}
        >
          <div className="flow-num" aria-hidden="true">{i + 1}</div>
          <div><h3>{step.t}</h3></div>
        </li>
      ))}
    </ol>
  );
}

// `s` = translations[lang].stepsSection (se pasa solo esa porción para no enviar todo el diccionario al cliente).
export default function ComoFunciona({ s }) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  const steps = [...(s.steps || []), { t: s.dashboard.text, dashboard: true }];

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveStep(Number(entry.target.dataset.stepIndex));
        }
      });
    }, { threshold: 0, rootMargin: '-45% 0px -45% 0px' });

    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [steps.length]);

  return (
    <div className="flow-scrolly-grid">
      <StepList steps={steps} activeStep={activeStep} stepRefs={stepRefs} />
      <PhoneMockup steps={steps} activeStep={activeStep} s={s} />
    </div>
  );
}

