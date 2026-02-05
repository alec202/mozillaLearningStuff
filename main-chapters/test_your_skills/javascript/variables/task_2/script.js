// JavaScript for /Users/alecmirambeau/Desktop/personal_programming_stuff/mozillaLearningStuff/main-chapters/test_your_skills/javascript/variables/task_2

// Fix the following code

let myName = "Default";
myName = "Chris";

let myAge = 42;

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);
