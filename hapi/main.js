import "./lib/timeline-viewer.css";
import { render } from "./lib/timeline-viewer.js";

// DOM elements
const plotEl = document.getElementById("plot");
const startInput = document.getElementById("start-date");
const endInput = document.getElementById("end-date");
const applyBtn = document.getElementById("apply-btn");
const presetBtns = document.querySelectorAll(".preset-btn");

// Mount the viewer using URL layout loading
const viewer = render(plotEl, "layout.json", { height: "420px" });

// Sync date inputs when the user zooms/pans in the plot
viewer.on("timeDomainChange", ({ start, end }) => {
  startInput.value = start.toISOString().slice(0, 10);
  endInput.value = end.toISOString().slice(0, 10);
  clearActivePreset();
});

// Set initial date input values once the viewer is ready
viewer.on("ready", () => {
  const { start, end } = viewer.getTimeDomain();
  startInput.value = start.toISOString().slice(0, 10);
  endInput.value = end.toISOString().slice(0, 10);
});

// Apply button
applyBtn.addEventListener("click", () => {
  if (!startInput.value || !endInput.value) return;
  viewer.setTimeDomain(startInput.value + "T00:00:00Z", endInput.value + "T00:00:00Z");
  clearActivePreset();
});

// Enter key in date inputs triggers apply
startInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") applyBtn.click();
});
endInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") applyBtn.click();
});

// Preset buttons
presetBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const years = Number(btn.dataset.years);
    const now = Date.now();
    const start = new Date(now - years * 365.25 * 24 * 60 * 60 * 1000);
    const end = new Date(now);

    startInput.value = start.toISOString().slice(0, 10);
    endInput.value = end.toISOString().slice(0, 10);

    viewer.setTimeDomain(start, end);

    // Highlight active preset
    presetBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

function clearActivePreset() {
  presetBtns.forEach((b) => b.classList.remove("active"));
}
