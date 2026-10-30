// Order the lines below the marker and delete the two lines that do not belong.
// As given, the lines are out of order and node stops with an error.
// Expected output:
//   [ 'Mug', 'Lamp' ]
const products = [
  { name: "Mug", price: 25, stock: 3 },
  { name: "Pen", price: 5, stock: 0 },
  { name: "Lamp", price: 80, stock: 2 },
];
// ---- order the lines below ----
const names = available.map((product) => product.name);
console.log(names);
const available = products.filter(isAvailable());
const available = products.filter(isAvailable);
const isAvailable = (product) => product.stock > 0;
const isAvailable = (product) => { product.stock > 0 };
