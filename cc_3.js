let prices = [10, 25, 7, 15, 42];
prices.push(30);
prices.shift();

// Task 2
let orders = [5,12,8,20,15];
orders[2] += 5;
let totalOrders = orders.reduce((sum, order) => sum + order, 0);
console.log(totalOrders);

// Task 3
let employee = {name: "John Doe", role: "software Engineer", performanceScore: 85, isActive: true};
employee.performanceScore = 90;
employee.promotionEligible = true;
console.log(employee);

// Task 4
let feedback = [{customerName: "Alice", feedbackText: "Great product, very satisfied!", rating: 5},{customerName: "Bob", feedbackText: "Decent quality, but could be improved.", rating: 3}, {customerName: "Charlie", feedbackText: "Excellent service, will buy again.", rating: 4}];
feedback.push({customerName: "David", feedbackText: "Not satisfied with the product, it broke quickly.", rating: 2});
console.log(feedback);

// Task 5
let inventory  = {itemName: "Laptop", stockCount: 25, price: 799.99};
let inventory  = {itemName: "Laptop", stockCount: 25, price: 799.99, calculateTotalValue: function() {return this.stockCount * this.price;}};
console.log(inventory);
console.log("Total value of inventory:", inventory.calculateTotalValue()):

