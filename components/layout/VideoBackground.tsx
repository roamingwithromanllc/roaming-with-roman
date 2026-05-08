"use client";
import { useEffect, useRef } from "react";

export default function VideoBackground() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true; // React doesn't reliably set the muted attribute — do it via DOM
    v.play().catch(() => {
      // Autoplay blocked (e.g. data-saver mode) — gradient fallback is visible beneath
    });
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        zIndex: -2,
      }}
    >
      <source src="/assets/background-compressed.mp4" type="video/mp4" />
    </video>
  );
}
