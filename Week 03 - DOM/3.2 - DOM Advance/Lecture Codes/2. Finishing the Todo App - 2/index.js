/*
function createComplexDomElement() {
		const div = document.createElement("div");

		const h1 = document.createElement("h1");
		h1.innerHTML = "random text";
		
    div.appendChild(h1);
		document.querySelector("body").appendChild(div);
}
*/

// 2nd Approach
function addTodo() {
  // get the value of input element
  const value = document.querySelector("input").value;

  // create span element and set its innerHTML to value
  const spanEle = document.createElement("span");
  spanEle.innerHTML = value;

  // create button element and set its innerHTML to "Delete"
  const buttonEle = document.createElement("button");
  buttonEle.innerHTML = "Delete";

  // create div element and append span and button elements to it
  const divEle = document.createElement("div");
  divEle.appendChild(spanEle);
  divEle.appendChild(buttonEle);

  // append div element to body
  document.querySelector("body").appendChild(divEle);
}
