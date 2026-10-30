// Response body from GET /api/orders/A-1042
const response = `{
  "orderId": "A-1042",
  "status": "paid",
  "customer": { "id": 77, "name": "Dana Levi", "phone": null },
  "shipping": {
    "method": "courier",
    "fee": 25,
    "address": { "city": "Haifa", "street": "Herzl 12" }
  },
  "items": [
    { "product": { "name": "Mug", "price": 35 }, "qty": 2 },
    { "product": { "name": "Teapot", "price": 90 }, "qty": 1 },
    { "product": { "name": "Notebook", "price": 18 }, "qty": 3 }
  ],
  "coupon": null,
  "subtotal": 214,
  "total": 239
}`;
const order = JSON.parse(response);

console.log(order.items.length);
console.log(order.shipping.address.city);
console.log(order.items[1].product.price);
console.log(order.customer.phone, order.customer.email);
// Task: follow each path in the response and predict the four printed lines, then run the file and compare.
