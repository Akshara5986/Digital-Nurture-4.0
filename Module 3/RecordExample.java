import java.util.List;
import java.util.stream.Collectors;

record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        // Create a list of Person records
        List<Person> people = List.of(
            new Person("Sreeja", 21),
            new Person("Anil", 17),
            new Person("Zara", 25),
            new Person("Mohan", 16)
        );

        // Print all persons
        System.out.println("All People:");
        people.forEach(System.out::println);

        // Filter people older than 18
        List<Person> adults = people.stream()
                                    .filter(p -> p.age() >= 18)
                                    .collect(Collectors.toList());

        System.out.println("\nPeople aged 18 or older:");
        adults.forEach(System.out::println);
    }
    
}
