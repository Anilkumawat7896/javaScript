const myDate = new Date()

console.log(myDate);

/* for the date month and year saprately */
console.log(myDate.getDate());

console.log(myDate.getMonth());

console.log(myDate.getFullYear());

/* to convert date into string */
console.log(myDate.toDateString());

/* it will give date in this format 5/10/2023, 9:03:58 pm */
console.log(myDate.toLocaleString());

/* this will give the date only like 11/02/2000 */
console.log(myDate.toLocaleDateString());

/* 2023-10-05T15:35:43.976Z  in this format date will be provided */
console.log(myDate.toJSON());

console.log(Math.round(Date.now()/1000));

/* wether user is 18 years old or not  */

function isUser18yearsOld(userBOD) {
  if (new Date().getFullYear() - userBOD.getFullYear() > 18) return true;

  return false;
}
const userBOD = new Date("2001/02/11");

isUser18yearsOld(userBOD)
  ? console.log(`User is above 18 year old`)
  : console.log(`User is not above 18 year old `);
