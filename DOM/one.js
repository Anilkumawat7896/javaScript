// console.log(window.document)

// console.log(document)

/*******************************************************************************************************/
/* selector method  */

// document.getElementById("give id here ")   //  you can store this id element in a variable too

/* this will only select the element and give the element can not operate on that */

// const heading = document.getElementsByClassName('heading')

// console.log(heading)

// here you can actually manipuilate the element

/* const heading  = document.querySelector('.heading')

heading.innerText = "Hellow" 
 */
/************************************************************************************************/
/*    select a element     */

/* document.getElementById('give id  name here')

document.getElementsByTagName('give tag name here')

document.getElementsByClassName("give class name here") */

// document.querySelector(' if this is  a id the use this --> #id_name')

// document.querySelector('if this is a class then use this --> .className here')

/* if you want ot select multiple elemtns  */

// document.querySelectorAll('id and class name would follow the   --> 3 and  . syntex but it will select all the elemnts by that name ')

// in query selector you can even select the element by it's tag name

// you can hold all these values in  a variable

/* how to set attributes in the html elemnt we have set methods like  */

// document.getElementsByClassName('.some_randome_className').setAttribute('class','class name here')

// document.getElementById('some_random_Id_name_here').setAttribute('attribute','attribute_value')

/**************************************************************************************************/

/* exmples  changing the heading backgorund and color simple stuff */

/* const heading = document.getElementsByClassName('heading')
// because the getElementsByClassName method give a htmlCollection 
console.log(heading[0].innerText)
 */

// const heading = document.getElementById("heading");
//  getElementById gives the whole element not the htmlCollection
// console.log(heading)

// heading.style.backgroundColor = "green";
// heading.style.color = "black";

/*  now changing the paragraph text size and background color and text colors */

// const para = document.querySelector("p");
// successfully selected paragraph using query selector by passing the tag name
// console.log(para.innerText)

// para.style.backgroundColor = "Yellow";
// para.style.color = "Black";

// para.style.padding = "10px";
// para.style.fontSize = "25px";

/******************************************************************************************************/

/* selecting unordered list  */

/* 
const myUList = document.querySelector('ul')
// successfully selected the unorderd list 
// console.log(myUList)

// now we need to select the first list item of this ul list
const childsOfMyList  = myUList.querySelector('li')

// console.log(childsOfMyList)

childsOfMyList.style.backgroundColor = "green"
childsOfMyList.style.padding = "15px"

childsOfMyList.innerText = "First Item of this List" */

/*******************************************************************************************************/

// const allList = document.querySelectorAll("li");
// // successfully selected all the list items from the unorderd list
// // console.log(allList)
// let i = 1;
// allList.forEach((items) => {
//   items.innerText = `${i++} yes you are in all the functionility`;
//   items.style.color = "Yellow";
//   items.style.backgroundColor = "Red";
// });


/*******************************************************************************************************/

// convert html colletion to array

// Array.from(HtmlColetion_name)  // now you can use map reduce or filter functions if you want




