var output = document.getElementById("output-target");

// Requirement Number 1
var sectionClick = [];
var sectionClickInner = [];
sectionClick = document.getElementsByClassName("article-section");

for (var i = 0; i < sectionClick.length; i++) {
  sectionClick[i].addEventListener("click",function() { 
    sectionClickInner = this.innerHTML;
    output.innerHTML = `You clicked on the ${sectionClickInner} section`;
  });
}

// Requirement Number 2 & 3

var headerH1 = document.getElementById("page-header");
headerH1.onmouseover = function(){
  output.innerHTML = "You moved the mouse over the header";
}
headerH1.onmouseleave = function(){
  output.innerHTML = "You left me!!";
}

// Requirement Number 4

var textInput = document.getElementById("keypress-input");
textInput.addEventListener("keyup", function(e){
  if (e.which === 13) {
    output.innerHTML = textInput.value;
  }
});

// Requirement Number 5

var colorBtn = document.getElementById("add-color");
var guineaPig = document.getElementById("guinea-pig");
colorBtn.addEventListener("click", function(){
  guineaPig.classList.add("add-color");
});

// Requirement Number 6

var largeText = document.getElementById("make-large");
largeText.addEventListener("click", function(){
  guineaPig.classList.add("make-large");
});