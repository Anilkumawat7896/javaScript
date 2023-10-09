/*     
    filter method
*/

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// /* filter takes a callback function  */

// // this is not returnning any thing why?
// const returnedValues = myArray.filter((nums) => {
//   // because we have not returned anything from here
//   //   nums > 4;
//   return nums > 4;
// });

// // or we can modify the arrow function as well

// const returnedValues1 = myArray.filter((nums)=>(nums+1 >= 5))

// console.log(returnedValues1);

/******************************************************************/



/* Filter true ya false vala game h  */


const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userBooks = books.filter((book) => {
  // you can add more conditions here to get specific values
  return book.genre === "Science";
});

console.log(userBooks);
