// JavaScript for challenge_image_gallery
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

class image {
    constructor(fileName, alt) {
        this.fileName = fileName;
        this.alt = alt;
    }
}

const images = [
    new image("pic1_an_eye", "Closeup of a human eye"),
    new image("pic2_rock_looks_like_wave", "Rock that looks like a wave"),
    new image("pic3_purple_pansies", "Purple and white pansies"),
    new image("pic4_pharaohs_tomb", "Section of wall from a pharaoh's tomb"),
    new image("pic5_moth", "Large moth on a leaf")
];
// array of images done

const baseURL = "./images/"
for (const img of images) {
    const newImg = document.createElement("img");
    console.log(`img path: ${baseURL}${img.fileName}.jpg`)
    newImg.setAttribute("src", `${baseURL}${img.fileName}.jpg`);
    newImg.setAttribute("alt", `${img.alt}`);
    newImg.setAttribute("tabIndex", "0");
    thumbBar.appendChild(newImg);
}


// ON STEP 7!!