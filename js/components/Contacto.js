function Contacto() {
  const [form, setForm] = useState({ nombre: '', empresa: '', telefono: '', correo: '', equipos: '' });
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
    const record = { ...form, creado: new Date().toISOString() };
    try {
      if (dbRef.current) {
        const id = 'lead_' + Date.now();
        await dbRef.current.doc('leads/' + id).set(record);
      }
      setStatus('done');
    } catch (err) {
      setStatus('done'); // igual mostramos confirmación; el dato ya viaja por WhatsApp si lo prefieren
    }
  }, [form]);

  return (
    <section className="wrap" id="contacto">
      <div className="section-head reveal">
        <h2>Hablemos de tu organización</h2>
        <p>Cuéntanos sobre tu organización, o escríbenos directo por WhatsApp si prefieres una respuesta inmediata.</p>
      </div>
      <div className="contact">
        <div className="reveal">
          {status === 'done' ? (
            <div className="success">Recibimos tus datos. Te contactaremos pronto — si quieres avanzar ahora mismo, escríbenos por WhatsApp.</div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="field-row">
                <div>
                  <label htmlFor="nombre">Nombre</label>
                  <input id="nombre" required value={form.nombre} onChange={onChange('nombre')} placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="empresa">Organización</label>
                  <input id="empresa" value={form.empresa} onChange={onChange('empresa')} placeholder="Ej. Distribuidora de equipos médicos" />
                </div>
              </div>
              <div className="field-row">
                <div>
                  <label htmlFor="telefono">Teléfono</label>
                  <input id="telefono" required value={form.telefono} onChange={onChange('telefono')} placeholder="09XXXXXXXX" />
                </div>
                <div>
                  <label htmlFor="correo">Correo (opcional)</label>
                  <input id="correo" type="email" value={form.correo} onChange={onChange('correo')} placeholder="tu@empresa.com" />
                </div>
              </div>
              <div>
                <label htmlFor="equipos">Mensaje o descripción de la organización</label>
                <input id="equipos" value={form.equipos} onChange={onChange('equipos')} placeholder="Ej. Distribuidora de equipos médicos con 15 analizadores en 6 sedes" />
              </div>
              <button className="btn btn-primary submit-btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Solicitar demo'}
              </button>
            </form>
          )}
        </div>
        <div className="wa-card reveal">
          <Logo id="wa" style={{ width: 96 }} />
          <h3>¿Prefieres escribirnos directo?</h3>
          <p style={{ margin: 0 }}>Cuéntanos cuántos equipos y sedes manejas, y te respondemos por el mismo canal que usarán tus equipos médicos.</p>
          <a className="wa-btn" href={waLink("Hola, quiero agendar una demo de Symbio para mi distribuidora")} target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.3.1.2 1.6 2.5 4 3.4.6.2 1 .4 1.3.5.6.2 1.1.1 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z" /></svg>
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
