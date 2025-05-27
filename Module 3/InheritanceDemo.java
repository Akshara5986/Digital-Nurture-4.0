public class InheritanceDemo {
    public static void main(String[] args) {
        Animal genericAnimal = new Animal();
        Dog dog = new Dog();

        genericAnimal.makeSound();  // Output: Animal makes a sound
        dog.makeSound();            // Output: Bark
    }
    
}
