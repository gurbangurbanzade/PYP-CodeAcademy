let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let zone = document.querySelector(".left");
let easy = document.querySelector(".easy");
let medium = document.querySelector(".medium");
let hard = document.querySelector(".hard");
let textName = document.querySelector(".textName");
let textScore = document.querySelector(".textScore");
let input = document.querySelectorAll("input");
let audio = document.querySelectorAll(".audio");

let x = 0;
let y = 0;
let arr = [];

// Create bubble-------------------------------------------------------
let createBubble = function () {
  let bubble = document.createElement("div");
  bubble.className = "bubble";
  // bubble.innerHTML = "10";
  bubble.style.top = `${Math.floor(Math.random() * 650)}px`;
  bubble.style.left = `${Math.floor(Math.random() * 950)}px`;
  zone.appendChild(bubble);
  // Delete bubble-------------------------------------------------------
  bubble.addEventListener("click", function () {
    this.style.display = "none";
    // Get Result-------------------------------------------------------
    if (input[0].checked) {
      x += 10;
      textScore.innerHTML = `Score: - ${x}`;
    }
    if (input[1].checked) {
      x += 20;
      textScore.innerHTML = `Score: - ${x}`;
    }
    if (input[2].checked) {
      x += 30;
      textScore.innerHTML = `Score: - ${x}`;
    }
  });
};

// Start bubble-------------------------------------------------------
start.addEventListener("click", function () {
  textName.innerHTML = `Name: ${prompt("Adınızı daxil Edin")}`;
  textScore.innerHTML = `Score: - ${0}`;
  createBubble();
  easyTime = setInterval(() => {
    createBubble();
  }, 3000);
});

// Checkbox select-------------------------------------------------------
for (let box of input) {
  box.addEventListener("click", function () {
    for (let box of input) {
      if (box.className !== this.className) {
        box.checked = false;
      }
    }
  });
}
// Interval select-------------------------------------------------------
let easyTime;
let mediumTime;
let hardTime;

input[0].addEventListener("click", function () {
  clearInterval(mediumTime);
  clearInterval(hardTime);
  easyTime = setInterval(() => {
    createBubble();
  }, 3000);
});
input[1].addEventListener("click", function () {
  clearInterval(easyTime);
  clearInterval(hardTime);
  mediumTime = setInterval(() => {
    createBubble();
  }, 2000);
});
input[2].addEventListener("click", function () {
  clearInterval(mediumTime);
  clearInterval(easyTime);
  hardTime = setInterval(() => {
    createBubble();
  }, 1000);
});
// Stop bubble-------------------------------------------------------
stop.addEventListener("click", function () {
  clearInterval(easyTime);
  clearInterval(mediumTime);
  clearInterval(hardTime);
  for (let box of input) {
    box.checked = false;
  }
  zone.innerHTML = "";

  arr.push({ Name: textName.innerHTML, Score: `${x}` });
  localStorage.setItem("array", JSON.stringify(arr));
  // localStorage.setItem("name",`${textName.innerHTML}`);
  // localStorage.setItem("score":`${x}`);

  console.log(arr);
  console.log(localStorage);
});

console.log(JSON.parse(localStorage.getItem("array")));

// Lokal Storage List
let records = JSON.parse(localStorage.getItem("array"));
let ul = document.querySelector("ul");
console.log(records);

let arr2 = [];
for (let elem of records) {
  arr2.push(elem.Score);
  console.log(arr2.sort((a, b) => b - a));
}
// console.log(records[0].Score);
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < records.length; j++) {
    if (arr2[i] == records[j].Score) {
      let li = document.createElement("li");
      li.className = "list-item";
      ul.appendChild(li);
      li.innerHTML = `${records[j].Name} ---- Score: ${records[j].Score}`;
      break;
    }
  }
}

zone.addEventListener("click", function () {
  audio.play();
});
