"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home",      href: "#home" },
  { label: "Tours",     href: "#experiences" },
  { label: "Locations", href: "#locations" },
  { label: "Wildlife",  href: "#wildlife" },
  { label: "About",     href: "#about" },
  { label: "Gallery",   href: "#gallery" },
  { label: "Contact",   href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-white shadow-md shadow-black/10"
    : "bg-white/95 backdrop-blur-sm";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo + Brand */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#2ab5a0]/50 group-hover:border-[#f0b429]/70 transition-colors shadow-lg">
              <Image
                src="/assets/logo.png"
                alt="Roaming with Roman"
                fill
                className="object-cover"
                sizes="80px"
                priority
              />
            </div>
            <div>
              <span
                className="block text-[#f0b429] leading-tight"
                style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", letterSpacing: "0.08em" }}
              >
                Roaming with Roman
              </span>
              <span
                className="block text-[#5dd8c8] leading-tight"
                style={{ fontFamily: "var(--font-sub)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                Florida Springs Eco Tours
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" style={{ color: "#071510" }}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Book Now CTA */}
          <a
            href="https://fareharbor.com/embeds/book/roamingwithroman/items/all/?full-items=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden lg:inline-flex text-sm px-5 py-2.5"
          >
            Book Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-3 text-[#071510] hover:text-[#1e8f80] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-6" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-4 pt-2 border-t border-black/10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-base"
                style={{ color: "#071510" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://fareharbor.com/embeds/book/roamingwithroman/items/all/?full-items=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-start mt-2"
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
