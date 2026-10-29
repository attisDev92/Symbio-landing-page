function Problem() {
  const { t } = useTranslation();
  const stats = t('problem.stats') || [];
  return (
    <section className="wrap" id="problema">
      <div className="section-head reveal">
        <h2>{t('problem.title')}</h2>
        <p>{t('problem.lead')}</p>
      </div>
      <div className="stat-row stat-row--problem">
        {stats.map((s, idx) => (
          <div key={idx} className="stat reveal">
            <CountUp value={s.value} />
            <span>{s.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
