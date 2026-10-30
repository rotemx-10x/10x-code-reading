const total = 150;
const isMember = false;
const shipping = isMember ? 0 : total >= 100 ? 10 : 25;
console.log(`Shipping: ${shipping}`);
// Task: predict every line the program prints, then run it and compare.
