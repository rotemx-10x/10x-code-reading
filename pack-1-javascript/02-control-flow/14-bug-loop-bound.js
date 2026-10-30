const cart = [
  { name: "Mug", price: 30 },
  { name: "Lamp", price: 120 },
  { name: "Pen", price: 5 },
];
let total = 0;
for (let i = 0; i <= cart.length; i++) {
  total += cart[i].price;
}
console.log(`Total: ${total}`);
// Task: run the file, read the error, and find the line that causes it.
