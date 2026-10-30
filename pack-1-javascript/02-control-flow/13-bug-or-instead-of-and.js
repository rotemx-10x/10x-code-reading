// Rule: a product can be ordered only if
// it is active and has stock
const products = [
  { name: "Mug", active: true, stock: 0 },
  { name: "Lamp", active: false, stock: 5 },
  { name: "Pen", active: true, stock: 12 },
];
for (const p of products) {
  if (p.active || p.stock > 0) {
    console.log(`${p.name}: can order`);
  }
}
// Task: run the file, compare the output with the rule on lines 1 and 2, and find the line with the bug.
