let stock = 5;
let backup = stock;
backup = 0;

const product = { name: "Mug", stock: 5 };
const copy = product;
copy.stock = 0;

console.log(stock, backup);
console.log(product.stock, copy.stock);
// Task: predict every line the program prints, then run it and compare.
