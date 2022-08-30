let btnAll = document.querySelectorAll(".game-square");
// console.log(btnAll);
let playerNumber = document.querySelector("#game-heading");
let restartBtn = document.querySelector("#restart-button");
let count = 0;
/////////////////////// butun buttonlar for a salinir///////////
for (let btn of btnAll) {
  //   console.log(btn);
  btn.addEventListener("click", function () {
    if (playerNumber.innerHTML == "Players 1's Turn") {
      btn.innerHTML = "X";
      playerNumber.innerHTML = "Players 2's Turn";
      btn.disabled = true;
    } else {
      btn.innerHTML = "O";
      playerNumber.innerHTML = "Players 1's Turn";
      btn.disabled = true;
    }
    // console.log("salam");
    //////////////// Xanalarin yoxlanmasi//////////////////
    if (
      btnAll[0].innerHTML == btnAll[1].innerHTML &&
      btnAll[1].innerHTML == btnAll[2].innerHTML &&
      btnAll[1].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[3].innerHTML == btnAll[4].innerHTML &&
      btnAll[4].innerHTML == btnAll[5].innerHTML &&
      btnAll[4].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[6].innerHTML == btnAll[7].innerHTML &&
      btnAll[7].innerHTML == btnAll[8].innerHTML &&
      btnAll[7].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[0].innerHTML == btnAll[3].innerHTML &&
      btnAll[3].innerHTML == btnAll[6].innerHTML &&
      btnAll[3].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[1].innerHTML == btnAll[4].innerHTML &&
      btnAll[4].innerHTML == btnAll[7].innerHTML &&
      btnAll[4].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[2].innerHTML == btnAll[5].innerHTML &&
      btnAll[5].innerHTML == btnAll[8].innerHTML &&
      btnAll[5].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[0].innerHTML == btnAll[4].innerHTML &&
      btnAll[4].innerHTML == btnAll[8].innerHTML &&
      btnAll[4].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    if (
      btnAll[2].innerHTML == btnAll[4].innerHTML &&
      btnAll[4].innerHTML == btnAll[6].innerHTML &&
      btnAll[4].innerHTML !== ""
    ) {
      this.innerHTML == "X"
        ? (playerNumber.innerHTML = "Player 1 Won!")
        : (playerNumber.innerHTML = "Player 2 Won!");
      restartBtnBlock();
    }
    ////////////////////// Tie game/////////////////////
    count++;
    if (count == 9) {
      playerNumber.innerHTML = "Tie Game!";
      btn.disabled = true;
      restartBtn.style.display = "block";
    }
    ////////////////////// Restart Btn Style and Ekranin deaktiv olunmasi /////////////////////
    function restartBtnBlock() {
      restartBtn.style.display = "block";
      for (let btn of btnAll) {
        btn.disabled = true;
      }
    }
  });
}
////////////////////// Restart game /////////////////////
restartBtn.addEventListener("click", function () {
  for (let btn of btnAll) {
    btn.innerHTML = "";
    btn.disabled = false;
  }
  playerNumber.innerHTML = "Players 1's Turn";
  restartBtn.style.display = "none";
});
