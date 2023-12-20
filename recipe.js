// Get the button:
let mybutton = "";
window.onload = function() {
    mybutton = document.getElementById("myBtn");
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
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

function  time()
{
  let box = document.getElementById("time")

  // create a new `Date` object
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();

  box.innerHTML(currentDateTime); // output: "7/20/2021, 2:28:15 PM" (will vary depending on your time zone)
}
