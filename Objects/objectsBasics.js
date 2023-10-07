const data = {
  fname: "Anil",
  lname: "Kumawat",
  age: 24,
  education: {
    tenth: 88.67,
    twelth: 84.6,
    gaduation: 70.0,
  },

  exprience: "6 months",
  "full name" :"Anil Kumawat"
};

//  two ways to access object methods

console.log(data.education["twelth"]);
console.log(data.education.twelth);
console.log(data["full name"]);


//  Destructuring

const { age,education } = data;

console.log(age);
console.log(education);
