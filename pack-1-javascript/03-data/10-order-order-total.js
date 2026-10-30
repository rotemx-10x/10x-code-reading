// Order the lines below the marker and delete the two lines that do not belong.
// As given, the lines are out of order and node stops with an error.
// Expected output:
//   Order 1042: 160
const order = {
  id: 1042,
  items: [
    { product: { name: "Mug", price: 35 }, qty: 2 },
    { product: { name: "Teapot", price: 90 }, qty: 1 },
  ],
};
// ---- order the lines below ----
order.total = total;
const amounts = order.items.map((item) => item.product.price * item.qty);
const amounts = order.items.map((item) => item.price * item.qty);
console.log(`Order ${order.id}: ${order.total}`);
const total = amounts.reduce((sum, amount) => sum + amount, 0);
order.total === total;
