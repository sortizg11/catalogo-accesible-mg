import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { curriculum, help, home, renderTopic, sections, topics } from '../src/content.js';

const flatten = items => items.flatMap(item => item.children ? flatten(item.children) : [item]);

test('las cuatro unidades conservan la secuencia y agrupación de MA0101', () => {
  assert.deepEqual(curriculum.map(unit => flatten(unit.items).length), [17, 20, 5, 11]);
  assert.deepEqual(curriculum[1].items.map(group => [group.label, group.children.length]), [
    ['Función lineal', 5],
    ['Función cuadrática', 6],
    ['Funciones polinomiales', 4],
    ['Funciones racionales', 5]
  ]);
  assert.deepEqual(curriculum.flatMap(unit => flatten(unit.items).map((entry, i) => ({
    id: entry.topic, unit: unit.title, number: `${unit.id}.${i + 1}`
  }))), topics.map(({ id, unit, number }) => ({ id, unit, number })));
});

test('todas las fichas y controles tienen destinos únicos', () => {
  const index = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const html = index.replace('<div id="views"></div>', home + topics.map(renderTopic).join('') + help);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  const unique = new Set(ids);
  assert.equal(unique.size, ids.length);
  for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(unique.has(target), `Falta el destino ${target}`);
  }
  for (const topic of topics) {
    for (const section of Object.keys(sections)) assert.ok(unique.has(`${topic.id}--${section}`));
  }
  assert.equal(topics.length, 53);
  assert.equal(topics.filter(topic => topic.pending).length, 53);
});

test('los procedimientos y soluciones se pueden incorporar a una ficha', () => {
  const item = {
    sourceId: 'prueba', title: 'Ejercicio de prueba', statement: '<p>Enunciado</p>',
    analysis: '', steps: [{ title: 'Paso', body: '<p>Desarrollo</p>' }], answer: '<p>Resultado</p>', notes: ''
  };
  const html = renderTopic({
    ...topics[0], pending: false, objective: 'Objetivo de prueba', readiness: 'Conocimientos previos',
    theory: '<p>Teoría</p>', examples: [item], exercises: [item]
  });
  assert.match(html, /class="step"/);
  assert.match(html, /class="exercise-solution"/);
  assert.match(html, /id="conceptos-basicos--solucion-prueba--paso-1"/);
  assert.match(html, /href="#conceptos-basicos--solucion-prueba"/);
});
