# Website updates (Gabriella Systems)

Narrative of what the marketing site claims, what changed in September 2026, and why.

| Doc | Role |
| --- | --- |
| [CHANGELOG.md](./CHANGELOG.md) | Dates and commit hashes from this repo |
| [homepage-hud-metrics.md](./homepage-hud-metrics.md) | Site HUD implementation notes (pointer to Modal PRODUCT.md) |
| [competitive-positioning.md](./competitive-positioning.md) | Copy gate (rivals / phone-CV wedge; Impact / hero locks) |
| [competitors.md](./competitors.md) | Living Marketing competitor tracker (Ludimos, Kabuni, peer table) |

This is a static HTML site. Live analysis runs on Modal and is embedded from `demo.html` (Showcase) and `admin.html`.

**2026-09-17:** Added [competitors.md](./competitors.md) as a living Marketing competitor tracker (Ludimos, Kabuni, peer table). Copy gate stays in [competitive-positioning.md](./competitive-positioning.md). Does not change live HTML claims or homepage hero locks.

---

## Claims policy

**Live = Showcase / API-real only.** If the Showcase pipeline does not return it (or the quality gate does not pass it), the site must not present it as a current capability or a measured number.

| Status | Allowed |
| --- | --- |
| **Live** | Metrics and overlays the Showcase API actually returns for a clip, **when that field is trusted** (per-metric fail-loud). Pose / bat / ball overlays where those objects are visible. View-aware batting and bowling analysis. |
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

Quality-gate behaviour the **website must respect** (implemented on Modal / Showcase): detect → track → pose → metric; **fail loud per metric**. Missing quality or missing number → **Can't measure**. Ball-dependent fields need `quality.gated === true`. Pose-derived fields (especially bowling Run-up) may still show when pose is trusted even if overall gated is false because the ball failed. Do **not** document “overall gated=false blanks everything.” Details: [homepage-hud-metrics.md](./homepage-hud-metrics.md).

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
| `ab1bd9c` (2026-09-16) | Batting GIF: then Bat speed at impact ~22 + Contact 400 ms. Bowling GIF then still had Release height Can't measure. |
| bowling Run-up-only PR (2026-09-16) | Bowling GIF HUD: Run-up only — no Release height, no Can't measure, no 1.09 m. |
| this PR (2026-09-16) | HTML live samples + conflict-marker fix. Hero *set* then Bat + Contact + Run-up. GIF binaries not regenerated. |
| this PR (2026-09-17) | HTML batting hero re-lock: Bat 16 + Head 41.4 + Run-up 20.4. Contact 817 stays on clip HUD / session-progress only. GIF binaries not regenerated. |
| this PR (2026-09-17) | HTML live-tip sample re-lock: Bat 10.6 + Head 45.9 + Run-up 20.4. Contact 800 stays on clip HUD / session-progress only. GIF binaries not regenerated. |
| this PR (2026-09-17) | Docs: per-metric trust / fail-loud (Showcase demo #20). Hero *set* unchanged. Live-tip samples Bat ~10.6 / Head ~45.9 / Contact 800 / Δ −11.1 (`batting-defense`). HTML/GIF numbers not changed. |
| this PR (2026-09-21) | Restore HUD lock after rebrand overwrite (`55448f4`). Heroes again Bat 10.6 + Head 45.9 + Run-up 20.4. Contact 800 / Ball 122 / Arm 619 / Front knee 155 stay detail. Release height slot omitted. Tips via `data-metric-tip`. GIF binaries not regenerated (burned overlays may lag). |

**2026-09-21 HTML restore (after rebrand overwrite):** `55448f4` copied older preview HTML over the locked heroes, so live pages briefly showed Bat **16** / Head **41.4** / Contact **817**, Ball and Arm as homepage heroes, and a bowling Release height “Measured when calibration supports it” slot, with CSS-only `i.info-btn` tips. Those are not a new product lock. Live HTML is back to the Showcase lock: homepage heroes **Bat speed at impact 10.6** + **Head stability 45.9** + **Run-up speed 20.4** only. Batting clip HUD / session progress include Bat **10.6**, Head **45.9**, Ball **122**, Contact **800**. Bowling clip/progress keep Arm **619** and Front knee **155** as detail. Δ **−11.1** remains Showcase Results **Ball speed change through contact** (gallery **`batting-defense`**) — docs only, not a homepage hero. Marketing tips use `data-metric-tip` / `.metric-info` (hover + tap sticky + keyboard). Navy/magenta polish stays. GIF binaries were not regenerated in this pass; HTML samples are the public numbers.

**2026-09-17 docs lock (per-metric trust; hero set and HTML samples unchanged):** fail loud is **per field**, not “overall `quality.gated === false` blanks everything.” Missing quality or missing number → **Can't measure**. Ball-dependent fields need `quality.gated === true`. Pose-derived Run-up / Head may show when pose is trusted (`quality.stages` absent **OR** `pose.player.ok === true`) even if the ball failed. Example: Bowling — Slow Motion Run-up ~20.4 with ball `no_detection`. Showcase shipped this in demo #20 (`c03cdbb`). Heroes stay **Bat speed at impact** + **Head stability** + **Run-up speed**; Contact is detail only; Δ ball speed is Showcase Results detail **Ball speed change through contact** (sample **−11.1**, gallery **`batting-defense`**) — not Head Δ, not a homepage hero. **Release omitted** until calibrated — not a Can't measure placeholder. Live-tip public samples: Bat **~10.6**, Head **~45.9**, Contact **800**, Δ **−11.1**. HTML/GIF numbers were not changed in this pass.

**2026-09-17 HTML lock (live-tip samples; hero set unchanged):** homepage `.hero-metric-card` tiles are **Bat speed at impact 10.6 km/h** + **Head stability 45.9 cm** + **Run-up speed 20.4 km/h** only. Contact **800 ms**, Ball **122 km/h**, Arm angular speed **619 °/s**, and Front knee **155°** are clip-HUD / session-progress **detail** only — not homepage heroes. Fail loud: untrusted Head → **Can't measure** on that hero slot; do **not** put Contact back on the hero row. Tip strings unchanged. Live-tip Δ −11.1 is Showcase **Ball speed change through contact** (not Head Δ) and is not shown on marketing HUD. Contract: Modal PRODUCT.md. GIF binaries were not regenerated in this pass.

**2026-09-17 HTML lock (batting Bat + Head; superseded for sample numbers):** homepage `.hero-metric-card` tiles were then **Bat speed at impact 16 km/h** + **Head stability 41.4 cm** + **Run-up speed 20.4 km/h** only. Contact **817 ms**, Ball **122 km/h**, Arm angular speed **619 °/s**, and Front knee **155°** are clip-HUD / session-progress **detail** only — not homepage heroes. Fail loud: ungated Head → **Can't measure** on that hero slot; do **not** put Contact back on the hero row. Marketing tips (ⓘ on live labels; hover + tap/focus): Bat = how fast the bat was moving at contact in this take (km/h); Head = how much the head moved from downswing to contact (cm), lower usually means steadier — not a technique grade; Run-up = peak approach speed into the delivery in this take (km/h); Contact (detail) = time from the start of this take to contact (ms), same-view sessions — not early vs late; Ball (detail) = measured ball speed in this take (km/h), only when the take is gated. Front knee / Arm use the locked strings in [homepage-hud-metrics.md](./homepage-hud-metrics.md). **Release height is omitted** until a calibrated gated overarm value exists. Contract: Modal PRODUCT.md. GIF binaries were not regenerated in this pass.

**2026-09-16 HTML lock (live samples; hero set superseded 2026-09-17):** homepage `.hero-metric-card` tiles were then **Bat speed at impact 16 km/h** + **Contact time in this clip 817 ms** + **Run-up speed 20.4 km/h**. Head **41.4 cm** was clip-HUD / session-progress detail only. Superseded by the Bat + Head lock above.

**2026-09-16 HTML + GIF lock (bowling Run-up only; superseded for sample numbers):** bowling homepage *hero* remains **Run-up speed** (`peak_runup_speed_kmh`) only. That pass still published 21.6 HTML / 22.4 GIF; public run-up sample is now **20.4 km/h**. Front-knee flexion at plant and arm angular speed stay on bowling/Showcase detail callouts and session-progress (live **619 °/s** / **155°**).

**2026-09-16 HTML lock (batting impact speed; superseded for sample numbers and hero pair):** batting homepage *heroes* were then **Bat speed at impact** (`bat_speed_at_impact_kmh`) + **Contact time in this clip** (`impact_offset_ms`). That pass still published ~22 / 400 ms; public samples later became **16 km/h** + **817 ms**, then Contact left the hero row on 2026-09-17. Label is **Bat speed at impact** — never bare “bat speed,” never “pipeline peak.” Do **not** publish peak ~90 or the old pipeline-peak **36–39 km/h** sample. Front stride is not shown on homepage or batting progress/hero rows.

**2026-09-15 HTML lock (historical):** bowling homepage hero + session-progress cards used **Run-up speed** + **Release height** (no public metre / later Can't measure). Superseded for bowling by the 2026-09-16 Run-up-only lock above. Batting pair was then **Bat speed (pipeline peak)** (`peak_bat_speed_kmh`, 36→39) + **Contact time in this clip** (illustrated as Can't measure). Superseded for batting by the 2026-09-16 impact-speed lock above.

## Logo and navbar

Current nav: sports-green / gold illustration mark (`assets/logo.png`) plus **Gabriella** wordmark (`.nav-logo-wordmark`) on every page. Page heroes, Showcase, and dark bands share the `--banner-deep` / `--banner-green` family so the logo and banners match.

Evolution on 2026-09-13–14:

1. `f234d9c` — Logo 2 as navbar `<img>` (G lettermark, originally in a dark pill).
2. `a11da9d` — Transparent lettermark; dark pill removed for the light header.
3. `0409838` — Athlete-G (batter silhouette) tried as the brand mark.
4. `d90868e` / `a36de2d` — Equipment-inspired G + reticle; no batter illustration, cleaner at nav size.
5. `b84119f` — Continuous G: spur welded to the bowl (no break); opening only at top-right, plus reticle.

## Hero / CTA

`5c6c2f7` (2026-09-13) made **Request a Pilot** the primary homepage CTA and **Explore the Showcase** secondary. `f4668f8` / `405d8f0` introduced the split hero and GSAP motion, then fixed the blank-hero bug (`.gsap-ready` opacity).

## Open blockers

1. **After the bowling Run-up-only GIF lands on `main`:** Modal **redeploy** + **demo rerun** so the live Showcase matches the overlay. This website repo does not redeploy Modal by itself.
2. **KAN-272** is mode detection (bowling Showcase misfired as batting), **not** a bowling fail-loud / run-up gap. Per-metric trust is shipped in Showcase demo #20. Do not invent bowling numbers. Public bowling *hero* is Run-up only.
3. Modal quality gate / `impact_offset_ms` live in the ML repo (not this tree). Product notes mention Modal PR #1 on `master` as `8fcab5d` — **not referenced here**; re-verify in Modal.

## What not to reintroduce

- Shipping claims for capture hardware, calibrated FOV as a live software guarantee, or multi-camera as a current capability.
- “Batting is front-on only” / “bowling is side-on only.”
- Hero HUD: ball speed as a batting skill metric; **Ball speed** / **Can't measure** / **—** as a bowling homepage peak; `runup_speed_at_delivery_kmh` as a homepage run-up fallback; front-knee flexion or arm angular speed as homepage bowling hero peaks (those are detail metrics).
- Contact time as a homepage batting hero peak (detail/clip HUD / session-progress only). Contact time on those surfaces must use **Contact time in this clip** — never early vs late, timing the ball, or played early/late. If Head is untrusted, show **Can't measure** — do not restore Contact on the hero row.
- Treating overall `quality.gated === false` as a reason to blank pose-derived metrics (especially bowling Run-up) when pose is trusted. Fail loud is per metric.
- Calling live-tip Δ **−11.1** “Head Δ.” It is Showcase Results **Ball speed change through contact** (gallery **`batting-defense`**), not a homepage hero.
- Public **1.09 m** (or any invented substitute such as 2.1 m) as release height on homepage heroes, progress cards, bowling GIF HUD, or bowling.html until calibration supports a credible overarm measurement. Do not keep Release height on those surfaces as **Can't measure** / **can't be determined** / **Measured when calibration supports it** — omit the slot.
- Conflicting bat-speed units (homepage km/h vs batting.html mph) or unlabelled mph cards. Use one Showcase-like **km/h** **Bat speed at impact** sample (**10.6**). Never pipeline-peak 36–39 or peak ~90. Do not republish 16 / 41.4 / 817 / ~22 / 400 ms / 21.6 / 22.4 / ~1840°/s as public samples.
- Front stride on homepage or batting hero/progress rows (not a gated API field; do not replace with fake cm).
- Coercing null or untrusted metrics to `0`, inventing numbers, or showing a fake Head stability centimetre.
