import Image from "next/image";
import { Leaf, Shield, Award } from "@/components/ui/Icons";

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "transparent" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          style={{
            background: "rgba(10,46,40,0.45)",
            border: "1px solid rgba(42,181,160,0.2)",
            borderRadius: "12px",
            padding: "2.5rem",
            backdropFilter: "blur(6px)",
          }}
        >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Logo */}
            <div
              className="relative rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ border: "1px solid rgba(42,181,160,0.3)", boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 40px rgba(42,181,160,0.08)", background: "rgba(10,46,40,0.3)", padding: "2rem" }}
            >
              <Image
                src="/assets/square-logo.jpg"
                alt="Roaming with Roman"
                width={1024}
                height={1024}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            {/* Floating stat badges */}
            <div
              className="absolute -bottom-6 -right-4 hidden md:flex flex-col gap-3"
            >
              {[
                { value: "5★", label: "Rated Tours" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center px-5 py-3 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #0d4a40, #0a2e28)",
                    border: "1px solid rgba(240,180,41,0.4)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-heading)", color: "var(--color-gold)", fontSize: "1.4rem", fontWeight: 700 }}>
                    {s.value}
                  </p>
                  <p style={{ fontFamily: "var(--font-sub)", color: "var(--color-stone)", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="section-subtitle" style={{ textAlign: "left" }}>The Story</p>
            <h2 className="section-title" style={{ textAlign: "left" }}>
              Meet Roman
            </h2>
            <span className="gold-divider" style={{ margin: "1rem 0 2rem" }} />

            <div
              className="flex flex-col gap-4 leading-relaxed"
              style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)", fontSize: "1.1rem", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
            >
              <p>
                Roaming with Roman was born from a lifelong passion for Florida&apos;s extraordinary
                spring systems. As a Central Florida native, Roman has spent years exploring every
                bend and tributary of the region&apos;s crystal-clear waterways.
              </p>
              <p>
                What started as personal adventures quickly became a calling — sharing the magic
                of these pristine ecosystems with visitors and locals alike. Every tour is built
                around education, conservation, and genuine connection with Florida&apos;s wild places.
              </p>
              <p>
                Whether you&apos;re spotting a manatee gliding beneath your kayak or watching a river
                otter dart across the surface, Roman&apos;s expert guidance ensures you experience
                these moments safely, responsibly, and with deep appreciation for what makes
                Florida&apos;s springs truly irreplaceable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://fareharbor.com/embeds/book/roamingwithromanllc/?full-items=yes" target="_blank" rel="noopener noreferrer"
                className="btn-primary"
              >
                Book with Roman
              </a>
              <a href="#contact" className="btn-outline">
                Ask a Question
              </a>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { Icon: Leaf,   label: "Eco-First" },
                { Icon: Shield, label: "Safety Always" },
                { Icon: Award,  label: "Expert Guide" },
              ].map(({ Icon, label }) => (
                <div key={label} className="text-center flex flex-col items-center gap-1">
                  <Icon size={24} color="var(--color-spring-bright)" />
                  <p style={{ fontFamily: "var(--font-sub)", fontSize: "0.9rem", color: "var(--color-crystal)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
