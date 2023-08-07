let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY;

  if (currentScrollPos >= 800) {
    if (prevScrollPos > currentScrollPos) {
      document.querySelector(".navtop").style.top = "0";
    } else {
      document.querySelector(".navtop").style.top = "-50px";
    }
  } else {
    document.querySelector(".navtop").style.top = "0";
  }

  prevScrollPos = currentScrollPos;
});


document.addEventListener("DOMContentLoaded", function () {
  const burgerContainer = document.querySelector(".burger-container");
  const navbar = document.querySelector(".navbar");
  const navbarLinks = document.querySelectorAll(".navbar a");
  const body = document.querySelector("body");
  const burgerLines = burgerContainer.querySelectorAll(".burger-line");

  let isNavbarClosing = false;

  burgerContainer.addEventListener("click", function () {
    burgerContainer.classList.toggle("open");

    burgerLines.forEach((line, index) => {
      line.classList.toggle("open");
    });

    if (burgerContainer.classList.contains("open")) {
      navbar.style.transform = "translateY(0)";
      isNavbarClosing = false;
    } else {
      navbar.style.transform = "translateY(-100%)";
      isNavbarClosing = true;
    }
  });

  navbar.addEventListener("transitionend", function () {
    if (isNavbarClosing) {
      burgerContainer.classList.remove("open");
    }
  });

  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.style.transform = "translateY(-100%)";
      burgerContainer.classList.remove("open");
    });
  });

  body.addEventListener("click", function (event) {
    if (!navbar.contains(event.target) && navbar.style.transform === "translateY(0)") {
      navbar.style.transform = "translateY(-100%)";
      burgerContainer.classList.remove("open");
    }
  });
});
