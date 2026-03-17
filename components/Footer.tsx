export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Cloud Architect Portfolio</p>
        <p className="flex gap-3">
          <span>LinkedIn</span>
          <span>GitHub</span>
          <span>Twitter/X</span>
        </p>
      </div>
    </footer>
  );
}
