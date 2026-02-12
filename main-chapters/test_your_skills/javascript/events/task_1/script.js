// JavaScript for task_1
const btn = document.querySelector("button");

// Add your code here
let machineIsOn = false;

btn.addEventListener("click", () => {
    switch (machineIsOn) {
        case false:
            // if machine is off then when the button is clicked we should update it to be true and update the text
            btn.textContent = "Machine is on"
            machineIsOn = true;
            break;
        default:
            // machine is on already, so since the button was clicked we should update it to be false
            btn.textContent = "Machine is off"
            machineIsOn = false;
    }
})