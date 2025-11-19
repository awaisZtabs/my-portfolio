import ThemeToggle from "./ThemeToggle";
import site from "../data/site";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 glass lg:hidden">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg" style={{
            background: "linear-gradient(135deg, var(--primary), #6ee7b7)",
          }} />
          <div className="text-sm">
            <div className="font-semibold tracking-tight">{site.name}</div>
            <div className="text-[12px] text-[color:var(--muted)]">{site.role}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#projects" className="pill hidden sm:inline">Projects</a>
          <a href="#experience" className="pill hidden sm:inline">Experience</a>
          <a href="#skills" className="pill hidden sm:inline">Skills</a>
          <a href="#contact" className="pill hidden sm:inline">Contact</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
