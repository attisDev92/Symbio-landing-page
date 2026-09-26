function Hero() {
  const svgWrapRef = useRef(null);
  useEffect(() => {
    const strokeElements = svgWrapRef.current ? svgWrapRef.current.querySelectorAll('.logo-strokes path, .logo-strokes > circle') : [];
    strokeElements.forEach((p, i) => {
      const len = p.getTotalLength ? p.getTotalLength() : 200;
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      p.getBoundingClientRect();
      p.style.transition = `stroke-dashoffset 3.8s cubic-bezier(.22,.84,.36,1) ${i * 120}ms`;
      requestAnimationFrame(() => { p.style.strokeDashoffset = '0'; });
    });
    const nodes = svgWrapRef.current ? svgWrapRef.current.querySelectorAll('.logo-nodes circle') : [];
    nodes.forEach((n, i) => {
      n.style.opacity = '0';
      n.style.transformOrigin = 'center';
      n.style.transform = 'scale(0)';
      n.style.transition = 'opacity .8s ease, transform .8s cubic-bezier(.34,1.56,.64,1)';
      setTimeout(() => { n.style.opacity = '1'; n.style.transform = 'scale(1)'; }, 2800 + i * 180);
    });
    const innerNodes = svgWrapRef.current ? svgWrapRef.current.querySelectorAll('.logo-inner-nodes circle') : [];
    innerNodes.forEach((n, i) => {
      n.style.opacity = '0';
      n.style.transformOrigin = 'center';
      n.style.transform = 'scale(0)';
      n.style.transition = 'opacity .8s ease, transform .8s cubic-bezier(.34,1.56,.64,1)';
      setTimeout(() => { n.style.opacity = '1'; n.style.transform = 'scale(1)'; }, 3160 + i * 180);
    });
  }, []);
  return (
    <header className="hero">
      <div className="hero-logo" ref={svgWrapRef}>
        <Logo id="hero" />
      </div>
      <h1>Tu IA de WhatsApp para equipos médicos</h1>
      <p className="lead">Symbio guía a los usuarios paso a paso para resolver incidentes, si se requiere escala al especialista correcto y mantiene trazabilidad de cada intervención.</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href={waLink("Hola, quiero conocer más sobre Symbio")} target="_blank" rel="noopener noreferrer">Hablar por WhatsApp</a>
        <a className="btn btn-ghost" href="#contacto">Solicitar una demo</a>
      </div>
    </header>
  );
}
