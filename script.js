// ========== Mobile Menu ==========
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("show");
    });
});

// ========== Navbar Scroll Effect ==========
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ========== Typing Effect ==========
const roles = [
    "Generative AI & LLM Specialist",
    "AI Agents & RAG Engineer",
    "LangChain • LangGraph Builder",
    "Building Intelligent Systems"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById("typed-text");
const typingSpeed = 70;
const deletingSpeed = 40;
const pauseTime = 1800;

function typeEffect() {
    const current = roles[roleIndex];
    
    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseTime);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

setTimeout(typeEffect, 600);

// ========== Scroll Reveal ==========
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 80) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ========== Skill Progress Bars ==========
function animateProgressBars() {
    const bars = document.querySelectorAll(".progress-bar");
    bars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50 && !bar.classList.contains("animated")) {
            bar.style.width = width + "%";
            bar.classList.add("animated");
        }
    });
}

window.addEventListener("scroll", animateProgressBars);
animateProgressBars();

// ========== Counter Animation (improved) ==========
function animateCounters() {
    const counters = document.querySelectorAll(".stat-num");
    counters.forEach(counter => {
        if (counter.classList.contains("counted")) return;

        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight - 30 && rect.bottom > 0) {
            counter.classList.add("counted");
            const target = +counter.getAttribute("data-target");
            let current = 0;
            const duration = 1500;
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.ceil(current);
                }
            }, stepTime);
        }
    });
}

window.addEventListener("scroll", animateCounters);
// Also run on load after short delay so stats animate even if already visible
setTimeout(animateCounters, 400);
setTimeout(animateCounters, 1000);

// ========== Particles Background ==========
function createParticles() {
    const container = document.getElementById("particles");
    if (!container) return;
    const count = 40;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        const size = Math.random() * 4 + 2;
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDuration = (Math.random() * 12 + 10) + "s";
        particle.style.animationDelay = (Math.random() * 8) + "s";

        const colors = ["#8b5cf6", "#06b6d4", "#f472b6", "#a78bfa"];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        container.appendChild(particle);
    }
}

createParticles();

// ========== Current Year ==========
document.getElementById("year").textContent = new Date().getFullYear();
