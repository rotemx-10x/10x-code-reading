const product = { name: "USB cable", price: 15, stock: 0 };
// Use 10 only when the stock field is missing
const stockToShow = product.stock || 10;
console.log(`${product.name}: ${stockToShow} in stock`);
// Task: run the file, compare the output with the rule on line 2, and find the line with the bug.
