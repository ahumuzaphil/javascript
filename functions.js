// functions in javascript
// what is a function?
// a function is a block of code that can be executed

// example 1
function sayHello() {
  alert("Hello");
}

// example 2
// const greetings = function () {
//   alert("Hello user");
// };

// example 3
// const greetings_two = () => {
//   alert("Hello user");
// };

// example 4
// (function add() {
//   console.log(1 + 1);
// })();

num1 = document.getElementById("num1")
num2 = document.getElementById("num2")
sign = document.getElementById("sign")
result = document.getElementById("result");

function add() {
  result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
}

function sub() {
  result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
}

function mul() {
  result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
}

function div() {
  result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
}

function calculate() {
  if (sign.value == "+" && num1.value != "" && num2.value != "") {
    add();
  } else if (sign.value == "-" && num1.value != "" && num2.value != "") {
    sub();
  } else if (sign.value == "*" && num1.value != "" && num2.value != "") {
    mul();
  } else if (sign.value == "/" && num1.value != "" && num2.value != "") {
    div();
  } else {
    alert("This is not a valid sign");
  }
}


// parameters and arguments
// parameters are the variables that are passed into a function
// arguments are the values that are passed into a function

function greetByName(name) {
  alert("Hello " + name);
}

greetByName("John");