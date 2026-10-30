const products = [
  { name: "Mug", stock: 12 },
  { name: "Desk Lamp", stock: 0 },
  { name: "Teapot", stock: 3 },
];
const reorder = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].stock < 5) {
    reorder.push(products[i].name);
  }
}
console.log(reorder);
// Task: trace i, products[i].stock and reorder in every round of the loop, then run the file and compare.
