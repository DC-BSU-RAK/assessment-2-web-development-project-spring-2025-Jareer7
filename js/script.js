const carousel = document.getElementById("carousel");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

function scrollNext() {
  carousel.scrollBy({ left: 250, behavior: "smooth" });
}

function scrollPrev() {
  carousel.scrollBy({ left: -250, behavior: "smooth" });
}

nextBtn.addEventListener("click", scrollNext);
prevBtn.addEventListener("click", scrollPrev);

// Auto slide every 4 seconds
setInterval(scrollNext, 4000);
