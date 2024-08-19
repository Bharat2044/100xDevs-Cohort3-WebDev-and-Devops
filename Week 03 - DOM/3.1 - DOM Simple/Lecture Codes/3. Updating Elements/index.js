document.querySelectorAll("h4")[1].innerHTML = "Hello World";

let counter = 0;

function callback() {
  const element = document.querySelector("h2");
  element.innerHTML = counter;
  // console.log(counter);
  counter++;  
}

setInterval(callback, 1000);


/*
let counter = 0;

function callback() {
  const element = document.querySelector("h2");
  element.innerHTML = counter;
  
  setTimeout(callback, 1000);
  
  counter++;  
}

callback();
*/