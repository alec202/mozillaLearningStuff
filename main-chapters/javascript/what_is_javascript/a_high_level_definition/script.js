function updateName() {
  const name = prompt("Enter a new name");
  console.log("name is " + name);
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button"); document.querySelector("button");

button.addEventListener("click", updateName);