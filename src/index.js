document.getElementById("form").addEventListener("click", function displayBorder() {
    var elements = document.getElementsByClassName("border");
  
    for(i=0; i<elements.length; i++) {
      if (elements[i].value === "" ) {
          elements[i].style.borderColor = "red"; 
      } else { elements[i].style.borderColor = "black"; }
      };
  
  });
   

  
  
   
  
