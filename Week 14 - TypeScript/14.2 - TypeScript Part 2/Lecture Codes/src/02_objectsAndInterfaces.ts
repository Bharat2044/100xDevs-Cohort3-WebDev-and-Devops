interface Address { 
    city: string;
    country: string;
    pincode: number;
}

// Define a user interface with properties name, age, address with properties city, country, and pincode 
interface User {
    name: string; 
    age: number;
    address?: Address; // address is Optional property using "?"
}

// Define an Office interface with a property address of type Address
interface Office {
    address: Address; // interface inside interface
}


// Define a user object with the properties of the User interface
let user: User = {
    name: "Bharat",
    age: 22,
    address: {
        city: "Samastipur",
        country: "India",
        pincode: 847105
    }
}

// Create a function that takes a user object as an argument and returns a boolean value based on the age of the user
function isLegal(user: User): boolean {
    // return true if the user is 18 years or older, otherwise return false
    return user.age >= 18;
}

// Call the function isLegal with the user object and store the result in a variable called ans
let ans = isLegal(user);

// Print the result to the console using a conditional statement to print "Legal" if the ans variable is true, otherwise "Illegal" 
if (ans) {
    console.log("Legal"); // Legal
} else {
    console.log("Illegal");
}


// Define another user object with the properties of the User interface
let user2: User = {
    name: "Deepak",
    age: 17
}

// Call the function isLegal with the user object and store the result in a variable called ans2
let ans2 = isLegal(user2);

// Print the result to the console using a conditional statement to print "Legal" if the ans variable is true, otherwise "Illegal"
if (ans2) {
    console.log("Legal");
} else {
    console.log("Illegal"); // Illegal
}