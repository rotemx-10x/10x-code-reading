const products = [
  { name: "Mug", price: 35 },
  { name: "Desk Lamp", price: 120 },
  { name: "Teapot", price: 90 },
];
const cheap = products.filter((p) => p.price < 100);
const first = products.find((p) => p.price < 100);
const luxury = products.find((p) => p.price > 500);
console.log(cheap.length, first.name, luxury);
// Task: predict every line the program prints, then run it and compare.
