/* when we say javascript variables can hold values,
these values are data and can exist in various types. When these values
are assigned to a variable it becomes a datatype. We will discuss the datatypes below:
Number 
String 
Boolean
Array
Object
Function
undefined
null
NaN

What is the difference between primitive/simple and complex data types?
Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
*/

//Numbers: In JavaScript, Number is a numeric data type which can exist as integers,float, doubles or bignums 
//examples
var a = 2.4;
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3

//String: Strings are useful for holding data that can be represented in text form. 
//Some of the most-used operations on strings are to check their length, to build and 
//concatenate them using the + and += string operators, checking for the existence or location of substrings
//with the indexOf() method, or extracting substrings with the substring() method. 
//examples
var str1 = 'string value';
var str2 = 'is a datatype';

//Boolean: In computer science, a Boolean is a logical data type that can have only the values true or false
//example
 var bool = true;
 var bul = false;

//Array: An array is an ordered collection of data (either primitive or object depending upon the language). 
// Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value. 

// Each item in an array has a number attached to it, called a numeric index, that allows you to access it. In JavaScript, arrays
// start at index zero and can be manipulated with various methods. 
//examples
var myArray = ['num',2,'name',true]; //declares myArray and assigns values to it
var arr=["a","b"]; //declares arr and assigns values to it
myArray.push(1,2,3); //adds 3 values to myArray from the end of the array
myArray.unshift(arr); //adds the string values of arr to myArray from the begining of myArray
myArray.pop(); //removes the last value in myArray
myArray.shift(); //removes the first value in myArray
myArray.length; //to find the length of an array we use the .length property

//Object: The Object constructor creates an object wrapper for the given value. If the value is null or undefined, it will create 
//and return an empty object, otherwise, it will return an object of a Type that corresponds to the given value. If the value is an
//object already, it will return the value.
//examples
var fruit = {};
fruit.apple = "red";
fruit['mango']= "yellow";
fruit.orange="green";
fruit.orange="white";
console.log(fruit);//prints { apple: 'red', mango: 'yellow', orange: 'white' }

var myPlants = [
  {type: "flowers", list:["rose","tulip","candelion"]}, {type : "trees", list :["fir", "pine", "birch"]}];

var firstObject = myPlants[0];
var arrayOfFlower = firstObject.list;


 console.log(arrayOfFlower[2]);//prints candelion
 console.log(myPlants[1].list[1]);//prints pine

//Function: A function is a code snippet that can be called by other code or by itself, or a variable that refers to the 
//function. When a function is called, arguments are passed to the function as input, and the function can optionally return an output.
//A function in JavaScript is also an object.

//A function name is an identifier declared as part of a function declaration or function expression. The function name's scope depends 
//on whether the function name is a declaration or expression.
//function <name>() {}; syntax
//examples
function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);
};
console.log(addSquares(4,5));// prints 41

//Undefined
/* a variable is undefined if there is not value assigned to that variable
or if the evaluation does not result to a defined value */

var a; // a variable declared
console.log(a); // printing a variable without a value will be undefined


//The value null represents the intentional absence of any object value.
//example
var myArray = null;
if (myArray === null){
    console.log("empty array");
}else{
    return myArray;
}
//NaN- this means Not a Number. When the variable/input is not anything but a 
//number it's evaluated as NaN. example
var b;
var z = a + b; // evaluates the sum of a and b
console.log(z);// has no value so it'll print NaN


//The global Infinity property is a numeric value representing infinity.
var maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
  console.log("Let's call it Infinity!");
  // expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// expected output: 0

//PRIMITIVE DATATYPE VS COMPLEX DATATYPES
//All primitives are immutable, i.e., they cannot be altered while complex datatypes can be altered
//primitive include: string, number, bigint, boolean, null, undefined, and symbol.
//while complex include: arrays, object and funtions
//complex datatypes can hold an infinite number of extra values while primitive 
//datatypes hold the current values assigned to it

//COPY BY VALUE VS COPY BY REFERENCE
/*1. In copy by value The value is actually copied; there are two distinct, independent copies.
while in copy by reference Only a reference to the value is copied. If the value is modified through 
the new reference, that change is also visible through the original reference. 
2. In copy by value A distinct copy of the value is passed to the function; changes to it have no effect 
outside the function. while by reference A reference to the value is passed to the function. If the function 
modifies the value through the passed reference, the modification is visible outside the function. 
3. Two distinct values are compared (often byte by byte) to see if they are the same value in by value but
in copy by reference Two references are compared to see if they refer to the same value. Two references to 
distinct values are not equal, even if the two values consist of the same bytes. 
*/