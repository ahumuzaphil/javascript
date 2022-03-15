// Javascript data types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Object
// 7. Symbol

// Javascript keywords
// 1. var
// 2. let
// 3. const
// 4. function
// 5. class
// 6. extends

// 1. Number
let age = 30;
console.log(age);

// 2. String
let name = "John";
console.log(name + " is " + age + " years old");
age = 56;
console.log(name + " is " + age + " years old");

// 3. Boolean
let isMarried = false;
console.log(isMarried);

// check data type
console.log(typeof isMarried);

// 4. Undefined
let car;
console.log(car);

// 5. Null
car = null;
console.log(car);

// Javscript Operators
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Unary Operators
// 6. Ternary Operators
// 7. Bitwise Operators
// 8. Increment/Decrement Operators

// 1. Arithmetic Operators
let x = 10;
let y = 3;

// Addition, Subtraction, Multiplication, Division, Modulus
console.log(x + y); // addition -> 13
console.log(x - y); // subtraction -> 7
console.log(x * y); // multiplication -> 30
console.log(x / y); // division -> 3.3333333333333335
console.log(x % y); // modulus -> 1

// 2. Assignment Operators
// Addition Assignment Operator
x += y; // x = x + y
console.log(x); // 13

// Subtraction Assignment Operator
x -= y; // x = x - y
console.log(x); // 10

// Multiplication Assignment Operator
x *= y; // x = x * y
console.log(x); // 30

// Division Assignment Operator
x /= y; // x = x / y
console.log(x); // 10

// 3. Comparison Operators
// Equal to Operator
console.log(x == y); // false

// Not Equal to Operator
console.log(x != y); // true

// Strict Equal to Operator (type and value)
console.log(x === y); // false

// Strict Not Equal to Operator (type and value)
console.log(x !== y); // true

// 4. Logical Operators
// AND Operator
console.log(true && true); // true

// OR Operator
console.log(true || false); // true

// NOT Operator
console.log(!true); // false

// 5. Unary Operators
// Increment Operator
let a = 10;
a++; // a = a + 1
console.log(a); // 11

// Decrement Operator
let b = 10;
b--; // b = b - 1
console.log(b); // 9

// 6. Ternary Operators
let c = 10;
let d = 20;

// if c is greater than d, then e = c, else e = d
let e = c > d ? c : d;
console.log(e); // 20

// 7. Bitwise Operators
// Bitwise AND Operator