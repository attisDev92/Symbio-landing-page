function Icon({ d, size = 28 }) {
  return (
    <svg className="feat-icon" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="url(#iconGrad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <defs><linearGradient id="iconGrad" x1="0" y1="0" x2="24" y2="24"><stop offset="0" stopColor="var(--accent1)" /><stop offset="1" stopColor="var(--accent2)" /></linearGradient></defs>
      <path d={d} />
    </svg>
  );
}

function Funcionalidades() {
  return (
    <section className="wrap" id="funcionalidades">
      <div className="section-head reveal">
        <h2>Una plataforma acompañando en cada parte del ciclo de soporte</h2>
        <p>Lo que hoy se coordina con llamadas y mensajes, Symbio lo ordena en un solo flujo.</p>
      </div>
      <div className="features">
        <div className="feat big reveal">
          <div>
            <Icon d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" size={36} />
            <h3>Soporte guiado por la base de conocimiento de la empresa</h3>
            <p>El agente responde solo con base en el conocimiento de la empresa. Si no hay una fuente que respalde la solución, escala en vez de improvisar.</p>
          </div>
        </div>
        <div className="feat reveal">
          <Icon d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          <h3>Asignación por reglas de negocio</h3>
          <p>Certificación, turno, carga del día y SLA deciden el especialista asignado para resolver un caso presencial.</p>
        </div>
        <div className="feat reveal">
          <Icon d="M12 8v4l3 3M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
          <h3>Turnos y guardias</h3>
          <p>El agente responde de forma continua 24/7 y se integra con los turnos de tus técnicos en terreno para escalar de forma correcta.</p>
        </div>
        <div className="feat reveal">
          <Icon d="M3 3v18h18M8 17V9m5 8V5m5 12v-6" />
          <h3>Panel para el proveedor</h3>
          <p>Configura equipos, sedes, ingenieros, turnos y reglas de SLA sin depender de hojas sueltas.</p>
        </div>
        <div className="feat reveal">
          <Icon d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z" />
          <h3>Trazabilidad total</h3>
          <p>Cada acción, humana o del agente, queda registrada con actor, fecha y datos, lista para auditoría.</p>
        </div>
        <div className="feat reveal">
          <Icon d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z" />
          <h3>Aprendizaje continuo</h3>
          <p>Las soluciones de campo alimentan la base de conocimiento de cada modelo, caso a caso.</p>
        </div>
      </div>
    </section>
  );
}
