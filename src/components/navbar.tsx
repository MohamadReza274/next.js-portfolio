"use client";
import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from "./Icons";
import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import LocaleSwitcher from "./locale-switcher";
import { useTranslations } from "next-intl";
import useData from "@/hooks/use-data";
import { Button } from "./ui/button";

export default function Navbar() {
  const { navLinks, profile } = useData();
  const [scrolled, setScrolled] = useState(false);
  const about = useTranslations("about");
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full max-w-[100vw] overflow-x-hidden transition-colors duration-300 ${
        scrolled ? "bg-ink-900/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-px flex items-center justify-between h-20 w-full min-w-0 max-w-full">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group min-w-0">
          <span className="relative w-10 h-10 flex-shrink-0 rounded-xl overflow-hidden border-2 border-mint-400 shadow-lg shadow-mint-500/20">
            <Image
              loading="eager"
              width={80}
              height={80}
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover object-center"
            />
          </span>

          <span className="flex flex-col leading-none min-w-0">
            <span className="font-display text-sm font-semibold text-paper-100 group-hover:text-mint-400 transition-colors tracking-wide">
              {about("values.name")}
            </span>

            <span className="font-mono text-[10px] tracking-[0.2em] text-paper-500 uppercase mt-1">
              {about("values.role")}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-paper-300 hover:text-mint-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="ms-3 flex flex-shrink-0 items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <LocaleSwitcher />
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-mint-500/40 text-mint-400 px-4 py-2 text-sm font-medium hover:bg-mint-500/10 transition-colors"
          >
            {t("talk")}
          </a>

          {/* Mobile Menu Button */}
          <Button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            variant="ghost"
            size="icon-lg"
            className="h-10 w-10 flex-shrink-0 p-0 text-paper-100 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <CloseIcon width={22} height={22} />
            ) : (
              <MenuIcon width={22} height={22} />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-navigation"
          className="lg:hidden w-full overflow-x-clip border-t border-ink-border/14 bg-ink-900/95 backdrop-blur-md"
        >
          <ul className="flex flex-col container-px py-4 gap-1 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-paper-300 hover:text-mint-400 border-b border-ink-border/60 last:border-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
