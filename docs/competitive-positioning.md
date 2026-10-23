# Competitive positioning (copy gate)

Short Marketing note for website and product copy. Keep claims aligned with this — not a full GTM brief. Sales GTM and outreach drafts live under [docs/sales/](./sales/) (repo-only). The formal SportVot collaboration plan also lives under [docs/sales/sportvot-collaboration-plan.md](./sales/sportvot-collaboration-plan.md). Sales GTM includes the [competitor feature recommendations](./sales/competitor-feature-recommendations.md) report (repo-only; not a live-site claims doc).

Updated: 2026-10-23

**KAN-331:** Public copy leads with results. Ready / Can't measure is retired as the headline, hero, feature bullet, HUD label, tooltip, and meta description. The public line is exactly **Bat speed and head stability per delivery, from a camera placed side-on.** Use that exact sentence once in visible copy on a page; meta and social descriptions may repeat it. Other copy on the same page should say what coaches get without repeating the sentence. The camera can sit where the coach needs it. Do **not** say “for every delivery,” “each delivery can return,” “from a phone,” or “phone view” — the outreach measured-rate gate is 90%, so a completeness claim is not honest, and we are not a phone app. Do **not** claim Bat or Head from front-on; front-on has not passed validation. Front-on batting is planned charts only. Can't measure is a rare exception, not a theme: the only public lines are the small footnotes on `batting.html` and `bowling.html`. Do not put that sentence in heroes, intros, About, or other body copy, and do not headline “we don't invent a number.” About opens with what coaches get, including review in the coach portal. The ball-speed tooltip is “Measured ball speed in this take (km/h).” Do not invent accuracy claims. Sample heroes stay Bat **10.6 km/h** and Head **45.9 cm**. Pitch maps on the public site: “coming, from a camera that can see the pitch” — no date. Do not name body-worn, umpire, or empire capture, or competitors, on public pages.

Living competitor tracker (class, capture, pricing signals, gaps): [competitors.md](./competitors.md). This file remains the **copy gate** for live site claims. Modal [PRODUCT.md](https://github.com/Gabriella-Systems/modal/blob/main/docs/PRODUCT.md) is product source of truth — do not fork hero metrics here.

## Who we compare against

**Direct (phone / net CV for coaches & academies)**  
Matcha, CricVision, Fulltrack AI, Ludimos, Advanced Impactor — RGB phone (or similar) → clipped deliveries → speed, pitch maps / beehives, some pose or biomechanics, coach galleries. CricVision is the academy-OS end of this set (white-label app, parent/coach chat, attendance/payments, plus CV on practice clips). Detail: [competitors.md](./competitors.md#cricvision-cricvisionai).

**Youth pathway / brand (not clip/AMS SaaS)**  
Kabuni — PlayOS + Super Coaches + schools + league; access/cues GTM, not our metric peer. Detail: [competitors.md](./competitors.md#kabuni-kabunicom).

**Incumbent training systems**  
PitchVision — hardware + analytics kits historically sold into academies/clubs.

**Hardware + CV (venue install)**  
Level Up Sportslytics — multi-cam partner-venue cricket analytics (LevelUp Cricket app); ball track, pitch maps, wagon wheels, biomechanics; expanding SG → India. Detail: [competitors.md](./competitors.md#level-up-sportslytics-levelupsportslyticscom).

**Adjacent**  
BatSense / SmartCricket (bat sensor, not full ball+pose CV); NV Play (match / analyst workflows); Ball2Data (match analytics / analyst education / broadcast overlays — not nets CV); Trume (early coaching OS). **3rd-Eye.TV** (3rd-eye.tv) — match-day DRS and association platforms (certified DRS, high-frame cameras, ball track, edge audio, third-umpire replay; Sports DeepMind claimed for tournaments and performance analytics). Closer to the Hawk-Eye / PitchVision match-analytics world than to Ludimos or CricVision academy apps. Low direct threat to nets upload and view-aware session metrics from a camera the coach can place. Watchlist if SDM expands into nets phone analysis. Detail: [competitors.md](./competitors.md#3rd-eyetv-3rd-eyetv). WellPlayed is **watchlist** (unfinished video-share coaching app), not a live metric peer. Customer leads (e.g. Adani Sportsline Academies) live in [competitors.md](./competitors.md#customer--pilot-leads-not-competitors) — not rivals.

**Aspirational reference**  
Hawk-Eye — elite multi-camera tracking; not our academy-net price or form factor.

## Named rivals (class + Gabriella wedge)

**Ludimos** — Phone-first AI cricket coaching + academy ops (consumer Skills/Showcase + Pavilion/360° AMS).  
**Wedge:** Results — bat speed and head stability per delivery, from a camera placed side-on, where the coach needs it — versus phone apps locked behind the stumps and always-on phone-CV numbers. Do not claim Bat or Head from front-on. Pitch maps: coming, from a camera that can see the pitch (no date). KAN-331 retired Ready / Can't measure as the headline. When a delivery can't be measured, say why only in the batting and bowling footnotes; never invent a number. Session auto-crop is must-have parity once shipped (KAN-138/139) — do not claim it early.

**Kabuni** — Youth cricket development + AI coaching brand (India-first: PlayOS + Super Coaches + schools + league pathway), not a clip/AMS SaaS peer.  
**Wedge:** Results (bat speed and head stability per delivery, from a camera placed side-on) versus access, cues, and a celebrity pathway — not a phone app locked behind the stumps. Do not treat Kabuni as our metric competitor or copy junior-league GTM. KAN-331 retired Ready / Can't measure as the pitch.

**CricVision** — Academy OS + AI video coaching (white-label app/website, parent/coach chat, attendance/payments, PDFs/reels, plus CV on practice clips). Phone/smartphone-oriented. Public academy pricing checked 2026-09-28: Basic $199/mo (3 coaches / 30 players), Pro $399/mo (5 coaches / 75 players). Built by BOSC Tech Labs (public case study).  
**Wedge:** Closer to Ludimos (academy OS, phone capture) than to results from a camera placed side-on. Medium GTM threat on academy sales; low threat on placement unless they leave the behind-the-stumps lock and match side-on Bat and Head. Don’t race white-label ops. Own bat speed and head stability per delivery. KAN-331 retired Ready / Can't measure as the headline.

**3rd-Eye.TV** — Match-day officiating and association sports-tech (India; V6 Sports / HPMC sports division; certified DRS framing). Sports DeepMind is a claimed suite (player/tournament management, live scoring, video analysis, match streaming, umpire assessment, performance analytics) — not a public academy SaaS price.  
**Wedge:** Adjacent / low direct threat. Buyer is boards and tournaments, not coaches placing a camera at the nets. Thin overlap is ball-track and performance-analytics language. We sell view-aware nets metrics from a camera the coach can place — not phone apps locked behind the stumps. Watchlist if SDM coaching products expand into nets phone analysis.

**Level Up Sportslytics** — Hardware+CV cricket analytics (Singapore; partner-venue multi-cam install, walk-in capture, expanding SG → India).  
**Wedge:** They own installed multi-cam nets; we own bat speed and head stability per delivery, from a camera placed side-on. Do not compete on “broadcast-level” slogans. KAN-331 retired Ready / Can't measure as the headline. Multi-camera stays **roadmap** for Gabriella.

## Category pattern (what rivals do)

- Market **always-on numbers**: speed, pitch maps, progress — with little public talk of quality gates.
- Fulltrack is unusually explicit: bad stump calibration → bad tracking.
- Dashboard UX: auto-clips, session galleries, coach tagging; “progress” is common homepage language even when capture isn’t comparable session-to-session.

## Our wedge (what we own in copy)

1. **Results** — Public copy leads with **bat speed and head stability per delivery, from a camera placed side-on**. The camera can sit where the coach needs it. KAN-331 retired Ready / Can't measure as the headline. When a delivery can't be measured, say why only in the batting and bowling footnotes — not as the pitch. Do not invent numbers or accuracy claims. Do not say “for every delivery” (outreach measured-rate gate is 90%).
   - **Pitch maps:** public line is “coming, from a camera that can see the pitch” — no date. Wagon wheel and ball path stay off live claims until bounce, leave, and overlay paths exist.
   - **Side-on** is the live view for Bat and Head. **Front-on batting** is planned charts only — front-on has not passed validation, so do not claim Bat or Head from front-on. Both-foot movement, bat lift, and distance to pitch of the ball are not live until a labeled session exists. Do not headline those gaps as Ready / Can't measure.
   - Do **not** claim Bat or Head from bowling-end or front-on. Do **not** claim “we analyzed the session” or native 4K analysis. Do **not** position Gabriella as a phone app (“from a phone,” “phone view”).
2. **Depth + multi-model stack** (depth / ball-bat / pose) as a **quality** story vs RGB-only phone CV — not as “more metrics.”
3. **View-aware analysis** — batting vs bowling and camera view drive which metrics and visualizations we show. Do **not** claim “batting = front-on only.” Live Bat and Head are side-on until front-on passes validation. Front-on vs side-on above is which batting readouts fit the placement, not a fixed recipe.
4. **Calibrated portable capture** — product/roadmap moat for hardware; do **not** sell live upload-software as already shipping calibrated hardware capture.
5. **Explained exception, not the pitch (KAN-331).** Ready / Can't measure is retired as the public headline. Missing quality or missing number is still not a guessed number. On the public site, say why only in the batting and bowling footnotes. Ball-dependent fields need `quality.gated === true`. Pose-derived fields (especially bowling Run-up) may still show when pose is trusted even if overall gated is false because the ball failed. We never invent numbers.

## Claim vs don’t claim

| Claim | Live site / Showcase | Roadmap / later |
| --- | --- | --- |
| Pose / bat / ball overlays tied to real pipeline output | Yes, when that object is trusted | — |
| Hero metrics from Showcase/API fields only | Yes | — |
| Untrusted / missing number is explained, never invented (`0` or fake speeds). Public copy does not headline Ready / Can't measure (KAN-331) | Yes — **per metric**, not overall gated=false blanks everything | — |
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

**Marketing tips:** Bat — how fast the bat was moving at contact in this take (km/h). Head — how much the head moved from downswing to contact (cm); lower usually means steadier — not a technique grade. Run-up — peak approach speed into the delivery in this take (km/h). Contact (detail) — time from the start of this take to contact (ms); same-view sessions only, not early vs late. Ball (detail) — Measured ball speed in this take (km/h). Do not use Ready / Can't measure in the tip (KAN-331). Δ ball speed is Showcase Results **Ball speed change through contact** (live-tip **−11.1**, gallery **`batting-defense`**) — not a homepage hero, not Head Δ. Front knee / Arm — see the copy lock in [homepage-hud-metrics.md](./homepage-hud-metrics.md). Live UI uses ⓘ tips (hover + tap/focus), not `title` only.

### Homepage pairs

Confirm in PRODUCT.md. This site currently implements:

- **Batting:** Bat speed at impact (`bat_speed_at_impact_kmh`, **10.6 km/h**) + Head stability (`head_stability_cm`, **45.9 cm**). Label is **Bat speed at impact** — never bare “bat speed,” never “pipeline peak.” Never publish peak ~90 or the old 36–39 km/h pipeline-peak sample. These sample numbers stay. KAN-331 retired Ready / Can't measure as the public headline: an untrusted or null locked field is an explained exception, not a hero label. Do **not** put Contact back on the hero row. Never early/late. Front stride is not a gated field; do not show it on homepage or batting hero/progress rows. This site’s incoming Ball **122 km/h** and Contact time **800 ms** are detail/progress only — not homepage heroes. Showcase Results Δ **−11.1** is **Ball speed change through contact** (gallery **`batting-defense`**) — not a homepage hero.
- **Bowling:** Run-up speed (`peak_runup_speed_kmh` only, **20.4 km/h**) on the public homepage bowling *hero*. Pose-derived: may show when pose is trusted even if overall gated is false from ball `no_detection`. Arm angular speed **619 °/s** and Front knee **155°** are detail/progress only — not homepage heroes. Omit ball speed from that hero until gated and non-null — never show a blank as a ball-speed peak. **Release height is omitted** until calibration supports a gated overarm value — do not publish 1.09 m or invent 2.1 m, and do not add a second bowling HUD slot for it. No homepage fallback to `runup_speed_at_delivery_kmh`.

## Homepage / GIF rules (competitive)

- Prefer **real Showcase takes** with trusted overlays over AI-generated “analysis” demos (rivals already look like phone-CV theater).
- HUD: **few, readable, real** session metrics. KAN-331 retired Ready / Can't measure as a HUD headline. Decorative or invented numbers are still out. Do not blank pose-derived Run-up solely because the ball failed. When a delivery can't be measured, a brief reason is enough.
- Impact on HUD/copy follows the copy gate above (contact time in this clip, not early/late). Head stability is a batting homepage hero; Contact time stays on detail lists. Release height stays **off** the public bowling HUD until calibrated and gated.
- Front stride is not a gated API field — do not show it on homepage or batting progress/hero rows.
- Logo / brand: simple vision/hardware mark (e.g. G + reticle) over illustrated batter / neon poster art (CricVision-adjacent) or consumer-app doodles (Matcha-adjacent).

## One-line positioning

**Gabriella:** bat speed and head stability per delivery, from a camera placed side-on, where the coach needs it. Pitch maps: coming, from a camera that can see the pitch. KAN-331 retired Ready / Can't measure as the headline. The exception stays in the batting and bowling footnotes only.
