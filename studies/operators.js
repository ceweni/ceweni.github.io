//An assignment operator assigns a value to its left operand based on the value of its right operand.
var x = 2;
var y = 3;

console.log(x);
// expected output: 2

console.log(x = y + 1); // 3 + 1
// expected output: 4

console.log(x = x * y); // 4 * 3
// expected output: 12

//Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/).
// Number addition and subtraction
console.log(2 + 3 - 1);
// expected output: 4

// Number multiplication and division
console.log(4 * 3 / 2); // 12 / 2
// expected output: 6

// Number remainder and exponential
console.log(11 % 3 ** 2); // 11 % 9
// expected output: 2


/* JavaScript has both strict and type–converting comparisons. 
A strict comparison (e.g., ===) is only true if the operands are of the same type and
the contents match. The more commonly-used abstract comparison (e.g. ==) converts the
operands to the same type before making the comparison. For relational abstract comparisons (e.g., <=),
the operands are first converted to primitives, then to the same type, before comparison.

Strings are compared based on standard lexicographical ordering, using Unicode values.
*/
console.log(1 == 1);
// expected output: true

console.log("1" == 1);
// expected output: true

console.log(1 === 1);
// expected output: true

console.log("1" === 1);
// expected output: false


/*Logical operators are typically used with Boolean (logical) values. When they are, 
they return a Boolean value. However, the && and || operators actually return the value 
of one of the specified operands, so if these operators are used with non-Boolean values, 
they will return a non-Boolean value.
*/
var a = 3;
var b = -2;

console.log(a > 0 && b > 0);
// expected output: false

console.log(a > 0 || b > 0);
// expected output: true

console.log(!(a > 0 || b > 0));
// expected output: false


/*A unary operator, is an operator that takes a single operand in an expression 
or a statement. The unary operators are +, -,!, ~, ++, -- and the cast operator.
*/
/* negative and positive
As unary operations have only one operand they are evaluated before other operations containing them. Here is an example using negation:

 3 -−2;
 */
//Here, the first '−' represents the binary subtraction operation, while the second '−' represents the unary negation of the 2 (or '−2' could be taken to mean the integer −2). Therefore, the expression is equal to:

var num = 3+2;
//Technically there is also a unary positive but it is not needed since we assume a value to be positive:

var x = 10;
x += 5;
//Unary positive does not change the sign of a negative operation:

var txt1 = "What a very ";
txt1 += "nice day";
//In this case a unary negative is needed to change the sign:

var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;


/*Ternary operator returns a value or expression included in the second or third part of it. 
It does not execute the statements.
*/

//EXAMPLES OF OPERATORS LISTED
/*Operator	Description	Example	Result in y	Result in x	Try it
+	Addition	x = y + 2   	y = 5	x = 7	
-	Subtraction	x = y - 2   	y = 5	x = 3	
*	Multiplication	x = y * 2	y = 5	x = 10	
/	Division	x = y / 2	    y = 5	x = 2.5	
%	Modulus (division remainder)	x = y % 2	y = 5	x = 1	
++	Increment	x = ++y	        y = 6	x = 6	
                x = y++	        y = 6	x = 5	
--	Decrement	x = --y	        y = 4	x = 4	
                x = y--	        y = 4	x = 5	
*/

//EXAMPLES OF UNARY OPERATORS
/*Operator	Explanation
Unary plus (+)	Tries to convert the operand into a number
*Unary negation (-) *	Tries to convert the operand into a number and negates after
Logical Not (!)	Converts to boolean value then negates it
Increment (++)	Adds one to its operand
Decrement (--)	Decrements by one from its operand
Bitwise not (~)	Inverts all the bits in the operand and returns a number
typeof	Returns a string which is the type of the operand
delete	Deletes specific index of an array or specific property of an object
void	Discards a return value of an expression.
*/
//working example of unary operator
var fName = 'Chukwunonso';
var lName = 'Eweni';
var sum = 0;
var myArray = [2,4,6,7,8,5];
console.log(fName + ' '+ lName);// operator (+) is used for concatenation
console.log(5-3);//operator (-) is used for arithmetic operation
console.log(3 !== '3');//operator (!) is used for boolean operation
console.log(sum++);//increments the value of sum by 1 therefore sum = 1
console.log(sum--);//decrements the value of sum by 1 therefore sum = 0
console.log(typeof ('value'));//operator (typeof) is used for check/print the type of variable prints string
console.log(delete(myArray[3]));// operator delete removes the value in myArray at position 3 and prints [2,4,6,8,5]
console.log(5 & 13); // 0101 & 1101 = 0101, expected output: 5;
void function test() {
  console.log('boo!');
  // expected output: "boo!"
}();

try {
  test();
}
catch(e) {
  console.log(e);
  // expected output: ReferenceError: test is not defined
}

//working example of ternary operator
// The conditional (ternary) operator is the only JavaScript operator that takes three operands. 
// This operator is frequently used as a shortcut for the if statement.
//example
function getFee(isMember) {
  return (isMember ? "$2.00" : "$10.00");
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(1));
// expected output: "$2.00"

/*COMPARISON OPERATORS
JavaScript has both strict and type–converting comparisons. 
A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match. 
The more commonly-used abstract comparison (e.g. ==) converts the operands to the same type before making 
the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, 
then to the same type, before comparison.

EXAMPLES
*/console.log(1 == 1);
// expected output: true

console.log("1" == 1);
// expected output: true

console.log(1 === 1);
// expected output: true

console.log("1" === 1);
// expected output: false
3 === 3   // true
3 === '3' // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'};
object1 === object2 //false
4 >= 3 // true
3 >= 3 // true
