# Burger · versión localStorage

Tienda de hamburguesas 100 % en el navegador: **sin servidor, sin base de datos**. Todo se guarda en `localStorage`.

## Cómo abrirlo
Los módulos JS (`type="module"`) no cargan con doble clic sobre `index.html`. Usa uno de estos:
- **VS Code → extensión Live Server** → clic derecho en `index.html` → *Open with Live Server*.
- o en una terminal dentro de la carpeta: `npx serve` (o `python -m http.server 8000`).

## Perfiles
| Perfil | Correo | Contraseña | Puede |
| --- | --- | --- | --- |
| Administrador | admin@burger.com | Admin12345 | Todo: menú, pedidos, usuarios y roles, ocultar productos |
| Vendedor | vendedor@burger.com | Vendedor123 | Crear/editar menú, gestionar pedidos y registrar cobros |
| Usuario | cliente@burger.com | Cliente123 | Ver menú, comprar, ver/cancelar sus pedidos |

El registro público siempre crea perfiles **Usuario**. Solo el administrador crea vendedores u otros administradores (Panel de gestión → Usuarios).

## Menú
Panel de gestión → Productos → *Añadir producto* (admin o vendedor). La imagen puede ser una ruta `images/b1.png`, una URL HTTPS o un archivo subido (se reduce a 640 px y se guarda en el navegador).

## Archivos
| Archivo | Propósito |
| --- | --- |
| `js/store.js` | "Backend" en localStorage: usuarios, sesión, menú, pedidos, stock y permisos |
| `app.js` | Vistas y eventos; llama a `store.js` mediante `api()` |
| `js/carrito.js` · `detalleCarrito.js` · `pago.js` | Los tres procesos (carrito, detalle, pago) |
| `index.html` · `cart.html` · `checkout.html` · `thankyou.html` | Páginas |

## Claves de localStorage
`burger_users`, `burger_products`, `burger_orders`, `burger_session`, `burger_v2_cart_<id>`.
Para empezar de cero: Administrador → Vista general → **Restablecer datos**, o borra esas claves en DevTools → Application → Local Storage.

## Límites (importante)
- Los datos son **por navegador**: no se comparten entre dispositivos ni entre navegadores.
- localStorage permite ~5 MB; las fotos subidas consumen ese espacio.
- Los permisos se validan en `store.js`, pero cualquiera puede editar el localStorage desde DevTools. Sirve para un proyecto académico o demo, no para un negocio real.
- Pagos: contraentrega y pago académico simulado (sin dinero). Wompi se retiró porque requiere servidor.
