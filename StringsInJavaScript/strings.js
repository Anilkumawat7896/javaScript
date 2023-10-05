// declearing Strings

const fname = "Anil";
const lname = "Kumawat";

// const fullName = fname + " " + lname;

// console.log(fullName);

/*  this is the old way to write strings  */

/*  now the mordan syntex for Strings */

const fullName = `Full name of usr is ${fname} ${lname}`;

console.log(fullName);

/*  Now the methods for strings which are available  */

const testString = `Madara Uchiha is called the Ghost of Uchiha `;

// to find the length of string

console.log(testString.length);

/* for to find the character code of the given index  */

console.log(testString.charCodeAt(20));

/* to create a substring of the string and 
        here the first index 5 is included but the last index 20 is not included and yes the string indexing starts form 0
*/
console.log(testString.substring(5, 20));

/* to replace the string of chgunk of string with other string  */
console.log(
  testString.replace(
    "called the Ghost of Uchiha",
    "The First Uchiha who had Eternal mangekyu Sharingun"
  )
);

/* the index of method or function gives the index of the character passed in it but if we pass a string then it will search the string in the  given string and return the index accouding to it  */

console.log(testString.indexOf("Madara"));
console.log(testString.indexOf("a"));

/* we can check or ask the string is it contains something we want to search or not  */

console.log(testString.includes("Uchiha"));

/* to make the array of string use split it will give a array of string on the basses of passed string  */

console.log(testString.split(" "));

/* if the string contains extra spaces at the end and start then trim can remove that  */

console.log(testString.trim());

const trimString = `         hellooooo         form         me                `;

console.log(trimString.trim());

/* in this method we have a regx expression it will check every character of all the constrains int the regx expression we have 2 falgs here g is for globle if this flag is there if will give all the matching values if not there then it will give the first matched value only and for the i flag it will ignore the case sensitivity and check for the values */

//  refer to the docs for more information
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match */

const regx = /[A-Z]/gi;
console.log(testString.match(regx));

/* that's all to it and the remaining the mthoda like toLowerCase and like that we can do that and if want you can check the documantation of mdn */
