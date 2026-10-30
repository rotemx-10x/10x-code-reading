const order = {
  customer: { name: "Dana", city: "Haifa" },
  items: [
    { product: { name: "Mug", price: 35 }, qty: 2 },
    { product: { name: "Teapot", price: 90 }, qty: 1 },
  ],
};
console.log(order.customer.city);
console.log(order.items[1].product.name);
console.log(order.items.length);
// Task: predict every line the program prints, then run it and compare.
