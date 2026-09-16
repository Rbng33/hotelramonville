import { REVIEWS } from "../data.js";

export default function Reviews() {
  return (
    <section id="avis">
      <h2 className="section-title display">Ce qu'en disent les voyageurs</h2>
      <p className="section-sub">
        Un aperçu des retours les plus fréquents — à remplacer par de vrais
        avis vérifiés avant mise en ligne.
      </p>
      <div className="reviews-grid">
        {REVIEWS.map((r) => (
          <div className="review" key={r.who}>
            <p>"{r.quote}"</p>
            <span>{r.who}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
