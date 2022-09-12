const items = document.querySelectorAll(".item");
const dropZones = document.querySelectorAll(".drop-zone");
let parkingZone = document.querySelector("#unranked-drop-zone");
let dragged;

for (let item of items) {
  item.addEventListener("drag", (event) => {
    event.preventDefault();
    dragged = event.target;
    // console.log("salam", dragged);
  });
  item.addEventListener("dblclick", (event) => {
    // console.log(eve);
    if (event.target.parentNode.id !== "unranked-drop-zone") {
      event.target.parentNode.removeChild(event.target);
      parkingZone.appendChild(event.target);
    }
  });
}

for (let dropZone of dropZones) {
  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    // console.log("dragover");
  });
  dropZone.addEventListener("dragenter", (event) => {
    event.preventDefault();
    // console.log("dragenter");
  });
  dropZone.addEventListener("dragleave", (event) => {
    event.preventDefault();
    // console.log("dragenter");
  });
  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(dropZone.children);
    // dragged.parentNode.removeChild(dragged);

    if (dropZone.children.length < 3) {
      if (
        event.target.className == "item" &&
        dropZone.id !== "unranked-drop-zone"
      ) {
        event.target.parentNode.appendChild(dragged);
      } else if (dropZone.id == "unranked-drop-zone" && dropZone.c) {
        console.log("salam");
        event.target.appendChild(dragged);
      } else {
        event.target.appendChild(dragged);
      }
    }
  });
}
