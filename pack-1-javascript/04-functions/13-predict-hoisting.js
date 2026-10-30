console.log(productLabel("Mug"));
console.log(priceLabel(25));

function productLabel(name) {
  return `Product: ${name}`;
}
const priceLabel = (price) => `Price: ${price} ILS`;
// Task: predict every line the program prints, then run it and compare.
