import ContactForm from "./ContactForm";
import { Mail, MapPin } from "@/components/ui/Icons";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: "transparent" }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-subtitle">Get in Touch</p>
        <h2 className="section-title">Plan Your Adventure</h2>
        <span className="gold-divider" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-4">
          {/* Info column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Book directly */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(160deg, rgba(13,74,64,0.7), rgba(10,46,40,0.9))",
                border: "1px solid rgba(42,181,160,0.25)",
              }}
            >
              <h3
                className="mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-gold)", fontSize: "1.1rem" }}
              >
                Ready to Book?
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }}>
                Book instantly online through our secure FareHarbor booking system.
                Select your experience, choose a date, and you&apos;re set.
              </p>
              <a
                href="https://fareharbor.com/embeds/book/roamingwithromanllc/?full-items=yes" target="_blank" rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm"
              >
                Book Online Now
              </a>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <h4
                style={{ fontFamily: "var(--font-sub)", color: "var(--color-crystal)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
              >
                Contact Details
              </h4>
              {[
                { Icon: Mail,   label: "Email", value: "roamingwithromanllc@gmail.com", href: "mailto:roamingwithromanllc@gmail.com" },
                { Icon: MapPin, label: "Area",  value: "Central Florida — Ocala / Dunnellon", href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex gap-3 items-start">
                  <Icon size={18} color="var(--color-spring-bright)" className="mt-0.5 shrink-0" />
                  <div>
                    <p style={{ fontFamily: "var(--font-sub)", fontSize: "0.7rem", color: "var(--color-stone)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {label}
                    </p>
                    {href ? (
                      <a href={href} style={{ color: "var(--color-spring-bright)", fontFamily: "var(--font-body)" }} className="hover:underline text-sm">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response time */}
            <p
              className="text-xs italic"
              style={{ color: "var(--color-stone)", fontFamily: "var(--font-sub)" }}
            >
              We typically respond within 24 hours. For faster booking, use the online system above.
            </p>
          </div>

          {/* Form column */}
          <div
            className="lg:col-span-3 rounded-2xl p-6 sm:p-8"
            style={{
              background: "linear-gradient(160deg, rgba(10,46,40,0.5), rgba(5,15,12,0.8))",
              border: "1px solid rgba(42,181,160,0.2)",
            }}
          >
            <h3
              className="mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-cream)", fontSize: "1.2rem" }}
            >
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
