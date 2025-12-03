const fs = require('fs');

const filePath = './public/products.json';

try {
  let data = fs.readFileSync(filePath, 'utf8');
  let products = JSON.parse(data);

  // Renumerar los productos: mantener 1-48, luego 49 en adelante
  let newId = 1;
  let newProducts = [];
  let seenIds = new Set();

  for (let product of products) {
    // Si es un comentario, conservarlo
    if (product._comment) {
      newProducts.push(product);
      continue;
    }

    // Si es un producto, renumerarlo
    if (product.id) {
      newProducts.push({...product, id: String(newId)});
      newId++;
    }
  }

  // Escribir el resultado
  fs.writeFileSync(filePath, JSON.stringify(newProducts, null, 2));
  console.log(`Renumerados ${newProducts.filter(p => p.id).length} productos`);
} catch (err) {
  console.error('Error:', err.message);
}
