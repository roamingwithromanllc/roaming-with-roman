import { Bird, Turtle, Fish, Butterfly, Leaf } from "@/components/ui/Icons";
import type { ReactNode } from "react";

const DolphinPhoto = (_props: { size: number; color: string; strokeWidth: number }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/assets/dolphin.webp"
    alt="Bottlenose Dolphins"
    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
  />
);

const TurtlePhoto = (_props: { size: number; color: string; strokeWidth: number }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/assets/turtle.jpg"
    alt="Wide Variety of Turtles"
    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
  />
);

const BirdPhoto = (_props: { size: number; color: string; strokeWidth: number }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/assets/bird.webp"
    alt="Wide Variety of Birds"
    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
  />
);

const GarPhoto = (_props: { size: number; color: string; strokeWidth: number }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/assets/gar.jpg"
    alt="Prehistoric Gar"
    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
  />
);

const MonkeyPhoto = (_props: { size: number; color: string; strokeWidth: number }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/assets/monkey.png"
    alt="Rhesus Macaque Monkeys"
    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
  />
);

const GatorPhoto = (_props: { size: number; color: string; strokeWidth: number }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/assets/alligator.jpg"
    alt="American Alligator"
    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
  />
);

const OtterPhoto = (_props: { size: number; color: string; strokeWidth: number }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/assets/otter.jpg"
    alt="River Otter"
    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
  />
);

const ManateePhoto = (_props: { size: number; color: string; strokeWidth: number }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/assets/manatee.jpg"
    alt="West Indian Manatee"
    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
  />
);

const wildlife: { Icon: (props: { size: number; color: string; strokeWidth: number }) => ReactNode; name: string; description: string }[] = [
  { Icon: ManateePhoto,  name: "West Indian Manatee",      description: "Florida's beloved gentle giants often visit the warm spring waters year-round." },
  { Icon: MonkeyPhoto,   name: "Rhesus Macaque Monkeys",   description: "Released at Silver Springs in 1938 by a tour boat operator who didn't know they could swim, these wild monkeys have thrived ever since — frequently spotted swimming, foraging, and playing along the Silver River." },
  { Icon: DolphinPhoto,  name: "Bottlenose Dolphins",      description: "Playful and intelligent, bottlenose dolphins are occasionally spotted cruising Florida's spring-fed rivers and coastal waterways — always an unforgettable encounter." },
  { Icon: OtterPhoto,    name: "River Otter",              description: "Playful and curious, river otters are frequent performers along the spring runs." },
  { Icon: GatorPhoto,    name: "American Alligator",       description: "A cornerstone of Florida's ecosystem — spotted regularly from a safe distance." },
  { Icon: TurtlePhoto,   name: "Wide Variety of Turtles",  description: "From softshell and cooter turtles to snapping turtles — ancient reptiles that bask on logs and glide effortlessly through the springs." },
  { Icon: GarPhoto,      name: "Prehistoric Gar",          description: "Ancient armored fish that have prowled Florida's springs for millions of years — the crystal-clear water lets you watch them glide by up close." },
  { Icon: BirdPhoto,     name: "Wide Variety of Birds",    description: "From limpkins and anhingas to herons, egrets, and ospreys — Florida's spring corridors are a birdwatcher's paradise year-round." },
];

export default function Wildlife() {
  return (
    <section
      id="wildlife"
      className="section-pad"
      style={{
        background: "transparent",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(42,181,160,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className="location-card"
          style={{ padding: "2.5rem" }}
        >
          {/* Teal accent bar at top — matches location card style */}
          <div
            className="h-1 w-full -mx-[2.5rem] mb-6"
            style={{
              width: "calc(100% + 5rem)",
              background: "linear-gradient(90deg, var(--color-spring-bright), transparent)",
            }}
          />

          <p className="section-subtitle">What You Might See</p>
          <h2 className="section-title">Florida Wildlife</h2>
          <span className="gold-divider" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {wildlife.map((animal) => (
              <div key={animal.name} className="wildlife-badge group cursor-default">
                <div className="wildlife-icon">
                  <animal.Icon size={32} color="var(--color-spring-bright)" strokeWidth={1.4} />
                </div>
                <h4
                  className="font-semibold text-center leading-tight"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-crystal)", textShadow: "0 1px 6px rgba(0,0,0,0.9)", fontSize: "clamp(0.85rem, 2vw, 1.15rem)" }}
                >
                  {animal.name}
                </h4>
                <p
                  className="text-center leading-relaxed hidden sm:block"
                  style={{ color: "var(--color-sand)", fontFamily: "var(--font-sub)", textShadow: "0 1px 4px rgba(0,0,0,0.9)", fontSize: "0.9rem" }}
                >
                  {animal.description}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-center italic"
            style={{ color: "var(--color-stone)", fontFamily: "var(--font-sub)", maxWidth: "560px", margin: "3rem auto 0" }}
          >
            Wildlife sightings vary by season and conditions. Roman&apos;s expert local knowledge
            maximizes your chances of incredible encounters — every paddle is unique.
          </p>
        </div>
      </div>
    </section>
  );
}
