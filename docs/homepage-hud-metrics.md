# Homepage HUD / hero metric notes

**Source of truth:** [Modal `docs/PRODUCT.md`](https://github.com/Gabriella-Systems/modal/blob/main/docs/PRODUCT.md).

This file is **not** a second product contract. It only records how this marketing site implements PRODUCT.md on homepage GIF HUD panels, hero metric cards, and session-progress cards. Sample *numbers* on the static site are illustrative; they must not invent gated values. If this file and PRODUCT.md conflict, **PRODUCT.md wins** — ping Product.

Related site copy: [competitive-positioning.md](./competitive-positioning.md) (Impact wording). Quality-gate behaviour is defined in Modal, not here.

---

## What this site implements (per PRODUCT.md)

Confirm the lock in PRODUCT.md before changing labels. Do not invent a parallel pair table here.

**Batting homepage heroes:** `bat_speed_at_impact_kmh` (**Bat speed at impact**) + `impact_offset_ms` (**Contact time in this clip**).

- Label is **Bat speed at impact** only. Never bare “bat speed.” Never “pipeline peak.”
- Fail loud: if `quality.gated` is `false` **or** the field is `null`, show **Can't measure** / **—**. Never invent a number. Never coerce `null` → `0`.
- Label contact time **Contact time in this clip** only. Never early vs late, timing the ball, played early/late, or a universal good-ms score. `impact_offset_ms` is ms from clip start to gated contact — same-view session marker only.
- **Do not show peak bat speed.** Never publish peak ~90 km/h or the old pipeline-peak **36–39 km/h** sample (`peak_bat_speed_kmh` is not a homepage hero).
- **`head_stability_cm` (Head stability) is not a homepage hero.** Keep it on batting/Showcase **detail** and capability lists only. Do not invent `0` or a fake centimetre if a detail surface shows it ungated. Do not put **Can't measure** Head stability on the homepage hero.

**Bowling homepage hero:** `peak_runup_speed_kmh` (**Run-up speed**) only.

- Homepage run-up is `peak_runup_speed_kmh` only — no `runup_speed_at_delivery_kmh` fallback. HTML sample **21.6 km/h**; GIF overlay sample **22.4 km/h** (both existing Showcase-like figures — do not invent a new bowling number).
- Do **not** put **Ball speed** (`ball_speed_kmh`) on the homepage bowling HUD. Omit that slot until a gated, non-null sample exists — do not show Can't measure / — as a bowling ball-speed homepage peak.
- **Release height is omitted from the public homepage / bowling HUD** until a calibrated, gated overarm value exists. Do **not** show **Can't measure**, **can't be determined**, or **Measured when calibration supports it**. Do **not** publish **1.09 m** (waist-height; not credible for overarm). Do **not** invent **2.1 m** or any other substitute metre. Prefer Run-up alone rather than an empty / unmeasured second slot.
- **Front-knee flexion at plant** (`front_knee_angle_deg`; formerly “Front knee” / “Front knee at plant”) and **Arm angular speed** (`peak_arm_angular_speed_deg_s`) stay on bowling/Showcase **detail** callouts (full wording **Arm angular speed**). Where the angle is shown, gloss **0° ≈ fully extended**. Delivery stride may remain on bowling session-progress / detail cards as an existing sample.

**Also not homepage heroes:** incoming ball speed as a batting skill peak; Front stride (not a gated API field — do not show it on homepage or batting hero/progress rows, and do not replace it with a fake centimetre); pipeline-peak bat speed; Release height (until calibrated and gated).

### Illustrative numbers (do not invent new ones)

Reuse the gated net-cover-drive Showcase reseed (demo#9 / Product lock) for batting; reuse existing bowling samples:

| Metric | Public sample | Notes |
| --- | --- | --- |
| Bat speed at impact | **~22 km/h** | Field `bat_speed_at_impact_kmh`. Never peak ~90. Never old pipeline peak 36–39. |
| Contact time in this clip | **400 ms** | Field `impact_offset_ms` from the gated cover-drive take. |
| Run-up speed | **21.6 km/h** (HTML) / **22.4 km/h** (bowling GIF) | Existing bowling samples; do not invent a new bowling figure. |
| Arm angular speed | **~1840°/s** | Detail only. |
| Delivery stride | **1.82 m** | Detail / progress card. |
| Release height | **no public number** | Off homepage/bowling HUD until calibrated. Do not show a Can't-measure slot. |

Do not present delivery-stride speed (`19.8`) as peak run-up. Mark session-progress samples as illustrative where the site already does.

---

## Surfaces

| Surface | Files | Notes |
| --- | --- | --- |
| GIF HUD overlay | `assets/cricket_batting_15s.gif`, `assets/cricket_bowling_15s.gif` | Burned-in Gabriella Vision panel. Batting: Bat speed at impact ~22 + Contact 400 ms. Bowling: Run-up only (22.4 km/h). |
| Homepage hero cards | `index.html` (`.hero-metric-card`) | Floating dashboard: batting pair + bowling Run-up. No Release height card. |
| Session progress cards | `index.html`, `batting.html`, `bowling.html` | Batting card leads with Bat speed at impact + Contact time in this clip; bowling card leads with Run-up (no Release height row). |

Deeper capability lists (head stability, front-knee flexion at plant, arm angular speed, delivery-stride speed, ball tracking, and so on) may still appear as pipeline outputs. They are **not** the homepage hero HUD.

---

## Open blockers (as of this writing)

These are product/ops blockers, not missing copy in this PR:

1. **After this bowling GIF lands on `main`:** Modal **redeploy** and **demo rerun** so Showcase/demo clips match the Run-up-only overlay. Do not assume the live Modal embed updates from this website repo alone.
2. **KAN-272** (bowling fail-loud / run-up) is still open. Do not invent bowling numbers. Public bowling HUD is Run-up only until a second gated credible metric exists.
3. **Release height** stays off the public HUD until calibration supports a gated overarm metre. Do not add a Can't-measure placeholder while waiting.

When regenerating GIFs, burn the pairs from **PRODUCT.md**: batting **Bat speed at impact** + **Contact time in this clip**; bowling **Run-up speed only** until Release height is calibrated and gated. If a *locked batting* field is ungated or null, burn **Can't measure** / **—**. Do **not** burn pipeline-peak 36–39 or peak ~90. Do **not** burn Release height as Can't measure / can't be determined / Measured when calibration supports it. Do **not** burn a public **1.09 m** release height. Do not burn early-vs-late Impact wording. Do not burn Ball speed as a bowling homepage peak. Do not burn Front stride. Do not burn Head stability as a batting homepage peak.

This site embeds Showcase at `https://gabriellasystems--cricket-demo-web.modal.run`. Do not cite Modal SHAs from this repo — re-verify in the ML/Modal tree.

---

## Asset vs HTML status (do not assume they match)

As of the 2026-09-16 bowling Run-up-only lock:

- Homepage **HTML** batting hero and batting session-progress cards use **Bat speed at impact** (`bat_speed_at_impact_kmh`, **~22 km/h**) + **Contact time in this clip** (`impact_offset_ms`, **400 ms**). Unchanged this pass.
- Homepage **HTML** bowling hero and bowling session-progress cards use **Run-up speed** (`peak_runup_speed_kmh`) only. Release height is not on those surfaces.
- Head stability remains on batting **detail** and capability lists only — not homepage hero peaks.
- Front stride is not shown on homepage or batting progress/hero rows.
- GIF HUD overlays: batting remains **Bat speed at impact ~22 km/h** + **Contact time 400 ms**; bowling is **Run-up 22.4 km/h** only (no Release height / Can't measure).

---

## Checklist for a HUD change

1. Fields and labels match **PRODUCT.md** (this site currently implements batting `bat_speed_at_impact_kmh` + `impact_offset_ms`; bowling `peak_runup_speed_kmh` only). Do not fork a second lock in this file.
2. Fail loud: HUD only renders gated fields. Ungated / null *locked batting* heroes → Can't measure / —, never invent, never `0`. Do **not** use a Can't-measure slot to hold ungated bowling Release height on the public HUD — omit the slot.
3. Contact time wording is **Contact time in this clip** only — no early vs late / timing-the-ball / technique-grade language.
4. Head stability is detail-only, not a homepage batting hero (no Head-stability Can't measure on the homepage hero).
5. Batting HUD has no ball speed and no pipeline-peak bat speed. Bowling homepage HUD is Run-up only and omits `ball_speed_kmh`. Homepage run-up is `peak_runup_speed_kmh` only.
6. Public release height is **absent** from homepage/bowling HUD (no 1.09 m, no 2.1 m, no Can't measure / Measured when calibration supports it) until calibration supports a gated overarm value.
7. Front stride is not shown on homepage or batting hero/progress rows.
8. GIF overlay, hero cards, and progress cards stay consistent (or lag is called out).
9. Sample numbers, if shown, are existing Showcase-like values — not newly invented gated stats. Batting bat-speed sample is **Bat speed at impact ~22 km/h** only. Bowling run-up samples are **21.6** (HTML) / **22.4** (GIF).
