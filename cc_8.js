// Task 1
const calculateSalary = (baseSalary, bonus, taxRate) => {
    return (baseSalary + bonus) - (baseSalary * taxRate);
};

// Example usage:
let netSalary = calculateSalary(50000, 5000, 0.2);
console.log(`Net Salary: $${netSalary.toFixed(2)}`);
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"

// Task 2
const calculateDiscount = function(price, discountRate) {
    return price - (price * discountRate);
};

// Example usage:
let finalPrice = calculateDiscount(100, 0.2);
console.log(`Final Price: $${finalPrice.toFixed(2)}`);
calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"

// Task 3
const calculateServiceFee = (amount, serviceType) => {
    let feeRate = serviceType === "Premium" ? 0.15 :
                  serviceType === "Standard" ? 0.10 :
                  serviceType === "Basic" ? 0.05 : 0;

    return amount * feeRate;
};

// Example usage:
console.log(`Service Fee: $${calculateServiceFee(200, "Premium").toFixed(2)}`); // $30.00
console.log(`Service Fee: $${calculateServiceFee(200, "Standard").toFixed(2)}`); // $20.00
console.log(`Service Fee: $${calculateServiceFee(200, "Basic").toFixed(2)}`); // $10.00
calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"
