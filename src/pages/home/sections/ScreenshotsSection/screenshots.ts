// All game screenshots in the assets folder — drop a new .webp in there and it
// shows up in the carousel automatically. Shuffled (Fisher–Yates) once per
// page load so the strip opens with a different mix every visit.
export const SCREENSHOTS = Object.values(
  import.meta.glob<string>("/src/assets/screenshots/*.webp", {
    eager: true,
    import: "default",
  }),
);

for (let i = SCREENSHOTS.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [SCREENSHOTS[i], SCREENSHOTS[j]] = [SCREENSHOTS[j], SCREENSHOTS[i]];
}
