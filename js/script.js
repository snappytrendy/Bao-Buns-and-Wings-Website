// Prevent browser from restoring the previous scroll position
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  // Always start at the top
  window.scrollTo(0, 0);

  // Hero animation
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
// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections = document.querySelectorAll("#home, #menu, #about");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  // Detect when user reaches the bottom (Contact/Footer)
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    current = "contact";
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();
