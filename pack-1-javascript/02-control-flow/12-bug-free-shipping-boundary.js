// Rule: orders of 100 or more ship for free
const FREE_FROM = 100;
const totals = [99, 100, 101];
for (const total of totals) {
  const fee = total > FREE_FROM ? 0 : 20;
  console.log(`${total}: fee ${fee}`);
}
// Task: run the file, compare the output with the rule on line 1, and find the line with the bug.
