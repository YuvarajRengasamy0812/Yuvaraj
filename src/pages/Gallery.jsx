import { ChevronLeft, ChevronRight, Download, Share2, X, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import galleryHero from "../../assets/images/gallery/banner/gallery-hero-banner.png";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

const pageSize = 6;

const galleryMotionItems = Array.from({ length: 34 }, (_, index) => ({
  left: `${(index * 31) % 100}%`,
  top: `${12 + ((index * 43) % 76)}%`,
  delay: `${(index % 10) * 0.32}s`,
  duration: `${7 + (index % 6)}s`,
  size: `${10 + (index % 5) * 8}px`,
  drift: `${index % 2 === 0 ? 34 : -28}px`,
}));

const galleryModules = import.meta.glob("../../assets/images/gallery/**/*.{png,jpg,jpeg,JPG,JPEG,webp,gif}", {
  eager: true,
  import: "default",
});

const assetImages = Object.entries(galleryModules)
  .filter(([path]) => !path.includes("/banner/"))
  .map(([path, image], index) => ({
    id: path,
    image,
    alt: `Gallery image ${index + 1}`,
    filename: path.split("/").pop() || `gallery-image-${index + 1}`,
  }));

export default function Gallery() {
  useDocumentTitle("Gallery | Yuvaraj R");
  useReveal();
  const [activeIndex, setActiveIndex] = useState(null);
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(1);

  const images = useMemo(() => assetImages, []);
  const totalPages = Math.max(1, Math.ceil(images.length / pageSize));
  const pageImages = images.slice(page * pageSize, page * pageSize + pageSize);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    setZoom(1);
  }, [activeIndex]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight" && activeIndex !== null) setActiveIndex((activeIndex + 1) % images.length);
      if (event.key === "ArrowLeft" && activeIndex !== null) setActiveIndex((activeIndex - 1 + images.length) % images.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, images.length]);

  const goToPage = (nextPage) => {
    setPage(Math.min(Math.max(nextPage, 0), totalPages - 1));
    window.requestAnimationFrame(() => document.querySelector(".gallery-showcase-section")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const shareImage = async () => {
    if (!activeImage) return;
    const url = new URL(activeImage.image, window.location.origin).href;

    if (navigator.share) {
      await navigator.share({ title: "Yuvaraj Gallery", url });
      return;
    }

    await navigator.clipboard.writeText(url);
  };

  return (
    <>
      <section className="gallery-hero-modern">
        <img src={galleryHero} alt="Modern gallery banner" />
        <div className="gallery-hero-shade" />
        <div className="gallery-hero-animation" aria-hidden="true">
          {galleryMotionItems.map((item, index) => (
            <span
              key={index}
              style={{
                "--left": item.left,
                "--top": item.top,
                "--delay": item.delay,
                "--duration": item.duration,
                "--size": item.size,
                "--drift": item.drift,
              }}
            />
          ))}
        </div>
        <div className="gallery-hero-content" data-reveal>
          <p>Gallery</p>
          <h1>Selected Visual Moments</h1>
        </div>
      </section>

      <section className="section gallery-showcase-section">
        <div className="section-inner">
          {pageImages.length ? (
            <>
              <div className="gallery-grid asset-gallery-grid">
                {pageImages.map((item, index) => {
                  const imageIndex = page * pageSize + index;

                  return (
                    <button className="asset-gallery-card" type="button" key={item.id} onClick={() => setActiveIndex(imageIndex)} data-reveal>
                      <img src={item.image} alt={item.alt} />
                    </button>
                  );
                })}
              </div>

              {totalPages > 1 ? (
                <div className="gallery-pagination" data-reveal>
                  <button type="button" onClick={() => goToPage(page - 1)} disabled={page === 0} aria-label="Previous gallery page"><ChevronLeft size={18} />Previous</button>
                  <span>{page + 1} / {totalPages}</span>
                  <button type="button" onClick={() => goToPage(page + 1)} disabled={page === totalPages - 1} aria-label="Next gallery page">Next<ChevronRight size={18} /></button>
                </div>
              ) : null}
            </>
          ) : (
            <div className="gallery-empty" data-reveal>
              <h2>No Gallery Images Found</h2>
            </div>
          )}
        </div>
      </section>

      {activeImage ? (
        <div className="gallery-modal" role="dialog" aria-modal="true" onClick={() => setActiveIndex(null)}>
          <div className="gallery-modal-toolbar" onClick={(event) => event.stopPropagation()}>
            <a href={activeImage.image} download={activeImage.filename} aria-label="Download image"><Download size={19} /></a>
            <button type="button" aria-label="Zoom out" onClick={() => setZoom((value) => Math.max(1, value - 0.2))}><ZoomOut size={19} /></button>
            <button type="button" aria-label="Zoom in" onClick={() => setZoom((value) => Math.min(2.6, value + 0.2))}><ZoomIn size={19} /></button>
            <button type="button" aria-label="Share image" onClick={shareImage}><Share2 size={19} /></button>
            <button type="button" aria-label="Close gallery preview" onClick={() => setActiveIndex(null)}><X size={20} /></button>
          </div>
          <div className="gallery-modal-image-wrap" onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.image} alt={activeImage.alt} style={{ transform: `scale(${zoom})` }} />
          </div>
        </div>
      ) : null}
    </>
  );
}
