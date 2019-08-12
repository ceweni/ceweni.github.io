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
Infinity and -Infinity (Google them if you don't know!)
What is the difference between primitive/simple and complex data types?
Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
*/

//Numbers examples
var a = 2.4;
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3

//String examples
var str1 = 'string value';
var str2 = 'is a datatype';

//Boolean
 var bool = true;
 var bul = false;

//Array
var myArray = ['num',2,'name',true]; //declares myArray and assigns values to it
var arr=["a","b"]; //declares arr and assigns values to it
myArray.push(1,2,3); //adds 3 values to myArray from the end of the array
myArray.unshift(arr); //adds the string values of arr to myArray from the begining of myArray
myArray.pop(); //removes the last value in myArray
myArray.shift(); //removes the first value in myArray
myArray.length; //to find the length of an array we use the .length property

//Object
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


//Undefined
/* a variable is undefined if there is not value assigned to that variable
or if the evaluation does not result to a defined value */

var a; // a variable declared
console.log(a); // printing a variable without a value will be undefined


//The value null represents the intentional absence of any object value.
var myArray = null;
if (myArray === null){
    console.log("empty array");
}else{
    return myArray;
}
//NaN- this means Not a Number.
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


//All primitives are immutable, i.e., they cannot be altered while complex datatypes can be altered
//primitive include: string, number, bigint, boolean, null, undefined, and symbol.
//while complex include: arrays, object and funtions
