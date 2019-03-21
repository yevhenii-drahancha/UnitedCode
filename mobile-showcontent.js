function showMobileContent(evt, showEl) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("mobileElement");
   
      for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("octagonWrap-1");
      for(i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-mobile", "");
      }
      if(window.innerWidth < 500) {
      document.getElementById(showEl).style.display = "block";
      evt.currentTarget.className += " active-mobile";
    }
  
  }
  document.getElementById("open").click()
