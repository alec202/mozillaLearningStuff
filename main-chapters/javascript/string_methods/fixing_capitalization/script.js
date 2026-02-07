// JavaScript for fixing_capitalization
const list = document.querySelector("ul");
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  // write your code just below here
  const firstChar = city[0].toUpperCase();
  const restOfWord = city.slice(1).toLowerCase();
  

  const result = firstChar + restOfWord;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
