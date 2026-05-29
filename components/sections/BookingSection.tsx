"use client";

import Script from "next/script";

export default function BookingSection() {
  return (
    <section id="booking" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <p className="section-subtitle">Ready to Go?</p>
        <h2 className="section-title">Book Your Adventure</h2>
        <span className="gold-divider" />
        <div className="mt-8">
          <Script
            src="https://fareharbor.com/embeds/script/items/roamingwithromanllc/?full-items=yes&fallback=simple&flow=1645007"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </section>
  );
}
