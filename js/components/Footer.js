function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="wrap footer-inner">
        {/* Columna Izquierda: Logo, descripción de alcance y derechos */}
        <div className="footer-col-left">
          <Logo id="foot" className="brand" style={{ width: 110 }} />
          <p>
            {t('footer.disclaimer')}
          </p>
          <div className="footer-location">
            <span>{t('footer.location')}</span>
          </div>
        </div>

        {/* Columna Derecha: Región/expansión, políticas y red profesional */}
        <div className="footer-col-right">
          <a
            href="https://www.linkedin.com/company/symbioec"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            title="LinkedIn de Symbio"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.88 0-1.6-.72-1.6-1.6 0-.89.72-1.61 1.6-1.61.88 0 1.6.72 1.6 1.61 0 .88-.72 1.6-1.6 1.6M7.86 18.5V10.13H5.07V18.5h2.79z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <div className="footer-nav-links">
            <a href="privacy.html" className="footer-link">
              {t('footer.privacy')}
            </a>
          </div>

          <span className="footer-copy">
            © {new Date().getFullYear()} {t('footer.rights')}
          </span>

        </div>
      </div>
    </footer>
  );
}
