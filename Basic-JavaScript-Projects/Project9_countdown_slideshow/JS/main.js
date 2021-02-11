function countdown() {
    var seconds = document.getElementById("seconds").value; //takes the input of value which will be what the variable is set to in seconds

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {
        alert("Time's up!");
    }
        }
    tick();
}

var slideIndex = 1; //defines slide index
showSlides(slideIndex); //shows current slide

function plusSlides(n) { //calls showslides function to change slide
  showSlides(slideIndex += n); //increase index by one and show that slide
}

function currentSlide(n) { //call showslides function to show current slide
  showSlides(slideIndex = n);
}

function showSlides(n) { //this is the function that is called by current and plus slides in order to show the proper slide
  var i;
  var slides = document.getElementsByClassName("mySlides"); //defines variable slides by getting elements "mySlides" from html file
  var dots = document.getElementsByClassName("dot"); //defines dot variable
  if (n > slides.length) {slideIndex = 1} //this brings you back to slide 1 
  if (n < 1) {slideIndex = slides.length} //if slide number is less than 1, go to next slide
  for (i = 0; i < slides.length; i++) { //hide each of the slides
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { //same as above, but for the dots
      dots[i].className = dots[i].className.replace(" active", ""); //replaces captions as you move to the next slide
  }
  slides[slideIndex-1].style.display = "block";  //display current slide as a block element
  dots[slideIndex-1].className += " active"; //set current slide's dot to "active" class
}