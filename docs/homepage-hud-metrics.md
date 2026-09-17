# Homepage HUD / hero metric notes

**Source of truth:** [Modal `docs/PRODUCT.md`](https://github.com/Gabriella-Systems/modal/blob/main/docs/PRODUCT.md).

This file is **not** a second product contract. It only records how this marketing site implements PRODUCT.md on homepage GIF HUD panels, hero metric cards, and session-progress cards. Sample *numbers* on the static site are illustrative; they must not invent gated values. If this file and PRODUCT.md conflict, **PRODUCT.md wins** — ping Product.

Related site copy: [competitive-positioning.md](./competitive-positioning.md) (Impact wording). Quality-gate behaviour is defined in Modal, not here.

---

## What this site implements (per PRODUCT.md)

Confirm the lock in PRODUCT.md before changing labels. Do not invent a parallel pair table here.

**Batting homepage heroes:** `bat_speed_at_impact_kmh` (**Bat speed at impact**) + `head_stability_cm` (**Head stability**).

- Label is **Bat speed at impact** only. Never bare “bat speed.” Never “pipeline peak.”
- Fail loud: if `quality.gated` is `false` **or** the field is `null`, show **Can't measure** / **—**. Never invent a number. Never coerce `null` → `0`.
- **If Head stability is ungated or null, show Can't measure / — on the Head hero slot. Do not put Contact time back on the homepage hero row as a substitute.**
- **`impact_offset_ms` (Contact time in this clip) is not a homepage hero.** Keep it on clip HUDs / session-progress and batting/Showcase **detail** only. Label **Contact time in this clip** only. Never early vs late, timing the ball, played early/late, or a universal good-ms score. `impact_offset_ms` is ms from clip start to gated contact — same-view session marker only.
- **Do not show peak bat speed.** Never publish peak ~90 km/h or the old pipeline-peak **36–39 km/h** sample (`peak_bat_speed_kmh` is not a homepage hero).

**Bowling homepage hero:** `peak_runup_speed_kmh` (**Run-up speed**) only.

- Homepage run-up is `peak_runup_speed_kmh` only — no `runup_speed_at_delivery_kmh` fallback. Public HTML sample **20.4 km/h**.
- Do **not** put **Ball speed** (`ball_speed_kmh`) on the homepage bowling *hero*. Ball speed is a **detail** sample (**122 km/h**) on clip HUDs / session-progress — not a homepage hero tile.
- **Release height is omitted from the public homepage / bowling HUD** until a calibrated, gated overarm value exists. Do **not** show **Can't measure**, **can't be determined**, or **Measured when calibration supports it**. Do **not** publish **1.09 m** (waist-height; not credible for overarm). Do **not** invent **2.1 m** or any other substitute metre. Prefer Run-up alone rather than an empty / unmeasured second slot.
- **Front-knee flexion at plant** (`front_knee_angle_deg`; formerly “Front knee” / “Front knee at plant”) and **Arm angular speed** (`peak_arm_angular_speed_deg_s`) stay on bowling/Showcase **detail** callouts and session-progress (full wording **Arm angular speed**; live short label **Arm speed**). Where the angle is shown, gloss **0° ≈ fully extended**. Do **not** promote them as homepage heroes.

**Also not homepage heroes:** incoming ball speed as a batting skill peak; Front stride (not a gated API field — do not show it on homepage or batting hero/progress rows, and do not replace it with a fake centimetre); pipeline-peak bat speed; Release height (until calibrated and gated); Contact time in this clip; Arm angular speed; Front knee angle.

### Marketing tips (copy lock)

| Metric | Surface | Tip |
| --- | --- | --- |
| Bat speed at impact | Hero | How fast the bat was moving at contact in this take (km/h). |
| Head stability | Hero | How much the head moved from downswing to contact (cm). Lower usually means steadier — not a technique grade. |
| Contact time in this clip | Detail only | Same-view marker, not early/late. |

### Illustrative numbers (do not invent new ones)

Reuse the live-site HTML samples (2026-09-17). Do **not** republish the retired ~22 / 400 ms / 21.6 / 22.4 / ~1840°/s figures as public samples:

| Metric | Public sample | Surface |
| --- | --- | --- |
| Bat speed at impact | **16 km/h** | Homepage hero + clip HUD + session progress. Field `bat_speed_at_impact_kmh`. Never peak ~90. Never old pipeline peak 36–39. |
| Head stability | **41.4 cm** | Homepage hero + clip HUD + session progress. Field `head_stability_cm`. Ungated/null → Can't measure; never swap Contact onto the hero row. |
| Contact time in this clip | **817 ms** | Detail only (clip HUD / session-progress). Field `impact_offset_ms`. Prefer this label in docs (clip HUD shortens to “Contact time”). Not a homepage hero. |
| Run-up speed | **20.4 km/h** | Homepage hero + clip HUD + session progress. Field `peak_runup_speed_kmh`. |
| Ball speed | **122 km/h** | Detail only (clip HUD / batting session progress). Not a homepage hero. |
| Arm angular speed | **619 °/s** | Detail only (clip HUD / bowling session progress). Live short label **Arm speed**. |
| Front knee angle | **155°** | Detail only (clip HUD / bowling session progress). |
| Release height | **no public number** | Off homepage/bowling HUD until calibrated. Do not show a Can't-measure slot. |

Do not present delivery-stride speed (`19.8`) or **Delivery stride 1.82 m** as public samples. Mark session-progress samples as illustrative where the site already does.

---

## Surfaces

| Surface | Files | Notes |
| --- | --- | --- |
| GIF HUD overlay | `assets/cricket_batting_15s.gif`, `assets/cricket_bowling_15s.gif` | Burned-in Gabriella Vision panel. GIF binaries were **not** regenerated in this Head-hero pass — HTML HUD/hero/progress numbers are the public samples. |
| Homepage hero cards | `index.html` (`.hero-metric-card`) | Locked set only: **Bat speed at impact 16** + **Head stability 41.4** + **Run-up speed 20.4**. No Contact, Ball, Arm, Front knee, or Release height cards. |
| Clip HUD panels | `index.html`, `batting.html`, `bowling.html` | Richer rows allowed. Homepage batting clip: Bat 16 / Head 41.4 / Ball 122 / Contact 817. Homepage bowling clip: Run-up 20.4 / Arm 619 / Front knee 155. Batting page clip matches the batting homepage clip. |
| Session progress cards | `index.html`, `batting.html`, `bowling.html` | Detail/progress, not heroes. Batting: Bat 16 / Head 41.4 / Ball 122 / Contact 817. Bowling: Run-up 20.4 / Arm 619 / Front knee 155. No Release height row. |

Deeper capability lists (contact time, front-knee flexion at plant, arm angular speed, ball tracking, and so on) may still appear as pipeline outputs. They are **not** the homepage hero HUD.

---

## Open blockers (as of this writing)

These are product/ops blockers, not missing copy in this PR:

1. **GIF binaries** were not regenerated to match the live HTML samples. Modal **redeploy** and **demo rerun** are still ops on the ML/Modal side. Do not assume the live Modal embed updates from this website repo alone.
2. **KAN-272** (bowling fail-loud / run-up) is still open. Do not invent bowling numbers. Public bowling *hero* is Run-up only until a second gated credible *hero* exists.
3. **Release height** stays off the public HUD until calibration supports a gated overarm metre. Do not add a Can't-measure placeholder while waiting.

When regenerating GIFs, burn the pairs from **PRODUCT.md**: batting **Bat speed at impact** + **Head stability**; bowling **Run-up speed only** until Release height is calibrated and gated. If a *locked batting* field is ungated or null, burn **Can't measure** / **—** in that slot — do **not** burn Contact time as a substitute homepage *hero*. Do **not** burn pipeline-peak 36–39 or peak ~90. Do **not** burn Release height as Can't measure / can't be determined / Measured when calibration supports it. Do **not** burn a public **1.09 m** release height. Do not burn early-vs-late Impact wording. Do not burn Ball speed, Arm angular speed, Front knee, or Contact time as homepage *hero* peaks. Do not burn Front stride.

This site embeds Showcase at `https://gabriellasystems--cricket-demo-web.modal.run`. Do not cite Modal SHAs from this repo — re-verify in the ML/Modal tree.

---

## Asset vs HTML status (do not assume they match)

As of the 2026-09-17 batting hero re-lock (Bat + Head):

- Homepage **HTML** heroes are the locked set only: **Bat speed at impact** (`bat_speed_at_impact_kmh`, **16 km/h**) + **Head stability** (`head_stability_cm`, **41.4 cm**) + **Run-up speed** (`peak_runup_speed_kmh`, **20.4 km/h**). Contact 817 / Ball 122 / Arm 619 / Front knee 155 are **not** homepage heroes.
- Homepage **HTML** bowling session-progress (and `bowling.html` progress) uses **Run-up 20.4** + **Arm 619 °/s** + **Front knee 155°**. Release height is not on those surfaces (no “Measured when calibration supports it” slot).
- Homepage batting session-progress uses **Bat 16** + **Head 41.4** + **Ball 122** + **Contact 817** (Contact is detail/progress, not a hero).
- Clip HUD panels keep the richer live rows listed under Surfaces.
- Contact time is a **detail** metric — not a homepage hero peak. If Head is ungated, the Head hero shows **Can't measure**; Contact stays off the hero row.
- Front stride is not shown on homepage or batting progress/hero rows.
- GIF HUD overlays were **not** regenerated in this pass; treat HTML samples as the public numbers.

---

## Checklist for a HUD change

1. Fields and labels match **PRODUCT.md** (this site currently implements batting `bat_speed_at_impact_kmh` + `head_stability_cm`; bowling `peak_runup_speed_kmh` only as homepage *heroes*). Do not fork a second lock in this file.
2. Fail loud: HUD only renders gated fields. Ungated / null *locked batting* heroes → Can't measure / —, never invent, never `0`. **Do not restore Contact time on the hero row when Head is ungated.** Do **not** use a Can't-measure slot to hold ungated bowling Release height on the public HUD — omit the slot.
3. Contact time wording is **Contact time in this clip** only — no early vs late / timing-the-ball / technique-grade language. Contact is detail-only, not a homepage batting hero.
4. Head stability is a homepage batting hero. Ungated Head → Can't measure on that slot. Marketing tip: centimetres of head movement from downswing to contact; lower usually means steadier — not a technique grade.
5. Homepage *heroes* have no ball speed, no arm speed, no contact time, and no pipeline-peak bat speed. Bowling homepage hero is Run-up only and omits `ball_speed_kmh`. Homepage run-up is `peak_runup_speed_kmh` only.
6. Public release height is **absent** from homepage/bowling HUD (no 1.09 m, no 2.1 m, no Can't measure / Measured when calibration supports it) until calibration supports a gated overarm value.
7. Front stride is not shown on homepage or batting hero/progress rows.
8. GIF overlay, hero cards, and progress cards stay consistent (or lag is called out).
9. Sample numbers, if shown, are the live HTML values — not newly invented gated stats. Public samples: Bat **16 km/h**, Head **41.4 cm**, Run-up **20.4 km/h**; detail-only Contact **817 ms**, Ball **122**, Arm **619 °/s**, Front knee **155°**. Do not republish ~22 / 400 ms / 21.6 / 22.4 / ~1840°/s.
