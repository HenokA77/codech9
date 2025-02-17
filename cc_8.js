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

// Task 4 
const calculateRentalCost = (days, carType, insurance = false) => {
    let dailyRate = carType === "Economy" ? 40 :
                    carType === "Standard" ? 60 :
                    carType === "Luxury" ? 100 : 0;

    if (dailyRate === 0) {
        throw new Error("Invalid car type. Please choose 'Economy', 'Standard', or 'Luxury'.");
    }

    let totalCost = days * dailyRate;
    
    if (insurance) {
        totalCost += days * 20; // Adds $20 per day for insurance
    }

    return totalCost;
};

// Example usage:
console.log(`Total Rental Cost: $${calculateRentalCost(5, "Luxury", true)}`); // Output: $600
console.log(`Total Rental Cost: $${calculateRentalCost(3, "Economy")}`); // Output: $120
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"

// Task 5 
const calculateLoanPayment = (principal, rate, time) => {
    return principal + (principal * rate * time);
};

// Example usage:
let totalPayment = calculateLoanPayment(10000, 0.05, 5);
console.log(`Total Loan Payment: $${totalPayment.toFixed(2)}`);
calculateLoanPayment(1000, 0.05, 2); // Expected output: "Total Payment: $1100.00"
calculateLoanPayment(5000, 0.07, 3); // Expected output: "Total Payment: $6050.00"

// Task 6
// Declare an array of transactions with at least five values
const transactions = [500, 1200, 800, 3000, 450, 1500];

// Higher-order function to filter transactions above $1000
const filterLargeTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
};

// Filter function to check if a transaction is above $1000
const isAbove1000 = amount => amount > 1000;

// Example usage:
const largeTransactions = filterLargeTransactions(transactions, isAbove1000);
console.log(largeTransactions); // Output: [1200, 3000, 1500]
let transactions = [200, 1500, 3200, 800, 2500];
filterLargeTransactions(transactions, amount => amount > 1000);
// Expected output: [1500, 3200, 2500]

// Task 7
const createCartTracker = () => {
    let total = 0; // Running total

    return (price) => {
        total += price; // Add item price to total
        console.log(`Added item: $${price}, Total: $${total}`);
        return total; // Return updated total
    };
};

// Example usage:
const myCart = createCartTracker();

myCart(25); // Added item: $25, Total: $25
myCart(50); // Added item: $50, Total: $75
myCart(30); // Added item: $30, Total: $105
let cart = createCartTracker();
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"

// Task 8
const calculateSavings = (years, amount) => {
    // Base case: Stop when years reach 10
    if (years === 10) {
        return amount;
    }
    
    // Increase savings by 5% each year and recurse
    return calculateSavings(years + 1, amount * 1.05);
};

// Example usage:
let initialAmount = 1000; // Starting savings
let finalSavings = calculateSavings(0, initialAmount); // Start from year 0
console.log(`Projected savings after 10 years: $${finalSavings.toFixed(2)}`);
calculateSavings(8, 1000); // Expected output: "Projected Savings: $1102.50"
calculateSavings(5, 5000); // Expected output: "Projected Savings: $6381.41"

