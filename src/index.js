
// Data, data types, information
// What do you thik when I say PI = 3.14, costant, number, circles
// My age number, integer (Whole number), 0-120ish
// Car horsepower, model, year (1850-2022), torque, color
// Students:  list of student, major, graduation date, age: (18-30)
// datatypes JS 
// variables
// When I say what is 1 + 1 = 2, What is 1 == 1 True
/*
{
1 + 1 // 2

1 +  // ? using this wrong

1 + car // using this wrong

1 + '1' // using this wrong

+ takes two numbers and exactyly 2 and returns the sum





}
*/
// ------Questions-----

// 1. What is the Difference Between =, ==, and === in JavaScript 
/*
= is used for assigning values to a variable in JavaScript.
== is used for comparison between two variables irrespective of the datatype of variable. "2" == 2 true
=== is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values. "3"=== 3 False

// 2. What are template literals in js?

Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings,
 for string interpolation with embedded expressions, and for special constructs called tagged templates.
multi line strings
// 3. What are the differences between variables created using let, var or const?
let, block scope
Var, functinal scope
const block scope

// 4. What are data types in javascript?

Boolean (true,flase)
Null (not there) 
undefined
number
bigint
string
symbol
objects
string

// 5. What is difference between null vs undefined?

Undefined has not been assigned a value, we don't have a value
null type has exactly one value, intesinal absenss of value

// 6. What are various operators supported by javascript?

there are many Some of these inclue, +,-,*,/,=,<,>,+=,-=,*=,/=,%=

// 7. What is 'typeof' operator?

typeof operator will look for what kind of data type you are using within a given peice of code
console.log(typeof 42);
is = to "Number"

//8. what are some of the important features of JavaScript ES6

Es6 Newest version of javascript
functions include, let and cosnt keywords, arrow funcitons
multi line strings,ect

//9. how does the ternary operator in javascript work?*

else if opporators

//10. what are valid variable names in js

No spaces, Must Begin with a letter or underscore, case sensitve

//11. what is variable scope?
 
A scope is where veribles can be incased within its own scope, or within the whole program

//11. what is variable assignment?*



// NUMBERS

// 1. How do you generate random integers in js?

Using math.random()
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// 2. What is isNaN?

NaN is a property of the global object, or variable in the global scope

// 3. How to do you see if a number is even?

const number = 6;
const result = number % 4; // 2 

// 4. how do you convert the string '1' to the number 1

var text = '42px';
var integer = parseInt(text, 10);
// returns 42

// STRINGS



//1. Explain these methods

// startsWith()

boolean type 
const str_1 = 'Join our freelancer community';

console.log(str_1.startsWith('Join'));
// Output: true

console.log(str_1.startsWith('Join', 3));
// Output: false

console.log(str_1.startsWith('our', 5));
// Output: true

// endsWith()

endsWith(searchString)
endsWith(searchString, length)
Boolean type

// includes()

const str = 'To be, or not to be, that is the question.'

console.log(str.includes('To be'))        // true
console.log(str.includes('question'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false
console.log(str.includes('TO BE'))        // false
console.log(str.includes(''))             // true

// slice()
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
 where start and end represent the index of items in that array. The original array will not be modified.

The slice() method returns selected elements in an array, as a new array.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// toUpperCase()

const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

// toLowerCase()

const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."


// charAt()

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"


// split()



// replace()



//CONDTIONALS




//1. how does the if statement work in js

let hour = new Date().getHours();
if (hour < 20) {
  document.getElementById("demo").innerHTML = "Good day";
}

//2. how does the if/else statement work in js

let hour = new Date().getHours();
if (hour < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

//3. how does the if/elseif/else statement work in js

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false

//4. what is a switch statement

Use switch to specify many alternative blocks of code to be executed

//5. how is a switch statement different from if/elseif statement


//6. what are the Comparison Operators that js uses?


//7. what are the Logical Operators that js uses?


//8. what are truthy and falsey values (more high level idea)


//9. what are the specific falsey values in js


//10. what are the specific truthy values in js(answer: anything that is not falsey)


//11. how does a nested if statement in js work



//LOOPS




//1. what is for loop in javascript

text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";

You can insted write

for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

//1a. what is the syntax for a for loop in javascript


//2. what is while loop in javascript


//2a. what is the syntax for a while loop in javascript


//3. what is while for...in in javascript


//3a. what is the syntax for a while for...in in javascript


//4. what is nested loop, give an example?





//FUNCTIONS



//1. how do you define a function in javascript

 //- how do define an arrow function

 //- how do you define an regular function

 //- what is the difference between arrow/regular functions


//2 how do you call a function in javascript (keep this simple)


//3 what are default parameters in a function?


//4 what is the difference between params and arguments in js


//5 what does the return keyword do in a function in js


//6 what will a function return if there is no return keyword


//7 What is an anonymous function?


//8 What is a typical use case for anonymous functions?


//9 Can you define a function as a parameter as function?(answer:yes)


//10 What does it mean that you Can you define a function as a parameter as function?


//11 Can you have a function return a function in js?(answer:yes)


//12 What does it mean that you Can you have a function return a function in js?


// in realation to 9-12, what is a first class function?




//ARRAYS



// 1. what is an array in javascript and at a high level how does it work?



// 2. Explain array methods 

// pop(), 

// length(), 

// push(), 

// shift(), 

// slice(), 

// splice(), 

// sort(), 

// unshift(), 

// concat(),

// map(), 

// filter(), 

// indexOf(), 

// find(), 

// findIndex(), 

// includes()




//3. What are the benefits of using spread ie'...' syntax is js (hint cloning)



//4. What is array destructuring in js



//5. When should you use reduce(), map(), foreach() and filter() in js?






//OBJECTS



// 1. What is a object in JS?

// (This can get a little complicate so this is the good overview of the basics. 

//https://www.javascripttutorial.net/javascript-objects/)




// 2. How do access a value in a js object using dot '.' notation?


// 3. How do access a value in a js object using array like '[""]'notation?



// 4. what is meant by a key value pair in an object?


// 5. How do you add a key value pair in an object?


// 5b. How do you delete a key value pair in an object?


// 6. How do modify a value in an object?


// 7. how do you see if a key is in a object?


// 8. how can you clone an object?


// 9. what is object destructoring?

it("YOUR MESSAGE HERE", () => {
  // expect('value').toBe('value');
});




it("tests type of data", () => {
  //numbers
  expect(typeof 1).toBe("number");
  expect(typeof 2.0234).toBe("number");

  //strings- characters
  expect(typeof "hello").toBe("string");
  expect(typeof "hello").toBe("string");
  expect(typeof `hello`).toBe("string");

  //arrays
  expect(typeof [2, 4]).toBe("object");
  expect(Array.isArray([2, 4])).toBe(true);

  //object
  expect(typeof { name: "james", age: 89 }).toBe("object");

  //boolean
  expect(typeof true).toBe("boolean");
  expect(typeof false).toBe("boolean");

  //NaN Not a number
  expect(isNaN(NaN)).toBe(true);
  expect(isNaN("asdf")).toBe(true);
  expect(isNaN(0)).toBe(false);

  //undefined and null
  let noValue;
  let explicitlyNull = null;

  expect(noValue).toBe(undefined);
  expect(noValue).not.toBe(null);

  expect(explicitlyNull).toBe(null);
  expect(explicitlyNull).not.toBe(undefined);
});

it("tests booleans and boolean logic", () => {
  // && - both must be true
  expect(true && false).toBe(false);
  // || - one one has to be true
  expect(true || false).toBe(true);
  // ! - make it the opposite
  expect(!false).toBe(true);
  // can get crazy with these...REAL CRAZY!
  expect(true || false && (true ||!false)).toBe(true);
});

it("tests == and ===", () => {
  expect("hello" === "hello").toBe(true);
  expect("hello" === "HELLO").toBe(false);

  //!== not equal
  expect("hello" !== "HELLO").toBe(true);

  // === check type
  expect(1 === "1").toBe(false);
  // == don't check type
  expect(1 == "1").toBe(true);
});

it("tests js operators", () => {
  // addition +
  expect(1 + 1).toBe(2);
  // subtraction -
  expect(1 - 1).toBe(0);

  // multiplication *
  expect(4 * 4).toBe(16);

  // division /
  expect(4 / 4).toBe(1);
  expect(3 / 2).toBe(1.5);

  // modulus % reminder of division
  expect(4 % 2).toBe(0);
  expect(5 % 2).toBe(1);

  let num = 2;
  //2+1
  num++;
  expect(num).toBe(3);
  //3*3
  num *= 3;
  expect(num).toBe(9);
  //9-3
  num -= 3;
  expect(num).toBe(6);
});
*/
