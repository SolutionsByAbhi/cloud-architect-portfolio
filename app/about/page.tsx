export default function AboutPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-50">About</h1>
        <p className="mt-2 text-sm text-slate-300">
          A bit more context on who I am, how I work, and what I care about in
          cloud and reliability.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 text-xs text-slate-300">
          <p>
            A senior cloud architect with more than a decade of experience designing and delivering enterprise‑grade cloud platforms across AWS and Azure, helping teams design,
            migrate, and operate systems in the cloud—from early-stage startups
            to large enterprises. My focus is always the same: align technology
            decisions with business outcomes, and make reliability a shared
            responsibility.
          </p>
          <p className="mt-3">
            I enjoy working at the intersection of architecture, SRE, and
            developer experience: building platforms that are secure, reliable,
            and actually pleasant to use.
          </p>
          <p className="mt-3">
            Outside of work, you&apos;ll usually find me exploring new
            observability tools, sketching architectures, or sharing learnings
            with the community.
          </p>
        </div>

        <div className="space-y-4 text-xs">
          <div className="rounded-xl bg-slate-950/80 p-4">
            <h2 className="text-sm font-semibold text-slate-50">
              Core Skills
            </h2>
            <ul className="mt-2 space-y-1 text-slate-300">
              <li>• Cloud architecture (AWS, Azure, GCP)</li>
              <li>• Kubernetes, containers, and service mesh</li>
              <li>• IaC (Terraform, Bicep, CloudFormation)</li>
              <li>• SRE, observability, and incident management</li>
            </ul>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-4">
            <h2 className="text-sm font-semibold text-slate-50">
              Open to Collaborations
            </h2>
            <p className="mt-2 text-slate-300">
              Speaking, advisory, and hands-on architecture or SRE engagements.
              Best fit: teams serious about reliability and scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
