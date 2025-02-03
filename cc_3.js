let prices = [10, 25, 7, 15, 42];
prices.push(30);
prices.shift();

// Task 2
let orders = [5,12,8,20,15];
orders[2] += 5;
let totalOrders = orders.reduce((sum, order) => sum + order, 0);
console.log(totalOrders);
