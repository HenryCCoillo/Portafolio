var slideshows = document.querySelectorAll(".bannerImg")[0];


var slideshow = document.getElementById("slideshow");
var slide = slideshow.getElementsByTagName('img');
var index = 0;
var isMouseOver = false;

function showSlide(newIndex) {
    slide[index].classList.remove('active');
    index = (newIndex + slide.length) % slide.length;
    slide[index].classList.add('active');
}
function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Función para pausar el carrusel
function pauseSlideshow() {
    clearInterval(intervalId);
}

function resumeSlideshow() {
    if (!isMouseOver) {
        intervalId = setInterval(nextSlide, 3000);
    }
}

// Agregar el cambio automático cada 3 segundos
var intervalId

intervalId = setInterval(nextSlide, 3000)

// Pausar el carrusel cuando el mouse entra en el área
var listSlider = document.querySelectorAll(".listSlider")[0];
listSlider.addEventListener('mouseenter', function () {
    isMouseOver = true;
    pauseSlideshow();
});

// Reanudar el carrusel cuando el mouse sale del área
slideshow.addEventListener('mouseleave', function () {
    isMouseOver = false;
    resumeSlideshow();
});

// Pausar el carrusel cuando la pestaña no está visible
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        pauseSlideshow();
    } else {
        resumeSlideshow();
    }
});

// // Detener la animación al hacer clic en los botones
slideshow.addEventListener('click', function () {
    pauseSlideshow()
    resumeSlideshow();
});



// Slider 2
var slideshow2 = document.querySelectorAll(".bannerImg")[1];
var slide2 = slideshow2.getElementsByTagName('img');
var index2 = 0;
var isMouseOver2 = false;

function showSlide2(newIndex) {
    slide2[index2].classList.remove('active');
    index2 = (newIndex + slide2.length) % slide2.length;
    slide2[index2].classList.add('active');
}
function nextSlide2() {
    showSlide2(index2 + 1);
}

function prevSlide2() {
    showSlide2(index2 - 1);
}

// Función para pausar el carrusel
function pauseSlideshow2() {
    clearInterval(intervalId2);
}

function resumeSlideshow2() {
    if (!isMouseOver2) {
        intervalId2 = setInterval(nextSlide2, 3000);
    }
}

// Agregar el cambio automático cada 3 segundos
var intervalId2

intervalId2 = setInterval(nextSlide2, 3000)

// Pausar el carrusel cuando el mouse entra en el área
var listSlider2 = document.querySelectorAll(".listSlider")[1];
listSlider2.addEventListener('mouseenter', function () {
    isMouseOver2 = true;
    pauseSlideshow2();
});

// Reanudar el carrusel cuando el mouse sale del área
slideshow2.addEventListener('mouseleave', function () {
    isMouseOver2 = false;
    resumeSlideshow2();
});

// Pausar el carrusel cuando la pestaña no está visible
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        pauseSlideshow2();
    } else {
        resumeSlideshow2();
    }
});

// // Detener la animación al hacer clic en los botones
slideshow2.addEventListener('click', function () {
    pauseSlideshow2()
    resumeSlideshow2();
});



// Slider 3
var slideshow3 = document.querySelectorAll(".bannerImg")[2];
var slide3 = slideshow3.getElementsByTagName('img');
var index3 = 0;
var isMouseOver3 = false;

function showSlide3(newIndex) {
    slide3[index3].classList.remove('active');
    index3 = (newIndex + slide3.length) % slide3.length;
    slide3[index3].classList.add('active');
}
function nextSlide3() {
    showSlide3(index3 + 1);
}

function prevSlide3() {
    showSlide3(index3 - 1);
}

// Función para pausar el carrusel
function pauseSlideshow3() {
    clearInterval(intervalId3);
}

function resumeSlideshow3() {
    if (!isMouseOver3) {
        intervalId3 = setInterval(nextSlide3, 3000);
    }
}

// Agregar el cambio automático cada 3 segundos
var intervalId3

intervalId3 = setInterval(nextSlide3, 3000)

// Pausar el carrusel cuando el mouse entra en el área
var listSlider3 = document.querySelectorAll(".listSlider")[2];
listSlider3.addEventListener('mouseenter', function () {
    isMouseOver3 = true;
    pauseSlideshow3();
});

// Reanudar el carrusel cuando el mouse sale del área
listSlider3.addEventListener('mouseleave', function () {
    isMouseOver3 = false;
    resumeSlideshow3();
});

// Pausar el carrusel cuando la pestaña no está visible
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        pauseSlideshow3();
    } else {
        resumeSlideshow3();
    }
});

// // Detener la animación al hacer clic en los botones
slideshow3.addEventListener('click', function () {
    pauseSlideshow3()
    resumeSlideshow3();
});