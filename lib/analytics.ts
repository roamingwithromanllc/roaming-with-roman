declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackBookNowClick() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "book_now_click", {
      event_category: "engagement",
      event_label: "book_now",
    });
  }
}
