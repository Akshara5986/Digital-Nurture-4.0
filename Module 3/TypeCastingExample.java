public class TypeCastingExample {
    public static void main(String[] args) {
        // Declare a double variable with a decimal value
        double myDouble = 9.78;
        // Cast double to int (fractional part lost)
        int myIntFromDouble = (int) myDouble;

        // Declare an int variable
        int myInt = 42;
        // Cast int to double (widening, no data loss)
        double myDoubleFromInt = (double) myInt;

        // Display results
        System.out.println("Original double value: " + myDouble);
        System.out.println("After casting double to int: " + myIntFromDouble);
        System.out.println("Original int value: " + myInt);
        System.out.println("After casting int to double: " + myDoubleFromInt);
    }
    
}
