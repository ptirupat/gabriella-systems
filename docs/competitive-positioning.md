# Competitive positioning (copy gate)

Short Marketing note for website and product copy. Keep claims aligned with this — not a full GTM brief.

Updated: 2026-09-17

## Who we compare against

**Direct (phone / net CV for coaches & academies)**  
Matcha, CricVision, Fulltrack AI, Ludimos, Advanced Impactor — RGB phone (or similar) → clipped deliveries → speed, pitch maps / beehives, some pose or biomechanics, coach galleries.

**Incumbent training systems**  
PitchVision — hardware + analytics kits historically sold into academies/clubs.

**Adjacent**  
BatSense / SmartCricket (bat sensor, not full ball+pose CV); NV Play (match / analyst workflows); Trume (early coaching OS).

**Aspirational reference**  
Hawk-Eye — elite multi-camera tracking; not our academy-net price or form factor.

## Category pattern (what rivals do)

- Market **always-on numbers**: speed, pitch maps, progress — with little public talk of quality gates.
- Fulltrack is unusually explicit: bad stump calibration → bad tracking.
- Dashboard UX: auto-clips, session galleries, coach tagging; “progress” is common homepage language even when capture isn’t comparable session-to-session.

## Our wedge (what we own in copy)

1. **Trust / fail-loud** — low-confidence detection, tracking, or pose → **Can’t measure** / null, never a guessed HUD number. Phone-CV apps rarely lead with this; it is a primary differentiator for pilots.
2. **Depth + multi-model stack** (depth / ball-bat / pose) as a **quality** story vs RGB-only phone CV — not as “more metrics.”
3. **View-aware analysis** — batting vs bowling and camera view drive which metrics and visualizations we show. Do **not** claim “batting = front-on only” or “bowling = side-on only.”
4. **Calibrated portable capture** — product/roadmap moat for hardware; do **not** sell live upload-software as already shipping calibrated hardware capture.

## Claim vs don’t claim

| Claim | Live site / Showcase | Roadmap / later |
| --- | --- | --- |
| Pose / bat / ball overlays tied to real pipeline output | Yes, when gated | — |
| Hero metrics from Showcase/API fields only | Yes | — |
| Ungated → Can’t measure (never invent `0` or fake speeds) | Yes | — |
| Session-to-session “progress” as automatic for any upload | No — needs comparable view/quality | Product thesis, careful wording |
| Calibrated / consistent capture position as shipping software | No | With portable hardware |
| Multi-camera ready | No | When shipped |
| Pitch maps / beehives as must-have parity | No this sprint | Optional later; don’t chase rival feature lists |
| Impact as early vs late, “timing the ball,” or a universal good-ms score | No | Needs gated bounce / release / arrival (backlog) |

## Impact (copy gate)

`impact_offset_ms` is ms from **clip start to gated contact**. Same-view session compare marker only — not comparable across delivery types or recording starts without a bounce/release/arrival reference.

**Allowed:** “Contact time in this clip” / “When contact happened in this take” / same-view compare.

**Forbidden:** early vs late, timing the ball, played early/late, technique grade, universal “good ms.”

True early/late needs a gated bounce/release/arrival reference (**backlog**). Do not imply that exists.

Homepage batting heroes follow [Modal PRODUCT.md](https://github.com/Gabriella-Systems/modal/blob/main/docs/PRODUCT.md): **Bat speed at impact** (`bat_speed_at_impact_kmh`) + **Head stability** (`head_stability_cm`). Contact time in this clip is detail/capability copy only. See [homepage-hud-metrics.md](./homepage-hud-metrics.md) for how this site implements that lock — do not fork a second contract here.

**Marketing tips:** Bat — how fast the bat was moving at contact in this take (km/h). Head — how much the head moved from downswing to contact (cm); lower usually means steadier — not a technique grade. Contact (detail) — same-view marker, not early/late.

### Homepage pairs

Confirm in PRODUCT.md. This site currently implements:

- **Batting:** Bat speed at impact (`bat_speed_at_impact_kmh`, **16 km/h**) + Head stability (`head_stability_cm`, **41.4 cm**). Label is **Bat speed at impact** — never bare “bat speed,” never “pipeline peak.” Never publish peak ~90 or the old 36–39 km/h pipeline-peak sample. Ungated or null locked fields are **Can't measure** / **—**. If Head is ungated, show Can't measure on that hero slot — do **not** put Contact back on the hero row. Never early/late. Front stride is not a gated field; do not show it on homepage or batting hero/progress rows. Ball **122 km/h** and Contact time **817 ms** are detail/progress only — not homepage heroes.
- **Bowling:** Run-up speed (`peak_runup_speed_kmh` only, **20.4 km/h**) on the public homepage bowling *hero*. Arm angular speed **619 °/s** and Front knee **155°** are detail/progress only — not homepage heroes. Omit ball speed from that hero until gated and non-null — never show “—” as a ball-speed peak. **Release height is omitted** until calibration supports a gated overarm value — do not publish 1.09 m or invent 2.1 m, and do not show Can’t measure / Measured when calibration supports it as a second bowling HUD slot. No homepage fallback to `runup_speed_at_delivery_kmh`.

## Homepage / GIF rules (competitive)

- Prefer **real Showcase takes** with trusted overlays over AI-generated “analysis” demos (rivals already look like phone-CV theater).
- HUD: **few, readable, real** session metrics — or Can’t measure. Decorative or invented numbers kill the trust wedge.
- Impact on HUD/copy follows the copy gate above (contact time in this clip, not early/late). Head stability is a batting homepage hero; Contact time stays on detail lists. Release height stays **off** the public bowling HUD until calibrated and gated.
- Front stride is not a gated API field — do not show it on homepage or batting progress/hero rows.
- Logo / brand: simple vision/hardware mark (e.g. G + reticle) over illustrated batter / neon poster art (CricVision-adjacent) or consumer-app doodles (Matcha-adjacent).

## One-line positioning

**Gabriella:** cricket net analysis that fails loud and only shows metrics it trusts — building toward calibrated capture academies can compare over time — not another phone-CV progress dashboard.
