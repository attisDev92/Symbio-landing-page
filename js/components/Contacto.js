const CONTACT_EMAIL = "attis.alejandro@gmail.com";

const COUNTRY_CODES = [
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+55", label: "🇧🇷 +55" },
  { code: "+593", label: "🇪🇨 +593" },
  { code: "+57", label: "🇨🇴 +57" },
  { code: "+52", label: "🇲🇽 +52" },
  { code: "+51", label: "🇵🇪 +51" },
  { code: "+56", label: "🇨🇱 +56" },
  { code: "+54", label: "🇦🇷 +54" },
  { code: "+507", label: "🇵🇦 +507" },
  { code: "+506", label: "🇨🇷 +506" },
  { code: "+502", label: "🇬🇹 +502" },
  { code: "+591", label: "🇧🇴 +591" },
  { code: "+595", label: "🇵🇾 +595" },
  { code: "+598", label: "🇺🇾 +598" },
  { code: "+58", label: "🇻🇪 +58" },
  { code: "+34", label: "🇪🇸 +34" },
  { code: "+", label: "🌐 +" },
];

function Contacto() {
  const { t, lang } = useTranslation();
  const defaultCode = lang === 'pt' ? '+55' : (lang === 'en' ? '+1' : '+593');
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    codigoPais: defaultCode,
    telefono: '',
    correo: '',
    equipos: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const dbRef = useRef(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const db = await window.claude?.use?.('db');
        if (alive) dbRef.current = db || null;
      } catch (e) { dbRef.current = null; }
    })();
    return () => { alive = false; };
  }, []);

  const onChange = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono) { return; }
    setStatus('sending');

    const cleanNumber = form.telefono.trim();
    const fullPhone = form.codigoPais === '+' ? cleanNumber : `${form.codigoPais} ${cleanNumber}`;
    const record = { ...form, telefonoCompleto: fullPhone, creado: new Date().toISOString() };
    
    try {
      if (dbRef.current) {
        const id = 'lead_' + Date.now();
        await dbRef.current.doc('leads/' + id).set(record);
      }

      await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `Nuevo lead Symbio: ${form.nombre} - ${form.empresa || 'Organización no especificada'}`,
          _template: "table",
          Nombre: form.nombre,
          Organización: form.empresa || "No especificada",
          Teléfono: fullPhone,
          Correo: form.correo || "No especificado",
          Mensaje_o_Descripción: form.equipos || "Sin mensaje adicional"
        })
      });

      setStatus('done');
    } catch (err) {
      setStatus('done'); // Se muestra confirmación y siempre queda el canal de WhatsApp disponible
    }
  }, [form]);

  return (
    <section className="wrap" id="contacto">
      <div className="section-head reveal">
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.subtitle')}</p>
      </div>
      <div className="contact">
        <div className="reveal">
          {status === 'done' ? (
            <div className="success">{t('contact.success')}</div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="field-row">
                <div>
                  <label htmlFor="nombre">{t('contact.nameLabel')}</label>
                  <input id="nombre" required value={form.nombre} onChange={onChange('nombre')} placeholder={t('contact.namePlaceholder')} />
                </div>
                <div>
                  <label htmlFor="empresa">{t('contact.orgLabel')}</label>
                  <input id="empresa" value={form.empresa} onChange={onChange('empresa')} placeholder={t('contact.orgPlaceholder')} />
                </div>
              </div>
              <div className="field-row">
                <div>
                  <label htmlFor="telefono">{t('contact.phoneLabel')}</label>
                  <div className="phone-input-group">
                    <select
                      id="codigoPais"
                      aria-label="Country code"
                      value={form.codigoPais}
                      onChange={onChange('codigoPais')}
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                    <input
                      id="telefono"
                      type="tel"
                      required
                      value={form.telefono}
                      onChange={onChange('telefono')}
                      placeholder={form.codigoPais === '+593' ? '09XXXXXXXX' : t('contact.phonePlaceholder')}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="correo">{t('contact.emailLabel')}</label>
                  <input id="correo" type="email" value={form.correo} onChange={onChange('correo')} placeholder={t('contact.emailPlaceholder')} />
                </div>
              </div>
              <div>
                <label htmlFor="equipos">{t('contact.msgLabel')}</label>
                <input id="equipos" value={form.equipos} onChange={onChange('equipos')} placeholder={t('contact.msgPlaceholder')} />
              </div>
              <button className="btn btn-primary submit-btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? t('contact.submitting') : t('contact.submit')}
              </button>
            </form>
          )}
        </div>
        <div className="wa-card reveal">
          <Logo id="wa" style={{ width: 96 }} />
          <h3>{t('contact.waCardTitle')}</h3>
          <p style={{ margin: 0 }}>{t('contact.waCardDesc')}</p>
          <a className="wa-btn" href={waLink(t('contact.waCardMsg'))} target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.3.1.2 1.6 2.5 4 3.4.6.2 1 .4 1.3.5.6.2 1.1.1 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z" /></svg>
            {t('contact.waCardBtn')}
          </a>
        </div>
      </div>
    </section>
  );
}
