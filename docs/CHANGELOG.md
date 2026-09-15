# Website changelog

Dated record of marketing-site work in this repo (`ptirupat/gabriella-systems`). Newest first. Commit hashes are from `git log` on `main` unless noted as an open PR.

Related: [website-updates.md](./website-updates.md) (claims policy), [homepage-hud-metrics.md](./homepage-hud-metrics.md) (HUD notes → Modal PRODUCT.md), [competitive-positioning.md](./competitive-positioning.md) (Marketing stub).

---

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
