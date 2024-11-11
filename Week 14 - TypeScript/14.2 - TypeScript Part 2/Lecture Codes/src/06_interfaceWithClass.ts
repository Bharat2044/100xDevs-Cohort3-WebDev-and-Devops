// Create a People interface with properties name and age and a greet function that returns a string value
interface People {
    name: string;
    age: number;
    greet: () => string; // greet is a arrow function that returns a string value
    isLegal: () => boolean; // isLegal is a arrow function that returns a boolean value
}

// Define a Manager class that implements the People interface with the properties name and age
class Manager implements People {
    // Define the properties of the Manager class with the name, age, and phone properties
    // name: string; // mandatory because of the People interface
    // age: number; // mandatory because of the People interface
    phone: number; // optional because it is not part of the People interface

    // Define the constructor of the Manager class that takes in the name and age of the manager as parameters
    // constructor(name: string, age: number) {
    //     this.name = name; // Assign the name parameter to the name property
    //     this.age = age; // Assign the age parameter to the age property
    //     this.phone = 1234567890; // Assign a default value to the phone property
    // }

    // Define the constructor of the Manager class that takes in the name and age of the manager as parameters
    constructor(public name: string, public age: number) {
        this.phone = 1234567890; // Assign a default value to the phone property
    }

    // Define the greet function of the Manager class that returns a string value
    greet = () => {
        // Return a string value that greets the manager by name
        return "Hi " + this.name;
    };

    // Define the isLegal function of the Manager class that returns a boolean value
    isLegal() {
        // Return true if the age of the manager is greater than or equal to 18
        return this.age >= 18;
    }
}

// Create a new Manager object with the name "Bharat" and age 22
let manager = new Manager("Bharat", 22);

// Print the manager object to the console
console.log(manager); // Manager { name: 'Bharat', age: 22, greet: [Function (anonymous)], phone: 1234567890 }

// Access the properties of the manager object and print them to the console
console.log(manager.age); // 22

// Call the greet function of the manager object and store the result in a variable called managerGreeting
let managerGreeting = manager.greet();

// Print the result to the console
console.log(managerGreeting); // Hi Bharat

// Call the isLegal function of the manager object and print the result to the console
console.log(manager.isLegal()); // true
