/*In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
*/


/*Thus the breakdown of the different parts of the if-elseif-else chain
  if (condition1) {
    block of code to be executed if condition1 is true
} else if (condition2) {
    block of code to be executed if the condition1 is false and condition2 is true
} else {
    block of code to be executed if the condition1 is false and condition2 is false
}
*/

var time = 15;
var greeting = '';
if (time < 10) { //checks if time < 10
  greeting = "Good morning"; 
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting); //prints 'Good day'

var weather = 'rainy';
var carColor = 'red';

if (carColor === 'green'){
  
  console.log("Hurray! its a sunny day");
} 
else if(weather ==='rainy'){

  console.log("Oh no! it's a rainy day!");// prints Oh no! it's a rainy day!
} else {
console.log("cold or hot its fine")
};

//Another conditional statement is the switch statememtn
/* The switch statement is used when evaluates an expression 
and executes code as a result of a matching case 
Thus the breakdown of the different parts of the switch statement

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

*/
var day = '';
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}