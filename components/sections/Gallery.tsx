import GalleryClient from "./GalleryClient";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-pad"
      style={{ background: "transparent" }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-subtitle">Moments on the Water</p>
        <h2 className="section-title">Gallery</h2>
        <span className="gold-divider" />
        <GalleryClient />
      </div>
    </section>
  );
}
