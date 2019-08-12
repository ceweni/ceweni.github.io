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
//WHEN TO USE A SWITCH STATEMENT OVER AN IF CHAIN
/*switch vs if else
Prerequisite – Switch Statement, Decision making(if else)
A switch statement is usually more efficient than a set of nested ifs. Deciding whether to use if-then-else statements or a switch statement is based on readability and the expression that the statement is testing.

1. Check the Testing Expression: An if-then-else statement can test expressions based on ranges of values or conditions, whereas a switch statement tests expressions based only on a single integer, enumerated value, or String object.

2. Switch better for Multi way branching: When compiler compiles a switch statement, it will inspect each of the case constants and create a “jump table” that it will use for selecting the path of execution depending on the value of the 
expression. Therefore, if we need to select among a large group of values, a switch statement will run much faster than the equivalent logic coded using a sequence of if-elses. The compiler can do this because it knows that the case constants are all the same type and simply
must be compared for equality with the switch expression, while in case of if expressions, the compiler has no such knowledge.

3. if-else better for boolean values: If-else conditional branches are great for variable conditions that result into a boolean, whereas switch statements are great for fixed data values.

4. Speed: A switch statement might prove to be faster than ifs provided number of cases are good. If there are only few cases, it might not effect the speed in any case. Prefer switch if the number of cases are more than 5 otherwise, you may use if-else too.
If a switch contains more than five items, it’s implemented using a lookup table or a hash list. This means that all items get the same access time, compared to a list of if:s where the last item takes much more time to reach as it has to evaluate every previous condition first.

5. Clarity in readability: A switch looks much cleaner when you have to combine cases. Ifs  are quite vulnerable to errors too. Missing an else statement can land you up in havoc. Adding/removing labels is also easier with a switch and makes your code significantly easier to change and maintain.

*/