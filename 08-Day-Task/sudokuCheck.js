let condidate = document.querySelectorAll(".candidates");
let numberBtn = document.querySelectorAll(".number-control");
let switchBtn = document.querySelector("#candidate-switch");

//------------------------------------Clicked BG Yellow---------------------
for (item of condidate) {
  item.parentElement.addEventListener("click", function () {
    // item.parentElement.classList.add("selected");
    // console.log(this);
    for (item of condidate) {
      item.parentElement.classList.remove("selected");
    }
    this.classList.add("selected");
  });
}
//------------------------------------Clicked Box Number--------------------

for (btn of numberBtn) {
  btn.addEventListener("click", function () {
    for (item of condidate) {
      if (item.parentElement.className == "selected" && !switchBtn.checked) {
        item.parentElement.children[1].innerText = this.innerText;
      } else if (
        item.parentElement.className == "selected" &&
        switchBtn.checked
      ) {
        if (
          item.parentElement.children[0].innerText.includes(`${this.innerText}`)
        ) {
          item.parentElement.children[0].innerText =
            item.parentElement.children[0].innerText.replace(
              `${this.innerText}`,
              ""
            );
        } else {
          item.parentElement.children[0].innerText += this.innerText;
        }
        item.parentElement.children[0].innerText =
          item.parentElement.children[0].innerText.split("").sort().join("");
      }
    }
  });
}
//------------------------------------Check Sudoku--------------------

//------------------------------------Add Class--------------------
let valueBox = document.querySelectorAll(".value");
let tdBox = document.querySelectorAll(".given-number");
for (let item of valueBox) {
  item.classList.add("checkItem");
  // console.log(item);
}
for (let item of tdBox) {
  item.classList.add("checkItem");
  // console.log(item);
}

let checkItems = document.querySelectorAll(".checkItem");
let sudokuBtn = document.querySelector(".sudokuBtn");
let table = document.querySelector("#wrapper");

//------------------------------------Check Sudoku--------------------
sudokuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < checkItems.length; i += 9) {
    let numberList = "";
    for (let j = 0 + i; j < i + 9; j++) {
      numberList += checkItems[j].innerText;
    }
    if (numberList.split("").sort().join("") !== "123456789") {
      console.log("sehvdir");
      table.style.backgroundColor = "red";
      setTimeout(() => {
        table.style.backgroundColor = "white";
      }, 2000);
      break;
    }
    numberList = "";
    for (let j = 0 + i; j < i + 9; j++) {
      numberList += checkItems[j].innerText;
    }
    if (numberList.split("").sort().join("") !== "123456789") {
      console.log("sehvdir");
      table.style.backgroundColor = "red";
      setTimeout(() => {
        table.style.backgroundColor = "white";
      }, 2000);
      break;
    }

    // kvadratlarin icinin yoxlanmasi
    let arr = ["", "", "", "", "", "", "", "", ""];
    let x = 0;
    for (let i = 0; i < checkItems.length - 8; i += 9) {
      arr[x] += checkItems[i].innerText;
      arr[x] += checkItems[i + 1].innerText;
      arr[x] += checkItems[i + 2].innerText;
      arr[x + 1] += checkItems[i + 3].innerText;
      arr[x + 1] += checkItems[i + 4].innerText;
      arr[x + 1] += checkItems[i + 5].innerText;
      arr[x + 2] += checkItems[i + 6].innerText;
      arr[x + 2] += checkItems[i + 7].innerText;
      arr[x + 2] += checkItems[i + 8].innerText;

      // console.log(checkItems[i].innerText);
      // console.log(checkItems[i + 1].innerText);

      // console.log(checkItems[i + 2].innerText);

      //         if(arr[x].length=="9"){
      // x+=3;
      //         }
      // console.log("salam");

      if (arr[x].length == "9") {
        x += 3;

        // console.log("salam");
      }
      // break;
    }
    // kvadratlarin icinin yoxlanmasi serti
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].split("").sort().join("") !== "123456789") {
        console.log("sehvdir");
        table.style.backgroundColor = "red";
        setTimeout(() => {
          table.style.backgroundColor = "white";
        }, 2000);
        break;
      }
    }
    // console.log(arr);

    table.style.backgroundColor = "#3cde14";
  }
});
