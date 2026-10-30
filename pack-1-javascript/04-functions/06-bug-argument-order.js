function applyDiscount(price, percent) {
  return price - (price * percent) / 100;
}
const price = 200;
const percent = 10;
console.log(applyDiscount(percent, price));
// Task: the program should print the price after a 10% discount, 180. Run the file and find the line with the bug.
