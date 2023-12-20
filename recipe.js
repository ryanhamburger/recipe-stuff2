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
    location.href = "#"+"foodOne";
  }
  if (recipe.selectedIndex == 1)
  {
    location.href = "#"+"foodTwo";
  }
  if (recipe.selectedIndex == 2)
  {
    location.href = "#"+"foodThree";
  }
  if (recipe.selectedIndex == 3)
  {
    location.href = "#"+"foodFour";
  }
  if (recipe.selectedIndex == 4)
  {
    location.href = "#"+"foodFive";
  }
  if (recipe.selectedIndex == 5)
  {
    location.href = "#"+"foodSix";
  }
  if (recipe.selectedIndex == 6)
  {
    location.href = "#"+"foodSeven";
  }
  if (recipe.selectedIndex == 7)
  {
    location.href = "#"+"foodEight";
  }
  if (recipe.selectedIndex == 8)
  {
    location.href = "#"+"foodNine";
  }
  if (recipe.selectedIndex == 9)
  {
    location.href = "#"+"foodTen";
  }
}
