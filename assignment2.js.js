///////Introduction to Arrays, Creating, Accessing - Arrays, Methods in Arrays
// //1.Create an array of fruits and print the elements using a for loop.
// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elder "];
//     for (let i = 0; i < fruits.length; i++) {
//         console.log(fruits[i]); 
//     }
// //2.Access the third element of an array and print it 
//      console.log(fruits[1]); //output:Banana
// //3. Find the length of an array and print it
//  console.log(fruits.length);// output:5

///////////// Operations: Add, Remove - push(), pop(), unshift(), shift() Methods in Arrays
// //1. Add an element to the end of an array using the `push()` method.
//  let fruits = ["Apple", "Banana", "Cherry"];
//  fruits.push("Date");
//  console.log(fruits); //output:(4) ['Apple', 'Banana', 'Cherry', 'Date']
// //2. Remove the last element from an array using the `pop()` method.
// fruits.pop();
// console.log(fruits); //output:(3) ['Apple', 'Banana', 'Cherry']
// //3. Add an element to the beginning of an array using the `unshift()` method.
// fruits.unshift("Date"); //unshift is used to add element in the beginning of an array
// console.log(fruits); //output:(4) ['Date', 'Apple', 'Banana','Cherry']
// //4. Remove the first element from an array using the `shift()` method.
// fruits.shift();//shift is used to pop the  element in the beginning of an array
// console.log(fruits); //output:(3) ['Apple', 'Banana','Cherry']


///////Introduction to Objects: Creating Objects with its Properties, Accessing Properties with dot (.) & square bracket [] representations, Appending New Properties to the Existing Objects using dot & bracket representations
// //1. Create an object representing a person with properties like name, age, and city.
// let person = {name: "John", age: 25,city: "New York" };
// //2. Access the person's name using both dot notation and square bracket notation
// console.log(person.name); //output:John
// console.log(person["name"]); //output:John
// //3. Add a new property "occupation" to the person object using dot notation.
// person.occupation = "Software Engineer";
// console.log(person); //output: { name: 'John', age: 25, city:'New York', occupation: 'Software Engineer' }
// //4. Add a new property "hobbies" to the person object using square bracket notation.
// person["hobbies"] = "Reading, Writing, Coding";
// console.log(person); //output: { name: 'John', age: 25, city:'New York', occupation: 'Software Engineer', hobbies: 'Reading, Writing, Coding' }



/////// Creating Objects with Properties & Methods, Calling Methods, Understanding about 'this' keyword, Coding Exercise in Objects Declaration, Properties & Methods Accessing
// //1. Create a `Car` object with properties like `make`, `model`, and `year`. Add a method `drive()` that logs a message when called.
//  let car = {
//      make: "Toyota",
//      model: "hilux",
//      year: 2024,
//      drive: function(){
//          console.log("Vroom!");
//      }
//  };
// //2. Create a `Calculator` object with methods like `add`, `subtract`, `multiply`, and `divide`. Call these methods with different numbers.
// let calculator = {
// add: function(a, b) {
//      return a + b;
//     },
// subtract: function(a, b) {
//      return a - b;
//     },
// multiply: function(a, b) {
//      return a * b;
//   },
// divide: function(a, b) {
//    if (b != 0) {
//     return a / b;
//    }
//   else {
//    return "Error: Division by zero is not allowed";
//      }
//  }
//  };



 //////Iterations: For Loop, While Loop, Break & Continue Statement
// //1. Iterate over an array of numbers using a `for` loop and print each number.
//  let numbers = [1, 2, 3, 4, 5];
//  for (let i = 0; i < numbers.length; i++) {
//      console.log(numbers[i]);
//  }                           //output:1 2 3 4 5 

// //2. Iterate over an array of strings using a `while` loop and print each string.
// let fruits = ["Apple", "Banana", "Cherry"];
// let i = 0;
// while (i < fruits.length) {
//     console.log(fruits[i]);
//     i++;
//     }                            //output:Apple Banana Cherry

// //3. Use a `for` loop to find the sum of all elements in an array.
// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     }
//     console.log(sum);                //output:15

// //4. Use a `while` loop to find the first even number in an array.
// let numbers = [1, 3, 5, 7, 10];
// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i] % 2 == 0) {
//         console.log(numbers[i]);
//         break;
//         }
//         i++;
//         }                            //output:10

// //5. Use a `for` loop with a `break` statement to exit the loop when a certain condition is met.
//  let numbers = [1, 2, 3, 4, 5];
//  for (let i = 0; i < numbers.length; i++) {
//      if (numbers[i] == 3) {
//          break;
//          }
//      console.log(numbers[i]);
//      }
//      console.log("Loop exited");    //output:1 2 3 Loop exited

// //6. Use a `for` loop with a `continue` statement to skip certain elements in the array.
// let numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == 3) {
//         continue;
//         }
//         console.log(numbers[i]);
//         }
//         console.log("Loop finished");  //output:1 2 4 5 Loop finished



/////// Behind The Scenes: Variable Scope - Global vs Local Variables, Hoisting: Variables, Functions
// //1. Demonstrate the difference between global and local variables using examples.
//  let globalVariable = "I am a global variable"; //global variable
//  function localVariable() {
//      let localVariable = "I am a local variable"; //local variable
//      console.log(localVariable);
//  }
// console.log(globalVariable); //output: I am a global variable
// localVariable(); //output: I am a local variable

//2. Explain the concept of hoisting and its impact on variable declaration and function calls.
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope
// before the code is executed. This means that even if a variable or function is declared after it
// is used, it will still be accessible because it has been hoisted to the top of the
// scope.

// let hoistedVariable = "I am a hoisted variable"; //variable declaration
// console.log(hoistedVariable); //output: I am a hoisted variable
// function hoistedFunction() {
//     console.log("I am a hoisted function"); //function declaration
// }
// hoistedFunction(); //output: I am a hoisted function



//////### Hosting Coding Exercise, Understanding 'this' keyword, Normal Functions with Keyword 'this', Object's with Keyword 'this', Regular Functions vs Arrow Functions using Keyword 'this', Understanding about 'arguments' Keyword, Objects vs Primitives
//1. Create a function that demonstrates hoisting by calling a function before it's declared.
// function hoistedFunction() {
//     console.log("I am a hoisted function");
// }
// hoistedFunction(); //output: I am a hoisted function
// function nonHoistedFunction() {
//     console.log("I am a non-hoisted function");
// }
// nonHoistedFunction(); //output: ReferenceError: nonHoistedFunction is not defined

// //2. Explain how the `this` keyword behaves in different contexts (e.g., regular functions, object methods, arrow functions).
// // In JavaScript, the `this` keyword refers to the current execution context of a function.
// // In an arrow function, `this` is inherited from the surrounding scope.
// //REGULAR FUCTIONS
// let obj = {
//     name: "John",
//     sayHello: function() {
//         console.log(this.name); //output: John
//     }
//     }
//     obj.sayHello(); //output: John
//  //ARROW FUNCTIONS
//  let arrowObj = {
//     name: "Jane",
//     sayHello1: () => {
//         console.log(this.name); //output: undefined
//         }
//         }
//         arrowObj.sayHello1(); //output: undefined
   

//  //OBJECT METHODS
//         let obj2 = {
//             name: "Jane",
//             sayHello2: () => {
//                 console.log(this.name); 
//                 }
//                 }
//                 obj2.sayHello2(); 
                


//3. Write code to illustrate the difference between regular functions and arrow functions in terms of `this` binding.
// let obj = {
//     name: "John",
//     sayHello: function() {
//         console.log(this.name); //output: John
//     },
//     sayHelloArrow: () => {
//             console.log(this.name); //output: undefined
//         }
//     };
//     obj.sayHello(); //output: John
//     obj.sayHelloArrow(); //output: undefined

// //4. Use the `arguments` keyword to access all arguments passed to a function.
// function sum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(sum(1, 2, 3, 4, 5)); //output:15

// //5. Compare and contrast objects and primitives in terms of their behavior and properties.
// // Objects are mutable, meaning their properties can be changed after creation.
// // Primitives are immutable, meaning their values cannot be changed after creation.
// // Objects have methods, which are functions that belong to the object.
// // Primitives do not have methods.
// // Objects can have properties that are objects themselves, which can lead to complex data structures.
// // Primitives cannot have properties that are objects.
// // Objects can be cloned using the `Object.assign()` method or the spread operator (`{...}`
// // Primitives cannot be cloned using these methods. Instead, you can use the `JSON.parse(JSON
// // .stringify())` method to create a new copy of a primitive value.
// // Objects can be iterated over using a `for...in` loop or the `Object.keys
// // ()` method.
// // Primitives cannot be iterated over using these methods.