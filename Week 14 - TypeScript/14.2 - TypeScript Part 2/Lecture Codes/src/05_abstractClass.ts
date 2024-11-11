// Create an abstract class User with a name property, abstract greet function and a hello function
abstract class User {
    // Define a name property of type string
    name: string;

    // Define a constructor that takes in a name parameter and assigns it to the name property
    constructor(name: string) {
        this.name = name;
    }

    // Define an abstract greet function that returns a string value
    abstract greet(): string;

    // Define a hello function that prints "Hello Everyone" to the console
    hello(): void {
        console.log("Hello Everyone");        
    }
}

// Create a class Employee that extends the User class
class Employee extends User {
    // Define a name property of type string
    name: string;

    // Define an age property of type number
    age: number;

    // Define a constructor that takes in a name and age parameter 
    constructor(name: string, age: number) {
        // Call the super method and pass in the name parameter
        super(name);

        // Assign the name parameter to the name property
        this.name = name;

        // Assign the age parameter to the age property
        this.age = age;
    }

    greet(): string {
        return "Hi " + this.name;
    }
}

// Create an instance of the Employee class
let emp = new Employee("Bharat", 22);

// Call the greet method on the emp instance
console.log(emp.greet()); // Output: Hi Bharat

// Call the hello method on the emp instance
emp.hello(); // Output: Hello Everyone