// const slideshowImages = document.querySelectorAll(".mySlides");
// // making image element into variable for easier access. Query selector All to get all image

// const nextImageDelay = 3000;
// let currentImageCounter = 0;

// slideshowImages[currentImageCounter].style.display = "block";

// setInterval (nextImage, nextImageDelay);

// function nextImage(){
//   slideshowImages[currentImageCounter].style.display = "none";
//   // to hide the currently displayed image
//   currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
//     // increase the counter by 1 - but this should be modunal- so it can be repeated cyclically
//   slideshowImages[currentImageCounter].style.display = "block";
// }


const startingMinutes = 10;

let time = startingMinutes * 60;


function updateCountdown() {
  const countdownEl = document.getElementById ('countdown');
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  console.log('here')
  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}