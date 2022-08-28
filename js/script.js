'use strict'

const allLang = ['ru', 'en'];

//----------------------Меню-----------------------
document.addEventListener('DOMContentLoaded', function(){
	let navMenu = document.getElementById('navMenu')
    let navbar = document.getElementById('navbar-respons')
    
    navMenu.onclick = function () {
        navbar.style.display == 'none' ? navbar.style.display = 'grid' : navbar.style.display = 'none'
    }
});
//-------------------------------------------------

//-------------Скролл к разделу--------------------
$(function(){
	jQuery.fn.autoscroll = function(selector) {
    	$('html, body').animate({
        	scrollTop: $(this).offset().top -100
      	}, 500);
  	}
    
    $('.home-button').on('click', function(){
    	$('.homepage').autoscroll();
    });

    $('.about-button').on('click', function(){
        $('.about').autoscroll();
    });

    $('.projects-button').on('click', function(){
        $('.projects').autoscroll();
    });

    $('.skills-button').on('click', function(){
    	$('.skills').autoscroll();
    });

    $('.contact-button').on('click', function(){
        $('.contact').autoscroll();
    });
});
//-------------------------------------------------

//-------------Активный пункт меню-----------------
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.navbar').clientHeight <= scrollDistance+250) {
            document.querySelectorAll('.navbar a').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });
        
            document.querySelectorAll('.navbar li')[i].querySelector('a').classList.add('active');
        }

		if (el.offsetTop - document.querySelector('.navbar-respons').clientHeight <= scrollDistance+250) {
            document.querySelectorAll('.navbar-respons a').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });
        
            document.querySelectorAll('.navbar-respons li')[i].querySelector('a').classList.add('active');
        }
    });
});
//------------------------------------------------

//------------Переключение языков-----------------
const select = document.querySelector('select');

select.addEventListener('change', changeURLLanguage);

// Перенаправление на URL с указанием языка
function changeURLLanguage() {
  	let lang = select.value;
  	location.href = window.location.pathname + '#' + lang;
  	document.location.reload(true);
}

function changeLanguage () {
  	let hash = window.location.hash;
  	hash = hash.substring(1);
  	if (!allLang.includes(hash)) {
    	location.href = window.location.pathname + '#ru';
    	document.location.reload(true);
 	}
	select.value = hash;
	for (let key in langArr) {
		let elem = document.querySelector('.lng-'+key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	}
}

changeLanguage();
//------------------------------------------------

//-----------Анимация появления-------------------

function onEntry(entry) {
	entry.forEach(change => {
    	if (change.isIntersecting) {
      		change.target.classList.add('element-show')
    	};
  	});
};

let options = {
  	threshold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);

let elements = document.querySelectorAll('.element-anim');

for (let elm of elements) {
	observer.observe(elm);
}
