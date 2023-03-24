// Слежение объекта за крусором
document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { // объявляем функцию followCursor
        const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором

        window.addEventListener('mousemove', e => { // при движении курсора
            const target = e.target // определяем, где находится курсор
            if (!target) return

            if (target.closest('a')) { // если курсор наведён на ссылку
                el.classList.add('follow-cursor_active') // элементу добавляем активный класс
            } else { // иначе
                el.classList.remove('follow-cursor_active') // удаляем активный класс
            }

            el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
            el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
        })
    }

    followCursor() // вызываем функцию followCursor

})

//-------------Активный пункт меню-----------------
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop <= scrollDistance + 1500) {
            document.querySelectorAll('.nav span').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });
            
            if(!el.classList.contains('nav__brand')) {
                document.querySelectorAll('.nav span')[i].classList.add('active');
            }
        }

		// if (el.offsetTop <= scrollDistance+250) {
        //     document.querySelectorAll('.navbar-respons a').forEach((el) => {
        //         if (el.classList.contains('active')) {
        //             el.classList.remove('active');
        //         }
        //     });
        
        //     document.querySelectorAll('.navbar-respons li')[i].querySelector('a').classList.add('active');
        // }
    });
});
//------------------------------------------------

//-------------Скролл к разделу--------------------
$(function(){
	jQuery.fn.autoscroll = function(selector) {
    	$('html, body').animate({
        	scrollTop: $(this).offset().top -50
      	}, 500);
  	}
    
    $('.home-link').on('click', function(){
    	$('.header').autoscroll();
    });

    $('.scroll').on('click', function(){
        console.log('111')
        $('.about').autoscroll();
    });

    $('.about-link').on('click', function(){
        $('.about').autoscroll();
    });

    $('.projects-link').on('click', function(){
        $('.projects').autoscroll();
    });

    $('.contacts-link').on('click', function(){
        $('.contacts').autoscroll();
    });
});
//-------------------------------------------------