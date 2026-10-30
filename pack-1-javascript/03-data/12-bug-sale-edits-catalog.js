const catalog = [
  { name: "Mug", price: 40 },
  { name: "Teapot", price: 90 },
];

// Returns a copy of the product at half price
function makeSale(product) {
  const sale = product;
  sale.price = sale.price / 2;
  return sale;
}

const mugSale = makeSale(catalog[0]);
console.log(`Sale price: ${mugSale.price}`);
console.log(`Catalog price: ${catalog[0].price}`);
// Task: makeSale should leave the catalog unchanged. Run the file and find the line that changes the catalog price.
