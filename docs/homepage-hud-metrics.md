# Homepage HUD / hero metric contract

Product + ML contract for **homepage GIF HUD panels**, **hero metric cards**, and any dashboard that shows clip metrics. Marketing, overlay renders, and HTML labels must stay in sync with the Modal quality gate.

This file is the source of truth for *which fields* the homepage may show. Sample *numbers* on the static site are illustrative; they must not invent gated values.

**Product review:** confirm the locked pairs, quality-gate behaviour, and open blockers below.

---

## Locked hero pairs

Dashboard / HUD **only renders gated fields**. Never invent a number. Never coerce `null` → `0`.

The homepage two-peak HUD is four floating cards: batting pair + bowling pair.

### Batting (locked)

Drop **ball speed** from the batting hero HUD. Incoming-ball speed may still appear in batting capability copy; it is not a batter-skill hero metric.

| Order | API field | Label | Unit |
| --- | --- | --- | --- |
| 1 | `impact_offset_ms` | **Impact timing** | ms |
| 2 | `peak_bat_speed_kmh` | **Bat speed** | km/h |

Until `impact_offset_ms` is deployed on a given sample, derive milliseconds from `impact_frame ÷ fps` (same label: **Impact timing**). Do not leave the batting HUD on ball speed while waiting for the field.

### Bowling (locked)

Use this pair on the two-peak homepage HUD. Do **not** put **Ball speed** on that HUD until a quality-gated, non-null `ball_speed_kmh` sample exists. Until then, **omit** the slot — do not show **Can't measure** / **—** as a bowling homepage peak.

| Order | API field | Label | Unit |
| --- | --- | --- | --- |
| 1 | `peak_runup_speed_kmh` | **Run-up speed** | km/h |
| 2 | `release_height_m` | **Release height** | m |

**Fallback** if peak run-up is missing or ungated: `runup_speed_at_delivery_kmh` (same label: **Run-up speed**, km/h). Use the delivery-stride field **only** when peak is missing.

**Front knee at plant** (`front_knee_angle_deg`) and **Arm angular speed** (`peak_arm_angular_speed_deg_s`) are **detail metrics**. They belong on bowling/Showcase callouts and capability lists — not the homepage hero peaks.

**Ball speed** (`ball_speed_kmh`) may appear as a deeper bowling capability list item (no blank number), or as a real gated value when a sample exists. It is **not** a two-peak homepage HUD metric while ungated or null.

Keep the full label **Arm angular speed** (not “Arm angular”) wherever that detail metric is shown.

Illustrative homepage numbers, when needed, should reuse Showcase-like ranges already used on the site: run-up about **19–22 km/h** (e.g. 19.8 delivery-stride / 21.6 peak) and release height about **1.09 m**. Mark session-progress samples as illustrative where the site already does.

### Ungated / null

If `quality.gated` is `false` **or** the field value is `null`:

- For a **locked hero field** that the HUD is supposed to show: **Can't measure** or **—**
- For bowling **ball speed** on the homepage two-peak HUD: **omit the peak** (do not render Can't measure / — as a hero card)
- **Never** invent a number
- **Never** coerce `null` → `0`

Gated false means “this take does not support a trustworthy value,” not “the athlete scored zero.”

| Situation | Show |
| --- | --- |
| Bowling `ball_speed_kmh` not yet gated / null on the homepage HUD | **Omit** the peak (not Can't measure / —) |
| Locked run-up or release-height field `null` or `quality.gated === false` | **Can't measure** / **—** |
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

Deeper capability lists (front knee, arm angular speed, ball tracking, stride, and so on) may still appear as pipeline outputs. They are **not** the two-metric hero HUD.

---

## Open blockers (as of this writing)

These are product/ops blockers, not missing copy in this PR:

1. **GIF binaries are updated separately.** This HTML/docs pass does not refresh `assets/cricket_batting_15s.gif` or `assets/cricket_bowling_15s.gif`. Homepage GIFs may still show an older bowling pair until a dedicated asset PR.
2. **After GIFs land on `main`:** Modal **redeploy** and **demo rerun** so Showcase/demo clips match the new overlays. Do not assume the live Modal embed updates from this website repo alone.

When regenerating GIFs, burn the **locked** labels and fields from this file: batting Impact timing + Bat speed; bowling Run-up speed + Release height. Do not burn Ball speed / Can't measure as a bowling homepage peak.

---

## Asset vs HTML status (do not assume they match)

As of this HUD-pair pass:

- Homepage **HTML** hero and bowling session-progress cards use **Run-up speed** + **Release height** (batting unchanged: Impact timing + Bat speed).
- GIF HUD overlays are **not** part of this change and may still show a previous bowling pair until a separate asset update.
- Front knee at plant and arm angular speed remain on `bowling.html` as detail metrics.

---

## Checklist for a HUD change

1. Fields and labels match the locked pairs (batting: impact + bat; bowling: run-up + release height).
2. Quality gate: detect → track → pose → metric; fail loud; HUD only renders gated fields.
3. Ungated / null locked fields → Can't measure / —, never invent, never `0`.
4. Batting HUD has no ball speed. Bowling two-peak HUD omits ball speed until gated + non-null (do not show Can't measure / — as a homepage peak).
5. GIF overlay, hero cards, and progress cards stay consistent (or lag is called out). GIF binaries are a separate PR.
6. Front knee / arm angular speed are bowling detail metrics, not homepage hero peaks. Full **Arm angular speed** wording where shown.
7. Sample numbers, if shown, are existing Showcase-like values — not newly invented gated stats.
