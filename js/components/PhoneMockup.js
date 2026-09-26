const senderLabel = { laboratorio: "Laboratorio", soporte: "Soporte", coordinador: "Coordinador" };

function buildThread(steps, upToIndex) {
  const flat = [];
  for (let s = 0; s <= upToIndex; s++) {
    const chat = steps[s]?.chat;
    if (!chat) continue;
    chat.forEach((m, i) => flat.push({ ...m, stepIndex: s, msgIndex: i }));
  }
  return flat;
}

function PhoneMockup({ steps, activeStep }) {
  const current = steps[activeStep];
  const isDashboard = !!current?.dashboard;
  const thread = isDashboard ? [] : buildThread(steps, activeStep);

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
              <span>{isDashboard ? "Panel de casos" : "en línea"}</span>
            </div>
          </div>

          {isDashboard ? (
            <div className="phone-dashboard in-view">
              <h4>Resumen del mes</h4>
              <div className="dash-kpis">
                <div className="dash-kpi"><b>128</b><span>Casos atendidos</span></div>
                <div className="dash-kpi"><b>96%</b><span>Resueltos por chat</span></div>
                <div className="dash-kpi"><b>4.9</b><span>Satisfacción</span></div>
                <div className="dash-kpi"><b>18</b><span>Visitas en sitio</span></div>
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
                {thread.map((m, i) => {
                  const showLabel = m.from !== lastFrom;
                  lastFrom = m.from;
                  const isLast = m.stepIndex === activeStep;
                  return (
                    <React.Fragment key={`${m.stepIndex}-${m.msgIndex}`}>
                      {showLabel && (
                        <div className={`chat-group-label from-${m.from}`}>{senderLabel[m.from]}</div>
                      )}
                      <ChatBubble
                        from={m.from}
                        text={m.text}
                        delay={isLast ? m.msgIndex * 220 : 0}
                        active={true}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="phone-composer">
                <div className="field">Escribe un mensaje…</div>
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
