function greet(user: { name: string; age: number }) {
    console.log(`Hello ${user.name}, you are ${user.age} years old.`);
}

greet({
    name: "Bharat",
    age: 22,
});

let user = {
    name: "Deepak",
    age: 19,
};

greet(user);