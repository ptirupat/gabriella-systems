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
        ".feature-card, .step-card, .product-card, .metric-card, .timeline-item, .workflow-list div"
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
    const scenarioButtons = document.querySelectorAll(".scenario-button");
    const runButton = document.getElementById("run-analysis");
    const uploadInput = document.getElementById("video-upload");
    const clipStatus = document.getElementById("clip-status");

    if (!scenarioButtons.length) {
        return;
    }

    const demoData = {
        full: {
            label: "Full Outside Off",
            score: "88",
            summary: "Stable base, clean bat path, and late contact through the off-side channel.",
            metrics: [
                ["Head stillness", "84%"],
                ["Stride length", "64 cm"],
                ["Impact timing", "0.18 s"]
            ],
            insights: [
                "Keep the front shoulder closed for one extra frame before contact.",
                "Maintain the current stride width, which keeps the head above the base.",
                "Repeat the late contact drill against fuller deliveries outside off stump."
            ]
        },
        short: {
            label: "Short Ball",
            score: "81",
            summary: "Strong weight transfer, with room to improve head height through contact.",
            metrics: [
                ["Back-foot load", "79%"],
                ["Contact height", "1.22 m"],
                ["Rotation speed", "412 deg/s"]
            ],
            insights: [
                "Begin the trigger movement slightly earlier against short-of-length balls.",
                "Keep the head level as the hips rotate through the shot.",
                "Finish higher to control the ball square of the wicket."
            ]
        },
        yorker: {
            label: "Yorker Length",
            score: "86",
            summary: "Good bat drop and base stability, with contact happening slightly late.",
            metrics: [
                ["Bat drop timing", "0.11 s"],
                ["Base stability", "87%"],
                ["Contact delay", "4 frames"]
            ],
            insights: [
                "Begin the bat drop earlier once the ball enters the last third of the pitch.",
                "Keep the front foot planted and let the hands work down through the line.",
                "Repeat the block-out drill at the same machine speed before increasing pace."
            ]
        },
        slower: {
            label: "Slower Ball",
            score: "83",
            summary: "Early movement creates a pause before impact, reducing timing consistency.",
            metrics: [
                ["Trigger timing", "78%"],
                ["Wait time", "0.07 s"],
                ["Head drift", "2.9 cm"]
            ],
            insights: [
                "Delay the trigger until the ball has fully left the machine chute.",
                "Keep the head centered while waiting for the slower delivery to arrive.",
                "Use a smaller backlift during variation drills to improve contact timing."
            ]
        }
    };

    scenarioButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            scenarioButtons.forEach(function (item) {
                item.classList.remove("active");
            });
            button.classList.add("active");
            renderDemo(demoData[button.dataset.scenario]);
        });
    });

    if (runButton) {
        runButton.addEventListener("click", function () {
            runButton.classList.add("is-running");
            runButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing Sample';

            window.setTimeout(function () {
                const activeScenario = document.querySelector(".scenario-button.active");
                const scenario = activeScenario ? activeScenario.dataset.scenario : "full";
                renderDemo(demoData[scenario]);
                runButton.classList.remove("is-running");
                runButton.innerHTML = '<i class="fas fa-play"></i> Run Sample Analysis';
            }, 750);
        });
    }

    if (uploadInput && clipStatus) {
        uploadInput.addEventListener("change", function () {
            const file = uploadInput.files && uploadInput.files[0];
            clipStatus.textContent = file ? file.name : "Full ball outside off loaded";
        });
    }
}

function renderDemo(data) {
    if (!data) {
        return;
    }

    const label = document.getElementById("demo-scenario-label");
    const score = document.getElementById("demo-score");
    const summary = document.getElementById("demo-summary");
    const insights = document.getElementById("demo-insights");
    const metricIds = [
        ["metric-one-label", "metric-one-value"],
        ["metric-two-label", "metric-two-value"],
        ["metric-three-label", "metric-three-value"]
    ];

    if (label) {
        label.textContent = data.label;
    }
    if (score) {
        score.textContent = data.score;
    }
    if (summary) {
        summary.textContent = data.summary;
    }

    metricIds.forEach(function (ids, index) {
        const metric = data.metrics[index];
        const metricLabel = document.getElementById(ids[0]);
        const metricValue = document.getElementById(ids[1]);
        if (metricLabel && metricValue && metric) {
            metricLabel.textContent = metric[0];
            metricValue.textContent = metric[1];
        }
    });

    if (insights) {
        insights.innerHTML = "";
        data.insights.forEach(function (insight) {
            const item = document.createElement("li");
            item.textContent = insight;
            insights.appendChild(item);
        });
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = {};

    formData.forEach(function (value, key) {
        formObject[key] = value.trim();
    });

    if (!formObject.name || !formObject.email || !formObject.message) {
        alert("Please fill in all required fields.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formObject.email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you for your message. We will get back to you soon.");
    event.target.reset();
}
