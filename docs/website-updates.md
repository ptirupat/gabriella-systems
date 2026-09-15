# Website updates (Gabriella Systems)

Narrative of what the marketing site claims, what changed in September 2026, and why. For dates and commits, see [CHANGELOG.md](./CHANGELOG.md). For the locked homepage HUD fields, see [homepage-hud-metrics.md](./homepage-hud-metrics.md).

This is a static HTML site. Live analysis runs on Modal and is embedded from `demo.html` (Showcase) and `admin.html`.

---

## What the site is for

Gabriella Vision is computer vision for cricket nets: coaches upload (or review) batting and bowling clips and get metrics plus overlays. The site speaks to academies, coaches, and performance programs. The primary commercial CTA is **Request a Pilot** (`contact.html`), with **Explore the Showcase** as the secondary path.

## Product claims the site is allowed to make

Copy on `main` (especially `8cd48a2`, `7b2538b`, `b9903ae`, `5fa7f4b`) was tightened so marketing matches what the Showcase pipeline actually returns.

### Software-first today; hardware planned

**Live today:** video analysis in software — batting and bowling clips, with pose / bat / ball overlays where those objects are visible.

**Planned, not shipping:** portable / purpose-built capture hardware. The site must not treat dedicated capture, calibrated nets hardware, or a machine-mounted module as a current product.

Homepage status chips (`index.html`):

- **Live:** Batting & bowling video analysis
- **Live:** Pose, bat & ball overlays
- **Planned:** Portable capture hardware

The same split appears on Platform (`services.html`) and About (`about.html`) — “from working analysis software to dedicated capture hardware.”

### View-aware analysis (not a fixed camera recipe)

Do **not** claim that batting is front-on-only or bowling is side-on-only. Analysis and visualizations depend on:

1. **Mode** — batting vs bowling
2. **Camera view** — what is actually in the take

`8cd48a2` removed language such as “Batting from the bowling end. Bowling side-on,” “Side-on Bowling Analysis,” and “Device repositioned side-on facing the bowler.” Current hero: *Analysis that fits the view.*

Session comparison is coach-led and strongest when takes share a similar view and quality. Automatic longitudinal comparison is the product thesis, not a claim that every phone clip is comparable.

### Capability vs Showcase output

`7b2538b` dropped live-software claims the pipeline does not currently stand behind (multi-camera ready, calibration as a shipping software story). Capability lists should describe metrics the pipeline can return for a given clip and view — not an unbounded biomechanics dashboard.

`b9903ae` / `5fa7f4b` further softened batting sample cards: no centimetre head-displacement figures Showcase summaries do not return; sample progress numbers should look like Showcase-like ranges and be labelled **illustrative**.

## Pages touched by the September copy pass

| Page | Role after the update |
| --- | --- |
| `index.html` | View-aware hero, pilot CTA, live/planned status chips, dual Showcase GIFs, batting/bowling intelligence lists, session-progress cards. |
| `services.html` | Platform pipeline; software-first capture; view-aware batting vs bowling readouts; hardware on the roadmap. |
| `batting.html` | Batting metrics and overlays suited to the camera view; pose-overlay coaching questions; illustrative compare samples. |
| `bowling.html` | Bowling phases and pipeline metrics; view-suited visualizations; no side-on-only meta description. |
| `about.html` | Roadmap: live clip analysis → session workflows → portable capture hardware. |

Related pages not in that five-file copy commit, but part of the site: `demo.html` (Showcase iframe), `contact.html` (pilot form), `academies.html`, `admin.html`.

## Homepage GIFs and HUD

Assets: `assets/cricket_batting_15s.gif`, `assets/cricket_bowling_15s.gif`.

| Commit | What landed |
| --- | --- |
| `a8fe927` (2026-09-13) | Real Showcase gallery clips (net cover drive + bowling take) as homepage loops. |
| `38dfb2e` (2026-09-14) | Pose / bat / ball overlays burned onto those clips so the homepage reads as product output. |
| `389ab41` (2026-09-14) | Readable Gabriella Vision HUD: larger type, two session peaks, labelled as session metrics from this take. |

**Asset lag:** `389ab41` still used the previous HUD pair (batting: ball + bat; bowling: knee + run-up). The **locked** hero pair is impact timing + bat speed (batting) and front knee at plant + arm angular speed (bowling). HTML labels for that lock are in open [PR #2](https://github.com/ptirupat/gabriella-systems/pull/2); GIF binaries may still need a follow-up refresh. Document and implement against [homepage-hud-metrics.md](./homepage-hud-metrics.md), even if the GIF files on `main` have not caught up.

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

## Related open work

- Website HUD labels: [PR #2](https://github.com/ptirupat/gabriella-systems/pull/2) (open as of this writing).
- Modal quality gate / `impact_offset_ms`: **not in this repo**. The site only embeds `https://gabriellasystems--cricket-demo-web.modal.run`. Product notes mention Modal PR #1 on `master` as `8fcab5d`; that SHA is not referenced here and should be confirmed in the ML repo.

## What not to reintroduce

- Shipping claims for capture hardware, calibrated FOV as a live software guarantee, or multi-camera as a current capability.
- “Batting is front-on only” / “bowling is side-on only.”
- Hero HUD: ball speed as a batting skill metric; run-up as the bowling hero pair.
- Coercing null or ungated metrics to `0`.
- Head-displacement centimetres or other sample numbers the Showcase API does not return.
