/* Reduce */

const price = [199, 119, 299, 259, 459, 399];

//  yaha par curVal mtlb current value h jo array ki sari values ek ek karke access krta h  or acc accumulater h juski value hume deni hoti h

// for better understand I'm going to write it in normal function format

const result = price.reduce(function (acc, curVal) {
  return acc + curVal;
}, 0); // ha ji accumulator ki initial value jo hum dete h vo yaha pas hoti h

// const result = price.reduce((acc, curVal) => acc + curVal, 0);

console.log(result);

/**************************************************************/

const course = [
  {
    name: "javascript",
    author: "Hitesh Coudhary",
    prise: 199,
  },
  {
    name: "javascript",
    author: "Akshay Saini",
    prise: 4599,
  },
  {
    name: "java",
    author: "Manish Sandliya",
    prise: 5000,
  },
  {
    name: "c++",
    author: "Love babbar",
    prise: 3600,
  },
  {
    name: "guidance",
    author: "Tanay Bhaiya",
    prise: 0,
  },
];

const totlePrise = course.reduce((acc, { prise }) => acc + prise, 0);

console.log(`totle prise of all courses you have bought is : ${totlePrise}`);