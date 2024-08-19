// var name = "Bharat";
// console.log(name);

// console.log(document);

/**
 * querySelector - returns the first element that matches a specified CSS selector(s) in the document.
 * Syntax: element = document.querySelector(selectors);
 * 
 * 
 */


function addTodo() {
  const inputEle = document.querySelector("input");
  const value = inputEle.value;
  console.log(inputEle);
  console.log(value);
}

const h4Ele = document.querySelector("h4");
console.log(h4Ele);

const h4EleAll = document.querySelectorAll("h4");
console.log(h4EleAll);
console.log(h4EleAll[1]);

const btn = document.getElementById("btn");
console.log(btn);

const todo = document.getElementsByClassName("todo");
console.log(todo);

