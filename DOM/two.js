/* now we will learn to create html elements  */

//  selected parent div

const parent = document.querySelector(".parent");

// console.log(parent)

// console.log(parent.children)  // gives html colletion

// console.log(parent.children[1].innerText)
// console.log(parent.children[0].innerHTML)

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerText);
// }

/* going parent ot child  */

// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)

/* going from child to parent  */

const dayOne = document.querySelector(".day");
// console.log(dayOne.parentElement)

/* going to sibling */

// console.log(dayOne.nextElementSibling)

/* Node list */

console.log("Nodes", parent.childNodes);

/***********************************************************************************************************/

// creating

const div = document.createElement("div"); // only div is created

div.className = "firstChild"; // added class to the div we created

div.id = "first_child_id"; // only id is atteched to the div we created

div.setAttribute("title", "first child of parent"); //attributes are injected

div.style.backgroundColor = "green"; // set the styling

div.style.padding = "10px"; // set the styling

// div.innerText = "Hellow ! I'm the child of the parent div";  // now the content is added

// but this way of adding content is not much optimized so there is another way we need to create a TEXtNODE

const textForDiv = document.createTextNode(
  "Hellow ! I'm the child of the parent div"
); // now the node is created

div.appendChild(textForDiv); // now the text in the div is atteched

document.body.appendChild(div); // now the child or the div we created is appended to the document or our web browser page
