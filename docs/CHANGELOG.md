# Website changelog

Dated record of marketing-site work in this repo (`ptirupat/gabriella-systems`). Newest first. Commit hashes are from `git log` on `main` unless noted as an open PR.

Related: [website-updates.md](./website-updates.md) (claims policy), [homepage-hud-metrics.md](./homepage-hud-metrics.md) (HUD notes → Modal PRODUCT.md), [competitive-positioning.md](./competitive-positioning.md) (copy gate), [competitors.md](./competitors.md) (Marketing competitor tracker).

---

## 2026-09-17

### Per-metric trust / fail-loud (docs lock)

- Website docs no longer say overall `quality.gated === false` blanks every metric. Fail loud is **per field**. Showcase already shipped this in demo #20 (`c03cdbb` — external ML/demo tree).
- Missing `quality` or missing number → **Can't measure**. Ball-dependent fields need `quality.gated === true`. Pose-derived fields (especially bowling **Run-up** / `peak_runup_speed_kmh`) may **show** when non-null even if overall gated is false due to ball fail, when pose is trusted (`quality.stages` absent **OR** `pose.player.ok === true`). Pose stage present and not ok → **Can't measure**.
- Canonical example: Bowling — Slow Motion, Run-up **~20.4** with ball `no_detection`.
- Hero *set* unchanged: batting **Bat speed at impact** + **Head stability**; **Contact time in this clip** stays detail only; Δ ball speed is Showcase Results detail **Ball speed change through contact** (not a hero). Bowling **Run-up only**; **Release omitted** until calibrated — not a Can't measure placeholder.
- Public samples lock to live tip: Bat **~10.6**, Head **~45.9**, Contact detail **800**, Δ **−11.1**; gallery id **`batting-defense`**. Δ **−11.1** is **not** Head Δ (the earlier “Head Δ −11.1 / pre 27.5 / post 16.4” line was a mis-attribution). This pass is docs-only — homepage HTML/GIF numbers were already on the live-tip lock and were not changed.
- **KAN-272** is mode detection (bowling Showcase as batting), not a bowling fail-loud / run-up gap.
- Docs: [homepage-hud-metrics.md](./homepage-hud-metrics.md), [website-updates.md](./website-updates.md), [competitive-positioning.md](./competitive-positioning.md), [competitors.md](./competitors.md), README / [docs/README.md](./README.md).

### Live sample re-lock to tip (Bat 10.6 / Head 45.9 / Contact 800)

- Public HTML samples re-lock to live tip: **Bat speed at impact** **10.6 km/h** (was 16) + **Head stability** **45.9 cm** (was 41.4). Run-up stays **20.4 km/h**.
- **Contact time in this clip** detail sample is **800 ms** (was 817 / earlier 400). Hero *set* unchanged: **Bat + Head + Run-up**. Contact stays clip HUD / session-progress only — never a homepage hero.
- Tip strings unchanged. GIF binaries not regenerated. Live-tip Δ **−11.1** is Showcase Results **Ball speed change through contact** (gallery **`batting-defense`**) — not shown on marketing HUD; later the same day docs corrected the Head Δ mis-attribution (see per-metric trust entry above).
- HTML: `index.html` hero tiles + batting clip HUD / session-progress; `batting.html` clip HUD and session stack. Docs: [homepage-hud-metrics.md](./homepage-hud-metrics.md), [competitive-positioning.md](./competitive-positioning.md), [website-updates.md](./website-updates.md), README.

### Coach-facing metric ⓘ tips

- Small ⓘ beside every coach-facing metric label on homepage heroes, clip HUD rows, session progress, and batting/bowling pages.
- Hover, keyboard focus, and tap toggle the same locked string (`aria-describedby` tooltip — not `title` only). Copy lock: [homepage-hud-metrics.md](./homepage-hud-metrics.md) Marketing tips.
- Open tip panels stack above neighboring HUD / session-progress rows (`z-index` + `overflow: visible` on tip hosts). Click/tap stays sticky so GSAP float cannot dismiss the panel; outside click and Escape still close. Keyboard focus opens in keyboard mode and closes on blur (Enter/Space does not reclassify the tip as pointer-sticky). Abandoned pointerdowns (release outside the ⓘ, including touch/pen implicit capture) clear the primed flag so a later Tab still closes on blur.
- Hero *set* unchanged at the time: **Bat 16** / **Head 41.4** / **Run-up 20.4** (superseded later the same day by live-tip **10.6** / **45.9** / **20.4**). No Modal/pipeline changes.

### Showcase samples-ready status (#15 Copilot follow-up)

- After the Showcase iframe `load`s, the status card heading updates from “Samples loading” to “Sample clips available” (`aria-live`). Supporting copy notes the gallery is ready; **More samples coming soon** stays.
- Overlay lookup is optional (`?.classList` / `?.remove`) so a later iframe load cannot throw if the overlay was already removed.
- HUD lock unchanged at the time: **Bat 16** / **Head 41.4** / **Run-up 20.4** (superseded later the same day by live-tip **10.6** / **45.9** / **20.4**).

### Competitor tracker (Marketing)

- Add [competitors.md](./competitors.md): living Marketing tracker for **Ludimos**, **Kabuni**, and a short peer table (Matcha, CricVision, Fulltrack AI, PitchVision, BatSense/SmartCricket, NV Play, Hawk-Eye). Pricing/accuracy marked uncertain where public sources disagree or are thin.
- [competitive-positioning.md](./competitive-positioning.md) links to the tracker and names Ludimos + Kabuni with one-line class + Gabriella wedge. Impact / homepage hero gates **unchanged** (batting **Bat speed at impact** + **Head stability**; Contact time detail-only; bowling Run-up only).
- Not a product contract — Modal PRODUCT.md remains source of truth. Docs only; no HTML/JS.

### Batting homepage heroes: Bat speed at impact + Head stability

- Product re-lock: batting homepage heroes are **Bat speed at impact** (`bat_speed_at_impact_kmh`, **16 km/h**) + **Head stability** (`head_stability_cm`, **41.4 cm**). Bowling hero unchanged: **Run-up speed** (`peak_runup_speed_kmh`, **20.4 km/h**).
- **Contact time in this clip** (`impact_offset_ms`, **817 ms**) moves off the homepage hero row. It stays on clip HUDs / session-progress as a same-view marker only — never early vs late.
- Fail loud: if Head is ungated or null, show **Can't measure** / **—** in that hero slot. Do **not** put Contact back on the hero row. Never invent `0` or a fake centimetre.
- No Ball / Arm as homepage heroes. GIF binaries not regenerated (HTML HUD overlays carry the Head row).
- Marketing tips: Bat = how fast the bat was moving at contact in this take (km/h). Head = how much the head moved from downswing to contact (cm); lower usually means steadier — not a technique grade. Contact (detail) = same-view marker, not early/late.
- HTML: `index.html` hero tiles + batting clip HUD / session-progress; `batting.html` clip HUD, coaching tips, and session stack. Docs: [homepage-hud-metrics.md](./homepage-hud-metrics.md), [competitive-positioning.md](./competitive-positioning.md), [website-updates.md](./website-updates.md), README.

## 2026-09-16

### Homepage status-strip contrast

- Hero `.status-item` / `.status-live` / `.status-planned` used `--muted` (`#5b6a66`) and `--green` / `--teal` icons on the dark green hero — ~1.0–1.7:1, unreadable.
- New on-dark tokens: `--text-on-dark`, `--text-on-dark-muted`, `--live-on-dark`, `--planned-on-dark`. Applied to the status strip, hero copy, and hero metric labels.
- HUD lock at the time of this pass: **Bat 16** / **Contact 817** / **Run-up 20.4** (superseded 2026-09-17 by Bat + Head).

### Marketing-site polish (items 2–7)

- Showcase banner uses the same dark-green page-hero as other pages (navy override removed).
- Showcase empty space: explicit “samples loading” / “more samples coming soon” copy; iframe height reduced so the page does not read as a broken white void.
- About restores **Mission**, **Vision**, and **Leadership** headings, plus a short “What is Gabriella?” block.
- Logo recolored to the sports-green / gold palette; banners use a shared `--banner-*` green family.
- Copy lock: one expansion line — started with cricket; baseball and softball are next (same session-metric / fail-loud approach), labeled **roadmap**. Titles/H1s stay cricket-primary (nets, coaches, academies, session metrics). GEO blurbs state what we measure now, fail-loud, then upcoming sports.
- SEO/GEO: canonical + OG/Twitter completeness, Organization JSON-LD, `robots.txt`, `sitemap.xml`.
- Homepage HUD lock from `main` (#13): **Bat 16** / **Contact 817** / **Run-up 20.4** (superseded 2026-09-17 by Bat + Head).

### Live samples + homepage conflict markers (hero set unchanged)

- Removed leftover Git conflict markers from `index.html` Bowling — Session Progress (`<<<<<<< HEAD` / `=======` / `>>>>>>> da73aab`).
- Resolved that card to match `bowling.html` detail/progress: **Run-up 20.4 km/h**, **Arm speed 619 °/s**, **Front knee angle 155°** (not Delivery stride 1.82 m).
- Restored the locked homepage *hero set* on `.hero-metric-card` tiles: batting **Bat speed at impact 16 km/h** + **Contact time in this clip 817 ms**; bowling **Run-up speed 20.4 km/h** only. Ball 122 / Arm 619 are no longer homepage heroes (they stay on clip HUDs / session-progress).
- Dropped the **Release height** “Measured when calibration supports it” placeholder from the `bowling.html` metrics grid — omit Release from the public HUD until calibrated.
- Docs treat live HTML numbers as the public samples: Bat **16**, Contact **817 ms**, Run-up **20.4**, plus detail-only Ball **122**, Arm **619 °/s**, Head **41.4 cm**, Front knee **155°**. Do not republish ~22 / 400 ms / 21.6 / 22.4 / ~1840°/s as public samples. Hero *set* is unchanged.
- No JS logic, GIF binary, or Modal/demo changes.

### Bowling homepage HUD: Run-up only (drop Release height)

- Public bowling HUD no longer shows **Release height** — not as **Can't measure**, **can't be determined**, or **Measured when calibration supports it**, and not as a fake metre (**no 1.09 m**, **no 2.1 m**).
- Homepage bowling hero is **Run-up speed** (`peak_runup_speed_kmh`) only. Prefer an empty second slot rather than an unmeasured Release height row. Batting pair is unchanged (later the same day the public samples became **Bat 16 km/h** + **Contact 817 ms** — see the live-sample entry above; this pass still used the then-current ~22 / 400 ms figures).
- HTML: `index.html` hero tiles + bowling session-progress card; `bowling.html` metrics grid and session-progress card. Run-up sample later locked to live **20.4 km/h** (this pass still used 21.6 HTML / 22.4 GIF).
- Regenerated `assets/cricket_bowling_15s.gif` so the burned Gabriella Vision panel is Run-up only. Batting GIF unchanged.
- Docs: [homepage-hud-metrics.md](./homepage-hud-metrics.md).

### Batting homepage HUD pair (bat speed at impact)

- Homepage two-peak batting HUD is **Bat speed at impact** (`bat_speed_at_impact_kmh`) + **Contact time in this clip** (`impact_offset_ms`) from the gated net-cover-drive Showcase reseed (demo#9 / Product lock). Public samples later the same day: **16 km/h** + **817 ms** (this pass still used ~22 / 400 ms).
- Label is **Bat speed at impact** only. Never bare “bat speed.” Never “pipeline peak.” Never publish peak ~90 or the old **36 → 39 km/h** pipeline-peak sample.
- In this earlier batting-only pass, bowling HTML was still **Run-up speed** + **Release height** (no public metre). That bowling lock is **superseded later the same day** by the Run-up-only entry above — do not treat this bullet as current.
- HTML: `index.html` hero tiles + session-progress card; `batting.html` session intelligence. Docs: [homepage-hud-metrics.md](./homepage-hud-metrics.md).
- GIF binaries were unchanged in the batting-only pass (batting GIF then still burned Impact + Bat speed 39 km/h; bowling GIF may still have burned 1.09 m). Both GIFs were refreshed later the same day (batting ~22 + 400 ms on `main`; bowling Run-up-only in the lock above).

## 2026-09-15

### Credibility: release height off public heroes until calibrated

- Public **1.09 m** release height removed from homepage heroes, session-progress cards, and `bowling.html`. That figure is waist-height and not credible for overarm release. Do **not** invent a substitute (including 2.1 m). Placeholder: **Measured when calibration supports it**.
- **Front-knee flexion at plant** (was “Front knee” / “Front knee at plant”); where the angle is shown, gloss **0° ≈ fully extended**.
- Bat speed labelled **bat speed (pipeline peak)**; one Showcase-like range **36 → 39 km/h** (no conflicting mph cards).
- Keep illustrative **Run-up 21.6 km/h**, arm angular **~1840°/s**, delivery stride **1.82 m**.
- HTML: `index.html`, `bowling.html`, `batting.html`, `academies.html`. GIF binaries unchanged (may still burn an older overlay).

### Batting homepage HUD pair (contact time)

- Homepage two-peak batting HUD is **Bat speed** (`peak_bat_speed_kmh`) + **Contact time in this clip** (`impact_offset_ms`).
- Null / ungated contact time is **Can't measure** / **—**. Never early vs late / timing-the-ball language.
- **Head stability** (`head_stability_cm`) moves to batting detail/capability lists only — not a homepage hero (no Head-stability Can't measure on the homepage HUD).
- Site HUD notes point at Modal [PRODUCT.md](https://github.com/Gabriella-Systems/modal/blob/main/docs/PRODUCT.md) as the contract; this repo does not fork a second lock.
- **[PR #8](https://github.com/ptirupat/gabriella-systems/pull/8)** merged (`11c70a7`) with the contact-time pair. This credibility pass keeps that lock and removes public 1.09 m.

### Batting homepage HUD pair (superseded same day)

- Earlier same-day HTML lock was **Head stability** (`head_stability_cm`) + **Bat speed** (`peak_bat_speed_kmh`), with contact time on detail lists only. Superseded by the contact-time pair above.

### Bowling homepage HUD pair

- Homepage two-peak bowling HUD is **Run-up speed** (`peak_runup_speed_kmh` only) + **Release height** (`release_height_m`). No homepage fallback to `runup_speed_at_delivery_kmh`.
- **Ball speed** is omitted from that HUD until a gated, non-null sample — not shown as **Can't measure** / **—**.
- Locked bowling peaks that are ungated/null show **Can't measure** / **—** for that peak.
- Front knee at plant and arm angular speed move to bowling/Showcase detail callouts, not homepage hero peaks.
- Batting pair later locked to Head stability + Bat speed (same day; see above). Earlier HTML used honest Impact label **Contact time in this clip** + Bat speed.
- HTML: `index.html` hero cards and bowling session-progress card; `bowling.html` leads with run-up + release height; `batting.html` contact-time labels.
- Docs: [homepage-hud-metrics.md](./homepage-hud-metrics.md), [competitive-positioning.md](./competitive-positioning.md) Impact copy gate. GIF binaries are unchanged in this pass.

### On `main` (same day)

| Commit | Summary |
| --- | --- |
| `6afc4e7` | Update homepage GIFs with the previous locked HUD pair (batting impact/bat; bowling knee/arm). This bowling pair supersedes that HTML lock; GIFs lag until a separate asset PR. |

### Earlier HUD lock (merged)

- **[PR #2](https://github.com/ptirupat/gabriella-systems/pull/2)** merged (`509a1fc`) — HTML labels for Impact timing + Bat speed / Front knee + Arm angular. Superseded for bowling by the run-up + release-height pair above.

## 2026-09-14

### Open (historical, 2026-09-14)

- HTML HUD label lock from [PR #2](https://github.com/ptirupat/gabriella-systems/pull/2) merged; bowling homepage pair later swapped to run-up + release height (2026-09-15).
- **GIF binary updates are separate PRs.** Intended HUD overlays cannot land with HTML-only passes.
- **After GIFs land on `main`:** Modal redeploy + demo rerun (ops on the ML/Modal side; not this repo).

### On `main`

| Commit | Summary |
| --- | --- |
| `5fa7f4b` | Fix illustrative batting compare samples and disclaimer. Showcase-like sample ranges (e.g. bat speed 36→39 km/h); trends need comparable views. Touches `batting.html`, `index.html`. |
| `b9903ae` | Soften batting head-displacement claims to pose-overlay language. Drop centimetre metrics Showcase summaries do not return (`batting.html`). |
| `7b2538b` | Tighten capability claims to match Showcase API output. Drop multi-camera and live-software calibration language (`index.html`, `services.html`, `bowling.html`). |
| `8cd48a2` | Reframe copy around **view-aware** batting and bowling analysis. Remove fixed front-on/side-on-only claims; keep portable hardware as **planned**. Touches `index.html`, `services.html`, `batting.html`, `bowling.html`, `about.html`. |
| `b84119f` | Fix navbar G monogram so the spur welds to the bowl — continuous stroke G (opening only at top-right) plus reticle (`assets/logo.png`). |
| `a36de2d` | Replace navbar logo with a simple G + reticle monogram; pair with Gabriella wordmark. |
| `d90868e` | Simplify navbar logo to equipment-G monogram (no batter illustration). |
| `389ab41` | Make homepage GIF HUDs readable with two session peaks. Larger type; batting HUD used ball/bat pair; bowling HUD used knee/run-up pair. |
| `0409838` | Swap navbar lettermark to the athlete-G brand mark (batter silhouette). Later superseded by the simpler equipment-G. |
| `a11da9d` | Use a transparent G lettermark in the navbar; drop the dark nav pill so the mark sits on the light header. |
| `38dfb2e` | Add pose overlays to homepage Showcase GIFs (skeleton, bat/ball cues, key metrics). |

## 2026-09-13

| Commit | Summary |
| --- | --- |
| `a8fe927` | Replace homepage GIFs with Showcase batting and bowling depth clips (`assets/cricket_batting_15s.gif`, `assets/cricket_bowling_15s.gif`). |
| `49b8441` | Homepage messaging around calibrated-capture / comparable nets metrics, plus dual-GIF / section / CTA scroll reveals. Later copy on `main` walks calibration-as-shipping claims back (`8cd48a2`, `7b2538b`). |
| `5c6c2f7` | Improve homepage hero copy and CTA priority for coaches. Lead with **Request a Pilot**. |
| `f234d9c` | Add Logo 2 to navbar across pages (`assets/logo.png` as G lettermark). |
| `669b768` | Fix `academies.html`: add For Academies to nav (active); remove pipeline section. |
| `405d8f0` | Fix blank hero: remove `.gsap-ready { opacity: 0 }` and `min-height: 88vh`. |
| `f4668f8` | Website revamp: GSAP animations, Space Grotesk/Inter, animated split hero. |

## 2026-09-12

| Commit | Summary |
| --- | --- |
| `a79b0b3` | Add `admin.html` — full-page iframe to the Gabriella admin panel on Modal. |

## 2026-09-04 – 2026-09-06

| Commit | Summary |
| --- | --- |
| `8c94a42`, `549b2d7` | Homepage content clarity and detail. |
| `3a2feab` | Replace dual-video placeholders on the home page with GIF demos. |
| `341ca22` | Replace batting/bowling placeholder sections with GIF demos. |
| `796d16d` | Rename Demo to Showcase; remove tabs and dead code. |

## Earlier context (2026-08)

Not the focus of this file, but useful background:

- `a8abfb1` (2026-08-25) — include bowling analysis on the site.
- `327a98d` (2026-08-25) — enable bowling demo uploads.
- `9c0a8b7` (2026-08-25) — hide Academics page for now (Academies page later restored).
- `bcb598e` (2026-08-20) — Jira ticket refs in HTML; `start-local.sh` helper.
- README previously recorded an 2026-08-17 positioning pass (academy pilot CTA, upload vs future hardware). That inline README changelog is superseded by this file.

## External (not in this repo)

The Showcase embed and contact API point at Modal (`gabriellasystems--cricket-demo-web.modal.run`). Quality-gate fields such as `impact_offset_ms` live in the ML/Modal repo. Product notes mention Modal PR #1 merged to `master` as `8fcab5d`; **this website repo does not reference that SHA** — treat it as external and re-verify in the Modal repo.
