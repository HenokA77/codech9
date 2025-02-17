// Task 1
def calculateInvoice(subtotal, taxRate, discount):
    """
    Calculates the total invoice amount.
    
    :param subtotal: The initial amount before tax and discount.
    :param taxRate: The tax rate as a decimal (e.g., 0.07 for 7%).
    :param discount: The discount amount to be subtracted.
    :return: The final total after applying tax and discount.
    """
    total = (subtotal + (subtotal * taxRate)) - discount
    return total

# Example usage
invoice_total = calculateInvoice(100, 0.07, 5)
print(f"Final Invoice Amount: ${invoice_total:.2f}")
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"

// Task 2
const calculateHourlyWage = function(salary, hoursPerWeek) {
    return salary / (hoursPerWeek * 52);
};

// Example usage
let hourlyWage = calculateHourlyWage(50000, 40);
console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"

// Task 3
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    return amount - (amount * discountRate);
};

// Example usage
console.log(`Final Price: $${calculateLoyaltyDiscount(100, 4).toFixed(2)}`);
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"

// Task 4
const calculateShippingCost = (weight, location, expedited = false) => {
    let baseCost = 0;
    let costPerLb = 0;

    if (location === "USA") {
        baseCost = 5;
        costPerLb = 0.5;
    } else if (location === "Canada") {
        baseCost = 10;
        costPerLb = 0.7;
    } else {
        throw new Error("Shipping to this location is not supported.");
    }

    let totalCost = baseCost + (weight * costPerLb);

    if (expedited) {
        totalCost += 10; // Additional expedited fee
    }

    return totalCost;
};

// Example usage:
console.log(`Shipping Cost: $${calculateShippingCost(10, "USA", true).toFixed(2)}`); // Expedited shipping
console.log(`Shipping Cost: $${calculateShippingCost(10, "Canada").toFixed(2)}`);  // Regular shipping
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"

// Task 5
const calculateLoanInterest = (principal, rate, years) => {
    return principal * rate * years;
};

// Example usage
let interest = calculateLoanInterest(10000, 0.05, 5);
console.log(`Total Interest: $${interest.toFixed(2)}`);
calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"

// Task 6 
// Array of transactions with amounts
const transactions = [150, 2500, 450, 1200, 8000, 320];

// Higher-order function to filter transactions above $1000
const filterHighValueTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
};

// Filter function to check if a transaction is above $1000
const isAbove1000 = amount => amount > 1000;

// Example usage
const highValueTransactions = filterHighValueTransactions(transactions, isAbove1000);
console.log(highValueTransactions); // Output: [2500, 1200, 8000]
let transactions = [500, 1200, 3000, 800, 2200];
filterHighValueTransactions(transactions, amount => amount > 1000);
// Expected output: [1200, 3000, 2200]

// Task 7
const createBudgetTracker = () => {
    let balance = 0; // Initial balance

    // This returned function will allow adding expenses and updating balance
    return (expense) => {
        balance -= expense; // Subtract the expense from the balance
        console.log(`New Expense: $${expense}, Updated Balance: $${balance}`);
        return balance; // Return the updated balance
    };
};

// Example usage:
const myBudgetTracker = createBudgetTracker();

myBudgetTracker(50); // Adds an expense of $50
myBudgetTracker(100); // Adds an expense of $100
let budget = createBudgetTracker();
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"

// Task 8
const calculateGrowth = (years, revenue) => {
    // Base case: Stop recursion after 10 years
    if (years === 10) {
        return revenue;
    }
    
    // Recursion: Increase revenue by 5% for each year
    revenue *= 1.05;
    return calculateGrowth(years + 1, revenue); // Recur for the next year
};

// Example usage:
let initialRevenue = 1000; // Starting revenue
let finalRevenue = calculateGrowth(0, initialRevenue); // Start from year 0
console.log(`Projected revenue after 10 years: $${finalRevenue.toFixed(2)}`);
calculateGrowth(8, 1000); // Expected output: "Projected Revenue: $1102.50"
calculateGrowth(5, 5000); // Expected output: "Projected Revenue: $6381.41"
