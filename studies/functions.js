/*A JavaScript function is a block of code designed to perform a particular task.
Functions often compute a return value. The return value is "returned" back to the "caller":

A JavaScript function is executed when "something" invokes it (calls it).
first we must write the word function then followed by function name,parenthesis, curly braces
execute an action and finally a return statement
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
*/
var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
//Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

var text = "The temperature is " + x + " Celsius";

/*The key difference between argument and parameter is that an argument is the data passed at the 
time of calling a function while a parameter is a variable defined by a function that receives a value 
when the function is called.
*/
function name() {};
// syntax for a name function
/*A function serves as a closure in JavaScript, and thus creates a scope, so that (for example) a variable defined 
exclusively within the function cannot be accessed from outside the function or within other functions. For instance,
the following is invalid
*/

function exampleFunction() {
    var x = "declared inside function";  // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}

console.log(x);  // Causes error

//Examples of function expression
var getRectArea = function(width, height) {
    return width * height;
}

console.log(getRectArea(3,4));
// expected output: 12
var math = {
  'factit': function factorial(n) {
    console.log(n)
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
};

math.factit(3) //3;2;1;

//PARAMETERS
// Parameters are used when defining a function, they are the names created in the function definition. 
// In fact, during a function definition, we can pass in up to 255 parameters! Parameters are separated by 
// commas in the (). Here’s an example with two parameters — param1 & param2:
const param1 = true;
const param2 = false;
function twoParams(param1, param2){
  console.log(param1, param2);
}

// Functions always return a value. In JavaScript, if no return value 
// is specified, the function will return undefined. 

//EXAMPLE OF A CLOSURE
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();