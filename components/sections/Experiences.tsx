import { Compass, Paddle, Wave, SUP, Snorkel } from "@/components/ui/Icons";
import type { ReactNode } from "react";

const experiences: { Icon: (props: { size: number; color: string }) => ReactNode; title: string; tag: string; description: string; highlights: string[]; cta: string; color: string; photo: string }[] = [
  {
    Icon: Compass,
    title: "Guided Wildlife Eco Tours",
    tag: "Most Popular",
    description:
      "Join Roman for an immersive guided paddle through Florida's most pristine spring-fed rivers. Spot manatees, river otters, herons, alligators, and rare freshwater fish in their natural habitat. Expert naturalist commentary included.",
    highlights: [
      "2–3 hour guided experience",
      "All skill levels welcome",
      "Naturalist interpretation",
      "Small group sizes",
    ],
    cta: "Book a Tour",
    color: "var(--color-spring-bright)",
    photo: "/assets/gallery/alligator-waterside.jpeg",
  },
  {
    Icon: Paddle,
    title: "Kayak Rentals",
    tag: "Explore at Your Pace",
    description:
      "Rent a quality kayak and set out to explore the springs on your own schedule. Single and tandem kayaks available. Perfect for experienced paddlers looking to chart their own course through Florida's magical waterways.",
    highlights: [
      "Single & tandem kayaks",
      "Half-day & full-day options",
      "Safety gear included",
      "Local trail maps provided",
    ],
    cta: "Reserve a Kayak",
    color: "var(--color-gold)",
    photo: "/assets/gallery/great-blue-heron-wading.jpeg",
  },
  {
    Icon: Wave,
    title: "Canoe Rentals",
    tag: "Family Friendly",
    description:
      "Classic canoes — ideal for families and groups wanting a stable, spacious option for exploring the springs. Glide peacefully over crystal-clear water and see straight to the sandy bottom teeming with life.",
    highlights: [
      "Stable & spacious canoes",
      "Ideal for families",
      "Half-day & full-day options",
      "Kid-friendly waters",
    ],
    cta: "Reserve a Canoe",
    color: "var(--color-amber)",
    photo: "/assets/gallery/turtles-basking.jpeg",
  },
  {
    Icon: SUP,
    title: "Paddle Board (SUP) Rentals",
    tag: "Stand-Up Adventure",
    description:
      "Experience Florida's crystal-clear springs from a whole new perspective on a stand-up paddleboard. Perfect for those looking for a fun, full-body workout while gliding over pristine spring-fed waters.",
    highlights: [
      "Single & tandem SUP boards",
      "Half-day & full-day options",
      "Safety gear included",
      "All skill levels welcome",
    ],
    cta: "Reserve a Paddle Board",
    color: "var(--color-crystal)",
    photo: "/assets/gallery/anhinga-wings.jpeg",
  },
  {
    Icon: Snorkel,
    title: "Guided Snorkel Tours",
    tag: "Expert Led",
    description:
      "Join Roman for a fully guided snorkeling experience through Florida's most breathtaking freshwater springs. Explore underwater caves, sand boils, and vibrant spring ecosystems with expert guidance every step of the way.",
    highlights: [
      "All snorkel gear provided",
      "Expert naturalist guide",
      "Manatees, fish & turtles",
      "Small group sizes",
    ],
    cta: "Book a Snorkel Tour",
    color: "var(--color-gold)",
    photo: "/assets/gallery/turtles-log.jpeg",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="section-pad">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <p className="section-subtitle">What We Offer</p>
        <h2 className="section-title">Spring Adventures</h2>
        <span className="gold-divider" />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {experiences.map((exp) => (
            <div key={exp.title} className="nature-card flex flex-col" style={{ padding: 0, overflow: "hidden" }}>
              {/* Photo header */}
              <div style={{ position: "relative", height: "190px", overflow: "hidden", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={exp.photo}
                  alt={exp.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  className="location-card-photo"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(5,15,12,0.95) 100%)" }} />
                {/* Accent bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${exp.color}, transparent)` }} />
                {/* Tag overlay */}
                <span
                  className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full"
                  style={{
                    fontFamily: "var(--font-sub)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    background: "rgba(5,15,12,0.75)",
                    border: `1px solid ${exp.color}60`,
                    color: exp.color,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {exp.tag}
                </span>
                {/* Icon + title at bottom of photo */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 flex items-center gap-3">
                  <exp.Icon size={28} color={exp.color} />
                  <h3 style={{ color: exp.color, fontFamily: "var(--font-heading)", margin: 0, fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
                    {exp.title}
                  </h3>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5">
                <p className="text-base leading-relaxed mb-4 flex-1" style={{ color: "var(--color-sand)", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-1.5 mb-6">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-base" style={{ color: "var(--color-stone)", fontFamily: "var(--font-sub)", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
                      <span style={{ color: "var(--color-spring-bright)", fontSize: "0.7rem" }}>◆</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking"
                  className="btn-primary self-start text-sm"
                >
                  {exp.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
