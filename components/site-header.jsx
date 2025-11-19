import Link from "next/link";
import ThemeToggle from "./theme-toggle.jsx";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:glass">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[--primary] text-[--primary-foreground] text-sm">YN</span>
          <span className="tracking-tight">Your Name</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[--muted]">
          <a href="#projects" className="hover:text-[--foreground]">Projects</a>
          <a href="#experience" className="hover:text-[--foreground]">Experience</a>
          <a href="#skills" className="hover:text-[--foreground]">Skills</a>
          <a href="#contact" className="hover:text-[--foreground]">Contact</a>
          <ThemeToggle />
        </nav>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

