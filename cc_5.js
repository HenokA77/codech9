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

