export default function SrePage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-50">
          Site Reliability Engineering
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          Blending software engineering and operations to keep systems reliable,
          observable, and fast.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 text-xs">
          <h2 className="text-sm font-semibold text-slate-50">
            Reliability Practices
          </h2>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>• SLOs, error budgets, and user-centric reliability</li>
            <li>• Incident response, runbooks, and post-incident reviews</li>
            <li>• Capacity planning and performance testing</li>
            <li>• Chaos experiments to validate assumptions</li>
          </ul>
        </div>

        <div className="gradient-border rounded-xl bg-slate-900/60 p-[1px]">
          <div className="rounded-xl bg-slate-950/90 p-4 text-xs">
            <h2 className="text-sm font-semibold text-slate-50">
              Observability Stack
            </h2>
            <p className="mt-2 text-slate-300">
              I typically work with open standards and cloud-native tooling:
            </p>
            <ul className="mt-3 space-y-1 text-slate-300">
              <li>• OpenTelemetry for traces and metrics</li>
              <li>• Centralized logging pipelines</li>
              <li>• Dashboards aligned to SLOs, not just infrastructure</li>
              <li>• Alerting tuned to reduce noise and fatigue</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
