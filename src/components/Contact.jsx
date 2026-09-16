import { HOTEL } from "../data.js";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-wrap">
        <div className="contact-info">
          <div>
            <h2 className="section-title display" style={{ marginBottom: 14 }}>
              Nous contacter
            </h2>
            <p className="section-sub">
              Pour toute demande de réservation ou d'information, contactez-nous
              directement.
            </p>
            <div className="contact-detail">
              <span>Email</span>
              <span>comfort.toulouse@dalmatahospitality.com</span>
            </div>
            <div className="contact-detail">
              <span>Téléphone</span>
              <a href={`tel:${HOTEL.phoneHref}`}>{HOTEL.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
