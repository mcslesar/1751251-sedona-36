let menuBtn = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header-page');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('open');
})
