export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        {(title || subtitle) && (
          <div className="mb-6">
            {title && (
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-1 text-[--muted] text-sm sm:text-base">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

