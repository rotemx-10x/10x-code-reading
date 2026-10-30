const customer = { name: "Dana", address: null };
const guest = { name: "Guest" };
console.log(customer.address?.city);
console.log(guest.address?.city ?? "No city");
console.log(customer.name?.length);
console.log(customer.address.city);
console.log("Done");
// Task: predict every line the program prints, then run it and compare.
