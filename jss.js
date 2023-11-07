document.addEventListener("DOMContentLoaded", () => {
  counter();
});

function counter() {
  let timer = document.getElementById("timer");
  let myCounter = sessionStorage.getItem("counter");
  if (myCounter) {
    myCounter = JSON.parse(myCounter);
  } else {
    myCounter = 0;
  }

  setInterval(function () {
    myCounter++;
    sessionStorage.setItem("counter", JSON.stringify(myCounter));
    timer.innerText = myCounter;
  }, 1000);
}
