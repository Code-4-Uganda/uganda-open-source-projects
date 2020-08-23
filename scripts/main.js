/*	Toggle Navigation on mobile */
// HTML elements
	const toggle = document.querySelector('.toggle i');
	const navList = document.querySelector('.nav-list');


// toggle function
	function toggleBar() {
		toggle.classList.toggle('fa-bars');
		toggle.classList.toggle('fa-times');
		navList.classList.toggle('nav-active');
	}

// Function call after click event
	toggle.addEventListener('click', function() {
		toggleBar();
		navList.classList.contains('nav-active')? navList.classList.remove('show') : navList.classList.add('show');
	});