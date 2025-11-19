"use client";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons.jsx";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("theme");
    const initial = saved || (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  }

  return (
    <button aria-label="Toggle theme" className="pill flex items-center gap-2" onClick={toggle}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      <span className="hidden sm:inline text-xs">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}

