document.querySelector("button").addEventListener("click", RollDICE)

function RollDICE() { 

var random = Math.floor((Math.random() * 6) + 1);

document.getElementById("dice").src = random + ".png";
}