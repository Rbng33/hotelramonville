import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { Hero, Facts } from "./components/Hero.jsx";
import Rooms from "./components/Rooms.jsx";
import Restaurant from "./components/Restaurant.jsx";
import Seminars from "./components/Seminars.jsx";
import Access from "./components/Access.jsx";
import Reviews from "./components/Reviews.jsx";
import Contact from "./components/Contact.jsx";
import Gallery from "./components/Gallery.jsx";
import { NAV } from "./data.js";

export default function App() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page">
      <Navbar active={active} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Facts />
      <hr className="rule" />
      <Gallery />
      <hr className="rule" />
      <Rooms />
      <hr className="rule" />
      <Restaurant />
      <hr className="rule" />
      <Seminars />
      <hr className="rule" />
      <Access />
      <hr className="rule" />
      <Reviews />
      <Contact />
      <footer>
        Comfort Hotel Ramonville — site vitrine de démonstration, non affilié à Choice Hotels.
      </footer>
    </div>
  );
}
