import BookNowLink from "@/components/ui/BookNowLink";

export default function Footer() {
  const year = new Date().getFullYear();

  const labelStyle = {
    fontFamily: "var(--font-sub)",
    color: "var(--color-crystal)",
    fontSize: "0.75rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
  };

  return (
    <footer
      className="relative"
      style={{ background: "transparent", borderTop: "1px solid rgba(42,181,160,0.15)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Three columns — all top-aligned, consistent heading style */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">

          {/* Quick Links */}
          <div className="flex flex-col" style={{ background: "rgba(10,46,40,0.45)", border: "1px solid rgba(42,181,160,0.2)", borderRadius: "12px", padding: "1.75rem", backdropFilter: "blur(6px)" }}>
            <h4 className="mb-4" style={labelStyle}>Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Guided Eco Tours", href: "#experiences" },
                { label: "Kayak Rentals",    href: "#experiences" },
                { label: "Canoe Rentals",    href: "#experiences" },
                { label: "Locations",        href: "#locations" },
                { label: "Wildlife",         href: "#wildlife" },
                { label: "About Roman",      href: "#about" },
                { label: "Contact",          href: "#contact" },
              ].map((l) => (
                <li key={l.href + l.label}>
                  <a href={l.href} className="footer-link text-sm">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col" style={{ background: "rgba(10,46,40,0.45)", border: "1px solid rgba(42,181,160,0.2)", borderRadius: "12px", padding: "1.75rem", backdropFilter: "blur(6px)" }}>
            <h4 className="mb-4" style={labelStyle}>Get in Touch</h4>
            <ul className="flex flex-col gap-3 text-sm" style={{ fontFamily: "var(--font-sub)", color: "var(--color-stone)" }}>
              <li className="flex gap-2 items-start">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-spring-bright)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "2px", flexShrink: 0 }}>
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Central Florida — Rainbow Springs &amp; Silver Springs</span>
              </li>
              <li className="flex gap-2 items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-spring-bright)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <a href="mailto:roamingwithromanllc@gmail.com" className="footer-link">
                  roamingwithromanllc@gmail.com
                </a>
              </li>
              <li className="mt-2">
                <BookNowLink
                  href="https://fareharbor.com/embeds/book/roamingwithromanllc/?full-items=yes" target="_blank" rel="noopener noreferrer"
                  className="btn-primary text-sm px-4 py-2"
                >
                  Book a Tour
                </BookNowLink>
              </li>
            </ul>
          </div>

          {/* Connect with Roman */}
          <div className="flex flex-col" style={{ background: "rgba(10,46,40,0.45)", border: "1px solid rgba(42,181,160,0.2)", borderRadius: "12px", padding: "1.75rem", backdropFilter: "blur(6px)" }}>
            <h4 className="mb-4" style={labelStyle}>Connect with Roman</h4>
            <div className="flex gap-3 flex-wrap">
              {/* Instagram — brand gradient */}
              <a href="https://www.instagram.com/roamingwithromanllc?igsh=MWhmd294YXc0MjU1Zw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link group">
                <span className="social-icon" style={{ borderColor: "#cc2366" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f09433"/>
                        <stop offset="25%" stopColor="#e6683c"/>
                        <stop offset="50%" stopColor="#dc2743"/>
                        <stop offset="75%" stopColor="#cc2366"/>
                        <stop offset="100%" stopColor="#bc1888"/>
                      </linearGradient>
                    </defs>
                    <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
              </a>
              {/* Facebook — brand blue */}
              <a href="https://www.facebook.com/share/1GaF45ARz8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link group">
                <span className="social-icon" style={{ color: "#1877F2", borderColor: "#1877F2" }}>
                  <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.026 4.388 11.024 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.097 24 18.1 24 12.073z"/></svg>
                </span>
              </a>
              {/* Gmail — official logo */}
              <a href="mailto:roamingwithromanllc@gmail.com" aria-label="Email" className="social-link group">
                <span className="social-icon" style={{ borderColor: "#EA4335", background: "rgba(255,255,255,0.08)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/gmail.webp" alt="Gmail" style={{ width: 48, height: 48, objectFit: "contain" }} />
                </span>
              </a>
              {/* Phone — green */}
              <a href="tel:+19545290218" aria-label="Phone" className="social-link group">
                <span className="social-icon" style={{ color: "#25D366", borderColor: "#25D366" }}>
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-center items-center gap-2 text-xs"
          style={{ borderTop: "1px solid rgba(42,181,160,0.1)", color: "var(--color-stone)", fontFamily: "var(--font-sub)", textAlign: "center" }}
        >
          <span>&copy; {year} Roaming with Roman. All rights reserved.</span>
          <span className="hidden sm:inline" style={{ color: "var(--color-spring-teal)" }}>·</span>
          <span>Florida Springs Kayak &amp; Eco Tours</span>
        </div>

      </div>
    </footer>
  );
}
