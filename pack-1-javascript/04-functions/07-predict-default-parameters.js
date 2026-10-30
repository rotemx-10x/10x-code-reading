function finalPrice(price, discount = 10) {
  return price - discount;
}
console.log(finalPrice(100));
console.log(finalPrice(100, 0));
console.log(finalPrice(100, null));
console.log(finalPrice(100, undefined));
// Task: predict every line the program prints, then run it and compare.
