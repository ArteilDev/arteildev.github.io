document.addEventListener('DOMContentLoaded', function(){
	let navMenu = document.getElementById('navMenu')
    let navbar = document.getElementById('navbar-responsive')
    
    navMenu.onclick = function () {
        navbar.style.display == 'none' ? navbar.style.display = 'flex' : navbar.style.display = 'none'
    }
});