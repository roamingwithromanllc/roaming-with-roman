export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ paddingTop: "5rem" }}>
        {/* Main heading */}
        <h1
          className="mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-cream)",
            textShadow: "0 4px 30px rgba(0,0,0,0.8), 0 0 60px rgba(42,181,160,0.2)",
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          Roaming with{" "}
          <span style={{ color: "var(--color-gold)" }}>Roman</span>
        </h1>

        {/* Divider */}
        <span className="gold-divider" />

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://fareharbor.com/embeds/book/roamingwithroman/items/all/?full-items=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xl px-12 py-5"
          >
            Book a Tour
          </a>
          <a href="#experiences" className="btn-outline text-xl px-12 py-5">
            Explore Experiences ↓
          </a>
        </div>

        {/* Tagline */}
        <p
          className="mt-8 mx-auto"
          style={{
            fontFamily: "var(--font-sub)",
            fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
            color: "var(--color-cream)",
            fontWeight: 500,
            maxWidth: "620px",
            lineHeight: 1.8,
            textShadow: "0 2px 16px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.95)",
          }}
        >
          Glide through crystal-clear Florida springs alongside manatees, river otters,
          and ancient cypress forests. Guided eco tours, kayak &amp; canoe rentals —
          unforgettable adventures for all skill levels.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ color: "var(--color-spring-bright)", opacity: 0.7 }}
      >
        <span style={{ fontFamily: "var(--font-sub)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(180deg, var(--color-spring-bright), transparent)" }}
        />
      </div>
    </section>
  );
}
