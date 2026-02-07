// JavaScript for task_2
const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";

// Don't edit the code above here!

// Add your code here
const quoteLength = quote.length;
const quoteIndexBegin = quote.indexOf(substring);
const quoteIndexEnd = quoteIndexBegin + substring.length;
const revisedQuote = quote.slice(0, quoteIndexEnd + 1);


// Don't edit the code below here!

const section = document.querySelector("section");
section.innerHTML = " ";
const para1 = document.createElement("p");
para1.textContent = `The quote is ${quoteLength} characters long.`;
const para2 = document.createElement("p");
para2.textContent = revisedQuote;
section.appendChild(para1);
section.appendChild(para2);
