let inputs = document.querySelectorAll(".put");
let removed = document.querySelector(".removed");
let x = 0;
const inputHandler = function (e) {
  inputs[0].value = e.target.value[0] ? e.target.value[0] : "";
  inputs[1].value = e.target.value[1] ? e.target.value[1] : "";
  inputs[2].value = e.target.value[2] ? e.target.value[2] : "";
  inputs[3].value = e.target.value[3] ? e.target.value[3] : "";
  inputs[4].value = e.target.value[4] ? e.target.value[4] : "";
  inputs[5].value = e.target.value[5] ? e.target.value[5] : "";
  console.log("salam");
};

removed.addEventListener("input", inputHandler);
