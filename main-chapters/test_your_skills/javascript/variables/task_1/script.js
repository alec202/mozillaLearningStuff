// JavaScript for /Users/alecmirambeau/Desktop/personal_programming_stuff/mozillaLearningStuff/main-chapters/test_your_skills/javascript/variables/task_1
let myName = "Paul";

// Don't edit the code above here!

// Add your code here
myName = "Alec";
// Don't edit the code below here!

const section = document.querySelector("section");
const para = document.createElement("p");
para.textContent = myName;
section.appendChild(para);
