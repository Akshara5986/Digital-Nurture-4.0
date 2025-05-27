import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {
     public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        int targetNumber = random.nextInt(100) + 1; // Random number between 1 and 100
        int guess = 0;

        System.out.println("Guess the number between 1 and 100:");

        // Loop until user guesses correctly
        while (guess != targetNumber) {
            System.out.print("Enter your guess: ");
            guess = scanner.nextInt();

            if (guess > targetNumber) {
                System.out.println("Too high! Try again.");
            } else if (guess < targetNumber) {
                System.out.println("Too low! Try again.");
            } else {
                System.out.println("Congratulations! You guessed it right.");
            }
        }

        scanner.close();
    }
    
}
