var output = document.getElementById("output-target");
var sectionClick = [];
var sectionClickInner = [];
sectionClick = document.getElementsByClassName("article-section");

for (var i = 0; i < sectionClick.length; i++) {
  sectionClick[i].addEventListener("click",function() { 
    console.log('sectionClick', sectionClick.innerHTML);
      sectionClickInner = sectionClick.innerHTML;
    console.log('sectionClickInner', sectionClickInner);
    
    output.innerHTML = `You clicked on the ${sectionClickInner} section`;
  });


}

