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
