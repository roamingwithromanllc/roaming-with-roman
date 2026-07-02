"use client";

import { useState, useRef } from "react";
import type { FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const interests = [
  { value: "",                    label: "Select an interest…" },
  { value: "guided-tour",        label: "Guided Wildlife Eco Tour" },
  { value: "kayak-rental",       label: "Kayak Rental" },
  { value: "canoe-rental",       label: "Canoe Rental" },
  { value: "paddleboard-rental", label: "Paddleboard Rental" },
  { value: "guided-snorkel",     label: "Guided Snorkel Tour" },
  { value: "group-event",        label: "Group / Private Event" },
  { value: "other",              label: "Other / General Inquiry" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const body = {
      name:     fd.get("name"),
      email:    fd.get("email"),
      phone:    fd.get("phone"),
      interest: fd.get("interest"),
      message:  fd.get("message"),
      website:  fd.get("website"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json() as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      formRef.current?.reset();
      if (typeof (window as any).gtag_report_conversion === "function") {
        (window as any).gtag_report_conversion();
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{
          background: "linear-gradient(160deg, rgba(13,74,64,0.7), rgba(10,46,40,0.9))",
          border: "1px solid rgba(42,181,160,0.35)",
        }}
      >
        <div className="flex justify-center mb-4">
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="var(--color-spring-bright)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <h3
          className="mb-3"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-gold)", fontSize: "1.4rem" }}
        >
          Message Sent!
        </h3>
        <p style={{ color: "var(--color-sand)", fontFamily: "var(--font-body)" }}>
          Thanks for reaching out! Roman will get back to you within 24 hours.
          In the meantime, you can{" "}
          <a
            href="https://fareharbor.com/embeds/book/roamingwithromanllc/?full-items=yes" target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--color-spring-bright)" }}
            className="hover:underline"
          >
            book directly online
          </a>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      noValidate
    >
      {/* Honeypot */}
      <input type="text" name="website" className="sr-only" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="spring-label">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="spring-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="spring-label">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className="spring-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="spring-label">Phone (optional)</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 000-0000"
            className="spring-input"
          />
        </div>
        <div>
          <label htmlFor="interest" className="spring-label">I&apos;m Interested In *</label>
          <select
            id="interest"
            name="interest"
            required
            className="spring-input"
            style={{ cursor: "pointer" }}
          >
            {interests.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="spring-label">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your group, preferred dates, or any questions you have…"
          className="spring-input resize-y"
          style={{ minHeight: "120px" }}
        />
      </div>

      {status === "error" && (
        <div
          className="text-sm px-4 py-3 rounded-lg"
          style={{
            background: "rgba(180,40,40,0.15)",
            border: "1px solid rgba(220,60,60,0.4)",
            color: "#ff8a8a",
            fontFamily: "var(--font-sub)",
          }}
        >
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary self-start px-8 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}
