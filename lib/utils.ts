// ─── Utility helpers shared across components ───────────────

/** Linear interpolation */
export const lerp = (a: number, b: number, t: number): number =>
  a + (b - a) * t;

/** Clamp a value between min and max */
export const clamp = (v: number, min: number, max: number): number =>
  Math.min(Math.max(v, min), max);

/** Map a value from one range to another */
export const map = (
  v: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
): number => outMin + ((v - inMin) / (inMax - inMin)) * (outMax - outMin);
