/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//CONST
//Constants are block-scoped, much like variables defined using the let statement.
//The value of a constant can't be changed through reassignment, and it can't be redeclared.
const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42

//The let statement declares a block scope local variable, optionally initializing it to a value.
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1

//VAR
// Scope essentially means where these 
// variables are available for use. var declarations are globally scoped or 
// function/locally scoped. It is globally scoped when a var variable is declared 
// outside a function. This means that any variable that is declared with var outside 
// a function block is available for use in the whole window. var is function scoped 
// when it is declared within a function. This means that it is available and can be 
// accessed only within that function. var variables are hoisted to the top of its scope 
//and initialized with a value of undefined. FOR example
var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }

    console.log(greeter) //"say Hello instead"
    
//LET
// let is block scoped
// A block is chunk of code bounded by {}. A block lives in curly braces. 
// Anything within curly braces is a block. So a variable declared in a block with 
// the let is only available for use within that block. Let me explain this with an example.
// Just like var, let declarations are hoisted to the top. Unlike var which is initialized
// as undefined, the let keyword is not initialized. So if you try to use a let variable 
// before declaration, you'll get a Reference Error. Example
let greeting = "say Hi";
    times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);//"say Hello instead"
    }
   console.log(hello) // hello is not defined
   console.log(greeting);//'say Hi'
   
//CONST
 //const declarations are block scoped. Like let declarations, const declarations can
 //only be accessed within the block it was declared Just like let, const declarations
 //are hoisted to the top but are not initialized. Example
 const greet = "say Hi";
greet = "say Hello instead";//error : Assignment to constant variable. 

//HOISTING
// Conceptually, for example, a strict definition of hoisting suggests that variable
// and function declarations are physically moved to the top of your code, but this is 
// not in fact what happens. Instead, the variable and function declarations are put into 
// memory during the compile phase, but stay exactly where you typed them in your code.examples

catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Chloe"
*/

//Example 1 - Does not hoist
 x = 1; // Initialize x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialize y
//This will not work as JavaScript only hoists declarations

//Example 2 - Hoists
var num1 = 3; //Declare and initialize num1
num2 = 4; //Initialize num2
console.log(num1 + " " + num2); //'3 4'
var num2; //Declare num2 for hoisting

//Example 3 - Hoists
a = 'Cran'; //Initialize a
b = 'berry'; //Initialize b
console.log(a + "" + b); // 'Cranberry'
var a, b; //Declare both a & b for hoisting
