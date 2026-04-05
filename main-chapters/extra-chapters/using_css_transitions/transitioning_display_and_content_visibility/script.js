// JavaScript for transitioning_display_and_content_visibility
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
    divElem.classList.toggle("showing");
}
