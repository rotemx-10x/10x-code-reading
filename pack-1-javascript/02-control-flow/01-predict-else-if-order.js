const total = 250;
let shipping;
if (total >= 100) {
  shipping = 15;
} else if (total >= 200) {
  shipping = 0;
} else {
  shipping = 30;
}
console.log(`Shipping: ${shipping}`);
// Task: predict every line the program prints, then run it and compare.
