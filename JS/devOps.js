/*============================
==============================
Author: Gabriel Sanchez
Date: 11/4/2019
Code help: https://www.w3schools.com/
==============================
============================*/

// Get the modal
var modal01 = document.getElementById("videoModal01");
var modal02 = document.getElementById("videoModal02");

// Get the button that opens the modal
var btn01 = document.getElementById("videoBtn01");
var btn02 = document.getElementById("videoBtn02");



// Get the <span> element that closes the modal
var span01 = document.getElementsByClassName("close01")[0];
var span02 = document.getElementsByClassName("close02")[0];


// When the user clicks on the button, open the modal
btn01.onclick = function() {
  modal01.style.display = "block";
}
btn02.onclick = function() {
  modal02.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span01.onclick = function() {
  modal01.style.display = "none";
}
span02.onclick = function() {
  modal02.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target === modal01) {
    modal01.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target === modal02) {
      modal02.style.display = "none";
    }
  }}

