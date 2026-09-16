import { ROOMS } from "../data.js";

export default function Rooms() {
  return (
    <section id="chambres">
      <h2 className="section-title display">Chambres</h2>
      <p className="section-sub">
        Deux bâtiments, un même niveau de confort : climatisation, literie
        soignée et salle de bain complète dans chaque chambre.
      </p>
      <div className="rooms-grid">
        {ROOMS.map((r) => (
          <div className="room" key={r.name}>
            <h3 className="display">{r.name}</h3>
            <p>{r.desc}</p>
            <div className="tag">{r.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
