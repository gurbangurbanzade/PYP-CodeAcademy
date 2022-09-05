let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let zone = document.querySelector(".left");
let easy = document.querySelector(".easy");
let medium = document.querySelector(".medium");
let hard = document.querySelector(".hard");
let text = document.querySelector(".text");

start.addEventListener("click", function () {
  let x = 0;
  let yarat = function () {
    let bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.top = `${Math.floor(Math.random() * 500)}px`;
    bubble.style.left = `${Math.floor(Math.random() * 1000)}px`;
    zone.appendChild(bubble);
    text.innerHTML = `Score - ${x}`;
  };
  yarat();
  let min = setInterval(() => {
    clearInterval(ikimin);
    clearInterval(ucmin);
    let bubbleDiv = document.querySelectorAll(".bubble");
    for (let elem of bubbleDiv) {
      elem.addEventListener("click", function () {
        console.log("salam");
        elem.style.display = "none";
        x = x + 10;
      });
    }
    yarat();
    text.innerHTML = `Score - ${x}`;
    console.log("1");
  }, 3000);
  let ikimin;
  let ucmin;
  easy.addEventListener("click", function () {
    clearInterval(ikimin);
    clearInterval(ucmin);
    ikimin = setInterval(() => {
      console.log("1");
      let bubbleDiv = document.querySelectorAll(".bubble");
      for (let elem of bubbleDiv) {
        elem.addEventListener("click", function () {
          console.log("salam");
          elem.style.display = "none";
          x = x + 10;
          text.innerHTML = `Score - ${x}`;
        });
      }
      yarat();
    }, 3000);
  });
  medium.addEventListener("click", function () {
    clearInterval(min);
    clearInterval(ucmin);
    ikimin = setInterval(() => {
      yarat();
      console.log("2");
      let bubbleDiv = document.querySelectorAll(".bubble");
      for (let elem of bubbleDiv) {
        elem.addEventListener("click", function () {
          console.log("salam");
          elem.style.display = "none";
          x = x + 20;

          text.innerHTML = `Score - ${x}`;
        });
      }
    }, 2000);
  });

  hard.addEventListener("click", function () {
    clearInterval(min);
    clearInterval(ikimin);
    ucmin = setInterval(() => {
      yarat();
      console.log("3");
      let bubbleDiv = document.querySelectorAll(".bubble");
      for (let elem of bubbleDiv) {
        elem.addEventListener("click", function () {
          console.log("salam");
          elem.style.display = "none";
          x = x + 30;

          text.innerHTML = `Score - ${x}`;
        });
      }
    }, 1000);
  });
});
// let yarat = setInterval((x) => {
//   console.log(x);
//   medium.addEventListener("click", function () {
//     yarat(50);
//   });
//   medium.addEventListener("click", function () {
//     x = 10;
//     yarat(x);
//   });
// }, x);
