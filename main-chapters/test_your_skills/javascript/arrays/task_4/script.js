// JavaScript for task_4
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here
/**
 * 
 * @param {string} birdName 
 * @returns 
 */
function birdsThatStartWithLetterE(birdName) {
    return birdName.startsWith("E");
}

const eaglesIndex = birds.indexOf("Eagles");
birds.splice(eaglesIndex, 1);

const eBirds = birds.filter(birdsThatStartWithLetterE);

/**
 * Calculates the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    return a + b;
}

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = eBirds;
section.appendChild(para1);
