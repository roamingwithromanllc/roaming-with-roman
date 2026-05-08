"use client";
import { useState } from "react";

const locations = [
  {
    name: "Rainbow Springs",
    photo: "/assets/gallery/clear-kayak-reflection.jpeg",
    subtitle: "Rainbow Springs State Park — Dunnellon, FL",
    description:
      "Explore the crystal-clear waters of Rainbow Springs State Park in Dunnellon, Florida—one of the top destinations for kayaking, paddle boarding, and eco tours in Central Florida. Our private guided kayak tours take you along a pristine spring-fed creek, famous for its visibility, vibrant wildlife, and unique sand boils flowing directly from Florida's natural aquifer.\n\nWe offer a variety of outdoor adventures including guided wildlife eco tours, snorkeling tours, kayak rentals, canoe rentals, and stand-up paddleboard (SUP) rentals. Whether you're searching for the best kayak tours in Dunnellon, snorkeling in freshwater springs, or paddle board rentals near Rainbow Springs, this location delivers an unforgettable experience.\n\nPerfect for families, beginners, and experienced paddlers, our tours provide a safe, relaxing, and educational way to explore Florida's natural springs. Enjoy up-close encounters with native wildlife, peaceful paddling through clear spring water, and one of the most scenic kayak routes in Florida.",
    features: ["Wildlife Eco Tours", "Kayaking", "Canoeing", "Paddle Boarding (SUP)", "Snorkeling", "Crystal Visibility", "Rich Wildlife"],
    gradient: "linear-gradient(180deg, rgba(10,46,40,0.5) 0%, rgba(5,15,12,0.95) 100%)",
    accentColor: "var(--color-spring-bright)",
  },
  {
    name: "Silver Springs",
    photo: "/assets/gallery/alligator-bank.jpeg",
    subtitle: "Silver Springs State Park — Ocala, FL",
    description:
      "Discover why Silver Springs State Park is known as the #1 destination for wildlife kayaking in Florida. Located in Silver Springs, FL, this world-famous spring offers the best kayak tours for wildlife viewing, with unmatched opportunities to see manatees, wild monkeys, alligators, turtles, and native birds in crystal-clear water.\n\nOur guided wildlife eco tours in Silver Springs are perfect for visitors searching for manatee kayak tours in Florida, kayaking with monkeys, and top-rated outdoor adventures near Ocala and Central Florida. We also offer kayak rentals, canoe rentals, and stand-up paddleboard (SUP) rentals in Silver Springs, making it easy to explore one of the most biodiverse waterways in the state at your own pace.\n\nWhether you're looking for the best kayaking in Florida springs, wildlife tours near Ocala, or family-friendly paddleboard rentals in Silver Springs, this is the ultimate destination for nature lovers. Paddle through calm, spring-fed waters and experience Florida wildlife up close in one of the most iconic and scenic kayaking locations in the country.",
    features: ["Wildlife Eco Tours", "Manatees & Monkeys", "World's Largest Artesian Spring", "Crystal Clear Visibility", "Kayaking", "Canoeing", "Paddle Boarding (SUP)", "Florida's Most Abundant Wildlife Location"],
    gradient: "linear-gradient(180deg, rgba(13,58,48,0.5) 0%, rgba(5,15,12,0.95) 100%)",
    accentColor: "var(--color-gold)",
  },
  {
    name: "Other Central Florida Springs",
    photo: "/assets/gallery/spider-lily.jpeg",
    subtitle: "Available Upon Request",
    description:
      "Explore the best Central Florida springs beyond the crowded, well-known locations. Florida is home to over 1,000 natural springs, and with expert local guide Roman, you'll experience hidden gems and lesser-known Florida freshwater springs that most visitors never discover. Enjoy a private springs tour designed for those seeking a more authentic and uncrowded adventure.\n\nLess-visited Florida springs are often teeming with wildlife, from fish and turtles to birds and manatees, creating a more immersive and personal experience. These secluded natural spring destinations offer crystal-clear water, peaceful surroundings, and unique opportunities for swimming, snorkeling, and wildlife viewing in Central Florida's natural waterways.\n\nWith premium local knowledge of Florida's magical waterways, every tour is fully customized to your interests, pace, and sense of adventure. Choose a private custom springs tour for off-the-beaten-path exploration, secluded locations, and a truly unforgettable Central Florida outdoor experience.",
    features: ["Private custom tours", "Hidden & secluded spots", "Tailored experience", "Off-the-beaten-path"],
    gradient: "linear-gradient(180deg, rgba(13,58,40,0.5) 0%, rgba(5,15,12,0.95) 100%)",
    accentColor: "var(--color-amber)",
  },
];

export default function Locations() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <section
      id="locations"
      className="section-pad"
      style={{
        background: "transparent",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-subtitle">Where We Paddle</p>
        <h2 className="section-title">Our Locations</h2>
        <span className="gold-divider" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {locations.map((loc) => (
            <div key={loc.name} className="location-card">
              {/* Photo header */}
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={loc.photo}
                  alt={loc.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  className="location-card-photo"
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(180deg, transparent 40%, rgba(5,15,12,0.95) 100%)`,
                }} />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "1rem 1.5rem",
                }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", color: loc.accentColor, margin: 0, fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}>
                    {loc.name}
                  </h3>
                </div>
                {/* Color bar at very top */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${loc.accentColor}, transparent)` }} />
              </div>

              {/* Gradient fill panel */}
              <div className="p-6 flex flex-col flex-1" style={{ background: loc.gradient }}>
                <p
                  className="text-sm mb-4"
                  style={{ fontFamily: "var(--font-sub)", color: "var(--color-stone)", letterSpacing: "0.08em", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
                >
                  {loc.subtitle}
                </p>
                <div className="text-base leading-relaxed mb-2 flex flex-col gap-3" style={{ color: "var(--color-sand)", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
                  {loc.description.split("\n\n").map((para, i) => (
                    (i === 0 || expanded[loc.name]) && <p key={i}>{para}</p>
                  ))}
                </div>
                {loc.description.split("\n\n").length > 1 && (
                  <button
                    onClick={() => setExpanded(prev => ({ ...prev, [loc.name]: !prev[loc.name] }))}
                    className="mb-4 text-sm"
                    style={{ color: loc.accentColor, fontFamily: "var(--font-sub)", letterSpacing: "0.05em", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  >
                    {expanded[loc.name] ? "Show Less ↑" : "Read More ↓"}
                  </button>
                )}

                <ul className="flex flex-col gap-2 mb-6">
                  {loc.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-base"
                      style={{ color: "var(--color-stone)", fontFamily: "var(--font-sub)", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
                    >
                      <span style={{ color: loc.accentColor, fontSize: "0.6rem" }}>●</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="btn-outline self-start text-sm px-4 py-2 mt-auto"
                  style={{ borderColor: loc.accentColor, color: loc.accentColor }}
                >
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
