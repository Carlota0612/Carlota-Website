"use client";

import { useState } from "react";
import type { SectionId } from "@/content/site";

type NavItem = { sectionId: SectionId; navLabel: string; visible: boolean; order: number };

export function Nav({ name, items }: { name: string; items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const navItems = items.filter((item) => item.visible).sort((a, b) => a.order - b.order);

  return (
    <header className="siteHeader">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>{name}</a>
        <button className="menuButton" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>
          <span className="srOnly">Toggle navigation menu</span><span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        </button>
        <div id="primary-navigation" className={`navLinks ${open ? "isOpen" : ""}`}>
          {navItems.map((item) => <a key={item.sectionId} href={`#${item.sectionId}`} onClick={() => setOpen(false)}>{item.navLabel}</a>)}
        </div>
      </nav>
    </header>
  );
}
