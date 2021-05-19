// RANDOM COLOR
const colors = ["red", "blue", "orange", "yellow", "green", "purple"];
const random = colors.length;
console.log(random);

// CHANGE BACKGROUND COLOR
const btn = document
	.querySelector("button")
	.addEventListener("click", function () {
		document.body.style.backgroundColor = "red";
	});
