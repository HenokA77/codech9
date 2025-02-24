// Task 1
// Product class
class Product {
    private String name;
    private int id;
    private double price;
    private int stock;

    public Product(String name, int id, double price, int stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    public String getDetails() {
        return "Product ID: " + id + ", Name: " + name + ", Price: $" + String.format("%.2f", price) + ", Stock: " + stock;
    }

    public void updateStock(int quantity) {
        if (quantity > 0 && quantity <= stock) {
            stock -= quantity;
            System.out.println(quantity + " units sold. New stock level: " + stock);
        } else if (quantity > stock) {
            System.out.println("Insufficient stock! Only " + stock + " units available.");
        } else {
            System.out.println("Invalid quantity!");
        }
    }
}

// Main class to test
public class Main {
    public static void main(String[] args) {
        Product product = new Product("Laptop", 101, 999.99, 50);

        System.out.println(product.getDetails()); // Display product details

        product.updateStock(5); // Reduce stock by 5
        System.out.println(product.getDetails()); // Updated stock details

        product.updateStock(50); // Try to purchase more than available stock
    }
}
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());
 // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails());
 // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"
