<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

/**
 * Bubble configuration
 * @property {number} relX - Center X as fraction of viewport width (0–1)
 * @property {number} relY - Center Y as fraction of viewport height (0-1)
 * @property {number} radiusX - Horizontal radius in CSS px
 * @property {number} radiusY - Vertical radius in CSS px
 * @property {number} ampX - Horizontal travel amplitude as fraction of viewport width
 * @property {number} ampY - Vertical travel amplitude as fraction of viewport height
 * @property {number} period - Full-cycle period in seconds
 * @property {number} phase - Phase offset in radians
 * @property {"pink" | "orange"} color - Color theme
 */
interface BubbleConfig {
  relX: number;
  relY: number;
  radiusX: number;
  radiusY: number;
  ampX: number;
  ampY: number;
  period: number;
  phase: number;
  color: "pink" | "orange";
}

interface Bubble extends BubbleConfig {
  x: number;
  y: number;
}

const COLORS = {
  pink: {
    from: "rgba(235, 54, 120, 0.7)",
    mid: "rgba(235, 54, 120, 0.3)",
    to: "rgba(235, 54, 120, 0.0)",
  },
  orange: {
    from: "rgba(251, 119, 60, 0.7)",
    mid: "rgba(251, 119, 60, 0.3)",
    to: "rgba(251, 119, 60, 0.0)",
  },
} as const;

const BUBBLE_CONFIGS: BubbleConfig[] = [
  {
    relX: 0.2,
    relY: 0.2,
    radiusX: 440,
    radiusY: 380,
    ampX: 0.15,
    ampY: 0.15,
    period: 40,
    phase: 0,
    color: "orange",
  },
  {
    relX: 0.8,
    relY: 0.25,
    radiusX: 400,
    radiusY: 340,
    ampX: 0.15,
    ampY: 0.18,
    period: 38,
    phase: 2.6,
    color: "pink",
  },
  {
    relX: 0.5,
    relY: 0.5,
    radiusX: 420,
    radiusY: 360,
    ampX: 0.2,
    ampY: 0.2,
    period: 42,
    phase: 4.2,
    color: "pink",
  },
  {
    relX: 0.15,
    relY: 0.75,
    radiusX: 380,
    radiusY: 320,
    ampX: 0.18,
    ampY: 0.15,
    period: 36,
    phase: 1.3,
    color: "pink",
  },
  {
    relX: 0.75,
    relY: 0.7,
    radiusX: 360,
    radiusY: 300,
    ampX: 0.15,
    ampY: 0.18,
    period: 44,
    phase: 3.8,
    color: "orange",
  },
  {
    relX: 0.45,
    relY: 0.15,
    radiusX: 350,
    radiusY: 280,
    ampX: 0.2,
    ampY: 0.12,
    period: 46,
    phase: 5.5,
    color: "orange",
  },
];

const TARGET_FPS = 30;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
const TWO_PI = Math.PI * 2;

const canvasRef = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let animationId = 0;
let resizeObserver: ResizeObserver | null = null;
let bubbles: Bubble[] = [];
let dpr = 1;
let width = 0;
let height = 0;
let lastFrameTime = 0;
let startTime = 0;
let isReducedMotion = false;

/** Scale factor for bubble radii — 1.0 at desktop (1024px+), scales down proportionally */
const DESKTOP_REF = 1024;
function getScale(): number {
  const vMin = Math.min(width, height);
  return vMin >= DESKTOP_REF ? 1 : vMin / DESKTOP_REF;
}

function initBubbles(): void {
  const s = getScale();
  bubbles = BUBBLE_CONFIGS.map((cfg) => ({
    ...cfg,
    radiusX: cfg.radiusX * s * 1.15,
    radiusY: cfg.radiusY * s * 1.15,
    ampX: cfg.ampX * Math.max(s, 0.6),
    ampY: cfg.ampY * Math.max(s, 0.6),
    x: cfg.relX * width,
    y: cfg.relY * height,
  }));
}

function updatePositions(elapsed: number): void {
  for (const b of bubbles) {
    const t = elapsed / b.period;
    b.x = b.relX * width + b.ampX * width * Math.sin(t * TWO_PI + b.phase);
    b.y =
      b.relY * height +
      b.ampY * height * Math.cos(t * TWO_PI * 0.7 + b.phase * 1.3);
  }
}

function drawBubble(b: Bubble): void {
  if (!ctx) return;
  const palette = COLORS[b.color];
  const r = Math.max(b.radiusX, b.radiusY) * 1.3;

  const grad = ctx.createRadialGradient(
    b.x - r * 0.2,
    b.y - r * 0.2,
    0,
    b.x,
    b.y,
    r
  );
  grad.addColorStop(0, palette.from);
  grad.addColorStop(0.4, palette.mid);
  grad.addColorStop(0.75, palette.to);
  grad.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.ellipse(b.x, b.y, b.radiusX * 1.3, b.radiusY * 1.3, 0, 0, TWO_PI);
  ctx.fill();
}

function draw(): void {
  if (!ctx) return;
  ctx.clearRect(0, 0, width * dpr, height * dpr);
  ctx.save();
  ctx.scale(dpr, dpr);
  ctx.globalAlpha = 0.75;
  ctx.globalCompositeOperation = "source-over";
  for (const b of bubbles) drawBubble(b);
  ctx.restore();
}

function tick(timestamp: number): void {
  animationId = requestAnimationFrame(tick);
  const delta = timestamp - lastFrameTime;
  if (delta < FRAME_INTERVAL) return;
  lastFrameTime = timestamp - (delta % FRAME_INTERVAL);

  const elapsed = (timestamp - startTime) / 1000;
  updatePositions(elapsed);
  draw();
}

function handleResize(): void {
  const el = canvasRef.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = rect.width;
  height = rect.height;
  el.width = width * dpr;
  el.height = height * dpr;

  const s = getScale();
  el.style.filter = `blur(${Math.round(40 * s)}px)`;

  initBubbles();
  if (isReducedMotion) draw();
}

onMounted(() => {
  const el = canvasRef.value;
  if (!el) return;
  ctx = el.getContext("2d", { alpha: true });
  isReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  handleResize();

  if (!isReducedMotion) {
    startTime = performance.now();
    lastFrameTime = startTime;
    animationId = requestAnimationFrame(tick);
  } else {
    draw();
  }

  resizeObserver = new ResizeObserver(handleResize);
  resizeObserver.observe(el);
});

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId);
  resizeObserver?.disconnect();
});
</script>

<template>
  <canvas ref="canvasRef" class="bubble-background" aria-hidden="true" />
</template>

<style scoped>
.bubble-background {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  mix-blend-mode: screen;
  filter: blur(40px);
}
</style>
