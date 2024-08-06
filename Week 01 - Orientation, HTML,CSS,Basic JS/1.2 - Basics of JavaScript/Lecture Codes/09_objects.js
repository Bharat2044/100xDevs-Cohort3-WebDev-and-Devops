let student = {
  name: "Bharat",
  age: 21,
  gender: "Male",
};

console.log(student); // { name: 'Bharat', age: 21, gender: 'Male' }
console.log(student.name); // Bharat
console.log(student.age); // 21
console.log(student.gender); // Male


function greet (user) {
  console.log("Hi " + user.name + ", Your age is " + user.age);
}

let user = {
    name: "Bharat",
    age: 21
}

greet(user); // Hi Bharat, you are 21 years old



function greetUser (user) {
    console.log("Hi " + user.name + ", Your age is " + user.age + " and you are " + user1.gender);

    if (user.age >= 18) {
        console.log("You are eligible to vote");
    } else {
        console.log("You are not eligible to vote");
    }
}

let user1 = {
    name: "Deepak",
    age: 25,
    gender: "Male"
}

greetUser(user1); // Hi Deepak, Your age is 25 and you are Male