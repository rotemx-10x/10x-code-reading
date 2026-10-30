// Order the lines below the marker and delete the two lines that do not belong.
// As given, the lines are out of order and node stops with an error.
// Expected output:
//   {"name":"Mug","stock":3}
// ---- order the lines below ----
const updated = JSON.stringify(product);
const body = `{'name':'Mug','stock':4}`;
const product = JSON.parse(body);
console.log(updated);
const body = `{"name":"Mug","stock":4}`;
const product = JSON.stringify(body);
product.stock = product.stock - 1;
