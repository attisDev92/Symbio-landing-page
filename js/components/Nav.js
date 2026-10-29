function Nav() {
  const { lang, setLang, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="row">
        <a href="#" aria-label={t('nav.ariaHome')} style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo id="nav" className="brand nav-logo" style={{ width: 110 }} />
        </a>
        <div className="links">
          <a href="#como-funciona">{t('nav.howItWorks')}</a>
          <a href="#funcionalidades">{t('nav.features')}</a>
        </div>
        <div className="nav-actions">
          <div className="lang-switcher" role="group" aria-label="Language selector">
            <button
              type="button"
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
              aria-label="English"
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === 'es' ? 'active' : ''}
              onClick={() => setLang('es')}
              aria-label="Español"
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
            <button
              type="button"
              className={lang === 'pt' ? 'active' : ''}
              onClick={() => setLang('pt')}
              aria-label="Português"
              aria-pressed={lang === 'pt'}
            >
              PT
            </button>
          </div>
          <a className="cta" href="#contacto">{t('nav.cta')}</a>
        </div>
      </div>
    </nav>
  );
}
