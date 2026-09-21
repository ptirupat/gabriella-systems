# Homepage HUD / hero metric notes

**Source of truth:** [Modal `docs/PRODUCT.md`](https://github.com/Gabriella-Systems/modal/blob/main/docs/PRODUCT.md).

This file is **not** a second product contract. It only records how this marketing site implements PRODUCT.md on homepage GIF HUD panels, hero metric cards, and session-progress cards. Sample *numbers* on the static site are illustrative; they must not invent gated values. If this file and PRODUCT.md conflict, **PRODUCT.md wins** — ping Product.

Related site copy: [competitive-positioning.md](./competitive-positioning.md) (Impact wording). Quality-gate behaviour is implemented in Modal / Showcase. This file records the **website-facing** lock so marketing copy does not describe the old overall-gate blank.

---

## Per-metric trust / fail-loud (critical)

Showcase already shipped this in **demo #20** (`c03cdbb` — re-verify in the ML/demo tree; this website repo does not contain that SHA).

**Wrong (do not document, do not reintroduce):** if overall `quality.gated === false`, blank every metric.

**Right — decide per field:**

| Condition | UI |
| --- | --- |
| Missing `quality` **or** missing number | **Can't measure** |
| Ball-dependent field | Show the number only when `quality.gated === true`; otherwise **Can't measure** |
| Pose-derived field (especially bowling **Run-up** / `peak_runup_speed_kmh`) | May **show** when the number is non-null even if overall gated is false because the **ball** failed, when pose is trusted: `quality.stages` absent **OR** `quality.stages.pose.player.ok === true` |
| Pose stage present and not ok (`pose.player.ok !== true`) | **Can't measure** |

Never invent a number. Never coerce `null` → `0`.

**Canonical example:** Bowling — Slow Motion, Run-up **~20.4 km/h** with ball `no_detection`. Overall gated is false (ball fail); Run-up still shows because pose is trusted.

Ball-dependent Showcase Results detail: **Ball speed change through contact** (Δ). Public sample **−11.1** on gallery id **`batting-defense`**. That is **not** Head Δ. Do **not** republish −11.1 as head movement, and do **not** republish the retired “Head Δ −11.1 (pre 27.5 / post 16.4)” mis-attribution.

---

## What this site implements (per PRODUCT.md)

Confirm the lock in PRODUCT.md before changing labels. Do not invent a parallel pair table here.

**Batting homepage heroes:** `bat_speed_at_impact_kmh` (**Bat speed at impact**) + `head_stability_cm` (**Head stability**).

- Label is **Bat speed at impact** only. Never bare “bat speed.” Never “pipeline peak.”
- Fail loud is **per metric**, not “overall gated=false blanks the row.” Missing quality or missing number → **Can't measure** / **—**. Never invent a number. Never coerce `null` → `0`.
- **If Head stability is untrusted or null, show Can't measure / — on the Head hero slot. Do not put Contact time back on the homepage hero row as a substitute.** Head is pose-derived: follow pose trust (stages absent **OR** `pose.player.ok === true`), not the overall ball gate.
- **`impact_offset_ms` (Contact time in this clip) is not a homepage hero.** Keep it on clip HUDs / session-progress and batting/Showcase **detail** only. Label **Contact time in this clip** only. Never early vs late, timing the ball, played early/late, or a universal good-ms score. `impact_offset_ms` is ms from clip start to gated contact — same-view session marker only.
- **Δ ball speed is not a homepage hero.** Showcase Results detail label is **Ball speed change through contact**. Public sample **−11.1** (`batting-defense`). Ball-dependent: needs `quality.gated === true`. Do not put it on the homepage hero row.
- **Do not show peak bat speed.** Never publish peak ~90 km/h or the old pipeline-peak **36–39 km/h** sample (`peak_bat_speed_kmh` is not a homepage hero).

**Bowling homepage hero:** `peak_runup_speed_kmh` (**Run-up speed**) only. **Release is omitted** until calibrated — not a **Can't measure** placeholder.

- Homepage run-up is `peak_runup_speed_kmh` only — no `runup_speed_at_delivery_kmh` fallback. Public HTML sample **20.4 km/h**. Pose-derived: may show when non-null even if overall gated is false due to ball fail, when pose is trusted (see **Per-metric trust**). Example: Slow Motion Run-up ~20.4 with ball `no_detection`.
- Do **not** put **Ball speed** (`ball_speed_kmh`) on the homepage bowling *hero*. Incoming ball speed is a **detail** sample (**122 km/h**) on this site’s clip HUDs / session-progress — not a homepage hero tile. Showcase Δ ball speed is a separate Results detail (**Ball speed change through contact**, **−11.1**) — also not a homepage hero.
- **Release height is omitted from the public homepage / bowling HUD** until a calibrated, gated overarm value exists. Do **not** show **Can't measure**, **can't be determined**, or **Measured when calibration supports it**. Do **not** publish **1.09 m** (waist-height; not credible for overarm). Do **not** invent **2.1 m** or any other substitute metre. Prefer Run-up alone rather than an empty / unmeasured second slot.
- **Front-knee flexion at plant** (`front_knee_angle_deg`; formerly “Front knee” / “Front knee at plant”) and **Arm angular speed** (`peak_arm_angular_speed_deg_s`) stay on bowling/Showcase **detail** callouts and session-progress. Public label is **Arm angular speed** (no short label). Where the angle is shown, gloss **0° ≈ fully extended**. Do **not** promote them as homepage heroes.

**Also not homepage heroes:** incoming ball speed as a batting skill peak; **Ball speed change through contact** (Δ — Showcase Results detail only); Front stride (not a gated API field — do not show it on homepage or batting hero/progress rows, and do not replace it with a fake centimetre); pipeline-peak bat speed; Release height (until calibrated and gated — omit the slot, do not use Can't measure); Contact time in this clip; Arm angular speed; Front knee angle.

### Marketing tips (copy lock)

Wire a small ⓘ next to every coach-facing metric label. Hover **and** tap/focus must reveal the tip — `title` alone is not enough on mobile (use a button / `aria-describedby` tooltip). Click/tap stays open until a second toggle, outside click, or Escape, so GSAP motion cannot dismiss it. Keyboard focus opens the same tip and closes when focus moves away. Use the **same string** on homepage heroes, clip HUD rows, session progress, and batting/bowling pages.

| Metric | Surface | Tip |
| --- | --- | --- |
| Bat speed at impact | Hero | How fast the bat was moving at contact in this take (km/h). |
| Head stability | Hero | How much the head moved from downswing to contact (cm). Lower usually means steadier — not a technique grade. |
| Run-up speed | Hero | Peak approach speed into the delivery in this take (km/h). |
| Contact time in this clip | Detail only | Time from the start of this take to contact (ms). Use it to compare same-view sessions — not early vs late. |
| Ball speed | Detail only | Measured ball speed in this take (km/h), only when the take is gated. |
| Ball speed change through contact | Showcase Results detail only | Physics Δ through contact (km/h). Ball-dependent: needs `quality.gated === true`. Not a homepage hero. No extra marketing-tip string beyond this label. |
| Front knee angle | Detail only | Front-knee flexion at plant in this take (degrees). 0° ≈ fully extended. |
| Arm angular speed | Detail only | Peak arm angular speed in this take (°/s). |

### Illustrative numbers (do not invent new ones)

Reuse the live-site HTML samples and the live-tip public lock (2026-09-17). Do **not** republish the retired 16 / 41.4 / 817 / ~22 / 400 ms / 21.6 / 22.4 / ~1840°/s figures as public samples. Do **not** republish −11.1 as Head Δ.

Live-tip public samples (gallery id **`batting-defense`**): Bat **~10.6**, Head **~45.9**, Contact detail **800**, Δ **−11.1**.

| Metric | Public sample | Surface |
| --- | --- | --- |
| Bat speed at impact | **10.6 km/h** | Homepage hero + clip HUD + session progress. Field `bat_speed_at_impact_kmh`. Never peak ~90. Never old pipeline peak 36–39. Live-tip gallery **`batting-defense`**. |
| Head stability | **45.9 cm** | Homepage hero + clip HUD + session progress. Field `head_stability_cm`. Untrusted/null → Can't measure; never swap Contact onto the hero row. Live-tip gallery **`batting-defense`**. |
| Contact time in this clip | **800 ms** | Detail only (clip HUD / session-progress). Field `impact_offset_ms`. Prefer this label in docs (clip HUD shortens to “Contact time”). Not a homepage hero. Live-tip gallery **`batting-defense`**. |
| Ball speed change through contact | **−11.1** | Showcase **Results detail** only (not a homepage hero; not on this marketing site’s HUD this pass). Ball-dependent Δ. Gallery **`batting-defense`**. Never call this Head Δ. |
| Run-up speed | **20.4 km/h** | Homepage hero + clip HUD + session progress. Field `peak_runup_speed_kmh`. Pose-derived; may show when pose is trusted even if ball `no_detection` blanks overall gated. |
| Ball speed | **122 km/h** | This site’s clip HUD / batting session-progress HTML sample (incoming). Not a homepage hero. Distinct from Δ **−11.1**. |
| Arm angular speed | **619 °/s** | Detail only (clip HUD / bowling session progress). Public label **Arm angular speed**. |
| Front knee angle | **155°** | Detail only (clip HUD / bowling session progress). |
| Release height | **no public number** | Off homepage/bowling HUD until calibrated. Do not show a Can't-measure slot. |

Do not present delivery-stride speed (`19.8`) or **Delivery stride 1.82 m** as public samples. Mark session-progress samples as illustrative where the site already does.

---

## Surfaces

| Surface | Files | Notes |
| --- | --- | --- |
| GIF HUD overlay | `assets/cricket_batting_15s.gif`, `assets/cricket_bowling_15s.gif` | Burned-in Gabriella Vision panel. GIF binaries were **not** regenerated in this Head-hero pass — HTML HUD/hero/progress numbers are the public samples. |
| Homepage hero cards | `index.html` (`.hero-metric-card`) | Locked set only: **Bat speed at impact 10.6** + **Head stability 45.9** + **Run-up speed 20.4**. No Contact, Ball, Δ ball speed, Arm, Front knee, or Release height cards. |
| Clip HUD panels | `index.html`, `batting.html`, `bowling.html` | Richer rows allowed. Homepage batting clip: Bat 10.6 / Head 45.9 / Ball 122 / Contact 800. Homepage bowling clip: Run-up 20.4 / Arm 619 / Front knee 155. Batting page clip matches the batting homepage clip. |
| Session progress cards | `index.html`, `batting.html`, `bowling.html` | Detail/progress, not heroes. Batting: Bat 10.6 / Head 45.9 / Ball 122 / Contact 800. Bowling: Run-up 20.4 / Arm 619 / Front knee 155. No Release height row. |

Deeper capability lists (contact time, front-knee flexion at plant, arm angular speed, ball tracking, and so on) may still appear as pipeline outputs. They are **not** the homepage hero HUD.

---

## Open blockers (as of this writing)

These are product/ops blockers, not missing copy in this PR:

1. **GIF binaries** were not regenerated to match the live HTML samples. Modal **redeploy** and **demo rerun** are still ops on the ML/Modal side. Do not assume the live Modal embed updates from this website repo alone.
2. **KAN-272** is **mode detection** (bowling Showcase misfired as batting) — **not** a bowling fail-loud / run-up gap. Per-metric trust is already shipped in Showcase demo #20. Do not invent bowling numbers. Public bowling *hero* is Run-up only until a second gated credible *hero* exists.
3. **Release height** stays off the public HUD until calibration supports a gated overarm metre. Do not add a Can't-measure placeholder while waiting.

When regenerating GIFs, burn the pairs from **PRODUCT.md**: batting **Bat speed at impact** + **Head stability**; bowling **Run-up speed only** until Release height is calibrated and gated. Fail loud is **per metric**. If a *locked batting* field is untrusted or null, burn **Can't measure** / **—** in that slot — do **not** burn Contact time as a substitute homepage *hero*. Do **not** blank pose-derived Run-up solely because overall gated is false from a ball fail (Slow Motion ~20.4 + `no_detection` is the example). Do **not** burn pipeline-peak 36–39 or peak ~90. Do **not** burn Release height as Can't measure / can't be determined / Measured when calibration supports it. Do **not** burn a public **1.09 m** release height. Do not burn early-vs-late Impact wording. Do not burn Ball speed, Ball speed change through contact, Arm angular speed, Front knee, or Contact time as homepage *hero* peaks. Do not burn Front stride.

This site embeds Showcase at `https://gabriellasystems--cricket-demo-web.modal.run`. Do not cite Modal SHAs from this repo — re-verify in the ML/Modal tree. Demo #20 (`c03cdbb`) is that external tree.

---

## Asset vs HTML status (do not assume they match)

As of the 2026-09-17 live-tip sample re-lock (hero *set* still Bat + Head + Run-up):

- Homepage **HTML** heroes are the locked set only: **Bat speed at impact** (`bat_speed_at_impact_kmh`, **10.6 km/h**) + **Head stability** (`head_stability_cm`, **45.9 cm**) + **Run-up speed** (`peak_runup_speed_kmh`, **20.4 km/h**). Contact 800 / Ball 122 / Arm 619 / Front knee 155 are **not** homepage heroes.
- Homepage **HTML** bowling session-progress (and `bowling.html` progress) uses **Run-up 20.4** + **Arm 619 °/s** + **Front knee 155°**. Release height is not on those surfaces (no “Measured when calibration supports it” slot).
- Homepage batting session-progress uses **Bat 10.6** + **Head 45.9** + **Ball 122** + **Contact 800** (Contact is detail/progress, not a hero).
- Clip HUD panels keep the richer live rows listed under Surfaces.
- Contact time is a **detail** metric — not a homepage hero peak. If Head is untrusted, the Head hero shows **Can't measure**; Contact stays off the hero row.
- **Ball speed change through contact** (Δ **−11.1**, gallery **`batting-defense`**) is Showcase Results detail — not a homepage hero. This site’s HTML still uses incoming Ball **122** on clip HUD / session-progress (docs sync this pass; HTML numbers not changed).
- Front stride is not shown on homepage or batting progress/hero rows.
- GIF HUD overlays were **not** regenerated in this pass; treat HTML samples as the public numbers.

---

## Checklist for a HUD change

1. Fields and labels match **PRODUCT.md** (this site currently implements batting `bat_speed_at_impact_kmh` + `head_stability_cm`; bowling `peak_runup_speed_kmh` only as homepage *heroes*). Do not fork a second lock in this file.
2. Fail loud is **per metric** (see **Per-metric trust**). Missing quality or missing number → Can't measure / —, never invent, never `0`. Ball-dependent fields need `quality.gated === true`. Pose-derived fields (Run-up / Head) may show when pose is trusted even if overall gated is false from a ball fail. **Do not restore Contact time on the hero row when Head is untrusted.** Do **not** use a Can't-measure slot to hold ungated bowling Release height on the public HUD — omit the slot.
3. Contact time wording is **Contact time in this clip** only — no early vs late / timing-the-ball / technique-grade language. Contact is detail-only, not a homepage batting hero.
4. Head stability is a homepage batting hero. Untrusted Head → Can't measure on that slot. Marketing tip: centimetres of head movement from downswing to contact; lower usually means steadier — not a technique grade.
5. Homepage *heroes* have no ball speed, no Δ ball speed, no arm angular speed, no contact time, and no pipeline-peak bat speed. Bowling homepage hero is Run-up only and omits `ball_speed_kmh`. Homepage run-up is `peak_runup_speed_kmh` only.
6. Public release height is **absent** from homepage/bowling HUD (no 1.09 m, no 2.1 m, no Can't measure / Measured when calibration supports it) until calibration supports a gated overarm value.
7. Front stride is not shown on homepage or batting hero/progress rows.
8. GIF overlay, hero cards, and progress cards stay consistent (or lag is called out).
9. Sample numbers, if shown, are the live-tip / live HTML values — not newly invented gated stats. Public samples: Bat **10.6 km/h**, Head **45.9 cm**, Run-up **20.4 km/h**; detail-only Contact **800 ms**; Showcase Results Δ **−11.1** (**Ball speed change through contact**, gallery **`batting-defense`**); this site’s incoming Ball **122**, Arm **619 °/s**, Front knee **155°**. Do not republish 16 / 41.4 / 817 / ~22 / 400 ms / 21.6 / 22.4 / ~1840°/s. Do not call −11.1 Head Δ.
10. Every coach-facing metric label has the locked ⓘ tip from **Marketing tips (copy lock)** — same string on every surface; hover + tap/focus (not `title` only).
