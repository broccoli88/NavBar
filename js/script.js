const toggleNavbar = () => {
  const navList = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    if (navList.className.includes("toggle-nav-links")) {
      setTimeout(() => {
        navList.classList.remove("toggle-nav-links");
      }, 600);
    }
    navList.classList.add("toggle-nav-links");

    navLinks.forEach((link, index) => {
      if (link.style.animation.includes("navLinkShow")) {
        link.style.animation = `navLinkFade 0.5s ease backwards ${
          index / 7 + 0.3
        }s`;
      } else {
        link.style.animation = `navLinkShow 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    burger.classList.toggle("shift");
  });
};

toggleNavbar();
