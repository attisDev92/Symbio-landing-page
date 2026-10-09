function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="row">
        <a href="#" aria-label="Ir al inicio" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo id="nav" className="brand nav-logo" style={{ width: 110 }} />
        </a>
        <div className="links">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#funcionalidades">Funcionalidades</a>
        </div>
        <a className="cta" href="#contacto">Solicitar demo</a>
      </div>
    </nav>
  );
}
