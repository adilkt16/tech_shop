
//From here for navbar (Line no : 1 - 18)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

  //this code for proper functioning of navbar
    $('.nav-link').click(function() {
        $('.active').removeClass('active');
    });




// From here  for spotlight owl carousel (Line no : 20 - 35)
$('.spotlight-image').owlCarousel({
	loop: true,
	autoplay: true,
	dots:true,
	autoplaySpeed:true,
	autoplayHoverPause: false,
	responsive:{
		0:{
			items: 1,
		},
	}
});



// From here  for faq functioning (Line no : 36 - 58)
document.addEventListener('DOMContentLoaded', function() {
	var clickableElements = document.querySelectorAll('.clickable');
	var clickedStyles = 'display: none; opacity: 0; transition: opacity 0.5s linear;';
	var showStyles = 'display: block; opacity: 1;';

	clickableElements.forEach(function(element) {
		element.addEventListener('click', function() {
			var clickedDiv = this.querySelector('.clicked');
			var dropdownImg = this.querySelector('.dropdown img');

			if (clickedDiv.style.display === 'none') {
				clickedDiv.style.cssText = showStyles;
		  		dropdownImg.style.transform = 'rotate(180deg)'; // Rotate the image
			} else {
				clickedDiv.style.cssText = clickedStyles;
		  		dropdownImg.style.transform = ''; // Reset the image rotation
			}
		});
	});
});


