let users = ["Harkirat", "Bharat", "Deepak", "Rahul", "Rohit"];

console.log(users); // ["Harkirat", "Bharat", "Deepak", "Rahul", "Rohit"]

// console.log(users[0]); // Harkirat
// console.log(users[1]); // Bharat
// console.log(users[2]); // Deepak
// console.log(users[3]); // Rahul
// console.log(users[4]); // Rohit
// console.log(users[5]); // undefined

let totalUsers = users.length; 
console.log(totalUsers); // 5


for (let i = 0; i < totalUsers; i++) {
  console.log(users[i]); // Harkirat, Bharat, Deepak, Rahul, Rohit
}