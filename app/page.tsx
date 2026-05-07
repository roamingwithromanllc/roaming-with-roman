import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Experiences from "@/components/sections/Experiences";
import Locations from "@/components/sections/Locations";
import Wildlife from "@/components/sections/Wildlife";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import CallBanner from "@/components/sections/CallBanner";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Locations />
        <Experiences />
        <Wildlife />
        <About />
        <Gallery />
        <CallBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
