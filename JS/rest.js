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
var modal03 = document.getElementById("videoModal03");
var modal04 = document.getElementById("videoModal04");
var modal05 = document.getElementById("videoModal05");
var modal06 = document.getElementById("videoModal06");
var modal07 = document.getElementById("videoModal07");



// Get the button that opens the modal
var btn01 = document.getElementById("videoBtn01");
var btn02 = document.getElementById("videoBtn02");
var btn03 = document.getElementById("videoBtn03");
var btn04 = document.getElementById("videoBtn04");
var btn05 = document.getElementById("videoBtn05");
var btn06 = document.getElementById("videoBtn06");
var btn07 = document.getElementById("videoBtn07");


// Get the <span> element that closes the modal
var span01 = document.getElementsByClassName("close01")[0];
var span02 = document.getElementsByClassName("close02")[0];
var span03 = document.getElementsByClassName("close03")[0];
var span04 = document.getElementsByClassName("close04")[0];
var span05 = document.getElementsByClassName("close05")[0];
var span06 = document.getElementsByClassName("close06")[0];
var span07 = document.getElementsByClassName("close07")[0];


// When the user clicks on the button, open the modal
btn01.onclick = function() {
  modal01.style.display = "block";
}
btn02.onclick = function() {
  modal02.style.display = "block";
}
btn03.onclick = function() {
  modal03.style.display = "block";
}
btn04.onclick = function() {
  modal04.style.display = "block";
}
btn05.onclick = function() {
  modal05.style.display = "block";
}
btn06.onclick = function() {
  modal06.style.display = "block";
}
btn07.onclick = function() {
  modal07.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span01.onclick = function() {
  modal01.style.display = "none";
}
span02.onclick = function() {
  modal02.style.display = "none";
}
span03.onclick = function() {
  modal03.style.display = "none";
}
span04.onclick = function() {
  modal04.style.display = "none";
}
span05.onclick = function() {
  modal05.style.display = "none";
}
span06.onclick = function() {
  modal06.style.display = "none";
}
span07.onclick = function() {
  modal07.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target === modal01) {
    modal01.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target === modal02) {
    modal02.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target === modal03) {
    modal03.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target === modal04) {
    modal04.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target === modal05) {
    modal05.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target === modal06) {
    modal06.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target === modal07) {
    modal07.style.display = "none";
  }
}