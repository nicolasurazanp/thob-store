const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../public/products.json');
const categoryPath = path.join(__dirname, '../src/components/CategoryPage.js');

function normalize(s) {
  return s
    .normalize('NFD').replace(/\p{Diacritic}/gu, '') // remove accents
    .replace(/["'’`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

try {
  const productsRaw = fs.readFileSync(productsPath, 'utf8');
  const products = JSON.parse(productsRaw);

  const titleToId = new Map();
  for (const p of products) {
    if (p._comment) continue;
    if (!p.title) continue;
    titleToId.set(normalize(p.title), String(p.id));
  }

  let categoryRaw = fs.readFileSync(categoryPath, 'utf8');

  // Regex to find entries like: { id: 21, name: "Jabón Artesanal Arroz 100 g", brand: "TOHB", price: 22900, image: "/..." },
  const entryRegex = /\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)"([\s\S]*?)\},/g;

  let updated = 0;
  categoryRaw = categoryRaw.replace(entryRegex, (match, id, name, rest) => {
    const n = normalize(name);
    if (titleToId.has(n)) {
      const correctId = titleToId.get(n);
      if (String(id) !== String(correctId)) {
        updated++;
        return `{ id: ${correctId}, name: "${name}"${rest} },`;
      }
    }
    return match;
  });

  fs.writeFileSync(categoryPath, categoryRaw, 'utf8');
  console.log(`Sincronización completada. IDs actualizados: ${updated}`);
} catch (err) {
  console.error('Error sincronizando archivos:', err.message);
  process.exit(1);
}
