var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alttexts = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']; 

/* Looping through images */
function thumbnailLoop() {
  for (let i = 0; i < imageArray.length; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', "images/" + imageArray[i]);
    newImage.setAttribute('alt', alttexts[i]);
    thumbBar.appendChild(newImage);
  }
}

thumbnailLoop();

/* Making the clicked thumbnail the large image */
thumbBar.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName == "IMG") {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt; // Set alt attribute of displayed image
  }
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (e) => {
  if (e.target.className == 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});