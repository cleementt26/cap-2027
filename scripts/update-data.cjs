const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'editorial.json'), 'utf8'));
fs.writeFileSync(path.join(root, 'docs/data.js'), 'window.CAP_DATA = '+JSON.stringify(data)+';\n');
console.log('Données du site actualisées.');
