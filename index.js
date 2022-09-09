let hiddenElement1 = document.getElementsByClassName("hidden")[0];
let hiddenElement2 = document.getElementsByClassName("hidden")[1];
let hiddenElement3 = document.getElementsByClassName("hidden")[2];
let textbutton1 = document.getElementsByClassName("namePro")[0];
let textbutton2 = document.getElementsByClassName("namePro")[1];
let textbutton3 = document.getElementsByClassName("namePro")[2];
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let aTime = 0;
let bTime = 0;
let cTime = 0;
let dTime = 0;

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

setInterval(() => {
  aTime++;
  a.innerHTML = aTime;
  if (aTime === 999) {
    aTime = 0;
    a.innerHTML = aTime;
    bTime++;
    b.innerHTML = bTime;
    if (bTime === 999) {
      bTime = 0;
      b.innerHTML = bTime;
      cTime++;
      c.innerHTML = cTime;
    }
    if (cTime === 999) {
      cTime = 0;
      c.innerHTML = cTime;
      dTime++;
      d.innerHTML = dTime;
    }
  }
}, 1000);
