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

    // ── Metric ⓘ tips (copy lock: docs/homepage-hud-metrics.md) ─────────────
    wireMetricTips();

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

        // Floating metric cards — organic looping motion.
        // Pause while a tip is sticky-open so GSAP cannot steal hover/hit-testing.
        document.querySelectorAll('.hero-metric-card').forEach((card, i) => {
            const floatTween = gsap.to(card, {
                y: i % 2 === 0 ? -8 : 8,
                x: i % 3 === 0 ? 3 : -3,
                duration: 2.8 + i * 0.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: i * 0.35,
            });
            heroFloatTweens.set(card, floatTween);
            const pause = () => floatTween.pause();
            const resumeIfIdle = () => {
                if (!card.classList.contains('has-open-tip') && !card.matches(':hover, :focus-within')) {
                    floatTween.resume();
                }
            };
            card.addEventListener('mouseenter', pause);
            card.addEventListener('mouseleave', resumeIfIdle);
            card.addEventListener('focusin', pause);
            card.addEventListener('focusout', resumeIfIdle);
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
            clearProps: 'transform,opacity',
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
                clearProps: 'transform,opacity',
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

const METRIC_TIPS = {
    'bat-speed': 'How fast the bat was moving at contact in this take (km/h).',
    'head-stability': 'How much the head moved from downswing to contact (cm). Lower usually means steadier — not a technique grade.',
    'run-up': 'Peak approach speed into the delivery in this take (km/h).',
    'contact-time': 'Time from the start of this take to contact (ms). Use it to compare same-view sessions — not early vs late.',
    'ball-speed': 'Measured ball speed in this take (km/h), only when the take is gated.',
    'front-knee': 'Front-knee flexion at plant in this take (degrees). 0° ≈ fully extended.',
    'arm-speed': 'Peak arm angular speed in this take (°/s).',
};

const METRIC_TIP_NAMES = {
    'bat-speed': 'Bat speed at impact',
    'head-stability': 'Head stability',
    'run-up': 'Run-up speed',
    'contact-time': 'Contact time in this clip',
    'ball-speed': 'Ball speed',
    'front-knee': 'Front knee angle',
    'arm-speed': 'Arm angular speed',
};

const heroFloatTweens = new WeakMap();
const metricTipOpenMode = new WeakMap();

function metricTipLabelHost(el) {
    if (el.classList.contains('metric-label')) return el;
    return el.querySelector('span');
}

function metricTipStackHosts(btn) {
    return [...new Set([
        btn.closest('.clip-hud-row, .compare-row, .analysis-row, .metric-card, .hero-metric-card'),
        btn.closest('.clip-hud, .compare-card, .hero-dashboard, .analysis-stack, .metrics-grid'),
    ].filter(Boolean))];
}

function syncHeroFloat(card) {
    const tween = heroFloatTweens.get(card);
    if (!tween) return;
    if (card.classList.contains('has-open-tip')) {
        tween.pause();
        // Transform + border-radius clips overflowing tip panels; drop the float offset while open.
        gsapSetClear(card);
        return;
    }
    if (card.matches(':hover, :focus-within')) {
        tween.pause();
        return;
    }
    tween.resume();
}

function gsapSetClear(card) {
    if (typeof gsap === 'undefined') {
        card.style.removeProperty('transform');
        return;
    }
    gsap.set(card, { clearProps: 'x,y,transform' });
}

function setMetricTipOpen(btn, open, mode) {
    const tip = document.getElementById(btn.getAttribute('aria-describedby'));
    if (!tip) return;
    btn.setAttribute('aria-expanded', String(open));
    const hosts = metricTipStackHosts(btn);
    if (open) {
        hosts.forEach(host => host.classList.add('has-open-tip'));
        metricTipOpenMode.set(btn, mode || metricTipOpenMode.get(btn) || 'pointer');
    } else {
        metricTipOpenMode.delete(btn);
        hosts.forEach(host => {
            if (!host.querySelector('.metric-info[aria-expanded="true"]')) {
                host.classList.remove('has-open-tip');
            }
        });
    }
    const card = btn.closest('.hero-metric-card');
    if (card) syncHeroFloat(card);
}

function closeMetricTips(exceptBtn) {
    document.querySelectorAll('.metric-info[aria-expanded="true"]').forEach(btn => {
        if (btn === exceptBtn) return;
        setMetricTipOpen(btn, false);
    });
}

function wireMetricTips() {
    document.querySelectorAll('[data-metric-tip]').forEach((el, i) => {
        const key = el.dataset.metricTip;
        const text = METRIC_TIPS[key];
        const name = METRIC_TIP_NAMES[key];
        const host = metricTipLabelHost(el);
        if (!text || !name || !host || host.querySelector('.metric-info')) return;

        const tipId = `metric-tip-${key}-${i}`;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'metric-info';
        btn.setAttribute('aria-label', `About ${name}`);
        btn.setAttribute('aria-describedby', tipId);
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<i class="fas fa-circle-info" aria-hidden="true"></i>';

        const tip = document.createElement('span');
        tip.id = tipId;
        tip.className = 'metric-tooltip';
        tip.setAttribute('role', 'tooltip');
        tip.textContent = text;

        host.classList.add('metric-label-with-tip');
        host.appendChild(btn);
        host.appendChild(tip);

        let pointerPrimed = false;

        btn.addEventListener('pointerdown', () => {
            pointerPrimed = true;
        });
        btn.addEventListener('pointercancel', () => {
            pointerPrimed = false;
        });

        btn.addEventListener('focus', () => {
            if (pointerPrimed) return;
            closeMetricTips(btn);
            setMetricTipOpen(btn, true, 'keyboard');
        });

        btn.addEventListener('click', e => {
            e.preventDefault();
            const keyboardClick = e.detail === 0 && !pointerPrimed;
            const fromPointer = pointerPrimed || e.detail > 0;
            pointerPrimed = false;
            const expanded = btn.getAttribute('aria-expanded') === 'true';

            if (keyboardClick) {
                if (!expanded) {
                    closeMetricTips(btn);
                    setMetricTipOpen(btn, true, 'keyboard');
                }
                return;
            }

            const open = !expanded;
            closeMetricTips(open ? btn : null);
            setMetricTipOpen(btn, open, fromPointer ? 'pointer' : 'keyboard');
        });

        btn.addEventListener('blur', () => {
            window.setTimeout(() => {
                if (metricTipOpenMode.get(btn) === 'pointer') return;
                if (document.activeElement === btn || tip.contains(document.activeElement)) return;
                setMetricTipOpen(btn, false);
            }, 0);
        });
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.metric-info, .metric-tooltip, .metric-label-with-tip')) {
            closeMetricTips();
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        const openBtn = document.querySelector('.metric-info[aria-expanded="true"]');
        closeMetricTips();
        openBtn?.blur();
    });
}

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
            alert('Sorry, something went wrong. Please email us directly at admin@gabriellasystems.com');
            btn.disabled = false;
            btn.textContent = orig;
        }
    });
}
