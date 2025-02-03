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

// Task 3
let stock = 10;
while (stock > 0) { console.log('Stock remaining: ${stock}'): stock--;}
console.log("Stock has reached zero.");

// Task 4
let responses = 0;
do { console.log('Response #{responses + 1} collected.'); responses++} while (responses < 3); console.log("Collection of responses is complete.");

// Task 5
let employee = {name: "Alice", position: "Manager", salary: 75000};
for (let property in employee) {console.log('${property}: $ {employee[property]}');}

// Task 6
let products = ["laptop", "phone", "tablet"];
for (let product of products) {console.log(product);}
{console.log('Product: ${product}');}

// Task 7
let orders = [101. 102. 103;]
ordders.forEach(orderId => {console.log('Order ID: ${orderId}');});

// Task 8
function calculateTax(amount, taxRate) {return amount * (taxRate / 100);}
let amount = 100;
let taxRate = 8.5;
let tax = calculateTax(amount, taxRate); 
console.log('The calculated tax for $${amount} at a rate of ${taxRate}% is $${tax.toFixed(2))}');

// Task 9
const applyDiscount = function(price, discountPercentage) {return price - (price * (discountPercentage / 100));};
console.log('The price after a $ {discountedPercentage}% discount is $$ {discountedPrice.toFixed(2)}');