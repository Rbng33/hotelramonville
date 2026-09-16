import { useState } from "react";
import { NAV, HOTEL } from "../data.js";

export default function Navbar({ active, scrollTo }) {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <img className="brand-logo" src="/logo.png" alt={HOTEL.name} />
        </div>
        <div className="nav-links">
          {NAV.map((n) => (
            <button
              key={n.id}
              className={active === n.id ? "is-active" : ""}
              onClick={() => handleClick(n.id)}
            >
              {n.label}
            </button>
          ))}
        </div>
        <button className="nav-cta" onClick={() => handleClick("contact")}>
          Réserver
        </button>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          ☰
        </button>
      </div>
      {open && (
        <div className="nav-mobile">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => handleClick(n.id)}>
              {n.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
