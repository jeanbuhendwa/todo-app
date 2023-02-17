var button = document.getElementById("button");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}
function addTask() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}
function addClick() {
  if (inputLength() > 3) {
    addTask();
  }
}
function addPress(ev) {
  var key = ev.keyCode;
  if (inputLength() > 3 && key === 13) {
    addTask();
  }
}
button.addEventListener("click", addClick);
button.addEventListener("keypress", addPress);
