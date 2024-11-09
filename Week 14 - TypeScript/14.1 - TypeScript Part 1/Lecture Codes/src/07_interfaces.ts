// Create an interface UserType that has the following properties: firstName, lastName, and age.
interface UserType {
    firstName: string,
    lastName: string,
    age: number,
};

// Create a function greet that takes a user of type UserType and logs a greeting message.
function greet(user: UserType) {
    // Log a message that greets the user by their full name and age.
    console.log(`Hello ${user.firstName} ${user.lastName}, you are ${user.age} years old.`);
}

// Create a user object of type UserType. 
let user: UserType = {
    firstName: "Bharat",
    lastName: "Kumar",
    age: 21,
};

// Call the greet function with the user object.
greet(user);


// Create an interface Manager that has the following properties: name and age.
interface Manager {
    name: string,
    age: number,
}

// Create an interface Employee that has the following properties: name and department.
interface Employee {
    name: string,
    department: string
}

// Create a type TeamLead that is an intersection of Manager and Employee.
type TeamLead = Manager & Employee; // & is called intersection in TypeScript

// Create a TeamLead object. 
let t: TeamLead = {
    name: "Bharat",
    age: 21,
    department: "CSE"
}