document.querySelector(".submit").addEventListener("click", function displayBorder(event) {
    var elements = document.getElementsByClassName("border");
  
    for(i=0; i<elements.length; i++) {
      if (elements[i].value === "" ) {
          elements[i].classList.add("invalid");
          event.preventDefault();
      } else { 
          elements[i].classList.remove("invalid");
          
        }
      };
      
  });


 var showMessage = function () {
        setTimeout(function(){ 
          document.querySelector(".valid-message").style.visibility = "visible";
          var message = document.getElementById("text");
          var firstInput = document.getElementById("first-input");

          message.innerText += firstInput.value;

          
          

        }, 1000);
 };
   


var closeMessage = document.getElementById("close");

closeMessage.addEventListener("click", function () {
  window.location.reload();
});
  
  


  
  
   
 
  
   
  