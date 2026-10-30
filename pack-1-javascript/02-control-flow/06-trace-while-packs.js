let stock = 10;
let packs = 0;
while (stock >= 3) {
  stock -= 3;
  packs++;
}
console.log(`Packs: ${packs}, left: ${stock}`);
// Task: trace stock and packs at every check of the condition on line 3, then run the file and compare.
