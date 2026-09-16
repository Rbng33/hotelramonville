import { useState } from "react";

const GALLERY_ITEMS = [
  { title: "La façade", file: "hotel-exterior.jpg" },
  { title: "Les chambres", file: "hotel-room.jpg" },
  { title: "Le restaurant", file: "hotel-restaurant.jpg" },
  { title: "La réception", file: "hotel-reception.jpg" },
];

function GalleryItem({ title, file }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <figure className="gallery-item">
      {imageAvailable ? (
        <img
          src={`/${file}`}
          alt={title}
          onError={() => setImageAvailable(false)}
        />
      ) : (
        <div className="gallery-placeholder" aria-label={`${title}, photo à venir`}>
          <span>{title}</span>
          <small>Photo à venir</small>
        </div>
      )}
      <figcaption>{title}</figcaption>
    </figure>
  );
}

export default function Gallery() {
  return (
    <section id="galerie" className="gallery-section">
      <div className="gallery-heading">
        <div>
          <div className="hero-eyebrow">L'hôtel en images</div>
          <h2 className="section-title display">Un aperçu de votre séjour</h2>
        </div>
        <p className="section-sub">
          Découvrez les espaces de l'hôtel avant votre arrivée.
        </p>
      </div>
      <div className="gallery-grid">
        {GALLERY_ITEMS.map((item) => (
          <GalleryItem key={item.file} {...item} />
        ))}
      </div>
    </section>
  );
}
