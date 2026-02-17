// JavaScript for task_1
const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
    .then((response) => response.text())
    .then((text) => displayCatInfo(text));

// Don't edit the code above here!

function displayCatInfo(catString) {
    let total = 0;
    let male = 0;
    let female = 0;

    // Add your code here
    // have object version of cat string.
    const catObj = JSON.parse(catString);
    // get the mother cat names and add it to motherInfo
    const motherNames = [];
    let lastCatName;
    for (const cat of catObj) {
        motherNames.push(cat.name);
        // get kittens and how many are female
        for (const kitten of cat.kittens) {
            if (kitten.gender === "m") {
                male++;
            } else {
                female++;
            }
            total++;
        }
        lastCatName = cat.name;
    }
    kittenInfo = `There are ${total} kittens total, ${male} males &
    ${female} females.`
    // update motherInfo to be new sentence containing the names of the 3 mother cats
    // seperated by commas
    motherInfo += motherNames.join(", ") + "."
    motherInfo = motherInfo.replace(lastCatName, `and ${lastCatName}`);
    console.log(motherInfo)
    // Don't edit the code below here!
    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;

}
