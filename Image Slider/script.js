let slideIndex = 1;
let timeoutId; // Keeps track of the active timer instance


showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
 
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    if (n > slides.length) { slideIndex = 1; }    
    if (n < 1) { slideIndex = slides.length; }
    
  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
  
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";


    slideIndex++;
    

    timeoutId = setTimeout(function() {
        showSlides(slideIndex);
    }, 4000); 
}