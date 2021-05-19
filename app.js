// RANDOM COLOR
const colors = ["red", "blue", "orange", "yellow", "green", "purple"];
const btn = document.querySelector("button");
const color = document.querySelector(".color");

// CHANGE BACKGROUND COLOR
btn.addEventListener("click", function () {
	const randomNumber = getRandomNumber();
	console.log(randomNumber);

	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});
function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
