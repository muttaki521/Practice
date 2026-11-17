
// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.querySelector("i").className = "fas fa-bars";
    });
});

// Dark / Light Mode
const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeIcon.className = "fas fa-sun";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeIcon.className = isLight
        ? "fas fa-sun"
        : "fas fa-moon";

    localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Typing Animation
const words = ["Web Developer", "Designer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typingElement = document.querySelector(".typing");
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        return;
    }

    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    document.getElementById("formMessage").textContent =
        "Opening your email application...";

    window.location.href =
        `mailto:your-email@example.com?subject=${subject}&body=${body}`;
});
