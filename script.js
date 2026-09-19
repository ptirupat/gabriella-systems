document.addEventListener('DOMContentLoaded', () => {

    // ── Navbar ──────────────────────────────────────────────────────────────
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // ── Active nav link ──────────────────────────────────────────────────────
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href === path || (path === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ── Mobile hamburger ─────────────────────────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const navMenu   = document.getElementById('nav-menu');
    hamburger?.addEventListener('click', () => {
        const open = hamburger.classList.toggle('active');
        navMenu?.classList.toggle('active', open);
        hamburger.setAttribute('aria-expanded', String(open));
    });
    navMenu?.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger?.setAttribute('aria-expanded', 'false');
        });
    });
    document.addEventListener('click', e => {
        if (!navbar?.contains(e.target)) {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
            hamburger?.setAttribute('aria-expanded', 'false');
        }
    });

    // ── Smooth scroll ────────────────────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });

    // ── GSAP animations (only if GSAP is loaded) ─────────────────────────────
    if (typeof gsap === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);
    document.body.classList.add('gsap-ready');

    // Hero entrance (index.html only)
    if (document.querySelector('.hero-split')) {
        const heroTl = gsap.timeline({ delay: 0.15 });
        heroTl
            .from('.hero-left .eyebrow',   { opacity: 0, y: 22, duration: 0.5, ease: 'power2.out' })
            .from('.hero-left .word',      { opacity: 0, y: 32, stagger: 0.07, duration: 0.5, ease: 'power2.out' }, '-=0.2')
            .from('.hero-left .hero-copy', { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' }, '-=0.2')
            .from('.hero-actions',         { opacity: 0, y: 18, duration: 0.4, ease: 'power2.out' }, '-=0.2')
            .from('.status-strip',         { opacity: 0, duration: 0.4, ease: 'power1.out' }, '-=0.1')
            .from('.hero-metric-card',     { opacity: 0, scale: 0.82, y: 20, stagger: 0.14, duration: 0.55, ease: 'back.out(1.3)' }, '-=0.35');

        // Floating metric cards — organic looping motion
        document.querySelectorAll('.hero-metric-card').forEach((card, i) => {
            gsap.to(card, {
                y: i % 2 === 0 ? -8 : 8,
                x: i % 3 === 0 ? 3 : -3,
                duration: 2.8 + i * 0.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: i * 0.35,
            });
        });

        // Pulsing live dots
        gsap.to('.live-dot', {
            scale: 1.7,
            opacity: 0.45,
            duration: 0.85,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            stagger: { each: 0.25, from: 'random' },
        });
    }

    // Dual GIF / media reveal on homepage
    if (document.querySelector('.dual-video')) {
        gsap.from('.dual-video > div', {
            scrollTrigger: { trigger: '.dual-video', start: 'top 82%' },
            opacity: 0,
            y: 28,
            duration: 0.7,
            stagger: 0.18,
            ease: 'power2.out',
        });
        gsap.from('.video-tagline', {
            scrollTrigger: { trigger: '.video-tagline', start: 'top 88%' },
            opacity: 0,
            y: 18,
            duration: 0.55,
            ease: 'power2.out',
        });
    }

    // Section intros (eyebrow + lead-in)
    gsap.utils.toArray('.section-intro').forEach(intro => {
        gsap.from(intro.children, {
            scrollTrigger: { trigger: intro, start: 'top 86%' },
            opacity: 0,
            y: 18,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power2.out',
        });
    });

    // Final CTA soft rise
    if (document.querySelector('.final-cta')) {
        gsap.from('.final-cta .container > *', {
            scrollTrigger: { trigger: '.final-cta', start: 'top 85%' },
            opacity: 0,
            y: 22,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
        });
    }

    // Scroll-triggered section heading slide-in (skip intros already animated above)
    gsap.utils.toArray('section h2').forEach(h2 => {
        if (h2.closest('.section-intro')) return;
        gsap.from(h2, {
            scrollTrigger: { trigger: h2, start: 'top 86%' },
            opacity: 0,
            x: -26,
            duration: 0.65,
            ease: 'power2.out',
        });
    });

    // Staggered card reveals — group cards by their parent row
    const cardSelectors = [
        '.feature-card',
        '.pipeline-card',
        '.intelligence-card',
        '.metric-card',
        '.product-card',
        '.compare-card',
        '.step-card',
        '.timeline-item',
        '.analysis-row',
        '.workflow-list div',
    ];

    // Group siblings and stagger them
    cardSelectors.forEach(sel => {
        const parents = new Set();
        document.querySelectorAll(sel).forEach(el => parents.add(el.parentElement));
        parents.forEach(parent => {
            const children = parent.querySelectorAll(sel);
            if (!children.length) return;
            gsap.from(children, {
                scrollTrigger: { trigger: parent, start: 'top 88%' },
                opacity: 0,
                y: 26,
                duration: 0.55,
                stagger: 0.1,
                ease: 'power2.out',
            });
        });
    });

    // Scroll-triggered number counters (elements with data-count attribute)
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseFloat(el.dataset.count);
        const decimals = (el.dataset.count.split('.')[1] || '').length;
        const obj = { val: 0 };
        ScrollTrigger.create({
            trigger: el,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                gsap.to(obj, {
                    val: target,
                    duration: 1.6,
                    ease: 'power1.out',
                    onUpdate() { el.textContent = obj.val.toFixed(decimals); },
                });
            },
        });
    });

    // Parallax on hero background
    ScrollTrigger.create({
        trigger: '.cricket-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
        onUpdate(self) {
            const hero = document.querySelector('.cricket-hero');
            if (hero) hero.style.backgroundPositionY = `${self.progress * 30}%`;
        },
    });

    // Contact form submit (contact.html)
    const form = document.getElementById('contact-form');
    if (form) handleFormSubmit(form);
});

function handleFormSubmit(form) {
    form.addEventListener('submit', async e => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const orig = btn.textContent;
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

        const data = {
            name:         form.querySelector('[name="name"]')?.value?.trim(),
            email:        form.querySelector('[name="email"]')?.value?.trim(),
            organization: form.querySelector('[name="organization"]')?.value?.trim() || '',
            role:         form.querySelector('[name="role"]')?.value || '',
            interest:     form.querySelector('[name="interest"]')?.value || '',
            message:      form.querySelector('[name="message"]')?.value?.trim(),
        };

        if (!data.name || !data.email || !data.message) {
            alert('Please fill in your name, email, and message.');
            btn.disabled = false;
            btn.textContent = orig;
            return;
        }

        try {
            const r = await fetch('https://gabriellasystems--cricket-demo-web.modal.run/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (r.ok) {
                btn.innerHTML = '<i class="fas fa-check"></i> Message sent';
                form.reset();
                setTimeout(() => { btn.disabled = false; btn.textContent = orig; }, 4000);
            } else {
                throw new Error('Server error');
            }
        } catch {
            alert('Sorry, something went wrong. Please email us directly at info@gabriellasystems.com');
            btn.disabled = false;
            btn.textContent = orig;
        }
    });
}

// ── Scroll-reveal: individual cards + stagger-in parent grids ───────────────
(function initScrollReveal() {
    // Individual cards animate on entering viewport
    const singleTargets = document.querySelectorAll(
        '.section-intro, .mv-card, .origin-stat, ' +
        '.cricket-domain, .leadership-card, .research-bridge, ' +
        '.compare-card, .quote-panel, .timeline-item-clean'
    );
    // Parent containers whose direct children stagger in sequence
    const staggerContainers = document.querySelectorAll('.stagger-in');

    const revealEl = (el, delay = 0) => {
        // CSS already sets opacity:0/translateY — only set the transition timing here
        el.style.transition = `opacity 0.55s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.55s ${delay}s cubic-bezier(0.34,1.2,0.64,1)`;
    };
    const showEl = el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            if (window.gsap) {
                gsap.to(el, { opacity: 1, y: 0, duration: 0.55,
                    delay: parseFloat(el.dataset.delay || '0'),
                    ease: 'power2.out', clearProps: 'transform,opacity' });
            } else { showEl(el); }
            observer.unobserve(el);
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    // Single targets
    singleTargets.forEach(el => {
        revealEl(el);
        observer.observe(el);
    });

    // Stagger containers — animate each child in sequence
    staggerContainers.forEach(container => {
        const children = Array.from(container.children).filter(c =>
            !c.matches('script,style,noscript'));
        children.forEach((child, i) => {
            const delay = Math.min(i * 0.08, 0.4);
            child.dataset.delay = String(delay);
            revealEl(child, delay);
        });
        const containerObs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                children.forEach(child => {
                    if (window.gsap) {
                        gsap.to(child, { opacity: 1, y: 0, duration: 0.5,
                            delay: parseFloat(child.dataset.delay || '0'),
                            ease: 'power2.out', clearProps: 'transform,opacity' });
                    } else { showEl(child); }
                });
                containerObs.unobserve(entry.target);
            });
        }, { threshold: 0.05 });
        requestAnimationFrame(() => containerObs.observe(container));
    });
}());
