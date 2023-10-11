// selecting body to change background

const background = document.querySelector(".main");

/*********************/

//  selecting button to change background

const button = document.querySelectorAll(".button");

button.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "blue") {
      background.style.backgroundColor = `${e.target.id}`;
    }
    if (e.target.id === "yellow") {
      background.style.backgroundColor = `${e.target.id}`;
    }
    if (e.target.id === "red") {
      background.style.backgroundColor = `${e.target.id}`;
    }
    if (e.target.id === "white") {
      background.style.backgroundColor = `${e.target.id}`;
    }
  });
});
