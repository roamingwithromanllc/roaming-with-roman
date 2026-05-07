export default function CallBanner() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, rgba(10,46,40,0.7) 0%, rgba(13,74,64,0.6) 100%)",
        borderTop: "1px solid rgba(42,181,160,0.25)",
        borderBottom: "1px solid rgba(42,181,160,0.25)",
        padding: "3.5rem 1.5rem",
        textAlign: "center",
        backdropFilter: "blur(8px)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-sub)",
          fontSize: "clamp(1rem, 2vw, 1.3rem)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-crystal)",
          marginBottom: "0.75rem",
        }}
      >
        Have questions? Ready to book?
      </p>

      <h2
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2.4rem, 5vw, 4rem)",
          fontWeight: 700,
          color: "var(--color-gold)",
          letterSpacing: "0.06em",
          marginBottom: "1.5rem",
          textShadow: "0 2px 16px rgba(0,0,0,0.8)",
        }}
      >
        Call Now!
      </h2>

      <a
        href="tel:+19545290218"
        className="call-banner-number"
      >
        <svg width="52" height="52" fill="none" viewBox="0 0 24 24" stroke="var(--color-spring-bright)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        (954) 529-0218
      </a>
    </section>
  );
}
