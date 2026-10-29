function Icon({ d, size = 28 }) {
  return (
    <svg className="feat-icon" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="url(#iconGrad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <defs><linearGradient id="iconGrad" x1="0" y1="0" x2="24" y2="24"><stop offset="0" stopColor="var(--accent1)" /><stop offset="1" stopColor="var(--accent2)" /></linearGradient></defs>
      <path d={d} />
    </svg>
  );
}

function Funcionalidades() {
  const { t } = useTranslation();
  const items = t('features.items') || [];
  return (
    <section className="wrap" id="funcionalidades">
      <div className="section-head reveal">
        <h2>{t('features.title')}</h2>
        <p>{t('features.subtitle')}</p>
      </div>
      <div className="features">
        <div className="feat big reveal">
          <div>
            <Icon d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" size={36} />
            <h3>{items[0]?.title}</h3>
            <p>{items[0]?.desc}</p>
          </div>
        </div>
        <div className="feat reveal">
          <Icon d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          <h3>{items[1]?.title}</h3>
          <p>{items[1]?.desc}</p>
        </div>
        <div className="feat reveal">
          <Icon d="M12 8v4l3 3M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
          <h3>{items[2]?.title}</h3>
          <p>{items[2]?.desc}</p>
        </div>
        <div className="feat reveal">
          <Icon d="M3 3v18h18M8 17V9m5 8V5m5 12v-6" />
          <h3>{items[3]?.title}</h3>
          <p>{items[3]?.desc}</p>
        </div>
        <div className="feat reveal">
          <Icon d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z" />
          <h3>{items[4]?.title}</h3>
          <p>{items[4]?.desc}</p>
        </div>
        <div className="feat reveal">
          <Icon d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z" />
          <h3>{items[5]?.title}</h3>
          <p>{items[5]?.desc}</p>
        </div>
      </div>
    </section>
  );
}
