'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'editorial.json'), 'utf8'));
const unique = (rows, label) => assert.equal(new Set(rows.map(x => x.id)).size, rows.length, `${label} : identifiants dupliqués`);
const https = url => assert.ok(typeof url === 'string' && new URL(url).protocol === 'https:', `URL invalide : ${url}`);
const checked = value => {
  if (!value) return;
  assert.match(value, /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(new Date(value).toISOString().slice(0,10), value);
  assert.ok(value <= data.updated, `Vérification postérieure à la version : ${value}`);
};
const asset = file => {
  if (!file) return;
  assert.ok(file.startsWith('assets/') && !file.includes('..'), `Chemin inattendu : ${file}`);
  assert.ok(fs.existsSync(path.join(root, 'docs', file)), `Image absente : ${file}`);
};
for (const key of ['questions', 'parties', 'candidates', 'themes']) unique(data[key], key);
checked(data.updated);
const questions = new Set(data.questions.map(q => q.id));
const partyIds = new Set(data.parties.map(p => p.id));
const themed = data.themes.flatMap(t => t.questions);
assert.equal(themed.length, questions.size);
assert.equal(new Set(themed).size, questions.size);
for (const id of themed) assert.ok(questions.has(id));
assert.equal(data.questions.filter(q => q.level !== 'extra').length, data.baseQuestionCount);
for (const source of Object.values(data.sources)) {
  https(source.url);
  assert.ok(source.label && source.year);
  checked(source.checked);
}
for (const profile of [...data.parties, ...data.candidates]) {
  asset(profile.photo); asset(profile.logo); checked(profile.checked); checked(profile.reviewed);
  for (const [id, position] of Object.entries(profile.positions || {})) {
    assert.ok(questions.has(id), `Question absente : ${id}`);
    assert.ok(data.sources[position.source], `Source absente : ${position.source}`);
    assert.ok(position.value === 1 || position.value === -1 || position.value === null);
    assert.ok(position.text); checked(position.checked);
  }
  for (const source of [...(profile.documents || []), ...(profile.relatedSources || [])]) {
    https(source.url); assert.ok(source.label);
  }
}
for (const candidate of data.candidates) {
  https(candidate.source);
  assert.ok(candidate.status && candidate.statusLabel && candidate.note);
  assert.ok(!candidate.partyId || partyIds.has(candidate.partyId));
}
for (const item of data.news) {
  https(item.url); checked(item.checked); checked(item.eventDate);
  assert.ok(item.title && item.body && item.date && item.source);
  for (const source of item.relatedSources || []) https(source.url);
}
assert.equal(fs.readFileSync(path.join(root, 'docs/data.js'), 'utf8'), 'window.CAP_DATA = '+JSON.stringify(data)+';\n', 'docs/data.js doit être régénéré');
console.log(`Corpus cohérent : ${data.candidates.length} profils, ${data.parties.length} partis, ${data.questions.length} questions, ${data.news.length} actualités ; sources, images et export vérifiés.`);
