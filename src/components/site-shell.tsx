"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight, Menu, Search, X } from "lucide-react";
import { CommandPalette } from "@/components/command-palette";
import { getBannerCopy } from "@/lib/content/election";
import { footerColumns, navItems } from "@/lib/data";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`logo ${inverse ? "logo-inverse" : ""}`} aria-label="Kingdom Civics home">
      <span className="logo-mark" aria-hidden="true">
        <span className="logo-crown">✦</span>
        <span className="logo-arch" />
      </span>
      <span className="logo-words">
        <strong>KINGDOM</strong>
        <span>CIVICS</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [banner, setBanner] = useState("This weekend · Community polls Sat–Sun · 10 a.m.–6 p.m. · Bring ID");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    setBanner(getBannerCopy());
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="top-note">
        <span>{banner}</span>
        <Link href="/elections">Election hub <ChevronRight size={13} /></Link>
      </div>
      <div className="nav-wrap">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="icon-button"
            aria-label="Search (⌘K)"
            onClick={() => window.dispatchEvent(new Event("kingdom-civics:open-search"))}
          >
            <Search size={19} />
          </button>
          <Link href="/my-civics" className="button button-small button-ghost">My Civics</Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <>
          <button type="button" className="mobile-nav-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<ChevronRight size={16} /></Link>)}
            <Link href="/start" onClick={() => setOpen(false)}>Start here <ChevronRight size={16} /></Link>
            <Link href="/scripture" onClick={() => setOpen(false)}>Scripture <ChevronRight size={16} /></Link>
            <Link href="/my-civics" onClick={() => setOpen(false)}>My Civics <ChevronRight size={16} /></Link>
            <Link href="/search" onClick={() => setOpen(false)}>Search <ChevronRight size={16} /></Link>
          </nav>
        </>
      )}
    </header>
    <CommandPalette />
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Logo inverse />
          <p>Helping the Church understand government, discern leadership, pray faithfully, and serve with humility.</p>
          <span className="eyebrow gold-text">A ministry of Thy Kingdom Network</span>
        </div>
        {footerColumns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2026 Thy Kingdom Network</span>
        <span>Educational research, not a candidate endorsement.</span>
        <span className="footer-credit">
          Made with <span aria-label="love">❤️</span> by{" "}
          <a href="https://www.danielziedins.com" target="_blank" rel="noopener noreferrer">Daniel Ziedins</a>
        </span>
        <strong>KINGDOM FIRST.</strong>
      </div>
    </footer>
  );
}
