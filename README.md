# Gabriella Systems — Cricket Vision website

Static marketing site for Gabriella Systems: computer vision for cricket batting and bowling analysis, aimed at academies, coaches, and performance programs.

Live analysis is not implemented in this repo. The Showcase and admin UIs are Modal embeds (`gabriellasystems--coach-portal.modal.run`). Since 2026-11-10 the Showcase embed on `demo.html` is hidden behind a short note while the live demo is updated; the original block is kept in an HTML comment there.

## Current positioning

- **Live today:** software that analyzes batting and bowling clips (pose, bat, and ball overlays where visible).
- **View-aware:** metrics and visualizations depend on batting vs bowling mode **and** camera view — not a fixed “batting is front-on / bowling is side-on” recipe.
- **Planned, not shipping:** portable / purpose-built capture hardware.
- **CTA:** Request a Pilot (primary), Explore the Showcase (secondary).

## Documentation

Canonical product / CV / device / backlog docs live in [Gabriella-Systems/modal `docs/`](https://github.com/Gabriella-Systems/modal/tree/main/docs). This repo only holds site copy and HUD docs; see [docs/README.md](docs/README.md). If they conflict, Modal product docs win — ping Product.

Product should review these for accuracy:

| Doc | What it covers |
| --- | --- |
| [docs/CHANGELOG.md](docs/CHANGELOG.md) | Dated website/UI changelog (September 2026 and nearby work), with commit hashes from this repo. |
| [docs/website-updates.md](docs/website-updates.md) | Claims policy, pages, GIFs, logo/nav, open blockers. |
| [docs/homepage-hud-metrics.md](docs/homepage-hud-metrics.md) | Site HUD implementation notes (pointer to Modal PRODUCT.md; per-metric trust / fail loud). |
| [docs/competitive-positioning.md](docs/competitive-positioning.md) | Copy gate: rivals, fail-loud wedge, Impact / hero locks. |
| [docs/competitors.md](docs/competitors.md) | Living Marketing competitor tracker (Ludimos, Kabuni, CricVision, 3rd-Eye, Level Up, peers, watchlist, leads). |
| [docs/marketing/linkedin/README.md](docs/marketing/linkedin/README.md) | LinkedIn company-page post packs (anonymized media + captions). |

## Pages

- `index.html` — Landing: view-aware hero, status chips, Showcase GIFs, pilot CTA.
- `services.html` — Platform (software-first pipeline; hardware on the roadmap).
- `batting.html` / `bowling.html` — Mode-specific analysis pages.
- `academies.html` — Academy / pilot positioning.
- `demo.html` — Showcase page: live Modal embed is hidden while it is updated; a gallery of additional batting examples sits below the note.
- `about.html` — Mission, vision, leadership, and product roadmap.
- `robots.txt` / `sitemap.xml` — crawl hints for search and generative engines.
- `connect.html` — Connect: pilot / inquiry form.
- `admin.html` — Admin panel iframe.

## Stack

- HTML5, CSS3, vanilla JavaScript
- GSAP + ScrollTrigger (homepage motion)
- Space Grotesk / Inter
- Font Awesome
- Assets in `assets/` (`logo.png`, `cricket_batting_front_on.gif`, `cricket_batting_side_on.gif`, `cricket_batting_showcase_1.gif`, `cricket_batting_showcase_2.gif`, `cricket_bowling_knee_5s.gif`, `cricket-vision-hero.png`). `cricket_batting_front_on.gif` and `cricket_batting_side_on.gif` are the batting selected examples on the homepage and `batting.html`; `cricket_bowling_knee_5s.gif` is the bowling example on the homepage and `bowling.html`; the two showcase GIFs are in the Showcase gallery on `demo.html`. All were added unmodified and are labelled as pipeline estimates. Batting metric lists name Ball track, Shot direction (estimated), Ball speed (rough estimate, ±20%), Body pose, and Pitch map (estimated). Bowling lists name Front knee angle.

## Local preview

```bash
./start-local.sh
```

Then open `http://127.0.0.1:8765/`.

```bash
PORT=9000 ./start-local.sh
```

## Related work and blockers

- HUD implementation: [docs/homepage-hud-metrics.md](docs/homepage-hud-metrics.md). Since 2026-11-10, batting example metric lists name **Ball track**, **Shot direction (estimated)**, **Ball speed (rough estimate, ±20%)**, **Body pose**, and **Pitch map (estimated)**; bowling lists name **Front knee angle**. Head stability, Contact time, Run-up speed, Arm angular speed, and bat speed are off those lists. No numeric value is added in HTML. The examples are labelled: Estimated values from our pipeline, not real measurements. For demonstration only.
- Modal quality gate / `impact_offset_ms` live in the ML/Modal repo (not this tree). Showcase per-metric trust shipped in demo #20 (`c03cdbb` — re-verify there).
