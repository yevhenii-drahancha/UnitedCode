let mainNavLinks = document.querySelectorAll(".navigation a");
let mainSections = document.querySelectorAll("section");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop  &&
      section.offsetTop + section.offsetHeight > fromTop 
    ) {
      link.classList.add("current");
      if(window.innerWidth < 500 & window.innerHeight < 668){
        if(window.scrollY > 2300){
          link.classList.add('white-link')
        }else {
          link.classList.remove('white-link')
        }
      }else if(window.innerWidth < 500){
        if(window.scrollY > 2900) {
          link.classList.add('white-link')
        }else {
          link.classList.remove('white-link')
        }
    }
    } else {
      link.classList.remove("current");
      link.classList.remove('white-link')
    }
    
  });
  
});