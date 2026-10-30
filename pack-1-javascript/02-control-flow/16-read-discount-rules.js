const orders = [
  { id: 1, total: 450, isMember: true, coupon: "" },
  { id: 2, total: 120, isMember: false, coupon: "SAVE10" },
  { id: 3, total: 600, isMember: false, coupon: "" },
  { id: 4, total: 700, isMember: true, coupon: "SAVE10" },
];
for (const order of orders) {
  let discount = 0;
  if (order.coupon) {
    discount = 10;
  } else if (order.isMember && order.total >= 500) {
    discount = 15;
  } else if (order.total >= 500) {
    discount = 5;
  }
  console.log(`Order ${order.id}: ${discount}%`);
}
// Task: predict the discount each order gets and name the condition that decides order 4, then run the file and compare.
