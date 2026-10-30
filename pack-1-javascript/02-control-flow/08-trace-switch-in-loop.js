const statuses = ["paid", "shipped", "refunded"];
for (const status of statuses) {
  switch (status) {
    case "paid":
      console.log("Prepare package");
      break;
    case "shipped":
      console.log("Track delivery");
      break;
    default:
      console.log("Check manually");
  }
}
console.log("All orders checked");
// Task: trace the loop and the switch round by round and write the printed lines in order, then run the file and compare.
