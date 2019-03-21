var bodyRect = document.body.getBoundingClientRect();
var menu = document.querySelector('.menu');
var menuPosition = menu.getBoundingClientRect().top - bodyRect.top;
var navigation = document.querySelector('.navigation');
var navigationPosition = navigation.getBoundingClientRect().top - bodyRect.top;


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

window.addEventListener('scroll', function() {
    if (window.pageYOffset > navigationPosition) {
        navigation.classList.remove('static-nav')
        navigation.classList.add('fixed-nav')
      /*   navigation.style.position = 'fixed';
        navigation.style.top = '50%';
        navigation.style.right = '0' */
        
    } else {
        navigation.classList.remove('fixed-nav')
        navigation.classList.add('static-nav')
       /*  navigation.style.position = 'absolute';
        navigation.style.top = '';
        navigation.style.right = '0' */
    }
});

