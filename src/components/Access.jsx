import { ACCESS_POINTS, HOTEL } from "../data.js";

export default function Access() {
  return (
    <section id="acces">
      <h2 className="section-title display">Accès et environs</h2>
      <p className="section-sub">
        Au carrefour de l'autoroute des Deux Mers, entre Bordeaux et Barcelone,
        à proximité du Parc Technologique du Canal.
      </p>
      <div className="acces-grid">
        <ul className="acces-list">
          {ACCESS_POINTS.map((a) => (
            <li key={a.name}>
              <b>{a.name}</b>
              {a.time}
            </li>
          ))}
        </ul>
        <div className="map-frame">
          <div className="map-address">
            <div className="addr">{HOTEL.name}</div>
            <div>Ramonville-Saint-Agne, sud de Toulouse</div>
          </div>
          <iframe
            title={`Localisation de ${HOTEL.name}`}
            src="https://www.google.com/maps?q=Comfort%20Hotel%20Toulouse%20Sud&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="map-link"
            href="https://www.google.com/maps/search/?api=1&query=Comfort%20Hotel%20Toulouse%20Sud"
            target="_blank"
            rel="noreferrer"
          >
            Ouvrir dans Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  );
}
