// Order the lines below the marker and delete the two lines that do not belong.
// The program ships the orders in turn and stops at the first order the stock cannot cover.
// As given, the lines are out of order and node stops with an error.
// Expected output:
//   Shipped: 2, stock left: 2
const orders = [3, 2, 4, 1];
let stock = 7;
// ---- order the lines below ----
i++;
console.log(`Shipped: ${i}, stock left: ${stock}`);
while (i < orders.length || orders[i] <= stock) {
while (i < orders.length && orders[i] <= stock) {
let i = 0;
if (i < orders.length && orders[i] <= stock) {
}
stock -= orders[i];
