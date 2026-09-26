function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="row">
        <Logo id="nav" className={`brand nav-logo${scrolled ? ' visible' : ''}`} style={{ width: 120 }} />
        <div className="links">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#funcionalidades">Funcionalidades</a>
        </div>
        <a className="cta" href="#contacto">Solicitar demo</a>
      </div>
    </nav>
  );
}
