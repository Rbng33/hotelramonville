export default function Restaurant() {
  return (
    <section id="restaurant">
      <div className="split">
        <div>
          <h2 className="section-title display">Le Spatial</h2>
          <p className="section-sub" style={{ marginBottom: 20 }}>
            Une cuisine régionale servie dans une salle lumineuse, prolongée par
            un bar réservé aux clients de l'hôtel.
          </p>
          <p style={{ color: "var(--ink-soft)", fontSize: 15 }}>
            Sur place, on privilégie des plats simples et bien exécutés — une
            étape qui change du repas de station-service, sans réservation
            nécessaire pour les clients de l'hôtel.
          </p>
        </div>
        <div>
          <ul className="hours-list">
            <li>
              <span>Petit-déjeuner buffet</span>
              <span>6h30 – 9h30</span>
            </li>
            <li>
              <span>Petit-déjeuner (week-end)</span>
              <span>jusqu'à 10h00</span>
            </li>
            <li>
              <span>Restaurant</span>
              <span>fermé samedi et dimanche</span>
            </li>
            <li>
              <span>Bar</span>
              <span>réservé aux clients</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
