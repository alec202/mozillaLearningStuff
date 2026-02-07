// JavaScript for task_3
const quote = "I dO nOT lIke gREen eGgS anD HAM";

// Don't edit the code above here!

// Add your code here
const quoteFirstChar = quote[0].toUpperCase();
const restOfQuote = quote.slice(1).toLowerCase();
let fixedQuote = quoteFirstChar + restOfQuote;
fixedQuote = fixedQuote.replace("green eggs and ham", "pickles and peanut butter");
const finalQuote = fixedQuote + ".";
// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);
