const prices = [30, 120, 5];
const stock = [4, 0, 10];
let total = 0;
for (let i = 0; i < prices.length; i++) {
  if (stock[i] === 0) {
    continue;
  }
  total += prices[i];
}
console.log(`Total: ${total}`);
// Task: trace one row per round of the loop on line 4 (i, the check on line 5, total), then run the file and compare.
