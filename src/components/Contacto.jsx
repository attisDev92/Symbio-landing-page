import { useCallback, useState } from 'react';
import Logo from './Logo.jsx';
import { waLink } from '../lib/site.js';

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

function pushEvent(event, params = {}) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  } catch (e) { }
}

// `c` = translations[lang].contact
export default function Contacto({ c, lang }) {
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

  const onChange = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono) { return; }
    setStatus('sending');

    const cleanNumber = form.telefono.trim();
    const fullPhone = form.codigoPais === '+' ? cleanNumber : `${form.codigoPais} ${cleanNumber}`;

    try {
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
          Idioma: lang,
          Mensaje_o_Descripción: form.equipos || "Sin mensaje adicional"
        })
      });
      pushEvent('generate_lead', { form_id: 'contacto', lang });
      setStatus('done');
    } catch (err) {
      setStatus('done'); // Se muestra confirmación y siempre queda el canal de WhatsApp disponible
    }
  }, [form, lang]);

  return (
    <div className="contact">
      <div className="reveal">
        {status === 'done' ? (
          <div className="success" role="status">{c.success}</div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="field-row">
              <div>
                <label htmlFor="nombre">{c.nameLabel}</label>
                <input id="nombre" name="name" autoComplete="name" required value={form.nombre} onChange={onChange('nombre')} placeholder={c.namePlaceholder} />
              </div>
              <div>
                <label htmlFor="empresa">{c.orgLabel}</label>
                <input id="empresa" name="organization" autoComplete="organization" value={form.empresa} onChange={onChange('empresa')} placeholder={c.orgPlaceholder} />
              </div>
            </div>
            <div className="field-row">
              <div>
                <label htmlFor="telefono">{c.phoneLabel}</label>
                <div className="phone-input-group">
                  <select
                    id="codigoPais"
                    aria-label="Country code"
                    value={form.codigoPais}
                    onChange={onChange('codigoPais')}
                  >
                    {COUNTRY_CODES.map((cc) => (
                      <option key={cc.code} value={cc.code}>
                        {cc.label}
                      </option>
                    ))}
                  </select>
                  <input
                    id="telefono"
                    name="tel"
                    type="tel"
                    autoComplete="tel-national"
                    required
                    value={form.telefono}
                    onChange={onChange('telefono')}
                    placeholder={form.codigoPais === '+593' ? '09XXXXXXXX' : c.phonePlaceholder}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="correo">{c.emailLabel}</label>
                <input id="correo" name="email" type="email" autoComplete="email" value={form.correo} onChange={onChange('correo')} placeholder={c.emailPlaceholder} />
              </div>
            </div>
            <div>
              <label htmlFor="equipos">{c.msgLabel}</label>
              <input id="equipos" name="message" value={form.equipos} onChange={onChange('equipos')} placeholder={c.msgPlaceholder} />
            </div>
            <button className="btn btn-primary submit-btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? c.submitting : c.submit}
            </button>
          </form>
        )}
      </div>
      <div className="wa-card reveal">
        <Logo id="wa" style={{ width: 96 }} />
        <h3>{c.waCardTitle}</h3>
        <p style={{ margin: 0 }}>{c.waCardDesc}</p>
        <a className="wa-btn" href={waLink(c.waCardMsg)} target="_blank" rel="noopener noreferrer" data-wa="contact-card">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.3.1.2 1.6 2.5 4 3.4.6.2 1 .4 1.3.5.6.2 1.1.1 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z" /></svg>
          {c.waCardBtn}
        </a>
      </div>
    </div>
  );
}

