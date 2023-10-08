/* forEach loop  is attaced to the array functions and by default it goies to all elemts of array one by one and we can iterate it  */

/* const programingLanguages = [
  "c++",
  "java",
  "python",
  "javascript",
  "golang",
  "ruby",
  "rust",
  "php",
];
 */
// this item is a variable name we can take any name here

// programingLanguages.forEach((items) => console.log(items));

/******************************************************************************/

//  we can give a function refrence to it also // BECAREFUL  give refrance to it only

/* 
programingLanguages.forEach(printItems)

function printItems(items){
    console.log(items);
}
 */

/***************************************************************************/

/* for each also contains the indexes and the whole array too */

/* programingLanguages.forEach((val, index, arr) => {
  console.log(`${index} :- ${val} in array :--- ${arr} `);
});
 */

const languageSyntex = [
  {
    languageName: "javaScript",
    extention: "js",
  },
  {
    languageName: "java",
    extention: "java",
  },
  {
    languageName: "pythone",
    extention: "py",
  },
  {
    languageName: "PHP",
    extention: "php",
  },
];

/* this is the destructuring syntex */

// languageSyntex.forEach(({ languageName, extention }) => {
//   console.log(`${languageName} :--  ${extention}`);
// });


/* now normal syntex */

languageSyntex.forEach((items) => {
  console.log(`${items.languageName} :--  ${items.extention}`);
});