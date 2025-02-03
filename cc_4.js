// Task 1
let purchaseAmount = 150.75;
let discount = 0;
if (purchaseAmount > 100) {discount = 0.1; purchaseAmount = purchaseAmount - (purchaseAmount * discount);}
console.log("Total after discount: $" + purchaseAmount.toFixed(2));

