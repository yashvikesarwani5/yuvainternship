const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
}

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navbar) {
            navbar.classList.remove("active");
        }
    });
});

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (header) {
        if (window.scrollY > 50) {
            header.style.background = "#080D19";
        } else {
            header.style.background = "#111827";
        }
    }
});

const yearElement = document.querySelector(".footer-bottom p");

if (yearElement) {
    yearElement.textContent =
        `© ${new Date().getFullYear()} NovaTech. All rights reserved.`;
}