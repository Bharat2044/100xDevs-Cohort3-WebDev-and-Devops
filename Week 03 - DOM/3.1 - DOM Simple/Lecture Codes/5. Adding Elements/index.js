const divEle = document.createElement("div");
divEle.innerHTML = "Hello World";

// document.querySelector("body").appendChild(divEle);

const parentEle = document.querySelector("body");
parentEle.appendChild(divEle);