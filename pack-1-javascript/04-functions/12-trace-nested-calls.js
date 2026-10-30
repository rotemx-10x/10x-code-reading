const formatPrice = (amount) => `${amount} ILS`;
const applyDiscount = (amount) => amount - amount / 10;
const lineTotal = (price, qty) => price * qty;
const label = formatPrice(applyDiscount(lineTotal(25, 4)));
console.log(label);
// Task: on line 4, find which function runs first and what each one returns, then predict the output and run.
