import java.util.Scanner;

public class RecursiveFibonacci {
    public static int fibonacci(int n) {
        if (n == 0) return 0;       // base case
        if (n == 1) return 1;       // base case
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter a positive integer (n): ");
        int n = scanner.nextInt();
        
        if (n < 0) {
            System.out.println("Please enter a positive integer.");
        } else {
            int result = fibonacci(n);
            System.out.println("Fibonacci number at position " + n + " is: " + result);
        }
        
        scanner.close();
    }
    
}
