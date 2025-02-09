// Task 1
// Function to calculate total profit
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
    return profit;
}

// Test the function with provided data
calculateProfit(20, 30, 100); // Expected output: "Total Profit: $1000"
calculateProfit(50, 70, 200); // Expected output: "Total Profit: $4000"

// Task 2
// Function expression to calculate sales tax
const calculateSalesTax = function(amount, taxRate) {
    const salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax}`);
    return salesTax;
};

// Test the function with provided data
calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50"

// Task 3
// Arrow function to calculate bonus
const calculateBonus = (salary, performanceRating) => {
    let bonus = 0;
    
    if (performanceRating === "Excellent") {
        bonus = salary * 0.20;  // 20% of salary
    } else if (performanceRating === "Good") {
        bonus = salary * 0.10;  // 10% of salary
    } else if (performanceRating === "Average") {
        bonus = salary * 0.05;  // 5% of salary
    }
    
    console.log(`Bonus: $${bonus}`);
    return bonus;
};

// Test the function with provided data
calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");      // Expected output: "Bonus: $700"

// Task 4
// Function to calculate subscription cost
function calculateSubscriptionCost(plan, months, discount = 0) {
    let monthlyCost = 0;

    // Determine the monthly cost based on the plan
    if (plan === "Basic") {
        monthlyCost = 10;
    } else if (plan === "Premium") {
        monthlyCost = 20;
    } else if (plan === "Enterprise") {
        monthlyCost = 50;
    }

    // Calculate total cost before discount
    const totalCost = monthlyCost * months;

    // Apply discount
    const discountedCost = totalCost - (totalCost * (discount / 100));

    // Log the final total cost
    console.log(`Total Cost: $${discountedCost}`);
    return discountedCost;
}

// Test the function with provided data
calculateSubscriptionCost("Basic", 6, 10);   // Expected output: "Total Cost: $50"
calculateSubscriptionCost("Premium", 12, 0);  // Expected output: "Total Cost: $240"

// Task 5
// Function to convert currency
function convertCurrency(amount, exchangeRate) {
    const convertedAmount = amount * exchangeRate;
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`);
    return convertedAmount;
}

// Test the function with provided data
convertCurrency(100, 1.1);  // Expected output: "Converted Amount: $110.00"
convertCurrency(250, 0.85); // Expected output: "Converted Amount: $212.50"

// Task 6
// Declare an array of orders
let orders = [200, 600, 1200, 450, 800];

// Higher-order function to apply a bulk discount
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}

// Apply the discount: 10% for orders above $500
const updatedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);

console.log(updatedOrders); // Expected output: [200, 540, 1080, 450, 720]

// Task 7
// Function to create an expense tracker
function createExpenseTracker() {
    let totalExpenses = 0;

    // Inner function to add expenses and keep a running total
    return function(expense) {
        totalExpenses += expense;
        console.log(`Total Expenses: $${totalExpenses}`);
        return totalExpenses;
    };
}

// Test the function with provided data
let tracker = createExpenseTracker();
console.log(tracker(200)); // Expected output: "Total Expenses: $200"
console.log(tracker(150)); // Expected output: "Total Expenses: $350"
