document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-inner");
  const items = Array.from(carousel.children);
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });

  let currentPosition = 0;
  const slideWidth = 100 / items.length; // Adjust this value based on your carousel item width
  const totalSlides = items.length * 2; // Adjust this value based on the number of slides in your carousel
  const slideInterval = 5000; // Interval between each slide in milliseconds

  function slideTo(position) {
    const newPosition = position * -slideWidth;
    currentPosition = newPosition;
    carousel.style.transition = "transform 0.5s ease";
    carousel.style.transform = `translateX(${currentPosition}%)`;

    // Handle the seamless transition
    if (position >= items.length) {
      setTimeout(() => {
        carousel.style.transition = "none";
        carousel.style.transform = `translateX(0%)`;
        currentPosition = 0;
      }, 500); // Match this duration with the transition duration
    }
  }

  // Function to slide to the next item
  function slideNext() {
    const nextPosition = currentPosition / -slideWidth + 1;
    slideTo(nextPosition);
  }

  // Automatically slide to the next item at regular intervals
  setInterval(slideNext, slideInterval);
});
