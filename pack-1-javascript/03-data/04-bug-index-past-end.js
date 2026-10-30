const items = [
  { name: "Mug", qty: 2 },
  { name: "Teapot", qty: 1 },
];

for (let i = 0; i <= items.length; i++) {
  const item = items[i];
  console.log(`${i + 1}. ${item.name} x ${item.qty}`);
}
// Task: run the file, read the error, and find the line that causes it.
