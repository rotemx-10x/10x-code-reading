const prices = [40, 25, 60, 10];
let total = 0;
for (const price of prices) {
  if (total + price > 100) {
    break;
  }
  total += price;
}
console.log(`Total: ${total}`);
// Task: predict every line the program prints, then run it and compare.
