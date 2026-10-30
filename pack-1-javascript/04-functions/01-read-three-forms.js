function totalA(price, qty) {
  return price * qty;
}
const totalB = function (price, qty) {
  return price * qty;
};
const totalC = (price, qty) => price * qty;
console.log(totalA(25, 2), totalB(25, 2), totalC(25, 2));
// Task: decide which of the three functions, if any, returns a different value, then run the file and compare.
