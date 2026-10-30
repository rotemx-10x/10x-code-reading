const stockLevels = [5, 0, 3];
let i = 0;
let inStock = 0;
while (i < stockLevels.length) {
  if (stockLevels[i] === 0) {
    continue;
  }
  inStock++;
  i++;
}
console.log(`Products in stock: ${inStock}`);
// Task: this program never ends, on purpose. Run it, stop it with Ctrl+C, and find the line that keeps the loop from ending.
