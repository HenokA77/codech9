// Task 1
// Employee.java
class Employee {
    // Properties
    private String name;
    private int id;
    private String department;
    private double salary;

    // Constructor
    public Employee(String name, int id, String department, double salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    // Method to get employee details
    public String getDetails() {
        return "Employee Details:\n" +
               "Name: " + name + "\n" +
               "ID: " + id + "\n" +
               "Department: " + department + "\n" +
               "Monthly Salary: $" + salary;
    }

    // Method to calculate annual salary
    public double calculateAnnualSalary() {
        return salary * 12;
    }

    // Main method to test the class
    public static void main(String[] args) {
        // Creating an Employee object
        Employee emp = new Employee("John Doe", 101, "Engineering", 5000.00);

        // Logging details to the console
        System.out.println(emp.getDetails());
        System.out.println("Annual Salary: $" + emp.calculateAnnualSalary());
    }
}
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails());
 // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary());
 // Expected output: 60000

 // Task 2
// Employee class
class Employee {
    protected String name;
    protected double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public String getDetails() {
        return "Name: " + name + ", Salary: $" + String.format("%.2f", salary);
    }
}

// Manager class inheriting from Employee
class Manager extends Employee {
    private int teamSize;

    public Manager(String name, double salary, int teamSize) {
        super(name, salary);
        this.teamSize = teamSize;
    }

    @Override
    public String getDetails() {
        return super.getDetails() + ", Team Size: " + teamSize;
    }

    public double calculateBonus() {
        return salary * 0.10;
    }
}

// Main class to test
public class Main {
    public static void main(String[] args) {
        Manager manager = new Manager("John Doe", 80000, 5);
        System.out.println(manager.getDetails());  // Output: Name: John Doe, Salary: $80000.00, Team Size: 5
        System.out.println("Bonus: $" + String.format("%.2f", manager.calculateBonus()));  // Output: Bonus: $8000.00
    }
}
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus());
 // Expected output: 9600
