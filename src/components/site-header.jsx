"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const navItems = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#educacion", label: "Educación" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

const whatsappUrl = "https://wa.me/5492926402409";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const closeOnDesktop = (event) => {
      if (event.matches) setIsOpen(false);
    };

    const desktopQuery = window.matchMedia("(min-width: 901px)");
    desktopQuery.addEventListener("change", closeOnDesktop);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      desktopQuery.removeEventListener("change", closeOnDesktop);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`topbar ${isOpen ? "menu-open" : ""}`}>
      <a
        href="#inicio"
        className="wordmark"
        aria-label="Ir al inicio"
        onClick={closeMenu}
      >
        NICOLÁS PLACENTE
      </a>

      <nav
        id="primary-navigation"
        aria-label="Navegación principal"
        data-open={isOpen}
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a
          href={whatsappUrl}
          className="connect-button"
          target="_blank"
          rel="noreferrer"
        >
          <span>Conectar</span>
          <IconBrandWhatsapp size={16} />
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
