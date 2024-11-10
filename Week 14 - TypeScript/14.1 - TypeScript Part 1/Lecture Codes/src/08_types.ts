// Create a type SumInput that can be either a string or a number.
type SumInput = string | number; // | is called union in TypeScript

// Create a function sum that takes two arguments of type SumInput and returns a SumInput.
function sum(a: SumInput, b: SumInput): SumInput {
    // If either of the arguments is a string, return the concatenation of the two arguments.
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }

    // If both of the arguments are numbers, return the sum of the two arguments
    return a + b;
}

// Call the sum function with two numbers and log the result.
console.log(sum(1, 2)); // 3


// Create a type Employee that has two properties: name of type string and startDate of type Date.
type Employee = {
    name: string;
    startDate: Date;
};


// Create a type Manager that has two properties: name of type string and department of type string.
type Manager = {
    name: string;
    department: string;
};

// Create a type TeamLead that is a combination of Employee and Manager.
type TeamLead = Employee & Manager; // & is called intersection in TypeScript

// Create a variable teamLead of type TeamLead and initialize it with an object that has the following properties:
const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software Developer",
};

// Log the teamLead variable.
console.log(teamLead);