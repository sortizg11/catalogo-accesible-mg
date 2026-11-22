# Catálogo Accesible MG

Catálogo de estudio de Matemática General (MA0101). El esqueleto usa la interfaz de la versión 2.1.1 del [catálogo de Cálculo Diferencial e Integral](https://github.com/sortizg11/catalogo-matematica-accesible), con identidad visual verde y preferencias y marcadores propios.

## Revisar el catálogo

Ejecuta `node scripts/serve.mjs` desde esta carpeta y abre [el catálogo local](http://127.0.0.1:4173/). También puedes consultar el [temario de revisión](docs/temario.md) o abrir el [manual de usuario](docs/manual-usuario.html).

| Unidad | Apartados |
| --- | ---: |
| 1. Funciones | 17 |
| 2. Funciones algebraicas | 20 |
| 3. Funciones exponenciales y logarítmicas | 5 |
| 4. Funciones trigonométricas | 11 |

Cada apartado tiene un enlace estable y secciones para teoría, ejemplos resueltos, práctica y soluciones. Esta entrega prepara esas secciones para recibir los archivos docentes.

## Incorporar materiales

Localiza el apartado por número o nombre en [el temario](docs/temario.md). Completa su ficha en `src/content.js` con `objective`, `readiness`, `theory`, `examples` y `exercises`, y marca `pending: false` al verificarla. Cada ejemplo o ejercicio usa un `sourceId` estable y los campos `title`, `statement`, `analysis`, `steps`, `answer` y `notes`. Cada paso registra `title` y `body`. Conserva el `id` del apartado para que sus enlaces y marcadores sigan funcionando. Sigue las [convenciones editoriales](docs/convenciones-contenido.md) y registra las fuentes y cambios en cada incorporación.

## Verificar cambios

`npm test` ejecuta las pruebas de estructura del temario. Para las pruebas de navegador, ejecuta `npm install`, `npx playwright install chromium` y `npm run test:browser`. La revisión con NVDA y la prueba de un micrófono real se realizan por separado.
