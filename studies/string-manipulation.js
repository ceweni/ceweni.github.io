//JavaScript strings are used for storing and manipulating text.
var answer2 = "He is called 'Johnny'"; // assigning value to a string
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length; // to get the length of a string

var x = "The character \\ is called backslash."; // inserts a backlash in a string
/* Special characters in a string
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
*/

/*The indexOf() method returns the index of (the position of) the first occurrence of a 
specified text in a string:
*/
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

//slice() extracts a part of a string and returns the extracted part in a new string.
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

/*substring() is similar to slice().

The difference is that substring() cannot accept negative indexes.
*/
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);

//The concat() method can be used instead of the plus operator. These two lines do the same:
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

//usint .trim() method
 str = '     the secrete to life is life .     ';
console.log(str.trim())//"the secrete to life is life"

//using .toUpperCase()
str = 'the screte to life is life';
console.log(str.toUpperCase());//"THE SECRETE TO LIFE IS LIFE"

//Using .toLowerCase()
let a = 'CHICAGO CITY';
console.log(a.toLowerCase());//'chicago city'

//using .split()
 x = 'the quick brown fox jumped over the lazy dog';

console.log( x.split(' '));//['the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog']

//using charAt()
console.log(x.charAt(16));//'f'