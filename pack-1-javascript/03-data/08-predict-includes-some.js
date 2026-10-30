const names = ["Mug", "Teapot"];
const cart = [{ name: "Mug" }, { name: "Teapot" }];

console.log(names.includes("Mug"));
console.log(names.includes("mug"));
console.log(cart.includes({ name: "Mug" }));
console.log(cart.some((p) => p.name === "Mug"));
// Task: predict every line the program prints, then run it and compare.
