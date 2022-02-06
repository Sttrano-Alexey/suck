var w = window.screen.availWidth;
if(w > 1000){
	let head__decor_a = document.querySelector('.item_1');
	let head__decor_b = document.querySelector('.item_2'); 
	window.addEventListener('mousemove', function(e) {
	    let x = e.clientX / window.innerWidth;
	    let y = e.clientY / window.innerHeight;  
	    head__decor_a.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
	    head__decor_b.style.transform = 'translate(+' + x * 40 + 'px, +' + y * 40 + 'px)';
	});
};

window.onscroll = function scroll(e) {
	let scroll = window.pageYOffset;
	scroll = Math.round(scroll);
	if(scroll > 150){
		document.querySelector(".item_1").classList.add("scroll");
		document.querySelector(".item_2").classList.add("scroll");
	}else{
		document.querySelector(".item_1").classList.remove("scroll");
		document.querySelector(".item_2").classList.remove("scroll");
	};
	if(scroll > 500){
		document.querySelector(".header__container").classList.add("scroll");
	}else{
		document.querySelector(".header__container").classList.remove("scroll");
	};
}

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });