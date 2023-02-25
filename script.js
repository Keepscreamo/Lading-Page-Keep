let links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();
		let section = document.querySelector(link.hash);
		section.scrollIntoView({behavior: 'smooth'});
	});
});