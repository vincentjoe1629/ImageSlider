let slideIndex = 1;
let slideTimer;


showSlides(slideIndex);
startAutoPlay();


function moveSlide(n) {
    // Clear timer to reset auto-play interval on user click
    clearInterval(slideTimer); 
    showSlides(slideIndex += n);
    startAutoPlay(); 
}


function showSlides(n) {
    let slides = document.getElementsByClassName("my-slides");
    

    if (n > slides.length) { 
        slideIndex = 1; 
    }
    

    if (n < 1) { 
        slideIndex = slides.length; 
    }
    

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
}


function startAutoPlay() {
    slideTimer = setInterval(function() {
        slideIndex++;
        showSlides(slideIndex);
    }, 4000); // Changes image every 4 seconds
}