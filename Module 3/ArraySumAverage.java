import java.util.Scanner;

public class ArraySumAverage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the number of elements: ");
        int n = scanner.nextInt();
        
        int[] arr = new int[n];
        System.out.println("Enter " + n + " integers:");
        
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }
        
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        
        double average = (double) sum / n;
        
        System.out.println("Sum of elements: " + sum);
        System.out.println("Average of elements: " + average);
        
        scanner.close();
    }

    
}
