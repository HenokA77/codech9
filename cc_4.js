// Task 1
let purchaseAmount = 150.75;
let discount = 0;
if (purchaseAmount > 100) {discount = 0.1; purchaseAmount = purchaseAmount - (purchaseAmount * discount);}
console.log("Total after discount: $" + purchaseAmount.toFixed(2));

// Task 2 
let sales = [1200, 900, 1500, 800, 1000];
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {totalSales +- sales[i];}
console.log("Total sales: $" + totalSales.toFixed(2));

