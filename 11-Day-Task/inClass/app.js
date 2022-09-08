let input = document.querySelector(".password");
let img = document.querySelector(".bgImg");
// input.addEventListener("change", function () {
//   if (input.value.length > 8) {
//     img.style.filter = "blur(8px)";
//   }
// });
let count = 0;

const inputHandler = function (e) {
  // console.log(Number("-"));
  if (e.target.value.length > 8) {
    img.style.filter = "blur(50px)";
    console.log("min 8");
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value[i] == e.target.value[i].toUpperCase()) {
        count++;

        img.style.filter = "blur(80px)";
        console.log("Upper");
        count++;

        break;
      }
    }
    for (let i = 0; i < e.target.value.length; i++) {
      if (Number(e.target.value[i]) * 0 == 0) {
        img.style.filter = "blur(60px)";
        console.log("number");
        count++;
        break;
      }
    }

    for (let i = 0; i < e.target.value.length; i++) {
      if (!isCharacterALetter(e.target.value[i])) {
        console.log("char");
        count++;
        break;
      }
      function isCharacterALetter(char) {
        return /[a-zA-Z]/.test(char);
      }
    }
  }
  console.log(count);
};
input.addEventListener("input", inputHandler);
