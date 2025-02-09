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
