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
