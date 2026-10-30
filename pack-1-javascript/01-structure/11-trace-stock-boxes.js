let stock = 20;
let sold = 2;
sold += 3;
stock -= sold;
sold++;
stock--;
const looseItems = stock % 4;
const fullBoxes = (stock - looseItems) / 4;
console.log(stock, sold, looseItems, fullBoxes);
// Task: fill in the table in trace-table.md, one row per line that runs, then run the file and compare.
