var firstInput = document.getElementById("first-input");
var secondInput = document.getElementById("second-input");
var textAreaInput = document.getElementById("textarea");
var maleBtn = document.getElementById("male");
var femaleBtn = document.getElementById("female");

document.querySelector(".submit").addEventListener("click", function displayBorder(event) {
    var elements = document.getElementsByClassName("border");
  
    for(i=0; i<elements.length; i++) {
      if (elements[i].value === "" ) {
          elements[i].classList.add("invalid");
      } else if (elements[i].value !== "") { 
          elements[i].classList.replace("invalid", "valid");
          
        } else if (elements[i].value !== "") {
          document.querySelector(".valid-message").style.visibility = "visible";
          document.getElementById("text").innerText += document.getElementById("first-input").value;
        } else {

        };
        }
      if (elements[0].classList.contains("valid") && elements[1].classList.contains("valid") && elements[2].classList.contains("valid") ) {
              document.querySelector(".valid-message").style.visibility = "visible";
              document.getElementById("text").innerText += document.getElementById("first-input").value;
      }

      console.log ("First Name: " + firstInput.value + ", " + "Last Name: " + secondInput.value + ", " + "Message: " + textAreaInput.value + ", " + "Gender: " + maleBtn.value);

      });

      
      
var closeMessage = document.getElementById("close");

closeMessage.addEventListener("click", function () {
  window.location.reload();
});
  
  


  

   
 
  
   
  
