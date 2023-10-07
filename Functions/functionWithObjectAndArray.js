/*

a secneio like a shopping cart list where we do not know that how many items will be added in the cart by the user
means we don't know how many argumants are going to come in the function something like that 

to handle conditions like that we can do somthing like this

*/

function calculateCartPrise(...items) {
  // REST operator gives a array and we can operate on array easily like that

  let sumTotle = 0;

  for (let i = 0; i < items.length; i++) {
    sumTotle = sumTotle + items[i];
  }
  return sumTotle;
}

/* now what in the given scenerio user can give add multiple itms and in that case all tha values should be add up and we can not define how many numbers or parameter we need to recive at the function end point so we can use the rest operator which is (...)  yes yes i know we call it spread operator too but on the depandant situation the naming convetion changes but the operation is same for example  */

// console.log(calculateCartPrise(149));

console.log(calculateCartPrise(149, 299, 1099, 249,15000));









/*********************************************************************************************************************************************** */


