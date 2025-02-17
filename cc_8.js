// Task 1
const calculateSalary = (baseSalary, bonus, taxRate) => {
    return (baseSalary + bonus) - (baseSalary * taxRate);
};

// Example usage:
let netSalary = calculateSalary(50000, 5000, 0.2);
console.log(`Net Salary: $${netSalary.toFixed(2)}`);
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"
