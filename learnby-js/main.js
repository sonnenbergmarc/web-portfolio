//create an event listener on the button
// 1. select the button element
var button = document.querySelector('.toggle-icon');

// 2. add a click event to your button
button.addEventListener('click', function(){
    //what happens when the button is clicked goes inside this function, here.
    //we want to be able to show the nav.
    document.querySelector('body').classList.toggle('active');
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}