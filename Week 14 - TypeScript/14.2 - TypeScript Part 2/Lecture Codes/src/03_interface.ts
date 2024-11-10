// Create a People interface with properties name and age and a greet function that returns a string value
interface People {
    name: string,
    age: number,
    // greet(): string, // greet is a normal function that returns a string value
    greet: () => string, // greet is a arrow function that returns a string value
}

// Define a person object with the properties of the People interface
let person: People = {
    name: "Bharat",
    age: 22,
    greet: () => { // greet is a arrow function that returns a string value
        // Return a string value that greets the person by name
        return "Hi " + person.name;
    }
}

// Call the greet function of the person object and store the result in a variable called greeting variable
let greeting = person.greet();

// Print the result to the console
console.log(greeting); // Hi Bharat