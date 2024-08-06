// 1. Write a function that takes a `user` as an input and greets them with their name and age


// define a function called `greetUser` that takes a user object as an input
function greetUser(user) {
    // logs a greeting message with the user's name and age
    console.log("Hello " + user.name + ", You are " + user.age + " years old.");
}

// define a user object with a name and age
let user = {
    name: "Bharat",
    age: 21
};

// calls the function `greetUser` with the user object as an input
greetUser(user); // Hello Bharat, You are 21 years old.


// 2. Write a function that takes a new object as input which has `name` , `age`  and `gender` and greets the user with their gender (Hi `Mr/Mrs/Others` harkirat, your age is 21)

// define a function called `greet` that takes a user object as an input
function greet(user) {
    // logs a greeting message with the user with their gender
    if (user.gender === "male") {
        console.log("Hi Mr " + user.name + ", your age is " + user.age);
    } else if (user.gender === "female") {
        console.log("Hi Mrs " + user.name + ", your age is " + user.age);
    } else {
        console.log("Hi " + user.name + ", your age is " + user.age);
    }
}

// define a user1 object with a name, age and gender
let user1 = {
    name: "Bharat",
    age: 21,
    gender: "male"
}

// calls the function `greet` with the user1 object as an input
greet(user1); // Hi Mr Bharat, your age is 21


// 3. Also tell the user if they are legal to vote or not

// define a function called `greet` that takes a user object as an input and also tells the user if they are legal to vote or not
function greet(user) {
    // logs a greeting message with the user1 with their gender and also eligible for vote or not
    if (user.gender === "male") {
        if (canVote(user.age)) {
            console.log("Hi Mr " + user.name + ", your age is " + user.age + " and you are eligible to vote");
        } else {
            console.log("Hi Mr " + user.name + ", your age is " + user.age + " and you are not eligible to vote");
        }
    } else if (user.gender == "female") {
        if (canVote(user.age)) {
            console.log("Hi Mrs " + user.name + ", your age is " + user.age + " and you are eligible to vote");
        } else {
            console.log("Hi Mrs " + user.name + ", your age is " + user.age + " and you are not eligible to vote");
        }
    } else {
        if (canVote(user.age)) {
            console.log("Hi " + user.name + ", your age is " + user.age + " and you are eligible to vote");
        } else {
            console.log("Hi " + user.name + ", your age is " + user.age + " and you are not eligible to vote");
        }
    }
}

// function to check if the user is eligible to vote or not
function canVote(age) {
    // if age is greater than 18, it returns true, else it returns false
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// define a user2 object with a name
let user2 = {
    name: "Bharat",
    age: 21,
    gender: "male"
}

// calls the function `greet` with the user2 object as an input
greet(user2); // Hi Mr Bharat, your age is 21 and you are eligible to vote