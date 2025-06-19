let index = 0;
const slides = document.querySelectorAll('.slide');
const slideTrack = document.getElementById('slideTrack');

function showSlide() {
  index = (index + 1) % slides.length;
  slideTrack.style.top = `-${index * 50}px`;
}

setInterval(showSlide, 2000); // Change every 2 seconds
