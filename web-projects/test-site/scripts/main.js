const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/library-three-pane-window.jpeg") {
    myImage.setAttribute("src", "images/lots-of-shelves-library.jpeg");
  } else {
    myImage.setAttribute("src", "images/library-three-pane-window.jpeg");
  }
};


// Start of code to assign user name
let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

// function to set the user name
function setUserName(){
    const myName = prompt("Please enter your name.");
    if (myName == " " || myName === " " || !myName){
        // recurse on this function until myName has a value. Next steps would be ensuring at least one of the characters is a letter character.
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to Miriam's library, ${myName}`;
        }
}

myButton.onclick = () => {
    setUserName();
}
// End of code to assign user name


// Function to initialize the website
function loadPreviousNameIfSaved(){
    console.log(`stored user name value is: ${localStorage.getItem("name")}!`)
    if (!localStorage.getItem("name")){
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Welcome to Miriam's library, ${storedName}`;
    }
}

loadPreviousNameIfSaved();
