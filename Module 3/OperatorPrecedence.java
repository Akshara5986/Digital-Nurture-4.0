public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;  // Multiplication (*) happens before addition (+)
        int result2 = (10 + 5) * 2; // Parentheses change the order, addition first
        int result3 = 20 / 4 + 3 * 2; // Division and multiplication have same precedence, evaluated left to right

        System.out.println("Result of 10 + 5 * 2 = " + result1);
        System.out.println("Result of (10 + 5) * 2 = " + result2);
        System.out.println("Result of 20 / 4 + 3 * 2 = " + result3);

        // Explanation:
        // In the first expression: 5 * 2 = 10, then 10 + 10 = 20
        // In the second: (10 + 5) = 15, then 15 * 2 = 30
        // In the third: 20 / 4 = 5, 3 * 2 = 6, then 5 + 6 = 11
    }
    
}
