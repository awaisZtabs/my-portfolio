export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-[13px] text-[color:var(--muted)]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © <time suppressHydrationWarning dateTime={String(year)}>{year}</time> — Built with Next.js
        </p>
        <p>Deployed on Vercel</p>
      </div>
    </footer>
  );
}
