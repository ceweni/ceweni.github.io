//Loops can execute a block of code a number of times.
/*JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
*/
 var text = '';
for (var i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

/*The while loop loops through a block of code as long as a specified condition is 
true.

while (condition) {
  // code block to be executed
}

do {
  // code block to be executed
}
while (condition);
*/

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

while (cars[i]) {
  text += cars[i] + "<br>";
  i++;
}

//EXAMPLE OF for-in loop
var string1 = "";
var object1 = {a: 1, b: 2, c: 3};

for (var property1 in object1) {
  string1 += object1[property1];
}

console.log(string1);
// expected output: "123"

//Looping backwards we can
let a = [1,2,3,4,5,6,7,8,9];
let b = [];
for (var i = a.length-1; i >=0; i--){//iterates starting from the last index of array a
  b.push(a[i]);// pushes each element of a in array b
}console.log(b)//prints [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

//Looping forward
let c = [];
for (var i = 0; i < a.length; i++){
  c.push(a[i]);//pushes the elements of array a into array c 
}
  c.pop();//removes an element from array c at the first index
  c.shift()//removes an element from array c at the last index
  c.unshift('score');// pushes a value into array c at the first index
  console.log(c);// prints ['score',2,3,4,5,6,7,8]