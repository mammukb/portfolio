import Link from "next/link";

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-dark py-24 px-6 md:px-12 text-gray-300 font-inter">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blogs"
          className="inline-flex items-center text-gray-400 hover:text-gold transition-colors font-inter text-sm font-medium mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
          Back to Blogs
        </Link>
        
        <article>
          <h1 className="text-4xl md:text-5xl text-white mb-6 font-syne font-bold leading-tight">The Ultimate Java Masterclass: From Zero to Hero Cheat Sheet</h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-12 pb-12 border-b border-white/10">
            <span>Aug 09, 2026</span>
            <span>•</span>
            <span className="px-3 py-1 bg-gold/10 text-gold rounded-full border border-gold/20">Java</span>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Whether you are preparing for an interview, cramming for an exam, or just need a quick refresher, this is your complete roadmap to Java.
            </p>

            <p>
              This guide is designed to be sequential. We will start with the absolute basics and build our way up to complex Object-Oriented principles and Data Structures. Bookmark this page—it's the only Java cheat sheet you'll ever need.
            </p>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">1. The Basics: Syntax, Variables, and Data Types</h2>
            <p>Every Java program must have a class and a main method. This is where execution begins.</p>
            
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); // Prints to the console
    }
}`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">Primitive Data Types</h3>
            <p>Java is statically typed, meaning you must declare the type of a variable before using it.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`// Integers
byte myByte = 100;         // 8-bit
short myShort = 5000;      // 16-bit
int myInt = 100000;        // 32-bit (Default choice for numbers)
long myLong = 100000L;     // 64-bit (Note the 'L')

// Decimals
float myFloat = 5.99f;     // 32-bit (Note the 'f')
double myDouble = 19.99d;  // 64-bit (Default choice for decimals)

// Characters and Booleans
char myLetter = 'D';       // Single quotes for chars
boolean myBool = true;     // true or false`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">Reference Data Types (Objects)</h3>
            <p>The most common reference type is a String.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`String greeting = "Hello"; // Double quotes for Strings`}</code>
            </pre>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">2. Control Flow: If/Else and Switch</h2>
            <p>Control flow dictates how your program makes decisions.</p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">If / Else If / Else</h3>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`int time = 22;
if (time < 10) {
    System.out.println("Good morning.");
} else if (time < 20) {
    System.out.println("Good day.");
} else {
    System.out.println("Good evening.");
}`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">Switch Statement (Java 12+ Enhanced Syntax)</h3>
            <p>Great for checking a single variable against many specific values.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`int day = 4;
switch (day) {
    case 1 -> System.out.println("Monday");
    case 2 -> System.out.println("Tuesday");
    case 3 -> System.out.println("Wednesday");
    default -> System.out.println("Other day");
}`}</code>
            </pre>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">3. Loops: Iteration</h2>
            <p>Loops allow you to run the same block of code multiple times.</p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">For Loop</h3>
            <p>Use when you know exactly how many times you want to loop.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`// Initializes i to 0; runs while i < 5; increments i by 1
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">While Loop</h3>
            <p>Use when you want to loop as long as a condition is true.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`int i = 0;
while (i < 5) {
    System.out.println(i);
    i++; // Crucial: prevents an infinite loop!
}`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">Enhanced For Loop (For-Each)</h3>
            <p>Used specifically to iterate through arrays or Collections.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`String[] cars = {"Volvo", "BMW", "Ford"};
for (String car : cars) {
    System.out.println(car);
}`}</code>
            </pre>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">4. Methods (Functions) and Return Types</h2>
            <p>Methods are blocks of code that only run when called. They help keep code DRY (Don't Repeat Yourself).</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-4 text-sm font-mono text-gray-300">
              <code>{`public class Main {
    // 1. A method that returns nothing (void)
    static void sayHello(String name) {
        System.out.println("Hello, " + name);
    }

    // 2. A method that returns an integer (int)
    static int addNumbers(int x, int y) {
        return x + y;
    }

    public static void main(String[] args) {
        sayHello("Alice"); // Output: Hello, Alice
        
        int sum = addNumbers(5, 10);
        System.out.println(sum); // Output: 15
    }
}`}</code>
            </pre>
            <p className="text-sm italic text-gray-500 mb-8">Note: <code className="bg-white/10 px-1 py-0.5 rounded">static</code> means the method belongs to the Main class itself, not an instance (object) of the class.</p>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">5. Object-Oriented Programming (OOP)</h2>
            <p>Java is an OOP language. Instead of just writing functions, we model real-world concepts using Classes and Objects.</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong className="text-white">Class:</strong> A blueprint or template.</li>
              <li><strong className="text-white">Object:</strong> A specific instance created from that blueprint.</li>
            </ul>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">Creating a Class and Object</h3>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`class Car {
    // Attributes (Variables)
    String brand;
    int year;

    // Constructor: Special method called when creating an object
    public Car(String brand, int year) {
        this.brand = brand; // 'this' refers to the current object
        this.year = year;
    }

    // Behavior (Methods)
    public void startEngine() {
        System.out.println(this.brand + " is starting...");
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating an Object using the 'new' keyword
        Car myCar = new Car("Toyota", 2022);
        myCar.startEngine(); // Output: Toyota is starting...
    }
}`}</code>
            </pre>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">6. The 4 Pillars of OOP</h2>
            <p>Understanding these four concepts is critical for Java interviews.</p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">1. Encapsulation (Data Hiding)</h3>
            <p>Hiding the internal state of an object and requiring all interaction to be performed through an object's methods (Getters and Setters).</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`class Person {
    private String name; // private: restricted access

    // Getter
    public String getName() {
        return name;
    }

    // Setter
    public void setName(String newName) {
        this.name = newName;
    }
}`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">2. Inheritance</h3>
            <p>Creating new classes built upon existing classes. The child class inherits attributes and methods from the parent.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`class Animal { // Superclass
    public void eat() {
        System.out.println("This animal eats.");
    }
}

// Dog inherits from Animal using the 'extends' keyword
class Dog extends Animal { // Subclass
    public void bark() {
        System.out.println("Woof!");
    }
}`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">3. Polymorphism ("Many Forms")</h3>
            <p>The ability of different objects to respond to the same method call in their own way. Often achieved through Method Overriding.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`class Animal {
    public void animalSound() {
        System.out.println("The animal makes a sound");
    }
}

class Pig extends Animal {
    @Override // Overrides the parent method
    public void animalSound() {
        System.out.println("The pig says: wee wee");
    }
}`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">4. Abstraction</h3>
            <p>Hiding complex implementation details and showing only the essential features of the object. Achieved using Abstract Classes or Interfaces.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`// Interface: A fully abstract class.
interface Animal {
  public void animalSound(); // interface method (does not have a body)
  public void sleep(); // interface method (does not have a body)
}

// Pig "implements" the Animal interface
class Pig implements Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
  public void sleep() {
    System.out.println("Zzz");
  }
}`}</code>
            </pre>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">7. Arrays and The Java Collections Framework</h2>
            <p>While standard arrays are great, they have a fixed size. The Collections framework provides dynamic data structures.</p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">Standard Array (Fixed Size)</h3>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`int[] myNum = {10, 20, 30, 40};
myNum[0] = 15; // Modifying an element
System.out.println(myNum.length); // Size is fixed at 4`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">ArrayList (Dynamic Array)</h3>
            <p>The most commonly used List. It grows dynamically as you add elements. Excellent for accessing elements randomly.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`import java.util.ArrayList;

ArrayList<String> cars = new ArrayList<String>();
cars.add("Volvo");
cars.add("BMW");
cars.set(0, "Opel"); // Change an item
cars.remove("BMW");  // Remove an item
System.out.println(cars.get(0)); // Access an item: Opel`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">LinkedList</h3>
            <p>Similar to ArrayList, but stores data in separate "nodes" linked together. Excellent for adding/removing items at the beginning or middle, but slower for random access.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`import java.util.LinkedList;

LinkedList<String> cars = new LinkedList<String>();
cars.add("Volvo");
cars.addFirst("BMW"); // Unique to LinkedList
cars.removeLast();    // Unique to LinkedList`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">HashSet</h3>
            <p>A collection that contains no duplicate elements. Order is not guaranteed. Under the hood, it uses a HashMap.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`import java.util.HashSet;

HashSet<Integer> numbers = new HashSet<Integer>();
numbers.add(4);
numbers.add(7);
numbers.add(4); // Ignored - no duplicates allowed!

System.out.println(numbers.contains(7)); // Fast lookup: true`}</code>
            </pre>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">HashMap</h3>
            <p>Stores items in "Key/Value" pairs. Like a dictionary. Keys must be unique.</p>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-8 text-sm font-mono text-gray-300">
              <code>{`import java.util.HashMap;

HashMap<String, String> capitalCities = new HashMap<String, String>();

// Add keys and values (Country, City)
capitalCities.put("England", "London");
capitalCities.put("Germany", "Berlin");

// Access a value using its key
System.out.println(capitalCities.get("England")); // Output: London`}</code>
            </pre>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">Final Thoughts</h2>
            <p>
              Java is vast, but this guide covers the core foundation that every Java developer must know. If you can confidently explain the 4 pillars of OOP and know when to use an ArrayList vs. a HashSet, you are well on your way to mastering Java!
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
