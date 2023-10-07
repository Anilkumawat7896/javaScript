/* 

now about this keyword and properties

*/

// const user = {
//   username: "Anil",
//   phoneNumber: 7023664105,
//   welcomeMessage: function () {
//     // console.log(`Welcome ${username} we are glad to be with You!!!`);   // we are not able to use this username propertie here because it does not get the refrence here

//     console.log(`Welcome ${this.username} we are glad to be with You!!!`); //now we  can use usrname because we have given it the refrance to the current user using this keyword

//     /* what is the real mean of context if we try to print this values within the object  */

//     console.log(this);
//   },
// };

// user.welcomeMessage   //this will not show any output because welcome message is a function expression and it is not executed

// user.welcomeMessage();

// user.username = "Mohan";

// user.welcomeMessage();

// console.log(this);  //it will give an empty object because at the globel scope it does not have any context to refer

/*********************************************************************************************************************************** */

// function trythis() {
//   const name = "Iron Man";
//   console.log(this.name); // so this only works in the object to refer the current context but not in functions
// }

// trythis();

/**************************************************************************************************************************************/

/* now Arrow Functions  */

/* First type of syntex */

// const addTowNumbers = (num1, num2) => {
//   return num1 + num2;
// };

/* Second type of syntex */

// const addTowNumbers = (num1, num2) => num1 + num2;

/* Third type of syntex */

// const addTowNumbers = (num1, num2) => (num1 + num2)

// console.log(addTowNumbers(5, 6));

/* what if we want to return a  object from a arrow function */

// const returnObjFromArrowFun = () => ({username: "Anil"});

// console.log(returnObjFromArrowFun());



/**********************************************************************************************************************************************/

