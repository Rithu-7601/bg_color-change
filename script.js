const get = document.getElementById("btn");
const set = document.body;
const colors = ["red", "green", "blue", "yellow", "pink", "orange"];

set.style.backgroundColor = "pink";
get.addEventListener("click", changeBackground);

function changeBackground() {
  const colorIndex = Math.floor(Math.random() * colors.length); //parseInt(Math.random() * colors.length)
  set.style.backgroundColor = colors[colorIndex];
}
