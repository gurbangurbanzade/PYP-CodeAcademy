let addToast = document.querySelector("#add-button");
let clearToast = document.querySelector("#clear-button");
let succes = document.querySelector("#success");
let error = document.querySelector("#error");
let textArea = document.querySelector("#message-content");
let messageBox = document.querySelector("#toasts");
let message = document.querySelector("#message");
let cancelable = document.querySelector("#cancelable");
let durationTime = document.querySelector("#duration");
let timeInterval;

addToast.addEventListener("click", function () {
  const div = document.createElement("div");
  div.className = "toast success-toast";
  const p = document.createElement("p");
  p.className = "message";
  const button = document.createElement("button");
  button.className = "cancel-button";
  const textnode = document.createTextNode(`${textArea.value}`);
  const textnodeBtn = document.createTextNode("X");
  button.appendChild(textnodeBtn);
  p.appendChild(textnode);
  div.appendChild(p);
  div.appendChild(button);
  const errorNode = document.createTextNode("Error.");
  const succesNode = document.createTextNode("Success!");
  //------------------------------------Duration Time Check------------------------------------
  if (parseInt(durationTime.value) < 500 || !parseInt(durationTime.value)) {
    timeInterval = 500;
  } else {
    timeInterval = durationTime.value;
  }
  //------------------------------------Add Toast Check Type------------------------------------
  if (!cancelable.checked) {
    div.classList.remove("error-toast");
    div.classList.add("success-toast");
    messageBox.appendChild(div);
    div.lastElementChild.style.display = "none";
    // setTimeout(() => {
    //   div.style.display = "none";
    // }, timeInterval);
  } else {
    div.classList.add("cancell-button");
  }
  if (succes.checked) {
    if (textArea.value == "") {
      p.appendChild(succesNode);
    }

    div.classList.remove("error-toast");
    div.classList.add("success-toast");
    messageBox.appendChild(div);
    setTimeout(() => {
      div.style.display = "none";
    }, timeInterval);
  }
  if (error.checked) {
    if (textArea.value == "") {
      p.appendChild(errorNode);
    }
    div.classList.remove("success-toast");
    div.classList.add("error-toast");
    messageBox.appendChild(div);
    setTimeout(() => {
      div.style.display = "none";
    }, timeInterval);
  }
  //------------------------------------Every Click Text Area Value Reset------------------------------------
  textArea.value = "";
  //------------------------------------Toast Remove------------------------------------
  button.addEventListener("click", function () {
    button.parentElement.remove();
  });
});
//------------------------------------Clear Toast Box------------------------------------
clearToast.addEventListener("click", function () {
  messageBox.textContent = "";
});
