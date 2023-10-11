// brute force approch or could say general first timer approch

function addLanguage(langName) {
  const li = document.createElement("li"); // created a li
  li.innerHTML = `${langName}`; // you added text in the li with inner html
  document.querySelector(".language").appendChild(li); // then you appended the li in the ul with it's class name
}

addLanguage("java");
addLanguage("C++");
addLanguage("python");

// optimal approch  ---------------------------------------------------------------------------

function optimalAddLanguage(langName) {
  const li = document.createElement("li"); // created the li
  const textNode = document.createTextNode(langName); // You created a text node which is a batter approch
  li.appendChild(textNode); // than this text node is appended as a chind in the created li
  document.querySelector(".language").appendChild(li); // appended or added the li in the ul which have "language"  class name
}

optimalAddLanguage("golang");
optimalAddLanguage("rust");
optimalAddLanguage("ruby");

/************************************************************************************************/

/* now edit the values */

const secondLang = document.querySelector("li:nth-child(2)");

// not good approch
// secondLang.innerHTML = "MOJO"

// another approch

const newLI = document.createElement("li");

newLI.textContent = "mojo";

secondLang.replaceWith(newLI);

const firstLang = document.querySelector("li:first-child");

firstLang.outerHTML = "<li>TypeScript</li>";

/**********************************************************************************/

/* Remove DOM element  */

const lastChild = document.querySelector("li:last-child");

lastChild.remove();
