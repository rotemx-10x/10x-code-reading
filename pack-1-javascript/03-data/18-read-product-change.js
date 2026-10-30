// The same product, before and after the agent's change
const before = JSON.parse(`{
  "sku": "LAMP-02",
  "name": "Desk Lamp",
  "price": "120.00",
  "stock": 0,
  "category": "Office"
}`);
const after = JSON.parse(`{
  "sku": "LAMP-02",
  "name": "Desk Lamp",
  "price": 120,
  "inventory": { "stock": 0, "warehouse": "TLV" },
  "categories": ["Office", "Lighting"]
}`);

console.log(typeof before.price, typeof after.price);
console.log(before.stock, after.stock, after.inventory.stock);
console.log(before.category, after.category, after.categories.length);
// Task: describe each change between the two versions (property, type before and after, path), then run the file.
