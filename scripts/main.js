var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var storedName;

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
	var myHeading = document.querySelector('h1');
    if(mySrc == 'images/3s8FM.gif') {
      myImage.setAttribute ('src','images/Deer-Takes-The-Bus.gif');
	  myHeading.innerHTML = "What it feels like getting up in the morning, " + storedName
    } else {
      myImage.setAttribute ('src','images/3s8FM.gif');
	  myHeading.innerHTML = "Day after leg day, " + storedName
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function() {
  setUserName();
}