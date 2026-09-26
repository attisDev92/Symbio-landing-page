const WHATSAPP_NUMBER = "593982230654";
const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

function rawLogoMarkup(idSuffix) {
  const tpl = document.getElementById('logo-svg').textContent;
  return tpl.replaceAll('__GID__', 'symbioGrad-' + idSuffix);
}
