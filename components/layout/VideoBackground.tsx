"use client";
import { useEffect, useRef } from "react";

export default function VideoBackground() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Set every required attribute directly on the DOM element.
    // React's JSX props alone are not enough for iOS Safari autoplay.
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", ""); // required on older iOS
    v.setAttribute("x-webkit-airplay", "allow");
    v.muted = true;
    v.loop = true;

    const play = () => { v.play().catch(() => {}); };

    // canplay fires once the browser has buffered enough to start
    v.addEventListener("canplay", play, { once: true });

    // Force the browser to re-read the element with the new attributes
    v.load();

    // Retry on first user gesture — some Android browsers gate autoplay
    // behind an interaction even when the video is muted
    document.addEventListener("touchstart", play, { once: true, passive: true });
    document.addEventListener("click",      play, { once: true });

    return () => {
      document.removeEventListener("touchstart", play);
      document.removeEventListener("click",      play);
    };
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
