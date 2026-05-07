"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const photos = [
  { src: "/assets/gallery/group-kayak-tour.jpeg",        label: "Group Kayak Tour" },
  { src: "/assets/gallery/anhinga-wings.jpeg",            label: "Anhinga Spreading Wings" },
  { src: "/assets/gallery/great-blue-heron-wading.jpeg",  label: "Great Blue Heron Wading" },
  { src: "/assets/gallery/alligator-bank.jpeg",           label: "Alligator Sunning" },
  { src: "/assets/gallery/alligator-waterside.jpeg",      label: "Alligator at the Water's Edge" },
  { src: "/assets/gallery/clear-kayak-reflection.jpeg",   label: "Clear Kayak on the Springs" },
  { src: "/assets/gallery/limpkin-wading.jpeg",           label: "Limpkin Wading" },
  { src: "/assets/gallery/great-blue-heron-bank.jpeg",    label: "Great Blue Heron" },
  { src: "/assets/gallery/anhinga-standing.jpeg",         label: "Anhinga Sunning" },
  { src: "/assets/gallery/anhinga-reeds.jpeg",            label: "Tri-Colored Heron in the Reeds" },
  { src: "/assets/gallery/night-heron-adult.jpeg",        label: "Black-crowned Night Heron" },
  { src: "/assets/gallery/night-heron-juvenile.jpeg",     label: "Juvenile Night Heron" },
  { src: "/assets/gallery/little-blue-heron.jpeg",        label: "Little Blue Heron" },
  { src: "/assets/gallery/little-blue-heron-swamp.jpeg",  label: "Little Blue Heron in the Marsh" },
  { src: "/assets/gallery/green-heron-roots.jpeg",        label: "Green Heron on the Roots" },
  { src: "/assets/gallery/turtles-basking.jpeg",          label: "Turtles Basking" },
  { src: "/assets/gallery/turtles-log.jpeg",              label: "Turtles on a Log" },
  { src: "/assets/gallery/spider-lily.jpeg",              label: "Spider Lily in Bloom" },
  { src: "/assets/gallery/wild-mushrooms.jpeg",           label: "Wild Mushrooms" },
];

export default function GalleryClient() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [playing, setPlaying]       = useState(true);
  const [lightbox, setLightbox]     = useState(false);
  const [fade, setFade]             = useState(true);
  const intervalRef                 = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Slide navigation ───────────────────────────────────────
  const goTo = useCallback((index: number) => {
    setFade(false);
    setTimeout(() => { setSlideIndex(index); setFade(true); }, 250);
  }, []);

  const next = useCallback(() => goTo((slideIndex + 1) % photos.length), [slideIndex, goTo]);
  const prev = useCallback(() => goTo((slideIndex - 1 + photos.length) % photos.length), [slideIndex, goTo]);

  // ── Auto-advance ───────────────────────────────────────────
  useEffect(() => {
    if (!playing || lightbox) return;
    intervalRef.current = setInterval(next, 4500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [playing, next, lightbox]);

  // ── Lightbox keyboard ──────────────────────────────────────
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")      setLightbox(false);
      if (e.key === "ArrowRight")  setSlideIndex((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft")   setSlideIndex((i) => (i - 1 + photos.length) % photos.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightbox]);

  const current = photos[slideIndex];

  return (
    <>
      {/* ── Slideshow ─────────────────────────────────────────── */}
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ height: "520px", border: "1px solid rgba(42,181,160,0.2)" }}
      >
        {/* Clickable image */}
        <button
          className="absolute inset-0 w-full h-full cursor-zoom-in"
          onClick={() => setLightbox(true)}
          aria-label="Click to view full size"
        >
          {current && (
            <Image
              key={current.src}
              src={current.src}
              alt={current.label}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
              style={{ opacity: fade ? 1 : 0, transition: "opacity 0.4s ease" }}
            />
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(5,15,12,0.75) 0%, rgba(5,15,12,0.05) 50%)" }} />

          {/* Expand hint */}
          <div
            className="absolute top-4 right-16 flex items-center gap-1.5 px-3 py-1.5 rounded-full opacity-70 hover:opacity-100 transition-opacity"
            style={{ background: "rgba(10,46,40,0.8)", border: "1px solid rgba(42,181,160,0.35)" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-crystal)" strokeWidth="2" strokeLinecap="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
            <span style={{ fontFamily: "var(--font-sub)", fontSize: "0.65rem", color: "var(--color-crystal)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              View Full
            </span>
          </div>
        </button>

        {/* Label + counter + play/pause */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-end justify-between pointer-events-none">
          <div>
            {current && (
              <p style={{ fontFamily: "var(--font-heading)", color: "var(--color-cream)", fontSize: "1.1rem", letterSpacing: "0.04em" }}>
                {current.label}
              </p>
            )}
            <p style={{ fontFamily: "var(--font-sub)", color: "var(--color-stone)", fontSize: "0.75rem", marginTop: "2px" }}>
              {slideIndex + 1} / {photos.length}
            </p>
          </div>
          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            className="w-10 h-10 rounded-full flex items-center justify-center pointer-events-auto"
            style={{ background: "rgba(10,46,40,0.8)", border: "1px solid rgba(42,181,160,0.35)" }}
          >
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-crystal)">
                <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-crystal)">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            )}
          </button>
        </div>

        {/* Prev / Next */}
        {(["prev", "next"] as const).map((dir) => (
          <button
            key={dir}
            onClick={dir === "prev" ? prev : next}
            aria-label={dir === "prev" ? "Previous photo" : "Next photo"}
            className="absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{
              [dir === "prev" ? "left" : "right"]: "1rem",
              background: "rgba(10,46,40,0.8)",
              border: "1px solid rgba(42,181,160,0.35)",
              zIndex: 10,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-crystal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {dir === "prev" ? <path d="M15 18l-6-6 6-6"/> : <path d="M9 18l6-6-6-6"/>}
            </svg>
          </button>
        ))}

        {/* Dot indicators */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width:  i === slideIndex ? "20px" : "6px",
                height: "6px",
                background: i === slideIndex ? "var(--color-gold)" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Lightbox ──────────────────────────────────────────── */}
      {lightbox && current && (
        <div
          className="fixed inset-0 z-50"
          style={{ background: "rgba(2,8,7,0.97)", backdropFilter: "blur(12px)" }}
        >
          {/* X Close — sits above everything */}
          <button
            onClick={() => setLightbox(false)}
            aria-label="Close"
            className="absolute flex items-center gap-2 px-4 py-2 rounded-full hover:scale-105 transition-transform"
            style={{ top: "1.25rem", right: "1.25rem", zIndex: 60, background: "rgba(160,30,30,0.95)", border: "2px solid rgba(255,120,120,0.7)", boxShadow: "0 4px 24px rgba(0,0,0,0.7)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
            <span style={{ fontFamily: "var(--font-sub)", fontSize: "0.8rem", color: "#ffffff", fontWeight: 700, letterSpacing: "0.08em" }}>CLOSE</span>
          </button>

          {/* Image — centered */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-16">
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl"
              style={{ maxWidth: "min(90vw, 1200px)", maxHeight: "85vh", width: "100%", border: "1px solid rgba(42,181,160,0.3)" }}
            >
              <Image
                src={current.src}
                alt={current.label}
                width={1400}
                height={1000}
                className="object-contain w-full"
                style={{ maxHeight: "85vh", display: "block" }}
                priority
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-3"
                style={{ background: "linear-gradient(0deg, rgba(5,15,12,0.92) 0%, transparent 100%)" }}
              >
                <p style={{ fontFamily: "var(--font-heading)", color: "var(--color-cream)", fontSize: "1rem", letterSpacing: "0.04em" }}>
                  {current.label}
                </p>
                <p style={{ fontFamily: "var(--font-sub)", color: "var(--color-stone)", fontSize: "0.72rem" }}>
                  {slideIndex + 1} / {photos.length} · ← → keys to navigate
                </p>
              </div>
            </div>
          </div>

          {/* Prev */}
          <button
            onClick={() => setSlideIndex((i) => (i - 1 + photos.length) % photos.length)}
            aria-label="Previous"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            style={{ zIndex: 60, background: "rgba(10,46,40,0.85)", border: "1px solid rgba(42,181,160,0.4)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-crystal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={() => setSlideIndex((i) => (i + 1) % photos.length)}
            aria-label="Next"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            style={{ zIndex: 60, background: "rgba(10,46,40,0.85)", border: "1px solid rgba(42,181,160,0.4)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-crystal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Click backdrop to close */}
          <div className="absolute inset-0" style={{ zIndex: 40 }} onClick={() => setLightbox(false)} />
        </div>
      )}
    </>
  );
}
