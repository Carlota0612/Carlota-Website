"use client";

import { useState } from "react";
import { siteContent } from "@/content/site";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          Carlota Ortiz
        </a>
        <button
          className="menuButton"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="srOnly">Toggle navigation menu</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <div id="primary-navigation" className={`navLinks ${open ? "isOpen" : ""}`}>
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
