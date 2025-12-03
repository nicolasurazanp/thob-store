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
      
      // Si el ID es entre 39-53, sumarle 10 (39→49, 40→50, etc.)
      // Esto es porque insertamos el nuevo producto con ID 48
      if (numId >= 39 && numId <= 53) {
        numId += 10;
      } else if (numId >= 54) {
        // Después del ID 53 (que será 63), sumarle 11
        numId += 11;
      }
      
      newProducts.push({...product, id: String(numId)});
    }
  }

  // Escribir el resultado
  fs.writeFileSync(filePath, JSON.stringify(newProducts, null, 2));
  console.log(`Ajustados IDs de productos en ${filePath}`);
} catch (err) {
  console.error('Error:', err.message);
}
