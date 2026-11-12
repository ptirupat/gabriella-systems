/**
 * Public status switches for Pitch map, Shot direction, and Body pose.
 *
 * Flip ONE value in GABRIELLA_METRIC_STATUS. On page load, every
 * [data-metric-switch] label on every page updates to match, the Home
 * hero count and list follow, and a flipped card is removed from the
 * Home "Available now" grid.
 *
 * Allowed values:
 *   "available"   → label "Available now"
 *   "developing"  → label "In development"
 *
 * Keys:
 *   pitch-map       Pitch map
 *   shot-direction  Shot direction
 *   body-pose       Body pose
 *
 * Ball tracking, front knee angle, and ball speed are always
 * "Available now" and are not in this object.
 *
 * HTML on this branch is authored with all three set to "Available now",
 * so the labels are correct even before JavaScript runs. After a flip,
 * keep this file as the source of truth; the labels update at runtime.
 */
window.GABRIELLA_METRIC_STATUS = {
  "pitch-map": "available",
  "shot-direction": "available",
  "body-pose": "available"
};
