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
function Time()
{
  var date = new Date();
  var dd = date.getDate(); 
  var mm = date.getMonth() + 1; 
  var yyyy = date.getFullYear(); 
  var newDate = dd + "-" + mm + "-" +yyyy; 
  var p = document.getElementById("date"); 
  p.innerHTML = newDate; 
  
  if (mm == 12 && dd == 21 ||mm == 12 && dd == 22 ||mm == 12 && dd == 23 ||mm == 12 && dd == 24 ||mm == 12 && dd == 25 )
  {
    document.body.style.backgroundImage = "linear-gradient(180deg, red, #00FF7F)";
  }
}

function goToMeal()
{
  let recipe = document.getElementById("Recipes");
  
  if (recipe.selectedIndex == 0)
  {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  if (recipe.selectedIndex == 1)
  {
    document.body.scrollTop = 550; // For Safari
    document.documentElement.scrollTop = 550; // For Chrome, Firefox, IE and Opera
  }
  if (recipe.selectedIndex == 2)
  {
    document.body.scrollTop = 1200; // For Safari
    document.documentElement.scrollTop = 1200; // For Chrome, Firefox, IE and Opera
  }
  if (recipe.selectedIndex == 3)
  {
    document.body.scrollTop = 1850; // For Safari
    document.documentElement.scrollTop = 1850; // For Chrome, Firefox, IE and Opera
  }
  if (recipe.selectedIndex == 4)
  {
    document.body.scrollTop = 2450; // For Safari
    document.documentElement.scrollTop = 2450; // For Chrome, Firefox, IE and Opera
  }
  if (recipe.selectedIndex == 5)
  {
    document.body.scrollTop = 3050; // For Safari
    document.documentElement.scrollTop = 3050; // For Chrome, Firefox, IE and Opera
  }
  if (recipe.selectedIndex == 6)
  {
    document.body.scrollTop = 3700; // For Safari
    document.documentElement.scrollTop = 3700; // For Chrome, Firefox, IE and Opera
  }
  if (recipe.selectedIndex == 7)
  {
    document.body.scrollTop = 4350; // For Safari
    document.documentElement.scrollTop = 4350; // For Chrome, Firefox, IE and Opera
  }
  if (recipe.selectedIndex == 8)
  {
    document.body.scrollTop = 5000; // For Safari
    document.documentElement.scrollTop = 5000; // For Chrome, Firefox, IE and Opera
  }
  if (recipe.selectedIndex == 9)
  {
    document.body.scrollTop = 5600; // For Safari
    document.documentElement.scrollTop = 5600; // For Chrome, Firefox, IE and Opera
  }
}
