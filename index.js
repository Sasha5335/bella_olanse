'use strict'



window.onload = function () {

	const btnMenu = document.querySelector('.nav-btn-menu');
	const btnMenuClose = document.querySelector('.nav-block');

	btnMenu.addEventListener("click", function () {
		btnMenu.style.display = "none";
		btnMenuClose.style.display = "block";
	})

	btnMenuClose.addEventListener("click", function () {
		btnMenu.style.display = "block";
		btnMenuClose.style.display = "none";
	})

}