"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Sticky-header background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section detection
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape and lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16">
        <a
          href="#top"
          aria-label={`${profile.name} — home`}
          className="group inline-flex items-center gap-2 font-bold tracking-tight rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent2 text-white text-sm font-extrabold shadow-md shadow-accent/30 transition-transform group-hover:scale-105"
          >
            AS
          </span>
          <span className="hidden sm:inline text-foreground text-base">
            Abhijeet
            <span className="text-foreground/50">.dev</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 lg:gap-8"
        >
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative text-sm transition-colors outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-accent/60 ${
                  isActive
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  aria-hidden
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-accent motion-safe:transition-all motion-safe:duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}

          <span className="h-5 w-px bg-border" aria-hidden />

          <a
            href={profile.resumeUrl}
            download
            aria-label="Download resume PDF"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <FileText size={15} />
            Resume
          </a>
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-accent/40"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="size-9 inline-flex items-center justify-center rounded-lg border border-border bg-surface/60 text-foreground hover:border-accent/40 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-t border-border bg-bg/95 backdrop-blur-md motion-safe:transition-[max-height,opacity] motion-safe:duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile"
          className="container-x py-4 flex flex-col gap-1"
        >
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-center gap-3 text-sm py-3 px-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-foreground bg-surface/60"
                    : "text-foreground/70 hover:text-foreground hover:bg-surface/40"
                }`}
              >
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    isActive ? "bg-accent" : "bg-foreground/20"
                  }`}
                />
                {link.label}
              </a>
            );
          })}

          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
            <a
              href={profile.resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="btn-ghost flex-1 justify-center !py-2.5"
            >
              <FileText size={15} />
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary flex-1 justify-center !py-2.5"
            >
              Hire Me
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
