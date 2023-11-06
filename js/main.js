function scrollUp() {
    var btnScrollUp = document.querySelector('.scroll-up');
  
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btnScrollUp.style.display = 'block';
    } else {
      btnScrollUp.style.display = 'none';
    }
  }
  
  function addThemeClass(bodyClass, btnClass) {
    document.body.classList.add(bodyClass);
    btnTheme.classList.add(btnClass);
  }
  
  function isDark() {
    return document.body.classList.contains('body-dark');
  }
  
  function setTheme(bodyClass, btnClass) {
    document.body.classList.remove(localStorage.getItem('class-body-theme'));
    btnTheme.classList.remove(localStorage.getItem('class-btn-theme'));
    addThemeClass(bodyClass, btnClass);
    localStorage.setItem('class-body-theme', bodyClass);
    localStorage.setItem('class-btn-theme', btnClass);
  }
  
  function toggleTheme() {
    if (isDark()) {
      setTheme('body-light', 'fa-moon');
    } else {
      setTheme('body-dark', 'fa-sun');
    }
  }
  
  function displayList() {
    // var btnHamburger = document.querySelector('.fa-bars');
    var btnHamburger = document.querySelector('.java');
    var navUl = document.querySelector('nav ul');

    if (btnHamburger.classList.contains('fa-bars')) {
      btnHamburger.classList.remove('fa-bars');
      btnHamburger.classList.add('fa-times');
      navUl.classList.add('display-nav-list');
    } 
    else {
      btnHamburger.classList.remove('fa-times');
      btnHamburger.classList.add('fa-bars');
      navUl.classList.remove('display-nav-list');
    }
  }
  
  var btnHamburger = document.querySelector('.fa-bars');
  var btnTheme = document.querySelector('.fa-moon');
  btnHamburger.addEventListener('click', displayList);
  btnTheme.addEventListener('click', toggleTheme);
  document.addEventListener('scroll', scrollUp);
  
  var getBodyClass = localStorage.getItem('class-body-theme');
  var getBtnClass = localStorage.getItem('class-btn-theme');
  addThemeClass(getBodyClass, getBtnClass);
  