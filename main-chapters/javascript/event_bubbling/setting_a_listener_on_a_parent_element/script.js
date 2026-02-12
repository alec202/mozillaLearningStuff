// JavaScript for setting_a_listener_on_a_parent_element
const output = document.querySelector("#output");
function handleClick(e) {
    output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);