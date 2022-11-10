
function checkAge() {
  if (localStorage.getItem("hasCodeRunBefore") === null){
  var age = prompt("Write your age");
  if (age >= 12) {
    window.confirm ("Age approved.");
  } else {
    window. confirm("Remember to have a responsible adult near to help you.");
  }
  localStorage.setItem("hasCodeRunBefore", true);
  }
}

function button12() {
  window.confirm ("It is important to be accompanied by a responsible adult in order to prevent accidents. This page does not take responsibility for any accidents caused in the moment of cooking. ");
}

function newImage(idimage, image1, image2){
  var image = document.getElementById(idimage);
  if (image.src.match(image1)){
  image.src = image2;
  }else{
  image.src = image1;
  }
}
