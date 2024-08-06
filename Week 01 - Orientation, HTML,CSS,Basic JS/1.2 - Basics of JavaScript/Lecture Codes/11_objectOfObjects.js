const user = {
  name: "Bharat",
  age: 21,
  address: {
    city: "Samastipur",
    country: "India",
    address: "xyz abc",
  },
};

console.log(user.name); // Bharat
console.log(user.age); // 21
console.log(user.address); // { city: 'Samastipur', country: 'India', address: 'xyz abc' }
console.log(user.address.city); // Samastipur
console.log(user.address.country); // India
console.log(user.address.address); // xyz abc


// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male
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

function getUsers(users) {
  let ans = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18 && users[i].gender === "male") {
      ans.push(users[i]);
    }
  }

  return ans;
}

let allUsers = getUsers(users);
console.log(allUsers);
