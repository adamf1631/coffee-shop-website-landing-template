//header slideshow js (automatic) (pic rotates every 3 seconds.)
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");//ref. to html div element containing image BG
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // the amount of time slide is on screen in milliseconds.
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//get the submit button and attach an event listener (when button is 'clicked' and include our function)
var submitButton = document.getElementById('submitbutton').addEventListener('click', getResults);

//the getResuts function
function getResults(){
  //get all 9 of the radio button ids
  var early = document.getElementById('early');
  var middle = document.getElementById('middle');
  var night = document.getElementById('night');
  var light = document.getElementById('light');
  var middle2 = document.getElementById('middle2');
  var dirty = document.getElementById('dirty');
  var black = document.getElementById('black');
  var middle3 = document.getElementById('middle3');
  var pour = document.getElementById('pour');
  if(early.checked && dirty.checked && black.checked){//change the 'changethis'.checked
    document.getElementById('results').innerHTML = '<h4>Try Our Macchiato with a little Milk Foam</h4>'
  }
    if(middle.checked && middle2.checked && middle3.checked){//change the 'changethis'.checked
      document.getElementById('results').innerHTML = '<h4>Try Our Regular New England Peabody roast 16oz Coffee.</h4>'
    }
    if(night.checked && light.checked && pour.checked){//change the 'changethis'.checked
      document.getElementById('results').innerHTML = '<h4>Try Our Chai Latte with Carmel Drizzle.</h4>'
    }
  }
