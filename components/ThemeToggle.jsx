"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initial = saved || (systemPrefersLight ? "light" : "dark");
    setMode(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button aria-label="Toggle theme" onClick={toggle} className="pill flex items-center gap-2">
      <span className="w-2 h-2 rounded-full" style={{ background: mode === "dark" ? "#7c5cff" : "#5b7cfa" }} />
      <span suppressHydrationWarning>{mode === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
