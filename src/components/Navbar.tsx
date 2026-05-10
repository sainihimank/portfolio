"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Paintbrush } from "lucide-react";
import Image from "next/image";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#other", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [oceanTheme, setOceanTheme] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return localStorage.getItem("theme") === "ocean";
  });

  useEffect(() => {
    const onScroll = () => {
      const ids = navItems.map((item) => item.href.replace("#", ""));
      let current = ids[0];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 130) {
          current = ids[i];
          break;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (oceanTheme) {
      document.documentElement.setAttribute("data-theme", "ocean");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [oceanTheme]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !oceanTheme;
    setOceanTheme(next);
    if (next) {
      root.setAttribute("data-theme", "ocean");
      localStorage.setItem("theme", "ocean");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "default");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6">
      <nav className="section">
        <div className="mx-auto flex h-14 max-w-fit items-center gap-1 rounded-full glass-strong px-3 shadow-xl shadow-black/10">
          <div className="mr-1 h-9 w-9 overflow-hidden rounded-full border border-(--card-border) bg-white/60">
            <Image src="/profile-top-placeholder.svg" alt="Profile" width={36} height={36} />
          </div>

          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-full px-3 py-2 text-sm font-semibold"
                style={{ color: isActive ? "var(--foreground)" : "var(--muted)" }}
              >
                {isActive ? (
                  <motion.span
                    layoutId="template-nav-indicator"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "var(--accent)",
                      opacity: 0.14,
                      border: "1px solid var(--accent)",
                    }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}

          <button
            type="button"
            onClick={toggleTheme}
            className="ml-1 rounded-full border border-(--card-border) bg-(--card) p-2 text-(--foreground) transition hover:bg-(--accent)/20"
            aria-label="Toggle ocean theme"
            title="Apply cyan theme"
          >
            <Paintbrush size={16} />
          </button>
        </div>
      </nav>
    </header>
  );
}
