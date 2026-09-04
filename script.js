document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbar = document.querySelector(".navbar");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            const isOpen = hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            hamburger.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
            });
        });

        document.addEventListener("click", function (event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (event) {
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    function updateNavbar() {
        if (!navbar) {
            return;
        }
        navbar.classList.toggle("scrolled", window.scrollY > 40);
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();

    setActiveNavLink(navLinks);
    initializeRevealAnimations();
    initializeDemo();
});

function setActiveNavLink(navLinks) {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}

function initializeRevealAnimations() {
    const elements = document.querySelectorAll(
        ".feature-card, .step-card, .product-card, .metric-card, .timeline-item, .workflow-list div, .intelligence-card, .pipeline-card, .compare-card"
    );

    if (!elements.length) {
        return;
    }

    elements.forEach(function (element) {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.16 }
    );

    elements.forEach(function (element) {
        observer.observe(element);
    });
}

function initializeDemo() {
    // Demo page no longer has tabs or mock scenarios
}

var CONTACT_API = "https://gabriellasystems--cricket-demo-web.modal.run/api/contact";

function handleFormSubmit(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var body = {};
    formData.forEach(function (value, key) {
        body[key] = value.trim();
    });

    if (!body.name || !body.email || !body.message) {
        alert("Please fill in all required fields.");
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
        alert("Please enter a valid email address.");
        return;
    }

    var btn = event.target.querySelector(".submit-btn");
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    })
        .then(function (res) {
            if (!res.ok) {
                return res.json().then(function (d) { throw new Error(d.detail || "Request failed"); });
            }
            return res.json();
        })
        .then(function () {
            alert("Thank you for your message. We will get back to you soon.");
            event.target.reset();
        })
        .catch(function (err) {
            alert("Sorry, your message could not be sent. Please email admin@gabriellasystems.com directly.\n\n(" + err.message + ")");
        })
        .finally(function () {
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        });
}
