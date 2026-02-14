// JavaScript for task_2
let bandInfo;

// Don't edit the code above here!

// Add your code here
const band = {
    name: "Bad Bunny",
    nationality: "Puerto Rican",
    genre: ["Latin trap", "Reggaeton"],
    members: 1,
    formed: 2013,
    split: false,
    albums: [
        {
            name: "DeBí TiRAR MáS FOToS",
            year: 2025
        },
        {
            name: "Un Verano Sin Ti",
            year: 2022
        },
        {
            name: "Nadie Save Lo Que Va a Pasar Mañana",
            year: 2023
        }
    ]
}

bandInfo = "Bad Bunny (Benito Antonio Martínez Ocasio, born 1994) is a Puerto Rican singer, rapper, and songwriter dubbed the \"King of Latin Trap\". He is a global music phenomenon known for blending reggaeton with trap, rock, and soul. A multiple Grammy and Latin Grammy winner, he was Spotify's top artist for multiple years and headlined the Super Bowl";

// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
