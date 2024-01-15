const main = document.getElementById("main");
const header = document.getElementsByClassName("header");
const card = document.getElementById("card");
const key = document.getElementById("key");

function displayButton(e) {
  card.style.display = "block";
  console.log(e);
  card.innerHTML = `<h1>${e.keyCode}</h1>`;
  key.innerHTML = `${e.key}`;
  console.log(card);
  console.log("key");
}

window.addEventListener("keypress", displayButton);
