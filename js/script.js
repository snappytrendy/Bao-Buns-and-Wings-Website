window.addEventListener("load", () => {
  document.querySelector(".hero-content").classList.add("show");
  document.querySelector(".hero-image").classList.add("show");
});
// ==========================================
// SCROLL REVEAL
// ==========================================

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
