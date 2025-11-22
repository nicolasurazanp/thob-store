const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'public', 'products.json');

try {
  const raw = fs.readFileSync(filePath, 'utf8');
  const arr = JSON.parse(raw);

  let counter = 0;
  const newArr = arr.map(item => {
    if (item && typeof item === 'object' && Object.prototype.hasOwnProperty.call(item, 'id')) {
      counter += 1;
      return { ...item, id: String(counter) };
    }
    return item; // keep comments or other entries as-is
  });

  fs.writeFileSync(filePath, JSON.stringify(newArr, null, 2), 'utf8');
  console.log(`Renumerados ${counter} productos en ${filePath}`);
} catch (err) {
  console.error('Error renumerando products.json:', err);
  process.exit(1);
}
