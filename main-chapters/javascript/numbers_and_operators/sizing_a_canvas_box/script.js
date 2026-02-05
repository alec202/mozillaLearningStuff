// JavaScript for sizing_a_canvas_box
const canvas = document.getElementById("canvas");
const para = document.querySelector("p");
const ctx = canvas.getContext("2d");

// Edit the following two lines ONLY
let x = (43 + 7) * 2;
let y = x * 2;

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "green";
ctx.fillRect(10, 10, x, y);
para.textContent = `The rectangle is ${x}px wide and ${y}px high.`;
