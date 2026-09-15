# Homepage HUD / hero metric notes

**Source of truth:** [Modal `docs/PRODUCT.md`](https://github.com/Gabriella-Systems/modal/blob/main/docs/PRODUCT.md).

This file is **not** a second product contract. It only records how this marketing site implements PRODUCT.md on homepage GIF HUD panels, hero metric cards, and session-progress cards. Sample *numbers* on the static site are illustrative; they must not invent gated values. If this file and PRODUCT.md conflict, **PRODUCT.md wins** — ping Product.

Related site copy: [competitive-positioning.md](./competitive-positioning.md) (Impact wording). Quality-gate behaviour is defined in Modal, not here.

---

## What this site implements (per PRODUCT.md)

Confirm the lock in PRODUCT.md before changing labels. Do not invent a parallel pair table here.

**Batting homepage heroes:** `peak_bat_speed_kmh` (**Bat speed (pipeline peak)**) + `impact_offset_ms` (**Contact time in this clip**).

- Fail loud: if `quality.gated` is `false` **or** the field is `null`, show **Can't measure** / **—**. Never invent a number. Never coerce `null` → `0`.
- Label contact time **Contact time in this clip** only. Never early vs late, timing the ball, played early/late, or a universal good-ms score. `impact_offset_ms` is ms from clip start to gated contact — same-view session marker only.
- **`head_stability_cm` (Head stability) is not a homepage hero.** Keep it on batting/Showcase **detail** and capability lists only. Do not invent `0` or a fake centimetre if a detail surface shows it ungated. Do not put **Can't measure** Head stability on the homepage hero.

**Bowling homepage heroes:** `peak_runup_speed_kmh` (**Run-up speed**) + `release_height_m` (**Release height**).

- Homepage run-up is `peak_runup_speed_kmh` only — no `runup_speed_at_delivery_kmh` fallback.
- Do **not** put **Ball speed** (`ball_speed_kmh`) on the two-peak homepage HUD. Omit that slot until a gated, non-null sample exists — do not show Can't measure / — as a bowling ball-speed homepage peak.
- **Release height is a locked bowling hero label, but public HTML must not show a numeric sample until calibration supports a credible overarm value.** Do not publish **1.09 m** (waist-height; not credible for overarm). Do not invent **2.1 m** or any other substitute height. Use placeholder copy such as **Measured when calibration supports it**.
- **Front-knee flexion at plant** (`front_knee_angle_deg`; formerly “Front knee” / “Front knee at plant”) and **Arm angular speed** (`peak_arm_angular_speed_deg_s`) stay on bowling/Showcase **detail** callouts (full wording **Arm angular speed**). Where the angle is shown, gloss **0° ≈ fully extended**.

**Also not homepage heroes:** incoming ball speed as a batting skill peak; Front stride (not a gated API field — do not show it on homepage or batting hero/progress rows, and do not replace it with a fake centimetre).

### Illustrative numbers (do not invent new ones)

Reuse Showcase-like ranges already used on this site:

| Metric | Public sample | Notes |
| --- | --- | --- |
| Bat speed (pipeline peak) | **36 → 39 km/h** (hero peak **39**) | One range, km/h only. Do not mix in a conflicting mph card (e.g. 54→57 mph). |
| Run-up speed | **21.6 km/h** | ~19–22 km/h Showcase band. |
| Arm angular speed | **~1840°/s** | Detail only. |
| Delivery stride | **1.82 m** | Detail / progress card. |
| Release height | **no public number** | Off heroes/cards until calibrated. |

Do not present delivery-stride speed (`19.8`) as peak run-up. This pass illustrates ungated contact time as **Can't measure** / **—** rather than inventing an ms value. Mark session-progress samples as illustrative where the site already does.

---

## Surfaces

| Surface | Files | Notes |
| --- | --- | --- |
| GIF HUD overlay | `assets/cricket_batting_15s.gif`, `assets/cricket_bowling_15s.gif` | Burned-in Gabriella Vision panel. Binaries are a separate PR. |
| Homepage hero cards | `index.html` (`.hero-metric-card`) | Floating dashboard: batting pair + bowling pair. Release height uses placeholder copy, not a metre value. |
| Session progress cards | `index.html`, `batting.html`, `bowling.html` | Batting card leads with Bat speed (pipeline peak) + Contact time in this clip; bowling card leads with Run-up + Release height (no public metre). |

Deeper capability lists (head stability, front-knee flexion at plant, arm angular speed, delivery-stride speed, ball tracking, and so on) may still appear as pipeline outputs. They are **not** the two-metric hero HUD.

---

## Open blockers (as of this writing)

These are product/ops blockers, not missing copy in this PR:

1. **GIF binaries are updated separately.** This HTML/docs pass does not refresh `assets/cricket_batting_15s.gif` or `assets/cricket_bowling_15s.gif`. Homepage GIFs may still show an older pair (including a numeric release height) until a dedicated asset PR.
2. **After GIFs land on `main`:** Modal **redeploy** and **demo rerun** so Showcase/demo clips match the new overlays. Do not assume the live Modal embed updates from this website repo alone.

When regenerating GIFs, burn the pairs from **PRODUCT.md**: batting **Bat speed** + **Contact time in this clip**; bowling Run-up speed + Release height. If a locked field is ungated or null, burn **Can't measure** / **—**. Do **not** burn a public **1.09 m** release height. Do not burn early-vs-late Impact wording. Do not burn Ball speed as a bowling homepage peak. Do not burn Front stride. Do not burn Head stability as a batting homepage peak.

This site embeds Showcase at `https://gabriellasystems--cricket-demo-web.modal.run`. Do not cite Modal SHAs from this repo — re-verify in the ML/Modal tree.

---

## Asset vs HTML status (do not assume they match)

As of this credibility / HUD pass:

- Homepage **HTML** batting hero and batting session-progress cards use **Bat speed (pipeline peak)** (`peak_bat_speed_kmh`) + **Contact time in this clip** (`impact_offset_ms`). Ungated contact time is illustrated as **Can't measure** / **—**.
- Homepage **HTML** bowling hero and bowling session-progress cards use **Run-up speed** (`peak_runup_speed_kmh`) + **Release height** (placeholder until calibration; no public metre).
- Head stability remains on batting **detail** and capability lists only — not homepage hero peaks.
- Front stride is not shown on homepage or batting progress/hero rows.
- GIF HUD overlays are **not** part of this change and may still show a previous pair until a separate asset update.

---

## Checklist for a HUD change

1. Fields and labels match **PRODUCT.md** (this site currently implements batting `peak_bat_speed_kmh` + `impact_offset_ms`; bowling `peak_runup_speed_kmh` + `release_height_m`). Do not fork a second lock in this file.
2. Fail loud: HUD only renders gated fields. Ungated / null locked heroes → Can't measure / —, never invent, never `0`.
3. Contact time wording is **Contact time in this clip** only — no early vs late / timing-the-ball / technique-grade language.
4. Head stability is detail-only, not a homepage batting hero (no Head-stability Can't measure on the homepage hero).
5. Batting HUD has no ball speed. Bowling two-peak HUD omits `ball_speed_kmh`. Homepage run-up is `peak_runup_speed_kmh` only.
6. Public release height has **no invented or waist-height metre** (no 1.09 m, no 2.1 m) until calibration supports it.
7. Front stride is not shown on homepage or batting hero/progress rows.
8. GIF overlay, hero cards, and progress cards stay consistent (or lag is called out). GIF binaries are a separate PR.
9. Sample numbers, if shown, are existing Showcase-like values — not newly invented gated stats. Bat speed is **pipeline peak** in **km/h** only.
