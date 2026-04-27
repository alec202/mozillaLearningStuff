// JavaScript for task_3
const listItems = document.querySelectorAll("li");
const descHeading = document.querySelector(".animal-description h2");
const descPara = document.querySelector(".animal-description p");

listItems.forEach((item) => {
    item.addEventListener("mouseup", handleSelection);
    item.addEventListener("keydown", (event) => {
        if (event.key == "Enter" || event.key == " ") {
            handleSelection(event);
        }
    })
});

function handleSelection(e) {
    const heading = e.target.textContent;
    const description = e.target.getAttribute("data-description");
    descHeading.textContent = heading;
    descPara.textContent = description;
}
