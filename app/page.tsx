import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="grid gap-8 md:grid-cols-[2fr,1.3fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Cloud Architect • AI enthusiast • Systems Integration Specialist
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-50 md:text-4xl">
            Designing resilient, scalable cloud platforms for ambitious teams.
          </h1>
          <p className="mt-4 text-sm text-slate-300">
            I specialize in cloud-native architectures, platform reliability, and
            enabling engineering teams to ship fast without breaking things.
            From greenfield builds to large-scale migrations, I help turn
            infrastructure into a competitive advantage.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full bg-sky-500/20 px-3 py-1 text-sky-300">
              AWS | Azure | GCP
            </span>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300">
              Kubernetes
            </span>
            <span className="rounded-full bg-violet-500/15 px-3 py-1 text-violet-300">
              SRE & Observability
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="gradient-border h-40 w-40 rounded-3xl bg-slate-900/60 p-[1px] md:h-48 md:w-48">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-slate-950/90 text-center text-xs text-slate-300">
              <span className="text-[11px] uppercase tracking-[0.2em] text-sky-400">
                Cloud Architect
              </span>
              <span className="mt-2 text-sm font-semibold text-slate-50">
                Your Name
              </span>
              <span className="mt-2 text-[11px] text-slate-400">
                Frankfurt • Remote • Global
              </span>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-100">
            Featured Cloud Projects
          </h2>
          <span className="text-[11px] text-slate-500">
            Curated work from recent engagements
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <ProjectCard
            title="Global Multi-Region Platform"
            subtitle="99.99% uptime across 3 clouds"
            description="Designed an active-active architecture spanning AWS and Azure with automated failover, IaC, and full observability."
            tags={["Multi-region", "IaC", "Zero-downtime"]}
          />
          <ProjectCard
            title="Cloud Cost Optimization"
            subtitle="35% reduction in 6 months"
            description="Introduced FinOps practices, rightsizing, and autoscaling strategies for a high-traffic SaaS platform."
            tags={["FinOps", "Autoscaling", "SaaS"]}
          />
          <ProjectCard
            title="Kubernetes Platform Build"
            subtitle="Developer platform for 40+ teams"
            description="Built a secure, self-service platform with GitOps, service mesh, and golden paths for microservices."
            tags={["Kubernetes", "GitOps", "Platform Engineering"]}
          />
        </div>
      </section>
    </section>
  );
}
