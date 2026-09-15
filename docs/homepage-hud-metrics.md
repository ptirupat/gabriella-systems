# Homepage HUD / hero metric contract

Product + ML contract for **homepage GIF HUD panels**, **hero metric cards**, and any dashboard that shows clip metrics. Marketing, overlay renders, and HTML labels must stay in sync with the Modal quality gate.

This file is the source of truth for *which fields* the homepage may show. Sample *numbers* on the static site are illustrative; they must not invent gated values.

**Product review:** confirm the locked pairs, quality-gate behaviour, and open blockers below.

---

## Locked hero pairs

Dashboard / HUD **only renders gated fields**. Never invent a number. Never coerce `null` → `0`.

The homepage two-peak HUD is four floating cards: batting pair + bowling pair.

### Batting (temporary pair)

Drop **ball speed** from the batting hero HUD. Incoming-ball speed may still appear in batting capability copy; it is not a batter-skill hero metric.

Stay on this Impact (honest label) + Bat speed pair until `head_stability_cm` is gated. Do **not** swap HTML to Head stability until Modal PR #9 merge + redeploy + Showcase confirmation.

| Order | API field | Label | Unit |
| --- | --- | --- | --- |
| 1 | `impact_offset_ms` | **Contact time in this clip** | ms |
| 2 | `peak_bat_speed_kmh` | **Bat speed** | km/h |

Honest Impact wording (copy gate: [competitive-positioning.md](./competitive-positioning.md)):

- **Use:** “Contact time in this clip”
- **Use (explanatory):** “When contact happened in this take (same-view compare).”
- **Do not use:** early vs late, timing the ball, played early/late, or any technique-grade language

`impact_offset_ms` is ms from clip start to gated contact. Same-view session marker only — not a universal good-ms score.

Until `impact_offset_ms` is deployed on a given sample, derive milliseconds from `impact_frame ÷ fps` (same honest label). Do not leave the batting HUD on ball speed while waiting for the field.

**When `head_stability_cm` is gated:** swap the batting hero to Head stability + Bat speed and retire Impact from the two-peak HUD. That swap is **not** this PR.

### Bowling (locked)

ML-confirmed homepage fields. Do **not** put **Ball speed** (`ball_speed_kmh`) on the two-peak homepage HUD. Omit that slot until a gated, non-null sample exists — do not show **Can't measure** / **—** as a bowling ball-speed homepage peak.

| Order | API field | Label | Unit |
| --- | --- | --- | --- |
| 1 | `peak_runup_speed_kmh` | **Run-up speed** | km/h |
| 2 | `release_height_m` | **Release height** | m |

**No homepage fallback** to `runup_speed_at_delivery_kmh`. Homepage run-up is `peak_runup_speed_kmh` only. Delivery-stride speed may still appear as a bowling/Showcase **detail** metric, not as the homepage peak.

Render each locked bowling peak only when `quality.gated` is true **and** the value is non-null. Otherwise that peak is **Can't measure** / **—**.

**Front knee at plant** (`front_knee_angle_deg`) and **Arm angular speed** (`peak_arm_angular_speed_deg_s`) are **detail metrics**. They belong on bowling/Showcase callouts and capability lists — not the homepage hero peaks.

**Ball speed** (`ball_speed_kmh`) may appear as a deeper bowling capability list item (no blank number), or as a real gated value when a sample exists. It is **not** a two-peak homepage HUD metric while ungated or null.

Keep the full label **Arm angular speed** (not “Arm angular”) wherever that detail metric is shown.

Illustrative homepage numbers, when needed, should reuse Showcase-like ranges already used on the site: peak run-up about **21.6 km/h** (the ~19–22 km/h Showcase band) and release height about **1.09 m**. Do not present delivery-stride speed (`19.8`) as if it were peak run-up. Mark session-progress samples as illustrative where the site already does.

### Ungated / null

If `quality.gated` is `false` **or** the field value is `null`:

- For a **locked hero field** that the HUD is supposed to show (`peak_runup_speed_kmh`, `release_height_m`, batting contact time, bat speed): **Can't measure** or **—**
- For bowling **ball speed** on the homepage two-peak HUD: **omit the peak** (do not render Can't measure / — as a ball-speed hero card)
- **Never** invent a number
- **Never** coerce `null` → `0`
- **Never** substitute `runup_speed_at_delivery_kmh` for a missing homepage peak

Gated false means “this take does not support a trustworthy value,” not “the athlete scored zero.”

| Situation | Show |
| --- | --- |
| Bowling `ball_speed_kmh` not yet gated / null on the homepage HUD | **Omit** the peak (not Can't measure / —) |
| Homepage `peak_runup_speed_kmh` or `release_height_m` null or `quality.gated === false` | **Can't measure** / **—** for that peak |
| Any other locked field `null` or `quality.gated === false` | **Can't measure** / **—** |
| Valid gated number | The number + unit from the tables above |

---

## Quality gate (Modal; website must respect it)

Implemented in the **ML / Modal** repo, not this tree. The marketing site, GIF HUD, hero cards, and Showcase embed must still obey it.

Pipeline order:

1. **Detect**
2. **Track**
3. **Pose**
4. **Metric**

**Fail loud.** If a stage cannot support a trustworthy metric, do not silently fill the HUD. The dashboard/HUD **only renders gated fields**. Ungated locked slots stay **Can't measure** / **—**. Ungated bowling ball speed is omitted from the homepage two-peak HUD rather than shown as a blank peak.

This site embeds Showcase at `https://gabriellasystems--cricket-demo-web.modal.run`. Product notes (unverified here): Modal PR #1 merged to `master` as `8fcab5d` with the quality gate and `impact_offset_ms`. Confirm in the ML repo before citing that SHA in ML docs.

---

## Surfaces

| Surface | Files | Notes |
| --- | --- | --- |
| GIF HUD overlay | `assets/cricket_batting_15s.gif`, `assets/cricket_bowling_15s.gif` | Burned-in Gabriella Vision panel. |
| Homepage hero cards | `index.html` (`.hero-metric-card`) | Floating dashboard next to the hero: batting pair + bowling pair. |
| Session progress cards | `index.html`, `batting.html`, `bowling.html` | Homepage bowling card leads with the locked pair. |

Deeper capability lists (front knee, arm angular speed, delivery-stride speed, ball tracking, stride, and so on) may still appear as pipeline outputs. They are **not** the two-metric hero HUD.

---

## Open blockers (as of this writing)

These are product/ops blockers, not missing copy in this PR:

1. **GIF binaries are updated separately.** This HTML/docs pass does not refresh `assets/cricket_batting_15s.gif` or `assets/cricket_bowling_15s.gif`. Homepage GIFs may still show an older pair until a dedicated asset PR.
2. **After GIFs land on `main`:** Modal **redeploy** and **demo rerun** so Showcase/demo clips match the new overlays. Do not assume the live Modal embed updates from this website repo alone.

When regenerating GIFs, burn the **locked** labels and fields from this file: batting **Contact time in this clip** + Bat speed; bowling Run-up speed (`peak_runup_speed_kmh`) + Release height. Do not burn Ball speed / Can't measure as a bowling homepage peak. Do not use early-vs-late Impact wording.

---

## Asset vs HTML status (do not assume they match)

As of this HUD-pair pass:

- Homepage **HTML** hero and bowling session-progress cards use **Run-up speed** (`peak_runup_speed_kmh`) + **Release height** (`release_height_m`).
- Batting HTML uses **Contact time in this clip** + Bat speed.
- GIF HUD overlays are **not** part of this change and may still show a previous pair until a separate asset update.
- Front knee at plant and arm angular speed remain on `bowling.html` as detail metrics.

---

## Checklist for a HUD change

1. Fields and labels match the locked pairs (batting: `impact_offset_ms` as **Contact time in this clip** + bat speed; bowling: `peak_runup_speed_kmh` + `release_height_m`).
2. Quality gate: detect → track → pose → metric; fail loud; HUD only renders gated fields.
3. Ungated / null locked fields → Can't measure / —, never invent, never `0`.
4. Batting HUD has no ball speed. Bowling two-peak HUD omits `ball_speed_kmh` (do not show Can't measure / — as a ball-speed homepage peak).
5. Homepage run-up is `peak_runup_speed_kmh` only — no `runup_speed_at_delivery_kmh` fallback.
6. Impact copy uses the honest contact-time wording; no early vs late / timing-the-ball / technique-grade language.
7. GIF overlay, hero cards, and progress cards stay consistent (or lag is called out). GIF binaries are a separate PR.
8. Front knee / arm angular speed are bowling detail metrics, not homepage hero peaks. Full **Arm angular speed** wording where shown.
9. Sample numbers, if shown, are existing Showcase-like values — not newly invented gated stats.
