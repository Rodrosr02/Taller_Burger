export const money = value => new Intl.NumberFormat('es-CO', {
  style: 'currency', currency: 'COP', maximumFractionDigits: 0,
}).format(value);
export const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));
export function pasos(actual) {
  const pasos = [
    ['index.html#menu', '1', 'Carrito'],
    ['cart.html', '2', 'Detalle del carrito'],
    ['checkout.html', '3', 'Pagar'],
  ];
  return `<ol class="purchase-steps" aria-label="Pasos de la compra">${pasos.map(([href, n, title]) =>
    `<li class="${Number(n) === actual ? 'current' : ''}"><a href="${href}" ${Number(n) === actual ? 'aria-current="step"' : ''}><span>${n}</span>${title}</a></li>`
  ).join('')}</ol>`;
}
