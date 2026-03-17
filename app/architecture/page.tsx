export default function ArchitecturePage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-50">
          Cloud Architecture
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          Opinionated, pragmatic cloud designs focused on resilience, security,
          and speed of delivery.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="gradient-border rounded-xl bg-slate-900/60 p-[1px]">
          <div className="rounded-xl bg-slate-950/90 p-4 text-sm">
            <h2 className="text-sm font-semibold text-slate-50">
              Reference Architecture
            </h2>
            <p className="mt-2 text-xs text-slate-300">
              I favor modular, layered architectures: clear separation between
              edge, services, data, and platform capabilities. Everything is
              codified, observable, and designed for failure.
            </p>
            <ul className="mt-3 space-y-1 text-xs text-slate-300">
              <li>• Multi-account / multi-subscription strategy</li>
              <li>• Network segmentation and private connectivity</li>
              <li>• Centralized identity and policy management</li>
              <li>• Golden paths for common workloads</li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 text-xs">
          <h3 className="text-sm font-semibold text-slate-50">
            Design Principles
          </h3>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>
              <span className="font-semibold text-sky-300">Resilience:</span>{" "}
              Assume everything fails—design for graceful degradation and fast
              recovery.
            </li>
            <li>
              <span className="font-semibold text-sky-300">Simplicity:</span>{" "}
              Prefer boring, well-understood components over fragile complexity.
            </li>
            <li>
              <span className="font-semibold text-sky-300">Automation:</span>{" "}
              No manual environments. Everything via pipelines and IaC.
            </li>
            <li>
              <span className="font-semibold text-sky-300">Observability:</span>{" "}
              You can’t operate what you can’t see—logs, metrics, traces by
              default.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
