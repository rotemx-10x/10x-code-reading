const products = [
  { name: "Mug", stock: 3 },
  { name: "Pen", stock: 0 },
];
const inStock = (product) => product.stock > 0;
const available = products.filter(inStock());
console.log(available);
// Task: available should hold only the products in stock. Run the file, read the error, and find the line with the bug.
