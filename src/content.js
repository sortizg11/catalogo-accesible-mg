export { help } from './help.js';
export { curriculum } from './curriculum.js';

export const sections = {
  tema: 'Inicio del tema',
  teoria: 'Teoría',
  ejemplos: 'Ejemplos resueltos',
  practica: 'Práctica',
  soluciones: 'Soluciones'
};

// Cada ficha se completa aquí al incorporar su material revisado.
export const topics = [
  {"id": "conceptos-basicos", "unit": "Unidad 1. Funciones", "number": "1.1", "title": "Conceptos básicos de funciones", "description": "Producto cartesiano, pares ordenados, relaciones, funciones, dominio, codominio, gráfico y gráfica."},
  {"id": "dominio-ambito", "unit": "Unidad 1. Funciones", "number": "1.2", "title": "Dominio real y ámbito de funciones", "description": "Incluye funciones racionales y radicales."},
  {"id": "representaciones", "unit": "Unidad 1. Funciones", "number": "1.3", "title": "Representaciones de funciones", "description": "Representaciones tabular, verbal, gráfica y algebraica."},
  {"id": "imagenes-preimagenes", "unit": "Unidad 1. Funciones", "number": "1.4", "title": "Imágenes, preimágenes y extremos relativos", "description": "Imágenes y preimágenes, incluidas las de funciones a trozos. Extremos relativos a partir de la gráfica."},
  {"id": "razon-cambio", "unit": "Unidad 1. Funciones", "number": "1.5", "title": "Razón de cambio promedio de una función"},
  {"id": "funciones-elementales", "unit": "Unidad 1. Funciones", "number": "1.6", "title": "Funciones elementales y sus gráficas"},
  {"id": "transformaciones", "unit": "Unidad 1. Funciones", "number": "1.7", "title": "Transformaciones de funciones", "description": "Traslaciones verticales y horizontales, y reflexiones respecto a los ejes de coordenadas."},
  {"id": "valor-absoluto", "unit": "Unidad 1. Funciones", "number": "1.8", "title": "Función valor absoluto", "description": "Gráficas, propiedades, ecuaciones e inecuaciones."},
  {"id": "signo-funcion", "unit": "Unidad 1. Funciones", "number": "1.9", "title": "Signo de una función", "description": "Lineales, cuadráticas, valor absoluto, productos de factores lineales y racionales. Enfoques gráfico y algebraico."},
  {"id": "asintotas-graficas", "unit": "Unidad 1. Funciones", "number": "1.10", "title": "Asíntotas horizontales y verticales", "description": "Reconocimiento a partir de la gráfica."},
  {"id": "intersecciones-ejes", "unit": "Unidad 1. Funciones", "number": "1.11", "title": "Intersecciones con los ejes de coordenadas", "description": "En este apartado se trabaja sin fórmula general para cuadráticas ni división sintética."},
  {"id": "monotonia-grafica", "unit": "Unidad 1. Funciones", "number": "1.12", "title": "Intervalos de monotonía", "description": "A partir de la representación gráfica."},
  {"id": "operaciones-composicion", "unit": "Unidad 1. Funciones", "number": "1.13", "title": "Operaciones y composición de funciones", "description": "Adición, sustracción, multiplicación, división y composición."},
  {"id": "interseccion-funciones", "unit": "Unidad 1. Funciones", "number": "1.14", "title": "Intersección entre funciones", "description": "Enfoque gráfico y resolución por factorización por inspección, factor común o fórmulas notables."},
  {"id": "funciones-uno-a-uno", "unit": "Unidad 1. Funciones", "number": "1.15", "title": "Funciones uno a uno"},
  {"id": "concepto-inversa", "unit": "Unidad 1. Funciones", "number": "1.16", "title": "Concepto de función inversa"},
  {"id": "calculo-inversa", "unit": "Unidad 1. Funciones", "number": "1.17", "title": "Cálculo de la función inversa", "description": "Funciones lineales, racionales, cuadráticas, de raíz cuadrada y de raíz cúbica."},
  {"id": "lineal-definicion", "unit": "Unidad 2. Funciones algebraicas", "number": "2.1", "title": "Definición y representaciones de la función lineal", "description": "Definición, caracterización y representaciones."},
  {"id": "lineal-formas", "unit": "Unidad 2. Funciones algebraicas", "number": "2.2", "title": "Formas algebraicas de la función lineal", "description": "Forma punto-pendiente, forma pendiente-intersección y ecuación general de la recta."},
  {"id": "lineal-modelizacion", "unit": "Unidad 2. Funciones algebraicas", "number": "2.3", "title": "Razón de cambio y modelización lineal", "description": "Razón de cambio promedio constante y modelización con funciones lineales."},
  {"id": "rectas-paralelas-oblicuas-perpendiculares", "unit": "Unidad 2. Funciones algebraicas", "number": "2.4", "title": "Rectas paralelas, oblicuas y perpendiculares"},
  {"id": "interseccion-rectas", "unit": "Unidad 2. Funciones algebraicas", "number": "2.5", "title": "Intersección entre rectas", "description": "Enfoques algebraico y gráfico."},
  {"id": "cuadratica-definicion", "unit": "Unidad 2. Funciones algebraicas", "number": "2.6", "title": "Definición y representaciones de la función cuadrática", "description": "Definición, caracterización y representaciones."},
  {"id": "cuadratica-formas", "unit": "Unidad 2. Funciones algebraicas", "number": "2.7", "title": "Formas algebraicas de la función cuadrática", "description": "Forma general y forma de vértice."},
  {"id": "cuadratica-extremos", "unit": "Unidad 2. Funciones algebraicas", "number": "2.8", "title": "Máximos, mínimos, vértice y eje de simetría"},
  {"id": "cuadratica-modelizacion", "unit": "Unidad 2. Funciones algebraicas", "number": "2.9", "title": "Razón de cambio y modelización cuadrática", "description": "Razón de cambio promedio y modelización con funciones cuadráticas."},
  {"id": "interseccion-parabolas", "unit": "Unidad 2. Funciones algebraicas", "number": "2.10", "title": "Intersección de parábolas entre sí y con rectas"},
  {"id": "cuadratica-inversa", "unit": "Unidad 2. Funciones algebraicas", "number": "2.11", "title": "Inversa de funciones cuadráticas"},
  {"id": "polinomial-definicion", "unit": "Unidad 2. Funciones algebraicas", "number": "2.12", "title": "Definición y representaciones de las funciones polinomiales", "description": "Definición, caracterización y representaciones."},
  {"id": "polinomial-graficas", "unit": "Unidad 2. Funciones algebraicas", "number": "2.13", "title": "Gráficas de funciones polinomiales", "description": "Identificación mediante el comportamiento al acercarse a infinito positivo y negativo."},
  {"id": "polinomial-division", "unit": "Unidad 2. Funciones algebraicas", "number": "2.14", "title": "División de polinomios, teoremas del factor y del residuo", "description": "Incluye división sintética."},
  {"id": "fracciones-parciales", "unit": "Unidad 2. Funciones algebraicas", "number": "2.15", "title": "Fracciones parciales", "description": "Hasta tres factores lineales distintos en el denominador."},
  {"id": "racionales-asintotas-inversas", "unit": "Unidad 2. Funciones algebraicas", "number": "2.16", "title": "Características, asíntotas e inversas de funciones racionales"},
  {"id": "algebraicas-intersecciones", "unit": "Unidad 2. Funciones algebraicas", "number": "2.17", "title": "Intersecciones entre gráficas de funciones estudiadas"},
  {"id": "algebraicas-monotonia", "unit": "Unidad 2. Funciones algebraicas", "number": "2.18", "title": "Monotonía de las funciones estudiadas", "description": "Enfoque gráfico en todas las funciones estudiadas y algebraico en las lineales y cuadráticas."},
  {"id": "algebraicas-signo", "unit": "Unidad 2. Funciones algebraicas", "number": "2.19", "title": "Intervalos asociados con el signo de funciones"},
  {"id": "algebraicas-cortes-ejes", "unit": "Unidad 2. Funciones algebraicas", "number": "2.20", "title": "Cortes con los ejes de las funciones estudiadas"},
  {"id": "exponenciales", "unit": "Unidad 3. Funciones exponenciales y logarítmicas", "number": "3.1", "title": "Funciones exponenciales", "description": "Propiedades y graficación."},
  {"id": "logaritmicas", "unit": "Unidad 3. Funciones exponenciales y logarítmicas", "number": "3.2", "title": "Funciones logarítmicas", "description": "Propiedades y graficación."},
  {"id": "exponenciales-logaritmicas-modelizacion", "unit": "Unidad 3. Funciones exponenciales y logarítmicas", "number": "3.3", "title": "Modelización con funciones exponenciales y logarítmicas"},
  {"id": "identidades-logaritmicas", "unit": "Unidad 3. Funciones exponenciales y logarítmicas", "number": "3.4", "title": "Identidades logarítmicas"},
  {"id": "ecuaciones-exponenciales-logaritmicas", "unit": "Unidad 3. Funciones exponenciales y logarítmicas", "number": "3.5", "title": "Ecuaciones exponenciales y logarítmicas"},
  {"id": "angulos", "unit": "Unidad 4. Funciones trigonométricas", "number": "4.1", "title": "Ángulos", "description": "Definición y notación."},
  {"id": "angulos-estandar-coterminales", "unit": "Unidad 4. Funciones trigonométricas", "number": "4.2", "title": "Ángulos en posición estándar y coterminales", "description": "Medidas en grados y radianes."},
  {"id": "circulo-unitario", "unit": "Unidad 4. Funciones trigonométricas", "number": "4.3", "title": "Círculo unitario"},
  {"id": "seno-coseno-tangente", "unit": "Unidad 4. Funciones trigonométricas", "number": "4.4", "title": "Seno, coseno y tangente en el círculo unitario", "description": "Definiciones de las tres funciones."},
  {"id": "graficas-trigonometricas", "unit": "Unidad 4. Funciones trigonométricas", "number": "4.5", "title": "Gráficas de seno, coseno y tangente"},
  {"id": "amplitud-periodo", "unit": "Unidad 4. Funciones trigonométricas", "number": "4.6", "title": "Amplitud y período de seno y coseno"},
  {"id": "identidades-trigonometricas", "unit": "Unidad 4. Funciones trigonométricas", "number": "4.7", "title": "Identidades trigonométricas"},
  {"id": "trigonometricas-inversas", "unit": "Unidad 4. Funciones trigonométricas", "number": "4.8", "title": "Arcoseno, arcocoseno y arcotangente"},
  {"id": "ecuaciones-trigonometricas", "unit": "Unidad 4. Funciones trigonométricas", "number": "4.9", "title": "Ecuaciones trigonométricas"},
  {"id": "triangulos-rectangulos", "unit": "Unidad 4. Funciones trigonométricas", "number": "4.10", "title": "Seno, coseno y tangente en triángulos rectángulos"},
  {"id": "ley-senos-cosenos", "unit": "Unidad 4. Funciones trigonométricas", "number": "4.11", "title": "Ley de senos, ley de cosenos y problemas de aplicación"},
].map(topic => ({ pending: true, ...topic }));

export const routeAliases = {};
const pendingContent = '<p>Pendiente de contenido.</p>';

function analysis(item){
  if(!item.analysis) return '';
  return item.analysis.includes('<h4>') ? item.analysis : `<div class="analisis"><h4>Esquema de análisis</h4>${item.analysis}</div>`;
}
function procedure(item, topic, kind){
  const steps = item.steps.length ? `<div class="procedure"><h4>Desarrollo paso a paso</h4><div class="procedure-header"><p>Abre los pasos que necesites. El resultado está disponible al final.</p><button class="mode-toggle">Mostrar todos los pasos</button></div>${item.steps.map((step,i)=>{const id=`${topic}--${kind}-${item.sourceId}--paso-${i+1}`;return `<details class="step"><summary id="${id}">${step.title}</summary><div class="step-body">${step.body}<button data-save="${id}">Guardar este paso como punto de estudio</button></div></details>`;}).join('')}</div>` : '';
  return `${steps}<h4>Resultado</h4>${item.answer}`;
}
function indexList(topic,items,kind,label){
  return `<nav class="item-index" aria-label="${label}"><p><strong>${label}</strong></p><ol>${items.map(item=>`<li><a href="#${topic}--${kind}-${item.sourceId}">${item.title}</a></li>`).join('')}</ol></nav>`;
}
function examples(t){
  if(!t.examples.length) return '<p>Los ejemplos disponibles están integrados en la explicación teórica de este tema.</p>';
  return `<p>El esquema de análisis precede al desarrollo y explica por qué se elige cada procedimiento.</p>${indexList(t.id,t.examples,'ejemplo','Índice de ejemplos')}${t.examples.map((e,i)=>`<div class="academic-item" data-source-id="${e.sourceId}"><h3 id="${t.id}--ejemplo-${e.sourceId}" tabindex="-1">${e.title}</h3>${e.statement}${analysis(e)}${procedure(e,t.id,"ejemplo")}${e.notes}<div class="inline-actions"><a href="#${t.id}--ejemplos">Volver al índice de ejemplos</a>${t.examples[i+1]?`<a href="#${t.id}--ejemplo-${t.examples[i+1].sourceId}">Siguiente: ${t.examples[i+1].title}</a>`:''}</div></div>`).join('')}`;
}
function practice(t){
  if(!t.exercises.length)return '<p>Consulta las actividades incluidas en la teoría y los ejemplos de este tema.</p>';
  return `<p>Intenta resolver cada ejercicio. Después, abre su solución para comparar el resultado.</p>${indexList(t.id,t.exercises,'ejercicio','Índice de ejercicios')}${t.exercises.map(e=>`<div class="academic-item" data-source-id="${e.sourceId}"><h3 id="${t.id}--ejercicio-${e.sourceId}" tabindex="-1">${e.title}</h3>${e.statement}<details class="exercise-solution"><summary id="${t.id}--solucion-${e.sourceId}">Ver solución: ${e.title}</summary><div class="solution-body">${analysis(e)}${procedure(e,t.id,"solucion")}${e.notes}<a href="#${t.id}--ejercicio-${e.sourceId}">Volver al enunciado: ${e.title}</a></div></details><a href="#${t.id}--practica">Volver al índice de ejercicios</a></div>`).join('')}`;
}
function solutions(t){
  return `<p>Las soluciones están junto a sus ejercicios. Selecciona uno para abrir su solución.</p>${indexList(t.id,t.exercises,'solucion','Soluciones de la práctica')}`;
}
export function renderTopic(t){
  const position=topics.indexOf(t),previous=topics[position-1],next=topics[position+1];
  return `<article data-view="${t.id}" hidden><p class="eyebrow">${t.unit} · Tema ${t.number}</p><h1 id="${t.id}--tema" tabindex="-1">${t.title}</h1>${t.description ? `<p class="lead">${t.description}</p>` : ''}${t.pending ? '<p><strong>Material pendiente de incorporación.</strong></p>' : ''}<nav class="section-nav" aria-label="Secciones de ${t.title}">${Object.entries(sections).filter(([key])=>key!=='tema').map(([key,label])=>`<a href="#${t.id}--${key}">${label}</a>`).join('')}</nav>
  <section class="academic-section" data-section="teoria"><h2 id="${t.id}--teoria" tabindex="-1"><span class="section-number" aria-hidden="true">01</span> Teoría</h2>${t.pending ? pendingContent : `<div class="objective"><p><strong>Objetivo.</strong> ${t.objective}</p></div><p><strong>Antes de comenzar.</strong> ${t.readiness}</p>${t.theory}`}</section>
  <section class="academic-section" data-section="ejemplos"><h2 id="${t.id}--ejemplos" tabindex="-1"><span class="section-number" aria-hidden="true">02</span> Ejemplos resueltos</h2>${t.pending ? pendingContent : examples(t)}</section>
  <section class="academic-section" data-section="practica"><h2 id="${t.id}--practica" tabindex="-1"><span class="section-number" aria-hidden="true">03</span> Práctica</h2>${t.pending ? pendingContent : practice(t)}</section>
  <section class="academic-section" data-section="soluciones"><h2 id="${t.id}--soluciones" tabindex="-1"><span class="section-number" aria-hidden="true">04</span> Soluciones</h2>${t.pending ? pendingContent : solutions(t)}</section>
  <nav class="topic-navigation" aria-label="Continuar el estudio"><a href="#${t.id}--tema">Volver al inicio del tema</a>${previous?`<a href="#${previous.id}--tema">Anterior: ${previous.title}</a>`:''}${next?`<a href="#${next.id}--tema">Siguiente: ${next.title}</a>`:''}</nav></article>`;
}
export const home = `<article data-view="inicio"><div class="home-hero"><p class="home-kicker">CATÁLOGO DE ESTUDIO</p><h1 id="inicio" tabindex="-1">Matemática General</h1><p class="lead">¿Qué tema quieres estudiar?</p></div><section class="home-search" aria-labelledby="home-search-title"><h2 id="home-search-title">Buscar un tema</h2><form id="home-search-form" role="search" aria-label="Buscar en el catálogo"><label for="home-search-query">Tema, apartado o ejemplo</label><div class="search-input-row"><input id="home-search-query" type="search" placeholder="Por ejemplo, círculo unitario" autocomplete="off"><button type="submit" class="primary">Buscar</button></div></form><div class="inline-actions"><button id="home-voice-start" aria-describedby="home-voice-note">Buscar por voz</button><button id="home-voice-stop" hidden>Cancelar escucha</button></div><p id="home-search-status" role="status"></p><ul id="home-search-results"></ul><details class="voice-privacy"><summary>Acerca del micrófono</summary><p id="home-voice-note">El navegador puede enviar audio a su proveedor de reconocimiento. El catálogo no guarda grabaciones ni consultas. Si el servicio no responde, escribe o usa el dictado del dispositivo en el campo de búsqueda.</p></details></section><div class="inline-actions"><button data-continue>Continuar donde quedé</button><a href="#home-topics">Explorar temas disponibles</a></div><details class="home-topics"><summary id="home-topics">Temas disponibles</summary><ol class="topic-list">${topics.map(t=>`<li><h3><a href="#${t.id}--tema">${t.number}. ${t.title}</a></h3>${t.description ? `<p>${t.description}</p>` : ''}</li>`).join('')}</ol></details><p>También puedes usar el temario por unidades. Esta versión permite revisar el temario. Los materiales de estudio se incorporarán por apartado.</p><a href="#ayuda">Ayuda para utilizar el curso</a></article>`;
