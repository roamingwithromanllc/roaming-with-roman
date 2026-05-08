import type { Metadata, Viewport } from "next";
import "./globals.css";

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
        {/* Full-page scrolling video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: -2,
          }}
        >
          <source src="/assets/background-new.mp4" type="video/mp4" />
        </video>
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
