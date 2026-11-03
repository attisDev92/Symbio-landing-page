import { logoSvg } from '../lib/site.js';

export default function Logo({ id, className, style }) {
  return <div className={className} style={style} dangerouslySetInnerHTML={{ __html: logoSvg(id) }} />;
}

