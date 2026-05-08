import type { Metadata, Viewport } from "next";
import "./globals.css";
import VideoBackground from "@/components/layout/VideoBackground";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Roaming with Roman | Florida Springs Kayak & Eco Tours",
  description:
    "Guided wildlife eco tours, kayak rentals, and canoe rentals at Rainbow Springs, Silver Springs, and central Florida's most pristine spring-fed waterways.",
  keywords:
    "kayak tours Florida, eco tours Silver Springs, Rainbow Springs kayak rentals, canoe rentals Florida, guided wildlife tours, manatee tours Florida",
  openGraph: {
    title: "Roaming with Roman | Florida Springs Kayak & Eco Tours",
    description:
      "Explore Florida's crystal-clear springs with expert guided eco tours, kayak rentals, and canoe adventures.",
    type: "website",
    url: "https://roamingwithromanllc.com",
    images: [
      {
        url: "https://roamingwithromanllc.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Guided kayak eco tour on Florida's crystal-clear spring-fed river",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roaming with Roman | Florida Springs Kayak & Eco Tours",
    description:
      "Explore Florida's crystal-clear springs with expert guided eco tours, kayak rentals, and canoe adventures.",
    images: ["https://roamingwithromanllc.com/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        {/* Fallback gradient shown before/if video loads */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "linear-gradient(160deg, #041a15 0%, #0a2e28 40%, #071510 100%)",
            zIndex: -3,
          }}
        />
        <VideoBackground />
        {/* Dark overlay to improve text legibility over the video */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.18)",
            zIndex: -1,
            pointerEvents: "none",
          }}
        />
        {children}
      </body>
    </html>
  );
}
