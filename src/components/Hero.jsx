import { FACTS } from "../data.js";
import { FacadeIllustration } from "./Illustrations.jsx";

export function Hero({ scrollTo }) {
  return (
    <section className="hero">
      <div>
        <div className="hero-eyebrow">Ramonville-Saint-Agne, sud de Toulouse</div>
        <h1 className="display">Une étape confortable au carrefour des deux mers</h1>
        <p>
          Hôtel 3 étoiles au calme, à quinze minutes du Capitole, pensé pour les
          voyageurs d'affaires comme pour les familles de passage vers Carcassonne
          ou Albi.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            Vérifier les disponibilités
          </button>
          <button className="btn-ghost" onClick={() => scrollTo("chambres")}>
            Voir les chambres
          </button>
        </div>
      </div>
      <FacadeIllustration />
    </section>
  );
}

export function Facts() {
  return (
    <div className="facts">
      {FACTS.map((f) => (
        <div className="fact" key={f.lbl}>
          <span className="num">{f.num}</span>
          <span className="lbl">{f.lbl}</span>
        </div>
      ))}
    </div>
  );
}
