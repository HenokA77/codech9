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
