# Gabriella Systems — LinkedIn post pack (Sep 21 – Oct 2)

Square (1080×1080) H.264 MP4s + matching captions for the Gabriella Systems company page.

## Anonymization

**Method: pure abstract / pose-skeleton only.**  
No raw footage, no photos, no real athlete identity. Videos 01 and 04 use stick-figure pose overlays (hollow head circles + bone sticks + motion trails) on a dark branded background. Videos 02, 03, 05, 06 are title/metric HUD cards only.

Brand: dark navy background, magenta / orange / cyan accents, Outfit + Inter sans type, “Gabriella Systems” wordmark.

## Files

| File | Duration target | Content |
|------|-----------------|---------|
| `01-mon-0921-batting-proof.mp4` | ~10s | Bat 10.6 km/h + Head 45.9 cm hero cards; pose-skeleton batter |
| `02-wed-0923-metric-question.mp4` | ~7s | “What first metric…?” Bat / Head / Run-up options |
| `03-fri-0925-fail-loud.mp4` | ~7s | Fake `0.0` crossed out vs “Can't measure” |
| `04-mon-0928-bowling-proof.mp4` | ~10s | Run-up 20.4 km/h hero; pose-skeleton bowler |
| `05-wed-0930-academy-question.mp4` | ~7s | Finding deliveries vs trusting numbers |
| `06-fri-1002-view-aware.mp4` | ~7s | Front-on vs side-on; metrics that fit the view |

Each MP4 has a matching `.txt` caption ready to paste.

## Technical

- 1080×1080, H.264 yuv420p, `+faststart`, CRF 20
- Built with Python Pillow frames → `/usr/bin/ffmpeg`
- Product lock: cricket-first; batting heroes Bat+Head; bowling hero Run-up only

## Posting order

1. Mon Sep 21 — batting proof  
2. Wed Sep 23 — metric question  
3. Fri Sep 25 — fail loud  
4. Mon Sep 28 — bowling proof  
5. Wed Sep 30 — academy question  
6. Fri Oct 2 — view-aware  

CTA on all: gabriellasystems.com
