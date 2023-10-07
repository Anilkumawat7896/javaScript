/* functions means we have bound the 10 20 or may be more line of code into a package and whenever we want we can take it or access it that's what functions means */

/* this is the default value concept if user does not give any value than this value will be given that means if will naver go in the if check at minimum username possible value is "sam" */
function isLoggedIn(username = "sam") {
  // if(username === undefined){
  //     console.log(`Please enter a valid user name`);
  //     return
  // }
  /* or */

  if (!username) {
    console.log(`Please Enter a valid User name`);
    return;
  }

  return `${username} just logged in`;
}

// console.log(isLoggedIn("Anil Kumawat"));

//  if we do not pass anything then by default it will give undefined
console.log(isLoggedIn());

/* normal treditional function */

function addTwoValues(num1, num2) {
  return num1 + num2;
}

addTwoValues(5, 6);

/* function expression */
const substractTwoValues = function (num1, num2) {
  return num1 - num2;
};

substractTwoValues(5, 4);
