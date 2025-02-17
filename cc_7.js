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
