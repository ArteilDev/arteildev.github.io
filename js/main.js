//-------------Активный пункт меню-----------------
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop <= scrollDistance + 1500) {
            document.querySelectorAll('.nav a').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });
            
            document.querySelectorAll('.nav a')[i].classList.add('active');
        }
    });
});
//------------------------------------------------

// При появлении блока с контактами
var block_show = null;
 
function contactsSectionTracking(){

    if(location.pathname !== '/contacts')
    {
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.contacts').offset().top;
        var eh = $('.contacts').outerHeight();
     
        if ((wt - 850) + wh >= et && wt + (wh) - eh * 2 <= et + (wh - eh)){
            if (block_show == null || block_show == false) {
                document.querySelector('.nav').classList.add('nav_black')
                document.querySelector('.nav-sm').classList.add('nav-sm_black')
                document.querySelector('.contacts__title').classList.add('animate')
                document.querySelector('.btn_contacts').classList.add('animate')
            }
            block_show = true;
        } else {
            if (block_show == null || block_show == true) {
                document.querySelector('.nav').classList.remove('nav_black')
                document.querySelector('.nav-sm').classList.remove('nav-sm_black')
            }
            block_show = false;
        }
    }

    if(location.pathname == '/contacts') {
        document.querySelector('.nav').classList.remove('nav_black')
        document.querySelector('.nav-sm').classList.remove('nav-sm_black')
    }
}
 
$(window).scroll(function(){
	contactsSectionTracking();
});
	
$(document).ready(function(){ 
	contactsSectionTracking();
});