# Website updates (Gabriella Systems)

Narrative of what the marketing site claims, what changed in September 2026, and why.

| Doc | Role |
| --- | --- |
| [CHANGELOG.md](./CHANGELOG.md) | Dates and commit hashes from this repo |
| [homepage-hud-metrics.md](./homepage-hud-metrics.md) | Locked hero metrics + quality gate |
| [competitive-positioning.md](./competitive-positioning.md) | Marketing stub (rivals / phone-CV wedge) |

This is a static HTML site. Live analysis runs on Modal and is embedded from `demo.html` (Showcase) and `admin.html`.

---

## Claims policy

**Live = Showcase / API-real only.** If the Showcase pipeline does not return it (or the quality gate does not pass it), the site must not present it as a current capability or a measured number.

| Status | Allowed |
| --- | --- |
| **Live** | Metrics and overlays the Showcase API actually returns for a clip, after the quality gate. Pose / bat / ball overlays where those objects are visible. View-aware batting and bowling analysis. |
| **Roadmap** | Portable / purpose-built capture **hardware**. **Calibration** as a shipping guarantee. **Multi-camera**. Machine-mounted / nets-fixed capture as a current product. |

### View-aware (required)

Do **not** claim batting is front-on-only or bowling is side-on-only. Analysis and visualizations depend on **mode** (batting vs bowling) **and** camera view.

`8cd48a2` removed language such as “Batting from the bowling end. Bowling side-on,” “Side-on Bowling Analysis,” and “Device repositioned side-on facing the bowler.” Current hero: *Analysis that fits the view.*

### Software-first today; hardware planned

Homepage status chips (`index.html`):

- **Live:** Batting & bowling video analysis
- **Live:** Pose, bat & ball overlays
- **Planned:** Portable capture hardware

The same split appears on Platform (`services.html`) and About (`about.html`).

### Capability vs Showcase output

Copy on `main` (`8cd48a2`, `7b2538b`, `b9903ae`, `5fa7f4b`) was tightened to this policy:

- `7b2538b` dropped multi-camera and live-software calibration language.
- `b9903ae` / `5fa7f4b` dropped centimetre head-displacement figures Showcase summaries do not return; sample progress cards are **illustrative** and need comparable views.

Session comparison is coach-led and strongest when takes share a similar view and quality. Automatic longitudinal comparison is the product thesis, not a claim that every phone clip is comparable.

Quality-gate behaviour the **website must respect** (implemented on Modal): detect → track → pose → metric; **fail loud**; HUD / dashboard only renders gated fields. Details: [homepage-hud-metrics.md](./homepage-hud-metrics.md).

---

## What the site is for

Gabriella Vision is computer vision for cricket nets: coaches upload (or review) batting and bowling clips and get metrics plus overlays. The site speaks to academies, coaches, and performance programs. Primary CTA: **Request a Pilot** (`contact.html`). Secondary: **Explore the Showcase**.

## Pages touched by the September copy pass

| Page | Role after the update |
| --- | --- |
| `index.html` | View-aware hero, pilot CTA, live/planned status chips, dual Showcase GIFs, batting/bowling intelligence lists, session-progress cards. |
| `services.html` | Platform pipeline; software-first capture; view-aware batting vs bowling readouts; hardware on the roadmap. |
| `batting.html` | Batting metrics and overlays suited to the camera view; pose-overlay coaching questions; illustrative compare samples. |
| `bowling.html` | Bowling phases and pipeline metrics; view-suited visualizations; no side-on-only meta description. |
| `about.html` | Roadmap: live clip analysis → session workflows → portable capture hardware. |

Related pages: `demo.html` (Showcase iframe), `contact.html` (pilot form), `academies.html`, `admin.html`.

## Homepage GIFs and HUD

Assets: `assets/cricket_batting_15s.gif`, `assets/cricket_bowling_15s.gif`.

| Commit | What landed |
| --- | --- |
| `a8fe927` (2026-09-13) | Real Showcase gallery clips (net cover drive + bowling take) as homepage loops. |
| `38dfb2e` (2026-09-14) | Pose / bat / ball overlays burned onto those clips so the homepage reads as product output. |
| `389ab41` (2026-09-14) | Readable Gabriella Vision HUD: larger type, two session peaks, labelled as session metrics from this take. |
| `6afc4e7` (2026-09-15) | GIF HUD refresh for the then-locked pair (batting: impact + bat; bowling: knee + arm). |

**2026-09-15 HTML lock:** bowling homepage hero + session-progress cards use **Run-up speed** + **Release height**. Ball speed is omitted from that two-peak HUD until gated and non-null (not shown as Can't measure). Front knee and arm angular speed stay on bowling/Showcase detail callouts.

**Asset lag:** Homepage GIF HUD overlays may still show a previous bowling pair. Locked HTML pair is in [homepage-hud-metrics.md](./homepage-hud-metrics.md). GIF binary refresh is a separate PR (see Open blockers).

## Logo and navbar

Current nav: transparent G lettermark (`assets/logo.png`) plus **Gabriella** wordmark (`.nav-logo-wordmark`) on every page.

Evolution on 2026-09-13–14:

1. `f234d9c` — Logo 2 as navbar `<img>` (G lettermark, originally in a dark pill).
2. `a11da9d` — Transparent lettermark; dark pill removed for the light header.
3. `0409838` — Athlete-G (batter silhouette) tried as the brand mark.
4. `d90868e` / `a36de2d` — Equipment-inspired G + reticle; no batter illustration, cleaner at nav size.
5. `b84119f` — Continuous G: spur welded to the bowl (no break); opening only at top-right, plus reticle.

## Hero / CTA

`5c6c2f7` (2026-09-13) made **Request a Pilot** the primary homepage CTA and **Explore the Showcase** secondary. `f4668f8` / `405d8f0` introduced the split hero and GSAP motion, then fixed the blank-hero bug (`.gsap-ready` opacity).

## Open blockers

1. **GIF binaries are updated separately.** Homepage overlays do not refresh in HTML/docs-only PRs. After the 2026-09-15 bowling HUD swap (run-up + release height), GIFs may still show the previous knee/arm pair until an asset PR.
2. **After GIFs land on `main`:** Modal **redeploy** + **demo rerun** so the live Showcase matches the new overlays. This website repo does not redeploy Modal by itself.
3. Modal quality gate / `impact_offset_ms` live in the ML repo (not this tree). Product notes mention Modal PR #1 on `master` as `8fcab5d` — **not referenced here**; re-verify in Modal.

## What not to reintroduce

- Shipping claims for capture hardware, calibrated FOV as a live software guarantee, or multi-camera as a current capability.
- “Batting is front-on only” / “bowling is side-on only.”
- Hero HUD: ball speed as a batting skill metric; **Ball speed** / **Can't measure** / **—** as a bowling homepage peak; front knee or arm angular speed as homepage bowling hero peaks (those are detail metrics).
- Coercing null or ungated metrics to `0`, or inventing numbers.
- Head-displacement centimetres or other sample numbers the Showcase API does not return.
