# Gabriella Systems — Cricket Vision website

Static marketing site for Gabriella Systems: computer vision for cricket batting and bowling analysis, aimed at academies, coaches, and performance programs.

Live analysis is not implemented in this repo. The Showcase and admin UIs are Modal embeds (`gabriellasystems--cricket-demo-web.modal.run`).

## Current positioning

- **Live today:** software that analyzes batting and bowling clips (pose, bat, and ball overlays where visible).
- **View-aware:** metrics and visualizations depend on batting vs bowling mode **and** camera view — not a fixed “batting is front-on / bowling is side-on” recipe.
- **Planned, not shipping:** portable / purpose-built capture hardware.
- **CTA:** Request a Pilot (primary), Explore the Showcase (secondary).

## Documentation

Product should review these for accuracy:

| Doc | What it covers |
| --- | --- |
| [docs/CHANGELOG.md](docs/CHANGELOG.md) | Dated website/UI changelog (September 2026 and nearby work), with commit hashes from this repo. |
| [docs/website-updates.md](docs/website-updates.md) | Claims policy, pages, GIFs, logo/nav, open blockers. |
| [docs/homepage-hud-metrics.md](docs/homepage-hud-metrics.md) | Locked hero metrics + Modal quality gate (fail loud; HUD only renders gated fields). |
| [docs/competitive-positioning.md](docs/competitive-positioning.md) | Marketing stub: rivals, fail-loud wedge, vs phone-CV apps. |

## Pages

- `index.html` — Landing: view-aware hero, status chips, Showcase GIFs, pilot CTA.
- `services.html` — Platform (software-first pipeline; hardware on the roadmap).
- `batting.html` / `bowling.html` — Mode-specific analysis pages.
- `academies.html` — Academy / pilot positioning.
- `demo.html` — Live Showcase (Modal iframe).
- `about.html` — Company focus and product roadmap.
- `contact.html` — Pilot / inquiry form.
- `admin.html` — Admin panel iframe.

## Stack

- HTML5, CSS3, vanilla JavaScript
- GSAP + ScrollTrigger (homepage motion)
- Space Grotesk / Inter
- Font Awesome
- Assets in `assets/` (`logo.png`, `cricket_batting_15s.gif`, `cricket_bowling_15s.gif`, `cricket-vision-hero.png`)

## Local preview

```bash
./start-local.sh
```

Then open `http://127.0.0.1:8765/`.

```bash
PORT=9000 ./start-local.sh
```

## Related work and blockers

- HUD contract: [docs/homepage-hud-metrics.md](docs/homepage-hud-metrics.md) — batting Impact timing + Bat speed; bowling Run-up speed + Release height. GIF binaries are updated separately.
- Modal quality gate / `impact_offset_ms` live in the ML/Modal repo (not this tree).
