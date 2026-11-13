/**
 * Public status switches for Ball tracking, Pitch map, Shot direction,
 * and Body pose.
 *
 * Flip ONE value in GABRIELLA_METRIC_STATUS. On page load, every
 * [data-metric-switch] label on every page updates to match, the Home
 * hero count and list follow, and a flipped card is removed from the
 * Home capability grid.
 *
 * Allowed values:
 *   "available"   → no badge (never shown)
 *   "developing"  → label "In development"
 *
 * Keys:
 *   ball-tracking   Ball tracking
 *   pitch-map       Pitch map
 *   shot-direction  Shot direction
 *   body-pose       Body pose
 *
 * Front knee angle and ball speed are always treated as available and are
 * not in this object.
 *
 * HTML on this branch is authored with all four set to available,
 * so the labels are correct even before JavaScript runs. After a flip,
 * keep this file as the source of truth; the labels update at runtime.
 */
window.GABRIELLA_METRIC_STATUS = {
  "ball-tracking": "available",
  "pitch-map": "available",
  "shot-direction": "available",
  "body-pose": "available"
};
