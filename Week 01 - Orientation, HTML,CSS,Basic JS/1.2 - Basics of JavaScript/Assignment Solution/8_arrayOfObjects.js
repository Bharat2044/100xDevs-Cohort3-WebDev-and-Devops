// 1. Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old


// define a function called `getAdultUsers` that takes an array of users as an input
function getUsers(users) {
  // using filter method to filter out users who are more than 18 years old and store them in a new array
  let adultUsers = users.filter((user) => user.age > 18);

  // returns only the users who are more than 18 years old
  return adultUsers;
}

// define an array of users
let users = [
  { name: "Bharat", age: 21 },
  { name: "Deepak", age: 17 },
  { name: "Harkirat", age: 27 },
  { name: "Raj", age: 15 },
  { name: "Niraj", age: 20 },
];

// calls the function `getAdultUsers` with the array of users as an input
console.log(getUsers(users)); // [ { name: 'Bharat', age: 21 }, { name: 'Harkirat', age: 27 }, { name: 'Niraj', age: 20 } ]
