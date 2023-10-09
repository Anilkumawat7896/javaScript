/* map function */

/* map jo h vo har ek value par operation krne ke kaam aata h  */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const returnedValues = numbers.map((nums) => nums + 10);

//now chaining

const returnedValues = numbers
  .map((nums) => nums * 10)
  .map((nums) => `for ${nums / 10} new value is ${nums}`);


//   you can use any numbrs of checks / filters here can use filter method as well
console.log(returnedValues);
