const cart = [
  { name: "Mug", price: 35, qty: 2 },
  { name: "Teapot", price: 90, qty: 1 },
  { name: "Notebook", price: 18, qty: 3 },
];
const total = cart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);
console.log(`Total: ${total}`);
// Task: trace sum and item in every call to the callback inside reduce, then run the file and compare.
