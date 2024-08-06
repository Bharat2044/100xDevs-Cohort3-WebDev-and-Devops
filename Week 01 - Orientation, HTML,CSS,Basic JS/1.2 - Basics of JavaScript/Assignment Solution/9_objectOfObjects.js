// 1. Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

let users = [
  {
    name: "Bharat",
    age: 21,
    gender: "male",
  },
  {
    name: "Priya",
    age: 22,
    gender: "female",
  },
  {
    name: "Rani",
    age: 15,
    gender: "female",
  },
  {
    name: "Deepak",
    age: 24,
    gender: "male",
  },
  {
    name: "Rahul",
    age: 17,
    gender: "male",
  },
];

// define a function called `getUsers` that takes an array of users as an input
function getUsers(users) {
    // using filter method
    // filter the users whose age > 18 and gender is male and store them in a new array
    let filteredUsers = users.filter((user) => user.age > 18 && user.gender === "male");

    // returns the filtered users
    return filteredUsers;

  /*
  // using normal loop
  // create an empty array to store the users whose age
  let ans = [];

  //  using for loop to iterate through the array of users
  for (let i = 0; i < users.length; i++) {
    // check if the age of the user is greater than 18 and gender is male
    if (users[i].age > 18 && users[i].gender === "male") {
      ans.push(users[i]);
    }
  }

  return ans;
  */
}

// calls the function `getUsers` with the array of users as an input
let allUsers = getUsers(users);

// prints the users whose age > 18 and
console.log(allUsers);
