// Function Declaration - greet someone
function greet(name) {
  return "Hello, " + name;
}

// Function Call
let ans1 = greet("Bharat");
let ans2 = greet("Harkirat");
let ans3 = greet("Deepak");

// log the output
console.log(ans1); // Hello, Bharat
console.log(ans2); // Hello, Harkirat
console.log(ans3); // Hello, Deepak

// Function Declaration - sum of two numbers
function sum(a, b) {
  let totalSum = a + b;

  return totalSum;
}

// Function Call
let sum1 = sum(2, 3);
let sum2 = sum(5, 10);

// log the output
console.log(sum1); // 5
console.log(sum2); // 15

// Function Declaration - can vote or not
function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Function Call
let ans4 = canVote(20);
let ans5 = canVote(15);

// log the output
console.log(ans4); // true
console.log(ans5); // false

// Function Declaration - can vote or not
function canVote1(age) {
  //   if (age >= 18) {
  //     console.log("Yes, you can vote");
  //   } else {
  //     console.log("No, you can't vote");
  //   }

  if (age >= 18) {
    console.log("Yes, you can vote");
  }
  
  if (age < 18) {
    console.log("No, you can't vote");
  }
}

canVote1(20); // Yes, you can vote
canVote1(15); // No, you can't vote
