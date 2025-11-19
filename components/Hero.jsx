import site from "../data/site";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-4 lg:pt-6 pb-10">
      <div className="inline-flex items-center gap-2 pill mb-5">
        <span className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
        Available for working student, intern & part-time roles
      </div>
      <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
        Crafting delightful, scalable products as a
        <span className="text-[color:var(--primary)]"> full‑stack</span> engineer.
      </h1>
      <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[color:var(--muted)]">
        {site.summary}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="btn">Explore projects</a>
        <a href={`mailto:${site.email}`} className="pill">Contact me</a>
        <a
          href="https://flowcv.com/resume/5ot0nn7hv1ow"
          target="_blank"
          rel="noreferrer"
          className="pill"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
