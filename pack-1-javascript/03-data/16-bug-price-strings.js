// Response body from GET /api/cart
const body = `[
  { "name": "Mug", "price": "35" },
  { "name": "Teapot", "price": "90" }
]`;
const cart = JSON.parse(body);

const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(`Total: ${total}`);
// Task: the total should be the sum of the two prices. Run the file and find the line with the bug.
