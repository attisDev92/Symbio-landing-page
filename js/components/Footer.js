function Footer() {
  return (
    <footer className="wrap">
      <div className="foot-row">
        <Logo id="foot" className="brand" style={{ width: 100 }} />
        <span style={{ fontSize: 13, color: 'var(--text-dim)' }}>Ecuador, con expansión a Latinoamérica</span>
      </div>
      <p>Symbio es un agente IA de soporte técnico de primer nivel y no reemplaza al servicio técnico especializado. Toda intervención sobre componentes eléctricos o fuera del manual debe realizarla personal calificado. © {new Date().getFullYear()} Symbio.</p>
    </footer>
  );
}
