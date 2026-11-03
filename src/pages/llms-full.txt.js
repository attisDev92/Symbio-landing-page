import { buildLlmsFullTxt } from '../lib/llms.js';

export function GET() {
  return new Response(buildLlmsFullTxt(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

