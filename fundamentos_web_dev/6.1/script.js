// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function doIt(event) {
  event.preventDefault();
}
HREF_LINK.addEventListener('click', doIt);
INPUT_CHECKBOX.addEventListener('click', doIt);
INPUT_TEXT.addEventListener('keypress', doIt);