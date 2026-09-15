# Website changelog

Dated record of marketing-site work in this repo (`ptirupat/gabriella-systems`). Newest first. Commit hashes are from `git log` on `main` unless noted as an open PR.

For product narrative, see [website-updates.md](./website-updates.md). For the homepage HUD field contract, see [homepage-hud-metrics.md](./homepage-hud-metrics.md).

---

## 2026-09-14

### Open (not on `main`)

- **[PR #2](https://github.com/ptirupat/gabriella-systems/pull/2)** — *Align homepage HUD with locked hero metric fields* (`cursor/lock-hero-metric-fields-e7ca`). HTML label lock on `index.html`, `batting.html`, and `bowling.html`. Does **not** refresh GIF binaries. See [homepage-hud-metrics.md](./homepage-hud-metrics.md).

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
