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

 // Task 2
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

    public boolean updateStock(int quantity) {
        if (quantity > 0 && quantity <= stock) {
            stock -= quantity;
            return true;
        } else {
            return false; // Stock is insufficient or quantity is invalid
        }
    }

    public double getPrice() {
        return price;
    }

    public String getName() {
        return name;
    }

    public int getStock() {
        return stock;
    }
}

// Order class
class Order {
    private int orderId;
    private Product product;
    private int quantity;

    public Order(int orderId, Product product, int quantity) {
        this.orderId = orderId;
        if (product.updateStock(quantity)) { // Ensure stock is reduced only if available
            this.product = product;
            this.quantity = quantity;
            System.out.println("Order placed successfully!");
        } else {
            this.product = null;
            this.quantity = 0;
            System.out.println("Order failed: Insufficient stock for " + product.getName());
        }
    }

    public String getOrderDetails() {
        if (product != null) {
            return "Order ID: " + orderId + ", Product: " + product.getName() + ", Quantity: " + quantity + 
                   ", Total Price: $" + String.format("%.2f", quantity * product.getPrice());
        } else {
            return "Order ID: " + orderId + " was not placed due to insufficient stock.";
        }
    }
}

// Main class to test
public class Main {
    public static void main(String[] args) {
        Product laptop = new Product("Laptop", 101, 999.99, 10);
        System.out.println(laptop.getDetails());

        // Creating an order with a valid quantity
        Order order1 = new Order(1, laptop, 3);
        System.out.println(order1.getOrderDetails());
        System.out.println(laptop.getDetails()); // Stock should be reduced

        // Creating an order with an invalid quantity (exceeds stock)
        Order order2 = new Order(2, laptop, 15);
        System.out.println(order2.getOrderDetails());
        System.out.println(laptop.getDetails()); // Stock should remain the same
    }
}
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());
 // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails());
 // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

 // Task 3
import java.util.ArrayList;
import java.util.List;

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

    public int getId() {
        return id;
    }
}

// Inventory class
class Inventory {
    private List<Product> products;

    public Inventory() {
        this.products = new ArrayList<>();
    }

    public void addProduct(Product product) {
        products.add(product);
        System.out.println("Product added: " + product.getDetails());
    }

    public void listProducts() {
        if (products.isEmpty()) {
            System.out.println("No products in inventory.");
        } else {
            System.out.println("Inventory Products:");
            for (Product product : products) {
                System.out.println(product.getDetails());
            }
        }
    }
}

// Main class to test
public class Main {
    public static void main(String[] args) {
        Inventory inventory = new Inventory();

        Product laptop = new Product("Laptop", 101, 999.99, 10);
        Product phone = new Product("Smartphone", 102, 699.99, 15);

        inventory.addProduct(laptop);
        inventory.addProduct(phone);

        inventory.listProducts();
    }
}
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"
