let input = document.querySelector(".toggle-checkbox");
input.checked = false;
const changeToggle = () => {
	document.querySelectorAll(".yearly").forEach((element) => {
		element.classList.toggle("hidden");
	});
	document.querySelectorAll(".monthly").forEach((element) => {
		element.classList.toggle("hidden");
	});
};

input.addEventListener("click", changeToggle);
