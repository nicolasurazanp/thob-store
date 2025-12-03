const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../public/products.json');
const categoryPath = path.join(__dirname, '../src/components/CategoryPage.js');

function normalize(s) {
  return s
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .replace(/["'’`.,–‑–—]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const map = new Map();
for (const p of products) {
  if (p._comment) continue;
  if (!p.title) continue;
  map.set(normalize(p.title), {id: String(p.id), title: p.title, price: p.price, image: p.image});
}

let catRaw = fs.readFileSync(categoryPath, 'utf8');

const outerRegex = /(const productsByCategory = useMemo\(\(\) => \(\{)([\s\S]*?)(\}\), \[\]\);)/;
const outerMatch = catRaw.match(outerRegex);
if (!outerMatch) {
  console.error('No pude encontrar productsByCategory block');
  process.exit(1);
}

const before = catRaw.slice(0, outerMatch.index + outerMatch[1].length);
let inner = outerMatch[2];
const after = catRaw.slice(outerMatch.index + outerMatch[1].length + inner.length + outerMatch[3].length - outerMatch[3].length);

// Find categories: "category-name": [ ... ],
const catRegex = /"([a-z0-9-]+)"\s*:\s*\[([\s\S]*?)\],/g;
let newInner = inner;
let match;
let totalUpdated = 0;
let totalRemoved = 0;

while ((match = catRegex.exec(inner)) !== null) {
  const catName = match[1];
  const itemsRaw = match[2];

  // parse individual entries
  const entryRegex = /\{([\s\S]*?)\},?/g;
  let eMatch;
  const newEntries = [];

  while ((eMatch = entryRegex.exec(itemsRaw)) !== null) {
    const entryText = eMatch[1];
    // find name field
    const nameMatch = entryText.match(/name:\s*"([^"]+)"/);
    if (!nameMatch) continue; // keep as-is maybe
    const name = nameMatch[1];
    const n = normalize(name);
    if (map.has(n)) {
      const prod = map.get(n);
      // reconstruct entry keeping brand, price, image if present, but use canonical name and id
      // extract brand, price, image fields
      const brandMatch = entryText.match(/brand:\s*"([^"]+)"/);
      const priceMatch = entryText.match(/price:\s*(\d+)/);
      const imageMatch = entryText.match(/image:\s*"([^"]*)"/);
      const brand = brandMatch ? brandMatch[1] : 'TOHB';
      const price = priceMatch ? parseInt(priceMatch[1], 10) : (prod.price || 0);
      const image = imageMatch ? imageMatch[1] : (prod.image || '');

      const entryLine = `            { id: ${prod.id}, name: "${prod.title}", brand: "${brand}", price: ${price}, image: "${image}" }`;
      newEntries.push(entryLine);
      totalUpdated++;
    } else {
      // not found in products.json -> remove
      totalRemoved++;
    }
  }

  // Build new category block
  const block = `"${catName}": [\n${newEntries.join(',\n')}\n        ],`;
  // replace the old block in newInner
  newInner = newInner.replace(match[0], block);
}

// Reconstruct file
const newCatRaw = catRaw.slice(0, outerMatch.index + outerMatch[1].length) + newInner + catRaw.slice(outerMatch.index + outerMatch[1].length + inner.length);
fs.writeFileSync(categoryPath, newCatRaw, 'utf8');
console.log(`Sincronización completa. Entradas actualizadas: ${totalUpdated}. Entradas removidas: ${totalRemoved}.`);
