# Competitor Feature Comparison & Traction Recommendations

**Product:** Gabriella Systems — computer vision cricket performance from video  
**Audience:** Product / Marketing review  
**Date:** 29 September 2026 (PT)  
**Status:** Research synthesis for roadmap prioritization — not a live-site claims doc  

**Primary Gabriella sources (do not fork heroes here):**  
- Modal [`PRODUCT.md`](https://github.com/Gabriella-Systems/modal/blob/main/docs/PRODUCT.md) (product contract)  
- Modal [`CV_FEATURES.md`](https://github.com/Gabriella-Systems/modal/blob/main/docs/CV_FEATURES.md), [`BACKLOG.md`](https://github.com/Gabriella-Systems/modal/blob/main/docs/BACKLOG.md)  
- Marketing site [`competitive-positioning.md`](https://github.com/ptirupat/gabriella-systems/blob/main/docs/competitive-positioning.md), [`competitors.md`](https://github.com/ptirupat/gabriella-systems/blob/main/docs/competitors.md) (refreshed in [PR #32](https://github.com/ptirupat/gabriella-systems/pull/32), merged 2026-09-29 PT)

---

## 1. Executive summary

Gabriella’s wedge is **honest, gated session metrics from ordinary nets video** — fail-loud **Can't measure** per field, view-aware batting/bowling, locked heroes (**Bat speed at impact** + **Head stability**; bowling **Run-up** only). Rivals win academy deals today by shipping **always-on numbers**, **auto delivery-crop**, **coach annotation / PDF / reels**, and (for some) **white-label academy ops**.

For traction with cricket academies and coaches in **US + India**, the highest ROI path is:

1. Ship **Ludimos-class temporal delivery crop** (already Product must-have KAN-138/139) — without claiming it early.  
2. Make **same-view, gated-only session compare** the retention loop coaches sell to parents.  
3. Add **coach tip-crop storytelling** (annotate / share short trusted clips + gated PDF) — align with the “tip crops not whole long tapes” storytelling lock.  
4. Ship a **pre-analyze capture quality / placement check** so Can't measure becomes a coachable setup fix, not a black box.  
5. Add a **multi-player session queue** so academies can process a net lane without babysitting uploads.

**Do not** chase technique % / Good-Bad badges, invented release height, white-label AMS as the wedge, or pitch maps as must-have parity. Those either break honesty locks or dilute the CV-from-video thesis.

---

## 2. Honesty locks (non-negotiable for any recommendation)

| Lock | Implication for recommendations |
| --- | --- |
| Batting heroes = **Bat speed at impact** + **Head stability** only | Do not put Contact, Ball, or technique scores on heroes |
| Bowling hero = **Run-up** only; **release height omitted** until calibrated | No invent metres (no 1.09 m / 2.1 m); omit until gated |
| Fail-loud **Can't measure** per metric | Never null→0; never invent HUD numbers |
| No **technique % / Good-Bad** without a published formula | Rival “technique scores” are **out** unless Product publishes a formula and gates it |
| Contact / Impact = time in clip, **not** early vs late | Timing language needs bounce/release/arrival (backlog) |
| Tip crops for storytelling, not whole long tapes as the analysis story | Prefer short trusted delivery windows + coach tips |
| Session auto-crop = must-have **once shipped**; do not claim early | Marketing must wait for KAN-138/139 |
| Don’t race white-label ops | CricVision/Ludimos AMS is adjacent GTM, not Gabriella’s wedge |

Sample Showcase numbers used on the marketing site (illustrative of locked fields, **not** competitive claims of superiority): Bat ~10.6 km/h, Head ~45.9 cm, Run-up ~20.4 km/h. Do not invent new Gabriella metrics for this report.

---

## 3. Competitor profiles

### 3.1 Direct / near-direct — phone or nets CV for coaches & academies

#### Ludimos — [ludimos.com](https://www.ludimos.com/)

| | |
| --- | --- |
| **Product** | Phone-first AI cricket coaching + athlete/academy platform (consumer Skills/Showcase + Pavilion/360° AMS) |
| **Key features** | Auto action-clip from long sessions; bowling speed/line/length; pitchmap/beehive; batting footwork/shot/connection; pose/kinogram; coach annotate; Skills challenges (“to the centimetre”); leaderboards; academy scheduling/comms |
| **Pricing (public signals)** | Free ~300 clips/mo; Starter **$149/yr** (15 members · 5,000 AI clips/yr); App Store IAPs (Clipper Core–Max). Academy/Pavilion pricing often “book a call” — treat as uncertain |
| **ICP** | Players, private coaches, clubs/academies (India + global; elite logo marketing) |
| **Strengths vs Gabriella** | Distribution, freemium virality, session auto-crop maturity, AMS breadth, coach workflow |
| **Weaknesses vs Gabriella** | Always-on “to the cm” marketing without public accuracy study; calibration friction (stump/tripod for ball modes); weak fail-loud story; biomechanics = 2D overlay narrative |
| **Threat** | **High** for session workflow parity and academy mindshare |

#### CricVision — [cricvision.ai](https://cricvision.ai/) (tracker refreshed PR #32)

| | |
| --- | --- |
| **Product** | Academy OS + AI video coaching (white-label app/website + CV on practice clips). Built by BOSC Tech Labs ([case study](https://bosctechlabs.com/case-study/data-led-cricket-coaching-system-with-ai-video-intelligence/)) |
| **Key features** | Ball-by-ball segmentation; stance/backlift/bat path/ball path; skeleton; bat & ball speed; pitch maps; impact frame; voice/text notes; one-tap PDFs/reels; parent/coach chat; attendance/payments; progress dashboards; claims of technique scores / coaching advice |
| **Pricing (public)** | Academy Basic **$199/mo** (3 coaches / 30 players); Pro **$399/mo** (5 coaches / 75 players). App Store also lists player/coach IAPs |
| **ICP** | Cricket academies (India-first builders; academy sales globally), coaches, parents |
| **Strengths vs Gabriella** | Packaged ops + visible AI; clear seat pricing; parent engagement; auto-segmentation; report/reel packaging |
| **Weaknesses vs Gabriella** | Technique scores without public fail-loud / gated-metrics story; “no calibration” is a vendor claim, not an accuracy study |
| **Threat** | **Medium** academy GTM; **Low** on trust-metrics wedge unless they lead with fail-loud nets metrics |

#### Matcha — [matchasports.ai](https://matchasports.ai/)

| | |
| --- | --- |
| **Product** | Phone CV nets analysis for players & coaches |
| **Key features** | Tripod behind stumps; auto-clip (~4s); ball speed, spin/swing; pitch map/beehive; batting KPIs; biomechanics (arm angle, posture); PDF reports; coach multi-trainee tagging; community/profile |
| **Pricing (public)** | Free S$0 (100 deliveries); Individual **S$10/mo**; Coach **S$90/mo** (≤10 trainees); Enterprise **S$600+/mo** |
| **ICP** | Self-trainers, small coaches, clubs/academies (Singapore-priced; regional) |
| **Strengths vs Gabriella** | Transparent delivery-based pricing; strong auto-clip + KPI catalogue; coach tier |
| **Weaknesses vs Gabriella** | Always-on metrics narrative; no public fail-loud; phone RGB limits |
| **Threat** | **Medium** for coach freemium / small-academy deals |

#### Fulltrack AI — [fulltrack.ai](https://www.fulltrack.ai/)

| | |
| --- | --- |
| **Product** | Phone/iPad ball tracking & analytics for coaching + matches |
| **Key features** | Auto-clipped ball-by-ball; speed, swing, spin; pitch maps; DRS-style LBW for matches; cloud storage; session share; coaching performance data |
| **Pricing** | Coach+ / Enterprise / Match licenses (not fully public list) |
| **ICP** | Coaches, clubs, match organizers (UK/elite testimonials; Joe Root quote on site) |
| **Strengths vs Gabriella** | Explicit stump-calibration honesty (“bad calibrations lead to bad tracking”); match + coaching dual use; auto-clip |
| **Weaknesses vs Gabriella** | Setup friction (2 stump sets, tall tripod); still phone CV; less deep pose/bat-at-impact hero story |
| **Threat** | **Medium** for coaching; adjacent on match DRS |

#### Advanced Impactor — [advancedimpactor.com](https://www.advancedimpactor.com/)

| | |
| --- | --- |
| **Product** | AI/CV cricket coaching analysis (named in Gabriella competitive docs) |
| **Key features** | Public site is thin / JS-heavy; positioning is AI coaching from footage (biomechanics / shot feedback language in market mentions) |
| **Pricing** | Not publicly clear |
| **ICP** | Coaches / training (assumed) |
| **Notes** | Treat as watchlist peer; do not invent feature depth from marketing silence |

---

### 3.2 Bat sensors (adjacent modality — not CV-from-video)

#### str8bat — [str8bat.com](https://www.str8bat.com/products/str8bat-cricket-bat-sensor)

| | |
| --- | --- |
| **Product** | Bluetooth bat sensor / smart sticker + app (Shark Tank India) |
| **Key features** | Bat speed, swing path, sweet spot, impact timing, 3D shot replay; session compare; leaderboards; academy partner program |
| **Pricing (public India)** | Sensor ~**₹5,199–6,599**; app membership historically ~₹99/mo or yearly with device (press); academy bulk/partner pricing |
| **ICP** | Players, coaches, academies (India + AU/UK/US/East Africa expansion claims) |
| **vs Gabriella** | Strong real-time bat metrics **without camera** — complementary or substitute for bat-speed heroes, but **no ball/pose CV**, no fail-loud video trust story. Do not pivot to sensor-first |

#### StanceBeam Striker — [stancebeam.com](https://www.stancebeam.com/cricket-analytics-for-coaches)

| | |
| --- | --- |
| **Product** | Bat sensor + optional smart video + coach PMS |
| **Key features** | 11 bat-swing metrics incl. **bat speed at impact**, max bat speed, angles, power, time to impact; coach dashboard; multi-player; video feedback |
| **Pricing** | Tailored coach/team packages; consumer via site/Amazon |
| **ICP** | Coaches, academies, elite programs (UK/India references) |
| **vs Gabriella** | Direct overlap on **bat speed at impact** via hardware. Gabriella differentiator remains **video + head stability + bowling run-up + ball-gated fields** without attaching gear to every bat |

#### BatSense / SmartCricket — [smartcricket.com](https://smartcricket.com/)

| | |
| --- | --- |
| **Product** | Bat sensor + SmartCricket app |
| **Notes** | Adjacent bat-wearable class; track for academy hardware deals in India |

---

### 3.3 Incumbent training / match analytics systems

#### PitchVision — e.g. [PV ONE](https://pitchvision.co.za/pv-one), [PV Video](https://pitchvision.co.za/pv-video)

| | |
| --- | --- |
| **Product** | Portable hardware + sensors + cameras + analytics kits; player membership model |
| **Key features** | Pace, line, length, deviation, bounce, pitch maps, 3D trajectory, auto video clip on trigger; AMS/app |
| **Pricing signals** | Historical kits ~₹3.5–6.5L (press); PV/Match camera packs historically £950–£1950; often quote/membership today |
| **ICP** | Academies, schools, associations (CSA, MCC, ICC academy heritage) |
| **vs Gabriella** | Capex + install friction; strong delivery/pitch data. Gabriella wins on **phone/ordinary video** and fail-loud trust if crop + compare ship |

#### NV Play Vision AI — [nvplay.com/products/visionai](https://www.nvplay.com/products/visionai)

| | |
| --- | --- |
| **Product** | Match/analysis platform + Vision AI ball tracking (two end cameras) |
| **Key features** | Ball trajectories, pitch maps, release/arrival, feet movement, auto coding, highlights/streaming integration; Setup Assistant |
| **Pricing** | Platform plans ([pricing](https://www.nvplay.com/pricing)); Vision AI add-on |
| **ICP** | High-performance analysts, associations, media/streamers, clubs |
| **vs Gabriella** | Match-day / analyst workflow, not nets upload fail-loud session metrics. Adjacent; watch if they push academy-net SKUs |

#### 3rd-Eye.TV — [3rd-eye.tv](https://www.3rd-eye.tv/) (PR #32)

| | |
| --- | --- |
| **Product** | Certified DRS / match-day officiating + Sports DeepMind association suite |
| **Key features** | Multi-cam high-fps DRS, 3D ball track, SoundSense edge, no-ball monitoring; SDM: tournament/player mgmt, live scoring, video analysis, streaming, umpire assessment |
| **Pricing** | No public academy SaaS; analyst courses ₹9,999 / ₹35,000 |
| **ICP** | Boards, tournaments, umpires (India) |
| **Threat** | **Low** direct; watchlist if SDM expands into nets phone analysis |

#### Hawk-Eye

| | |
| --- | --- |
| **Class** | Elite multi-camera tracking (aspirational reference) |
| **vs Gabriella** | Not academy-net price/form factor |

---

### 3.4 Youth pathway / brand (not metric peer)

#### Kabuni — [kabuni.com](https://www.kabuni.com/)

| | |
| --- | --- |
| **Product** | Youth cricket development + AI coaching brand: PlayOS + Super Coaches + schools + Kabuni Premier League |
| **Key features** | Real-time cues/feedback; celebrity Super Coaches (Ganguly, AB de Villiers, Watson, Iyer, etc.); school partnerships; league pathway |
| **ICP** | Schools, PE teachers, parents/juniors (India) |
| **vs Gabriella** | Access/cues/celebrity pathway — **not** a gated session-metrics peer. Do not copy junior-league GTM as the wedge |

---

### 3.5 Broadcast / production adjacent

#### SportVot

| | |
| --- | --- |
| **Product** | Capture, AI production, live streaming, distribution for grassroots/association sport (incl. cricket); ball-tracking / DRS partnership language in market; not a nets technique-metric SaaS peer |
| **vs Gabriella** | Complementary distribution partner (see [sportvot-collaboration-plan.md](./sportvot-collaboration-plan.md)). Thin overlap on “performance analytics” language; collaboration thesis = **their video → our technique metrics** |

#### Rapsodo

| | |
| --- | --- |
| **Product** | Baseball/softball/golf launch monitors (PRO / MLM lines). Historical cricket interest / patent / hiring signals exist in older market chatter; **no confirmed public cricket SKU as of this research (2026)** |
| **vs Gabriella** | Watchlist only if a cricket launch monitor ships. Hardware radar/camera is a different thesis |

---

## 4. Feature comparison matrix

Legend: **Y** = has / leads with · **P** = partial / claimed / limited · **N** = no / not public · **—** = N/A or out of class  
Gabriella column reflects **shipping + locked Product contract**, not aspirational marketing.

| Feature / capability | Gabriella | Ludimos | CricVision | Matcha | Fulltrack | str8bat / StanceBeam | PitchVision | NV Play / 3rd-Eye | Notes / honesty |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CV from ordinary phone/nets video | **Y** | Y | Y | Y | Y | N (sensor±video) | P (kit cams) | P (match cams) | Core thesis |
| Fail-loud / Can't measure per metric | **Y** | N | N | N | P (cal warning) | N | P | P (audit/confidence) | Gabriella wedge |
| Bat speed **at impact** (gated) | **Y** | P | P | P | N/P | **Y** (sensor) | N | N | Sensors strongest here |
| Head stability (gated cm) | **Y** | P (pose) | P (head position claims) | P | N | N | N | N | Gabriella hero |
| Bowling run-up speed | **Y** | P | P | Y | P | N | P | N | Pose-derived; Gabriella hero |
| Ball speed (when trusted) | **P** (gated) | Y | Y | Y | Y | N | Y | Y | Gabriella: fail-loud when ball fails |
| Release height | **N** (omitted until calibrated) | P | ? | ? | ? | N | P | Y (NV) | **Do not invent** |
| Technique % / Good-Bad | **N** (forbidden) | P (skills zone) | Y (claimed) | P | N | P (shot score) | N | N | **Honesty break if copied blindly** |
| Auto delivery crop from long tape | **N** (must-have backlog KAN-138/139) | **Y** | **Y** | **Y** | **Y** | P (smart video) | Y (trigger) | Y | #1 parity gap |
| Pitch maps / beehives | **N** (optional later) | Y | Y | Y | Y | P (claimed) | Y | Y | Do not chase as must-have |
| Same-view session compare (gated) | **P** (thesis / P1) | Y (progress) | Y (progress) | Y | Y | Y | Y | Y | Need **gated-only** compare |
| Coach annotate on clip | **N/P** | Y | Y | Y | P | Y (video feedback) | Y | Y | Tip-crop storytelling |
| Shareable PDF / parent report | **N** | Y | Y | Y | P | Y | Y | Y | High academy traction |
| Multi-player / academy queue | **N** (P1) | Y | Y | Y (coach/ent) | Y | Y | Y | Y | India academy throughput |
| White-label AMS (payments/attendance) | **N** | Y | **Y** | N | N | P | P | P (assoc) | Don’t race as wedge |
| Capture quality / placement check | **P** (P1) | P (cal) | Claims “no cal” | Auto-cal claim | Explicit stump cal | N | Setup | Setup Assistant | Lean into honest setup UX |
| Match DRS / broadcast track | N | N | N | N | P | N | N | **Y** | Out of scope |
| Hardware bat sensor | N | N | N | N | N | **Y** | N | N | Adjacent |
| Portable hardware capture (roadmap) | Roadmap | N | N | N | N | N | Y | Cameras | Don’t sell as shipping software |

---

## 5. Gabriella: has / lacks / partial (product view)

### Has (live / locked)

- View-aware batting & bowling analysis from video  
- Fail-loud per-metric trust (pose-derived Run-up can survive ball fail)  
- Batting: **Bat speed at impact**, **Head stability** (+ Contact time & ball Δ as detail)  
- Bowling: **Run-up** (+ arm angular speed, front knee as detail when pose ok)  
- Quality stages / gated ball-dependent fields  
- Coach-facing metric tips (ⓘ) that explain what a number means without grading technique  

### Partial / in flight

- Ball speed only when gated  
- Session/progress storytelling (must be same-view + gated to stay honest)  
- Software placement / quality check (P1)  
- Depth / multi-model stack as **quality** story (not “more metrics”)  
- Portable calibrated capture (roadmap — do not claim shipping)  

### Lacks (gaps vs rivals that matter for academy traction)

1. **Temporal delivery crop** from long nets/match video (Ludimos/CricVision/Matcha/Fulltrack parity) — Product must-have  
2. **Coach tip-crop annotate + share** (draw/voice/text on short trusted clips)  
3. **Gated PDF / parent-facing session report**  
4. **Multi-player session queue** / academy throughput  
5. Pitch maps / beehives (optional; not parity-critical for wedge)  
6. White-label ops (explicitly **not** the wedge)  
7. Early/late timing (blocked until bounce/release/arrival events)  
8. Calibrated release height (omit until ready)  

---

## 6. Recommended features for US + India academy/coach traction

Prioritization: **Impact** (academy win/retention) × **Effort** × **Alignment** with CV-from-video + honesty locks.

### Tier A — Ship next (high impact, on-thesis)

| # | Feature | Impact | Effort | Alignment | Honesty flags |
| --- | --- | --- | --- | --- | --- |
| **1** | **Temporal delivery crop** from long session video (detect windows → analyze each → fail-loud drop untrusted windows) | Very high — table stakes for Ludimos/CricVision/Matcha conversations; unlocks academy throughput | High (ML windows + Demo UX; KAN-138/139) | Core CV thesis; already Product must-have | **Do not market until shipped.** Tip-crop outputs, not “we analyzed your 90-min tape as one blob.” |
| **2** | **Same-view gated session compare** (week-to-week / session-to-session using only trusted fields) | Very high — what coaches sell to parents (“is my kid improving?”) | Medium | Strengthens trust wedge vs always-on progress | Compare only gated fields; never invent trend from Can't measure; no automatic “progress %” |
| **3** | **Coach tip-crop storytelling** — annotate trusted delivery clips (draw/voice/text) + share short clips, not whole tapes | High — coach daily workflow parity | Medium | Matches “tip crops not whole long tapes” storytelling lock | Annotations are coach opinion; do not auto-attach technique grades |
| **4** | **Pre-analyze capture quality / placement check** (view hint, framing, lighting, stump/player scale readiness) | High — turns Can't measure into a fixable setup moment (Fulltrack-style honesty, Gabriella-branded) | Medium | Reinforces fail-loud as product feature | Surface reasons; never “force” a number after a soft warning |
| **5** | **Multi-player session queue** (lane → players → per-delivery Results) | High for India academy density; useful for US group clinics | Medium–High | Needs crop (#1) first or in parallel | Per-player attribution must not invent IDs; fail-loud per delivery |

### Tier B — High traction packaging (medium effort, low honesty risk)

| # | Feature | Impact | Effort | Notes |
| --- | --- | --- | --- | --- |
| **6** | **Gated PDF / parent report** (heroes + detail + Can't measure slots + coach notes) | High for academy sales vs CricVision one-tap PDF | Low–Medium | Only print numbers that are trusted; show Can't measure explicitly |
| **7** | **Shareable reel / clip export** of tip crops with HUD overlays | Medium–High marketing for academies | Medium | Overlay must match locked fields; no decorative fake HUD |
| **8** | **Software “session readiness” checklist** in Demo/admin (camera_view required, view consistency reminder) | Medium | Low | Supports view-aware compare |

### Tier C — Later / optional (watch effort and locks)

| # | Feature | Impact | Effort | Honesty / thesis flags |
| --- | --- | --- | --- | --- |
| **9** | Pitch maps / beehives | Medium (rival checklist) | High | Optional later per competitive-positioning; only when gated; don’t make must-have parity |
| **10** | Front-foot plant vs impact (pose) | Medium coach value | Medium | Already P1 after trust; keep as pose-gated, not technique grade |
| **11** | Early vs late timing vs bounce/arrival/release | High if true | High | **Blocked** until new gated events; never misuse Contact ms |
| **12** | Calibrated **release height** | Medium bowling credibility | High | Omit until calibration supports; never invent |
| **13** | Portable hardware capture SKU | High long-term moat | Very high | Roadmap; don’t sell live upload software as calibrated hardware |
| **14** | White-label AMS / payments / attendance | High GTM for some academies | Very high | **Don’t race CricVision** — partner or ignore for v1 |
| **15** | Bat-sensor integration (str8bat/StanceBeam) | Medium as upsell | Medium | Optional future fusion; keep CV-from-video primary |

### Explicitly do **not** incorporate (honesty / wedge breaks)

| Anti-feature | Why |
| --- | --- |
| Technique % / Good-Bad / “shot quality” badges without published formula | Forbidden in PRODUCT / BACKLOG / competitive copy gate |
| Always-on progress bars from ungated uploads | Undermines fail-loud wedge |
| Invented release height or “Measured when calibration supports it” as a second bowling hero | Credibility + lock violation |
| Contact time as early/late / “timing the ball” | Forbidden until bounce/release/arrival |
| Claiming session auto-crop before KAN-138/139 ships | Copy-gate violation |
| Match DRS / association platform as core pitch | Wrong buyer vs 3rd-Eye / Hawk-Eye / SportVot production |
| “No calibration needed” as a claim that excuses untrusted numbers | Rival trap |

---

## 7. ICP-focused GTM notes (US + India)

**India academies**  
- Dense multi-player lanes → prioritize **crop + queue + PDF/parent report**.  
- Expect comparison to CricVision ($199/$399) and Ludimos freemium — lead with **trust**: fewer, honest numbers beat always-on theatre.  
- Sensor incumbents (str8bat, StanceBeam) already own bat-speed gadgets; sell **video + head + bowling + ball-gated** without kit on every bat.

**US academies / private coaches**  
- Smaller rosters, higher willingness to pay for **coach time saved** → crop, tip-crop annotate, same-view compare.  
- Matcha/Fulltrack-style phone setups are familiar; Gabriella differentiates on **fail-loud** and locked biomechanics heroes.  
- Avoid Kabuni-style youth-league/celebrity GTM as the primary story.

**Pricing posture (directional, not a list price)**  
- CricVision academy packs and Matcha coach tiers set **buyer expectations** for SaaS seats.  
- Gabriella should price for **trusted analysis capacity** (sessions/deliveries with quality gates), not for unlimited always-on clips. Do not invent Gabriella list prices here.

---

## 8. Suggested sequencing (Product)

```
P0 trust (largely done) 
  → A1 Delivery crop (KAN-138/139)
  → A4 Capture quality check (unblocks fewer Can't measure)
  → A2 Same-view gated compare + A5 Multi-player queue
  → A3 Tip-crop annotate + B6 Gated PDF / B7 clip export
  → C optional (pitch maps, footwork, timing events, hardware)
```

Marketing may talk **roadmap** carefully; live site claims stay behind shipped gates (competitive-positioning copy gate).

---

## 9. Sources & URLs

### Gabriella (internal / GitHub)

- https://github.com/Gabriella-Systems/modal/blob/main/docs/PRODUCT.md  
- https://github.com/Gabriella-Systems/modal/blob/main/docs/CV_FEATURES.md  
- https://github.com/Gabriella-Systems/modal/blob/main/docs/BACKLOG.md  
- https://github.com/ptirupat/gabriella-systems/blob/main/docs/competitive-positioning.md  
- https://github.com/ptirupat/gabriella-systems/blob/main/docs/competitors.md  
- https://github.com/ptirupat/gabriella-systems/pull/32  
- https://gabriellasystems.com/  

### Competitors (public)

- Ludimos: https://www.ludimos.com/ · https://apps.apple.com/us/app/ludimos-ai-cricket-analytics/id1502154672 · https://www.ludimos.com/cricket-coaching-app-comparison  
- CricVision: https://cricvision.ai/ · https://bosctechlabs.com/case-study/data-led-cricket-coaching-system-with-ai-video-intelligence/ · https://apps.apple.com/us/app/cricvision-pro-coach-tools/id6744972352  
- Matcha: https://matchasports.ai/  
- Fulltrack AI: https://www.fulltrack.ai/  
- Advanced Impactor: https://www.advancedimpactor.com/  
- str8bat: https://www.str8bat.com/products/str8bat-cricket-bat-sensor · https://www.str8bat.com/pages/partner · https://indianexpress.com/article/technology/artificial-intelligence/what-you-cannot-measure-you-cannot-improve-str8bat-co-founder-on-bringing-data-science-to-cricket-10188746/  
- StanceBeam: https://www.stancebeam.com/cricket-analytics-for-coaches · https://www.stancebeam.com/striker-cricket-bat-sensor  
- BatSense/SmartCricket: https://smartcricket.com/  
- PitchVision: https://pitchvision.co.za/pv-one · https://pitchvision.co.za/pv-video · https://www.digit.in/features/general/sports-tech-meet-pitchvision-your-techie-cricket-coach-29540.html  
- NV Play Vision AI: https://www.nvplay.com/products/visionai · https://www.nvplay.com/pricing  
- 3rd-Eye.TV: https://www.3rd-eye.tv/ · https://www.3rd-eye.tv/products · https://www.3rd-eye.tv/our-story · https://www.3rd-eye.tv/blog  
- Kabuni: https://www.kabuni.com/ · https://economictimes.indiatimes.com/news/sports/kabuni-launches-ai-cricket-coaching-platform-taps-ganguly-ab-de-villiers-as-super-coaches/articleshow/131567368.cms  
- Rapsodo (baseball/golf today): https://rapsodo.com/  
- SportVot (adjacent partner context): internal plan [sportvot-collaboration-plan.md](./sportvot-collaboration-plan.md)

### Research caveats

- Pricing and feature depth marked uncertain where public pages disagree or require sales calls.  
- Vendor accuracy / scale claims (e.g. Ludimos “to the centimetre,” 3rd-Eye match counts, CricVision “no calibration”) are recorded as **vendor claims**, not verified studies.  
- No Gabriella metrics, accuracy %, or list prices were invented for this document.

---

*End of report — ready for Product/Marketing review.*
