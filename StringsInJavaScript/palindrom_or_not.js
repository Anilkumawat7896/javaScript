/* 

Palindrome Checker:
    Write a function that checks if a given string is a palindrome (reads the same forwards and backward).

*/

const myString = `once a fox tried to climb a tree`;

const tempp = myString.split(" ").reverse().join(" ");

// console.log(` my string is --> ${myString} and tempp string is --> ${tempp}`);

if (myString === tempp) {
  console.log(`String is Palindrom`);
} else {
  console.log(`String is not palindrom`);
}
