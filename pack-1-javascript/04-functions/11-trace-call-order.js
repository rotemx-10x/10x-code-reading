function lineTotal(price, qty) {
  console.log(`lineTotal ${price} x ${qty}`);
  return price * qty;
}
function orderTotal(shipping) {
  console.log("orderTotal start");
  const sum = lineTotal(25, 2) + lineTotal(5, 4);
  console.log("orderTotal end");
  return sum + shipping;
}
console.log(orderTotal(15));
// Task: write the order in which the functions are called and the lines they print, then run the file and compare.
