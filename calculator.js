// calculator js
// get all the buttons
const buttons = document.querySelectorAll(".btn");
// get the display
const display = document.querySelector(".result");
// get the clear button
const clear = document.querySelector("#clear-btn");


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // get the value of the button
    const value = button.innerText;
    // check if the value is a number
    if (value === "=") {
      // get the value of the display which is a p tag
      const displayValue = display.children[0].innerText;
      // check if the value is a number, replace all arithmetic operators with empty string
      if (isNaN(displayValue.replace(/[^0-9.-]/g, ""))) {
        // display error
        display.children[0].innerText = "Error";
      } else {
        // calculate the result
        display.children[0].innerText = eval(displayValue);
      }
    } else if (value === "C") {
      // clear the display
      display.children[0].innerText = "0";
    } else {
      // add the value to the display
      display.children[0].innerText += value;
    }
  });
});
