// === Grab DOM elements ===
const carousel = document.getElementById("carousel"); // The horizontal scrollable container
const nextBtn = document.querySelector(".carousel-btn.next"); // Next (right) button
const prevBtn = document.querySelector(".carousel-btn.prev"); // Previous (left) button

// === Function to scroll right by 250px smoothly ===
function scrollNext() {
  carousel.scrollBy({ left: 250, behavior: "smooth" });
}

// === Function to scroll left by 250px smoothly ===
function scrollPrev() {
  carousel.scrollBy({ left: -250, behavior: "smooth" });
}

// === Add click event listeners to scroll manually ===
nextBtn.addEventListener("click", scrollNext);
prevBtn.addEventListener("click", scrollPrev);

// === Auto-scroll every 4 seconds ===
setInterval(scrollNext, 4000);
