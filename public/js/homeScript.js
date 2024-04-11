// JavaScript to change the banner content at intervals
const banners = [
    "Check out our latest offers!",
    "Join our newsletter for exclusive deals!",
    "Follow us on social media for updates!",
  ];
  
  let currentIndex = 0;
  
  function changeBanner() {
    document.getElementById("banner").textContent = banners[currentIndex];
    currentIndex = (currentIndex + 1) % banners.length;
  }
  
  // Change banner every 5 seconds (5000 milliseconds)
  setInterval(changeBanner, 5000);
  
  document.addEventListener("DOMContentLoaded", function () {
    const images = ["/img/home/banner1.png", "/img/home/banner2.png"]; // Add your image URLs here
    let currentIndex = 0;
    const slider = document.getElementById("slider");
  
    function changeImage() {
      slider.style.opacity = 0;
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        slider.src = images[currentIndex];
        slider.style.opacity = 1;
      }, 500); // Change image after 0.5 seconds
    }
  
    setInterval(changeImage, 5000); // Change image every 5 seconds
  });
  
  // Array of image URLs
  const images = ["/img/home/banner1.png", "/img/home/banner2.png"];
  let currentImageIndex = 0;
  
  // Function to change the image
  function changeImageforward() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("slider").src = images[currentImageIndex];
  }
  function changeImagebackword() {
    currentImageIndex = (currentImageIndex - 1) % images.length;
    document.getElementById("slider").src = images[currentImageIndex];
  }
  // Add click event listener to the button
  document
    .getElementById("change-image-btn-right")
    .addEventListener("click", changeImageforward);
  
  document
    .getElementById("change-image-btn-left")
    .addEventListener("click", changeImagebackword);
  