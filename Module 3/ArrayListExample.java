import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {
     public static void main(String[] args) {
        ArrayList<String> studentNames = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        String choice;

        do {
            System.out.print("Enter student name to add: ");
            String name = scanner.nextLine();
            studentNames.add(name);

            System.out.print("Do you want to add another name? (yes/no): ");
            choice = scanner.nextLine().trim().toLowerCase();
        } while (choice.equals("yes"));

        System.out.println("\nList of student names:");
        for (String student : studentNames) {
            System.out.println(student);
        }

        scanner.close();
    }
    
}
