document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-inner");
  let currentPosition = 0;
  const slideWidth = 100; // Adjust this value based on your carousel item width
  const totalSlides = 4; // Adjust this value based on the number of slides in your carousel
  const slideInterval = 5000; // Interval between each slide in milliseconds

  function slideTo(position) {
    const newPosition = position * -slideWidth;
    const delta = newPosition - currentPosition;
    const step = delta / 100; // Change the number of steps to control the sliding speed
    let currentStep = 0;

    const slideAnimation = setInterval(function () {
      currentPosition += step;
      carousel.style.transform = `translateX(${currentPosition}%)`;

      currentStep++;
      if (currentStep >= 100) {
        clearInterval(slideAnimation);
        currentPosition = newPosition;
        carousel.style.transform = `translateX(${currentPosition}%)`;
      }
    }, 10); // Adjust this interval for smoother or faster sliding
  }

  // Function to slide to the next item
  function slideNext() {
    const nextPosition = currentPosition / -slideWidth + 1;
    if (nextPosition < totalSlides) {
      slideTo(nextPosition);
    } else {
      slideTo(0); // Reset to the first slide if it's the last one
    }
  }

  // Automatically slide to the next item at regular intervals
  setInterval(slideNext, slideInterval);
});
