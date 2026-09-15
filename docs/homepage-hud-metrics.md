# Homepage HUD / hero metric contract

Product + ML contract for **homepage GIF HUD panels**, **hero metric cards**, and any dashboard that shows clip metrics. Marketing, overlay renders, and HTML labels must stay in sync with the Modal quality gate.

This file is the source of truth for *which fields* the homepage may show. Sample *numbers* on the static site are illustrative; they must not invent gated values.

**Product review:** confirm the locked pairs, quality-gate behaviour, and open blockers below.

---

## Locked hero pairs

Dashboard / HUD **only renders gated fields**. Never invent a number. Never coerce `null` → `0`.

### Batting (locked)

Drop **ball speed** from the batting hero HUD. Incoming-ball speed may still appear in batting capability copy; it is not a batter-skill hero metric.

| Order | API field | Label | Unit |
| --- | --- | --- | --- |
| 1 | `impact_offset_ms` | **Impact timing** | ms |
| 2 | `peak_bat_speed_kmh` | **Bat speed** | km/h |

Until `impact_offset_ms` is deployed on a given sample, derive milliseconds from `impact_frame ÷ fps` (same label: **Impact timing**). Do not leave the batting HUD on ball speed while waiting for the field.

### Bowling (temporary pair)

Use this pair **until a quality-gated bowling sample has `ball_speed_kmh`**. Then swap the bowling hero to gated **Ball speed** (`ball_speed_kmh`). Until that sample exists, do not show a bowling ball-speed *number* on the HUD.

Drop **run-up** from the bowling hero HUD. Run-up remains a valid deeper bowling metric.

| Order | API field | Label | Unit |
| --- | --- | --- | --- |
| 1 | `front_knee_angle_deg` | **Front knee at plant** | ° |
| 2 | `peak_arm_angular_speed_deg_s` | **Arm angular speed** | °/s |

**Fallback** if arm angular speed is missing or ungated: `release_height_m` (**Release height**, m).

**When a gated bowling ball-speed sample exists:** promote `ball_speed_kmh` (**Ball speed**, km/h) onto the bowling hero and retire the temporary pair from the HUD (deeper lists may still show knee / arm / release).

Keep the full label **Arm angular speed** (not “Arm angular”).

### Ungated / null

If `quality.gated` is `false` **or** the field value is `null`:

- Display **Can't measure** or **—**
- **Never** invent a number
- **Never** coerce `null` → `0`

Gated false means “this take does not support a trustworthy value,” not “the athlete scored zero.”

| Situation | Show |
| --- | --- |
| Bowling `ball_speed_kmh` not yet gated for the sample | **Can't measure** / **—** (do not show a fake km/h) |
| Any locked field `null` or `quality.gated === false` | **Can't measure** / **—** |
| Valid gated number | The number + unit from the tables above |

---

## Quality gate (Modal; website must respect it)

Implemented in the **ML / Modal** repo, not this tree. The marketing site, GIF HUD, hero cards, and Showcase embed must still obey it.

Pipeline order:

1. **Detect**
2. **Track**
3. **Pose**
4. **Metric**

**Fail loud.** If a stage cannot support a trustworthy metric, do not silently fill the HUD. The dashboard/HUD **only renders gated fields**. Ungated slots stay **Can't measure** / **—**.

This site embeds Showcase at `https://gabriellasystems--cricket-demo-web.modal.run`. Product notes (unverified here): Modal PR #1 merged to `master` as `8fcab5d` with the quality gate and `impact_offset_ms`. Confirm in the ML repo before citing that SHA in ML docs.

---

## Surfaces

| Surface | Files | Notes |
| --- | --- | --- |
| GIF HUD overlay | `assets/cricket_batting_15s.gif`, `assets/cricket_bowling_15s.gif` | Burned-in Gabriella Vision panel. |
| Homepage hero cards | `index.html` (`.hero-metric-card`) | Floating dashboard next to the hero. |
| Session progress cards | `index.html`, `batting.html`, `bowling.html` | Lead with the same locked pair. |

Deeper capability lists (run-up, release height, ball tracking, stride, and so on) may still appear as pipeline outputs. They are **not** the two-metric hero HUD.

---

## Open blockers (as of this writing)

These are product/ops blockers, not missing copy in this PR:

1. **GIF binary push still blocked on Mac.** Intended HUD overlays cannot land on `main` until binaries can be exported/pushed from that machine. `389ab41` on `main` still uses the previous HUD pair (batting: ball + bat; bowling: knee + run-up).
2. **After GIFs land on `main`:** Modal **redeploy** and **demo rerun** so Showcase/demo clips match the new overlays. Do not assume the live Modal embed updates from this website repo alone.

HTML label lock is a separate open PR: [PR #2](https://github.com/ptirupat/gabriella-systems/pull/2) (*Align homepage HUD with locked hero metric fields*). It does **not** refresh GIF binaries.

When regenerating GIFs, burn the **locked** labels and fields from this file, not the `389ab41` pair.

---

## Asset vs HTML status (do not assume they match)

As of `main` at `5fa7f4b`:

- GIF HUD from `389ab41` still uses the **previous** pair.
- Homepage HTML hero cards on `main` still label **Ball Speed** / **Front Knee** / **Bat Speed** / **Run-up**.

Open **[PR #2](https://github.com/ptirupat/gabriella-systems/pull/2)** updates HTML labels only:

- Batting: Impact timing (ms) + Bat speed
- Bowling: Front knee at plant + Arm angular speed (release height fallback)
- Ungated bowling ball speed: **Can't measure**, not `0`

---

## Checklist for a HUD change

1. Fields and labels match the locked pairs (including `ball_speed_kmh` swap rule for bowling).
2. Quality gate: detect → track → pose → metric; fail loud; HUD only renders gated fields.
3. Ungated / null → Can't measure / —, never invent, never `0`.
4. Batting HUD has no ball speed; bowling HUD has no run-up until the gated ball-speed swap.
5. GIF overlay, hero cards, and progress cards stay consistent (or lag is called out).
6. Full **Arm angular speed** wording on bowling.
7. Sample numbers, if shown, are existing Showcase-like values — not newly invented gated stats.
