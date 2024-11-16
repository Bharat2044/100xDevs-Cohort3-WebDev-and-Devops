// Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.


// Create an interface User that has name and age as properties.
interface User {
    name: string;
    age: number;
}

// Create a user object with name as Bharat and age as 22.
const user = {
    name: "Bharat",
    age: 22
}

// Create a function isLegal that takes a user as an input and returns a boolean value.
function isLegal(user: User): boolean {
    
    // If the age of the user is greater than or equal to 18, return true. Otherwise, return false.
    if (user.age >= 18) {
        return true;
    } else {
        return false;
    }
}

// Call the isLegal function with the user object and store the result in a variable ans.
const ans = isLegal(user);

// Print the ans to the console.
console.log(ans); // true
