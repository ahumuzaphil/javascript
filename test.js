const button = document.getElementById("btn");
console.log(button);
let counter = 0;
button.addEventListener("click", () => {
    // increment the counter on every click
    counter++;
    // display the counter on the page
    button.innerHTML = `You clicked ${counter} times`;
});


// 1. get element by id
// const button = document.getElementById("btn");
// 2. get element by class
// const button = document.getElementByClassName("btn");
// 3. get element by tag name
// const button = document.getElementByTagName("button");
// 4. get element by query selector
// const button = document.querySelector("#btn");
// 5. get element by query selector all
// const button = document.querySelectorAll("button");
// 6. get element by css selector
// const button = document.querySelector(".btn");
