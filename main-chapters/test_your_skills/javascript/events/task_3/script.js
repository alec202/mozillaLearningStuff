// JavaScript for task_3
const buttonBar = document.querySelector(".button-bar");

// Add your code here
buttonBar.addEventListener("click", (eve) => {
    buttonBar.style.backgroundColor = eve.target.getAttribute("data-color")
    console.log(eve.target.getAttribute("data-color"))
})