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
