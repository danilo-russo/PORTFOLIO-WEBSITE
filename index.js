let hiddenElement1 = document.getElementsByClassName("hidden")[0];
let hiddenElement2 = document.getElementsByClassName("hidden")[1];
let hiddenElement3 = document.getElementsByClassName("hidden")[2];
let textbutton1 = document.getElementsByClassName("namePro")[0];
let textbutton2 = document.getElementsByClassName("namePro")[1];
let textbutton3 = document.getElementsByClassName("namePro")[2];

function hidden1() {
  if (hiddenElement1.style.display === "block") {
    hiddenElement1.style.display = "none";
  } else {
    hiddenElement1.style.display = "block";
  }
}

function hidden2() {
  if (hiddenElement2.style.display === "block") {
    hiddenElement2.style.display = "none";
  } else {
    hiddenElement2.style.display = "block";
  }
}

function hidden3() {
  if (hiddenElement3.style.display === "block") {
    hiddenElement3.style.display = "none";
  } else {
    hiddenElement3.style.display = "block";
  }
}

textbutton1.addEventListener("click", hidden1);
textbutton2.addEventListener("click", hidden2);
textbutton3.addEventListener("click", hidden3);
