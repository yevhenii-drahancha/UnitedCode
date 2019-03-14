var bodyRect = document.body.getBoundingClientRect();
var menu = document.querySelector('.menu');
var menuPosition = menu.getBoundingClientRect().top - bodyRect.top;
window.addEventListener('scroll', function() {
    if (window.pageYOffset > menuPosition) {
        menu.classList.remove('static-header')
        menu.classList.add('fixed-header')
        menu.style.position = 'fixed';
        menu.style.top = '0px';
        
    } else {
        menu.classList.add('static-header')
        menu.style.position = 'static';
        menu.style.top = '';
    }
});