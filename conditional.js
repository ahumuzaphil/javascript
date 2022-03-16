// // conditional statements

// // 1. If statement

// let age = 100;

// if (age < 18) {
// //   console.log("You are not old enough to vote");
// }

// // 2. If/else statement
// if (age >= 18) {
//   console.log("You are old enough to vote");
// } else {
//   console.log("You are not old enough to vote");
// }

// // 3. If/else if/else statement
// if (age < 16) {
//   console.log("You are not old enough to drive");
// } else if (age < 18) {
//   console.log("You are old enough to drive but not old enough to vote");
// } else {
//   console.log("You are old enough to drive and vote");
// }


// // 4. Ternary operator
// let message = age >= 18 ? "You can vote" : "You can't vote";

// functions with parameters

function goodMorning(name) {
    console.log("Good morning " + name);
}


// this function changes a given name in capital letters to small letters
function changeNameToLowerCase(name) {
    return name.toLowerCase()
}

goodMorning(changeNameToLowerCase("BOB"))