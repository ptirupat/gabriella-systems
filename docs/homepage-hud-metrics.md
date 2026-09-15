# Homepage HUD / hero metric contract

Product + ML contract for **homepage GIF HUD panels**, **hero metric cards**, and any dashboard that shows clip metrics. Marketing, overlay renders, and HTML labels must stay in sync with the Modal quality gate.

This file is the source of truth for *which fields* the homepage may show. Sample *numbers* on the static site are illustrative; they must not invent gated values.

**Product review:** confirm the locked pairs, quality-gate behaviour, and open blockers below.

---

## Locked hero pairs

Dashboard / HUD **only renders gated fields**. Never invent a number. Never coerce `null` → `0`.

### Batting (temporary pair)

Drop **ball speed** from the batting hero HUD. Incoming-ball speed may still appear in batting capability copy; it is not a batter-skill hero metric.

| Order | API field | Label | Unit |
| --- | --- | --- | --- |
| 1 | `impact_offset_ms` | **Impact** — contact time in this clip | ms |
| 2 | `peak_bat_speed_kmh` | **Bat speed** | km/h |

`impact_offset_ms` is ms from clip start to gated contact. **Not** early vs late, timing the ball, a technique grade, or a universal good-ms score. Use it as a same-view session marker only. True early/late needs a gated bounce/release/arrival reference (backlog). Copy gate: [competitive-positioning.md](./competitive-positioning.md).

Until `impact_offset_ms` is deployed on a given sample, derive milliseconds from `impact_frame ÷ fps` (same honest label: **Impact** / contact time in this clip — never “Impact timing” as early/late). Do not leave the batting HUD on ball speed while waiting for the field.

**When `head_stability_cm` is gated:** swap the batting hero to Head stability + Bat speed and retire Impact from the two-peak HUD.

### Bowling (homepage pair)

Two-peak HUD: **Run-up speed** + **Release height**. Omit **ball speed** from that HUD until a gated, non-null `ball_speed_kmh` exists — never show **Can't measure** / **—** as a homepage peak.

| Order | API field | Label | Unit |
| --- | --- | --- | --- |
| 1 | `peak_runup_speed_kmh` | **Run-up speed** | km/h |
| 2 | `release_height_m` | **Release height** | m |

Front knee at plant and arm angular speed remain bowling/Showcase **detail** metrics, not homepage hero peaks. Keep the full label **Arm angular speed** (not “Arm angular”) where those details appear.

### Ungated / null

If `quality.gated` is `false` **or** the field value is `null`:

- Display **Can't measure** or **—**
- **Never** invent a number
- **Never** coerce `null` → `0`

Gated false means “this take does not support a trustworthy value,” not “the athlete scored zero.”

| Situation | Show |
| --- | --- |
| Bowling `ball_speed_kmh` not yet gated / null | **Omit** from the two-peak homepage HUD (do not show Can't measure / — as a peak; do not invent km/h) |
| Any locked field `null` or `quality.gated === false` | **Can't measure** / **—** on detail surfaces; do not keep an empty slot as a homepage peak |
| Valid gated number | The number + unit from the tables above |

---

## Quality gate (Modal; website must respect it)

Implemented in the **ML / Modal** repo, not this tree. The marketing site, GIF HUD, hero cards, and Showcase embed must still obey it.

Pipeline order:

1. **Detect**
2. **Track**
3. **Pose**
4. **Metric**

**Fail loud.** If a stage cannot support a trustworthy metric, do not silently fill the HUD. The dashboard/HUD **only renders gated fields**. On detail surfaces, ungated slots stay **Can't measure** / **—**. On the two-peak homepage HUD, omit a null field rather than showing **—** as a peak.

This site embeds Showcase at `https://gabriellasystems--cricket-demo-web.modal.run`. Product notes (unverified here): Modal PR #1 merged to `master` as `8fcab5d` with the quality gate and `impact_offset_ms`. Confirm in the ML repo before citing that SHA in ML docs.

---

## Surfaces

| Surface | Files | Notes |
| --- | --- | --- |
| GIF HUD overlay | `assets/cricket_batting_15s.gif`, `assets/cricket_bowling_15s.gif` | Burned-in Gabriella Vision panel. |
| Homepage hero cards | `index.html` (`.hero-metric-card`) | Floating dashboard next to the hero. |
| Session progress cards | `index.html`, `batting.html`, `bowling.html` | Lead with the same locked pair. |

Deeper capability lists (front knee, arm angular speed, ball tracking, stride, and so on) may still appear as pipeline outputs. They are **not** the two-metric hero HUD.

---

## Open blockers (as of this writing)

1. **Impact HTML/GIF copy** still says **Impact timing** on `main` (`6afc4e7` GIFs + merged [PR #2](https://github.com/ptirupat/gabriella-systems/pull/2) labels). That oversells early/late. Honest label is contact time in this clip — see [competitive-positioning.md](./competitive-positioning.md).
2. **Bowling homepage pair** on `main` GIFs/HTML is still front knee + arm angular speed. Contract above is run-up + release height; omit null ball speed from the two-peak HUD. HTML swap is a separate change (open [PR #4](https://github.com/ptirupat/gabriella-systems/pull/4)); GIF binaries are updated separately.
3. After GIF/HTML land: Modal **redeploy** and **demo rerun**. This website repo does not update the live embed by itself.

When regenerating GIFs, burn the **current** labels and fields from this file.

---

## Asset vs HTML status (do not assume they match)

As of `main` at `6afc4e7`:

- GIF HUD: batting Impact timing + Bat speed; bowling Front knee + Arm angular speed.
- Homepage HTML hero cards match that pair, including the **Impact timing** label (copy bug).
- Bowling two-peak HUD on `main` is not yet run-up + release height.

---

## Checklist for a HUD change

1. Fields and labels match the homepage pairs (batting: Impact + bat, honest contact-time label; bowling: run-up + release height).
2. Quality gate: detect → track → pose → metric; fail loud; HUD only renders gated fields.
3. Ungated / null locked fields → Can't measure / — on detail surfaces; never invent, never `0`.
4. Batting HUD has no ball speed. Impact is contact time in this clip — never early/late or a good-ms score. Bowling two-peak HUD omits ball speed until gated + non-null (never “—” as a peak).
5. GIF overlay, hero cards, and progress cards stay consistent (or lag is called out).
6. Front knee / arm angular speed are bowling detail metrics, not homepage hero peaks. Full **Arm angular speed** wording where shown.
7. Sample numbers, if shown, are existing Showcase-like values — not newly invented gated stats.
