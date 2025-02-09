// Task 1
// Declare the customer object
const customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};

// Log each property using template literals
console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);

// Task 2
// Declare the order object
const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",

    // Method to display order details
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};

// Call the method to log the details
order.displayOrder();

// Task 3
// Declare the cartItems array with three product names
let cartItems = ["Laptop", "Headphones", "Mouse"];

// Add a new product to the cart
cartItems.push("Keyboard");

// Remove the last item
cartItems.pop();

// Add an item at the beginning
cartItems.unshift("Smartphone");

// Remove the first item
cartItems.shift();

// Log the final array to the console
console.log(cartItems);

// Task 4 
// Declare the prices array
const prices = [100, 200, 300];

// Apply a 10% discount using .map()
const discountedPrices = prices.map(price => price * 0.9);

// Log the new discounted prices to the console
console.log(discountedPrices);

// Task 5
// Declare the inventory array with product quantities
const inventory = [5, 0, 12, 8, 0];

// Use .filter() to remove products with zero stock
const availableInventory = inventory.filter(quantity => quantity > 0);

// Log the filtered array to the console
console.log(availableInventory);

// Task 6 
// Declare the sales array
const sales = [500, 300, 200, 400];

// Calculate total revenue using .reduce()
const totalRevenue = sales.reduce((accumulator, currentSale) => accumulator + currentSale, 0);

// Log the total revenue to the console
console.log(totalRevenue);

// Task 7
// Declare the customers array
const customers = ["Alice", "Bob", "Charlie", "David"];

// Use .find() to locate the customer "Charlie"
const foundCustomer = customers.find(customer => customer === "Charlie");

// Log the result to the console
console.log(foundCustomer);

// Task 8
// Function to calculate tax
function calculateTax(amount, taxRate) {
    const tax = amount * (taxRate / 100);
    console.log(`The calculated tax is: $${tax}`);
    return tax;
}

// Example usage
calculateTax(100, 8); // For an amount of 100 and a tax rate of 8%

// Task 9
// Function expression to apply discount
const applyDiscount = function(price, discount) {
    const discountedPrice = price - (price * (discount / 100));
    console.log(`The discounted price is: $${discountedPrice}`);
    return discountedPrice;
};

// Example usage
applyDiscount(200, 10); // For a price of 200 and a discount of 10%

// Task 10
// Arrow function to calculate points
const calculatePoints = purchaseAmount => {
    const points = Math.floor(purchaseAmount / 10); // 1 point per $10 spent
    console.log(`You have earned ${points} points.`);
    return points;
};

// Example usage
calculatePoints(85); // For a purchase amount of 85
