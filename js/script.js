// ==========================================
// HERO ENTRANCE ANIMATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  const heroImage = document.querySelector(".hero-image");

  heroContent.classList.add("show");

  setTimeout(() => {
    heroImage.classList.add("show");
  }, 300);
});
