// RANDOM COLORS
const colors = [
	"red",
	"blue",
	"orange",
	"yellow",
	"green",
	"purple",
	"lime",
	"olive",
	"teal",
	"aqua",
	"maroon",
	"pink",
];
// DECLARATIONS
const btn = document.querySelector("button");
const color = document.querySelector(".color");

// CHANGE BACKGROUND COLOR & ADD COLOR TO HEADER
btn.addEventListener("click", function () {
	const randomNumber = getRandomNumber();
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});
function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
