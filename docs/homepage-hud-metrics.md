# Homepage HUD / hero metric contract

Product + ML contract for **homepage GIF HUD panels** and **hero metric cards**. Marketing, overlay renders, and HTML labels must stay in sync with the Modal quality gate.

This file is the source of truth for *which fields* the homepage may show. Sample *numbers* on the static site are illustrative; they must not invent gated values.

---

## Surfaces

| Surface | Files | Notes |
| --- | --- | --- |
| GIF HUD overlay | `assets/cricket_batting_15s.gif`, `assets/cricket_bowling_15s.gif` | Burned-in Gabriella Vision panel on homepage (and batting/bowling pages). |
| Homepage hero cards | `index.html` (`.hero-metric-card`) | Floating dashboard next to the hero. |
| Session progress cards | `index.html`, `batting.html`, `bowling.html` | Should lead with the same locked pair. |

Deeper capability lists (run-up, release height, ball tracking, stride, and so on) may still appear as pipeline outputs. They are **not** the two-metric hero HUD.

## Quality gate (never invent a number)

If `quality.gated` is `false` **or** the field value is `null`:

- Display **Can't measure** or **—**
- **Never** coerce `null` → `0`

Gated false means “this take does not support a trustworthy value,” not “the athlete scored zero.”

The gate itself is implemented in the **ML / Modal** repo, not in this website repo. This site embeds Showcase at `https://gabriellasystems--cricket-demo-web.modal.run`.

## Batting hero pair (locked)

Drop **ball speed** from the batting hero HUD. Ball speed may still appear in batting capability copy (incoming ball), but it is not a batter-skill hero metric.

| Order | API field | Label | Unit |
| --- | --- | --- | --- |
| 1 | `impact_offset_ms` (**preferred**) | **Impact timing** | ms |
| 2 | `peak_bat_speed_kmh` | **Bat speed** | km/h |

Until `impact_offset_ms` is deployed on a given sample, derive milliseconds from `impact_frame ÷ fps` (same label: **Impact timing**). Do not leave the batting HUD on ball speed while waiting for the field.

## Bowling hero pair (temporary)

Use this pair **until a quality-gated sample has ball speed**. Then product/ML may promote gated ball speed onto the bowling hero; until that sample exists, do not show a bowling ball-speed number on the HUD.

Drop **run-up** from the bowling hero HUD. Run-up remains a valid deeper bowling metric.

| Order | API field | Label | Unit |
| --- | --- | --- | --- |
| 1 | `front_knee_angle_deg` | **Front knee at plant** | ° |
| 2 | `peak_arm_angular_speed_deg_s` | **Arm angular speed** | °/s |

**Fallback** if arm angular speed is missing or ungated: `release_height_m` (**Release height**, m).

Keep the full label **Arm angular speed** (not “Arm angular”) so the HUD is unambiguous.

## Null / ungated examples

| Situation | Show |
| --- | --- |
| Bowling ball speed, gated sample not available | **Can't measure** |
| Any locked field `null` or `quality.gated === false` | **Can't measure** / **—** |
| Valid gated number | The number + unit from the tables above |

## Asset vs HTML status (do not assume they match)

As of `main` at `5fa7f4b`:

- GIF HUD from `389ab41` still uses the **previous** pair: batting ball + bat; bowling knee + run-up. Intended HUD is this contract; a GIF binary refresh may still be pending.
- Homepage HTML hero cards on `main` still label **Ball Speed** / **Front Knee** / **Bat Speed** / **Run-up**.

Open **[PR #2](https://github.com/ptirupat/gabriella-systems/pull/2)** (*Align homepage HUD with locked hero metric fields*) updates HTML labels only (`index.html`, `batting.html`, `bowling.html`):

- Batting heroes: Impact timing (ms) + Bat speed
- Bowling heroes: Front knee at plant + Arm angular speed (release height as fallback)
- Ungated bowling ball speed: **Can't measure**, not `0`
- GIF binaries are explicitly left for a separate update

When regenerating GIFs, burn the **locked** labels and fields from this file, not the `389ab41` pair.

## Modal / ML (external)

Do not invent Modal commit SHAs from this repo. This tree has no `impact_offset_ms` or `quality.gated` references.

Product notes (unverified here): Modal PR #1 merged to `master` as `8fcab5d` with the quality gate and `impact_offset_ms`. Confirm in the ML/Modal repository before citing that SHA in ML docs or release notes.

## Checklist for a HUD change

1. Fields and labels match the tables above.
2. Ungated / null → Can't measure / —, never `0`.
3. Batting HUD has no ball speed; bowling HUD has no run-up.
4. GIF overlay, hero cards, and progress cards stay consistent (or the lag is called out).
5. Full **Arm angular speed** wording on bowling.
6. Sample numbers, if shown, are existing Showcase-like values — not newly invented gated stats.
