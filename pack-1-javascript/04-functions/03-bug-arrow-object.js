const products = [
  { name: "Mug", price: 25 },
  { name: "Pen", price: 5 },
];
const options = products.map((p) => { label: p.name });
console.log(options);
// Task: options should hold one object with a label for each product. Run the file and find the line with the bug.
