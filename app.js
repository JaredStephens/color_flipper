// RANDOM COLOR
const colors = ["red", "blue", "orange", "yellow", "green", "purple"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randomColor);

// CHANGE BACKGROUND COLOR
const btn = document
	.querySelector("button")
	.addEventListener("click", function () {
		document.body.style.backgroundColor = `${randomColor}`;
	});
