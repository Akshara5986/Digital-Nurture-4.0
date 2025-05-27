import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaExpressionExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();

        names.add("Sreeja");
        names.add("Anil");
        names.add("Zara");
        names.add("Mohan");
        names.add("Deepa");

        System.out.println("Before sorting: " + names);

        // Sort using lambda expression (ascending order)
        Collections.sort(names, (String a, String b) -> a.compareTo(b));

        System.out.println("After sorting: " + names);
    }
    
}
