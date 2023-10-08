/* 

    we are going to learn forof loop here for of loop is just a simple syntex of other loops and here the object is not refered as the javascript objects but the general objecs like cat rat etc
*/

/*  for an array    it  will perint simply all the elemenst of array and print them with a new line  */

/* const numbers = [1,2,3,4,5,6,7,8]

for (const nums of numbers) {
    console.log(nums);
}
 */

/*************************************************************/

// for a String   // this will print all the characters of the string and you can easily operate on the characters if you want

/* const greetings = `Hellow Everyone !`

for (const greet of greetings  ) {  
    console.log(greet);
} */

/************************************************************************/

// for a Map // map are like objects the hold key value pairs and the hold them with order the specility of Maps is the hold unique value they do not store duplicate values

/* const map = new Map();

//  to insert values in map

map.set("name", "Anil Kumawat");
map.set("branch", "CSE");
map.set("year", "4th year ");
map.set("Session", "2019-2023");


// [key,value ] this is called array destructuring like object destructuring 
for (const [key,value] of map) {
  console.log(`${key} :- ${value}`);
}
 */

/*****************************************************************************/

//  for objects  // objects are not iteratable with forof loop 

/* const countryCode = {
  IN: "India",
  US: "United State Of America",
  BH: "Bharat",
  FR: "France",
};

for (const conCode of countryCode) {
  console.log(conCode);
}
 */


/************************************************/