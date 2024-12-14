
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav ul li a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.getAttribute("id");
      const navItem = document.querySelector(`a[href="#${sectionId}"]`);

      if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
        navItem.classList.add("active");
      } else {
        navItem.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
