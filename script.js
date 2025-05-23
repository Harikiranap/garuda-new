function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const mainSection = document.querySelector(".main-section");

  navLinks.classList.toggle("active");


}



function slideTo(index) {
    const slider = document.getElementById('slider');
    const container = document.querySelector('.image-slider-container');
    const imageWidth = container.offsetWidth;
    slider.style.transform = `translateX(-${index * imageWidth}px)`;
  }

  // Optional: Recalculate on window resize
  window.addEventListener('resize', () => {
    // Re-apply transform to keep correct image in view
    const currentIndex = Math.round(
      Math.abs(
        parseInt(document.getElementById('slider').style.transform.replace('translateX(', '')) /
        document.querySelector('.image-slider-container').offsetWidth
      )
    );
    slideTo(currentIndex);
  });



