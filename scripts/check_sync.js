const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../public/products.json');
const categoryPath = path.join(__dirname, '../src/components/CategoryPage.js');

function normalize(s) {
  return s
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .replace(/["'’`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const prodMap = new Map();
for (const p of products) {
  if (p._comment) continue;
  prodMap.set(normalize(p.title), String(p.id));
}

const catRaw = fs.readFileSync(categoryPath, 'utf8');
const entryRegex = /\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)"/g;
let match;
const mismatches = [];
const notFound = [];
while ((match = entryRegex.exec(catRaw)) !== null) {
  const [full, id, name] = match;
  const n = normalize(name);
  if (prodMap.has(n)) {
    const pid = prodMap.get(n);
    if (String(id) !== String(pid)) {
      mismatches.push({name, categoryId: id, productId: pid});
    }
  } else {
    notFound.push({name, categoryId: id});
  }
}

console.log('Mismatches (names present but ids differ):', mismatches.length);
for (const m of mismatches) console.log(m);
console.log('\nNames in CategoryPage not found in products.json:', notFound.length);
for (const n of notFound) console.log(n);
