const fs = require('fs');

const filePath = './public/products.json';

try {
  let data = fs.readFileSync(filePath, 'utf8');
  let products = JSON.parse(data);

  let newProducts = [];

  for (let product of products) {
    // Si es un comentario, conservarlo
    if (product._comment) {
      newProducts.push(product);
      continue;
    }

    // Si es un producto con id
    if (product.id) {
      let numId = parseInt(product.id);
      
      // Incrementar todos los IDs >= 50 en 1
      if (numId >= 50) {
        numId += 1;
      }
      
      newProducts.push({...product, id: String(numId)});
    }
  }

  // Escribir el resultado
  fs.writeFileSync(filePath, JSON.stringify(newProducts, null, 2));
  console.log(`Ajustados IDs de productos posteriores a 49 en ${filePath}`);
} catch (err) {
  console.error('Error:', err.message);
}
