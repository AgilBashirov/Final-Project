const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const socialIcons = document.querySelector(".nav-icons");

navToggle.addEventListener("click", () => {
	console.log(links.classList.contains("show-links"));
	
	links.classList.toggle("show-links");
	socialIcons.classList.toggle("show-nav-icons");

});

window.addEventListener("resize", () => links.classList.remove("show-links"));
window.addEventListener("resize", () => socialIcons.classList.remove("show-nav-icons"));
