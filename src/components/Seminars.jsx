import { SALONS } from "../data.js";

export default function Seminars() {
  return (
    <section id="seminaires">
      <h2 className="section-title display">Séminaires et réunions</h2>
      <p className="section-sub">
        Cinq salons modulables pour accueillir de 10 à 150 personnes, journées
        d'étude comme banquets.
      </p>
      <div className="salons-grid">
        {SALONS.map((s) => (
          <div className="salon" key={s.name}>
            <h3 className="display">{s.name}</h3>
            <div className="cap">{s.cap}</div>
            <div className="use">{s.use}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
