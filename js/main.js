//burger
document.addEventListener("DOMContentLoaded", function () {
  const burgerContainer = document.querySelector(".burger-container");

  burgerContainer.addEventListener("click", function () {
    this.classList.toggle("open");

    const burgerLines = this.querySelectorAll(".burger-line");
    burgerLines.forEach((line, index) => {
      if (this.classList.contains("open")) {
        if (index === 0) {
          line.style.transform = "translateY(8px) rotate(45deg)";
        } else if (index === 1) {
          line.style.opacity = 0;
        } else if (index === 2) {
          line.style.transform = "translateY(-8px) rotate(-45deg)";
        }
      } else {
        line.style.transform = "none";
        line.style.opacity = 1;
      }
    });
  });
});

//nav
document.addEventListener("DOMContentLoaded", function() {
  const burgerContainer = document.querySelector(".burger-container");
  const navbar = document.querySelector(".navbar");
  const navbarLinks = document.querySelectorAll(".navbar a");
  const body = document.querySelector("body");

  burgerContainer.addEventListener("click", function() {
    if (navbar.style.transform === "translateY(-100%)") {
      navbar.style.transform = "translateY(0)";
    } else {
      navbar.style.transform = "translateY(-100%)";
    }
  });

  navbarLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      navbar.style.transform = "translateY(-100%)";
    });
  });

  body.addEventListener("click", function(event) {
    if (!navbar.contains(event.target) && navbar.style.transform === "translateY(0)") {
      navbar.style.transform = "translateY(-100%)";
    }
  });
});

