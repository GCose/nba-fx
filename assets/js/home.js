/**===============================
 * Function that handles navigation
 ================================*/
function initNavigation() {
  const nav = document.querySelector(".nav");
  let lastScrollY = 0;
  let ticking = false;

  function updateNavbar() {
    const scrollY = window.pageYOffset;

    if (scrollY > 100) {
      nav.classList.add("nav--scrolled");
    } else {
      nav.classList.remove("nav--scrolled");
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
}

/**===============================
 * Initialize all functionality
 ================================*/
document.addEventListener("DOMContentLoaded", () => {
  initNavigation(); 
});
