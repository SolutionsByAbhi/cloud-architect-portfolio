import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Enterprise Cloud Migration",
    subtitle: "On-prem to AWS in 12 months",
    description:
      "Led a phased migration of 200+ services, implementing landing zones, network segmentation, and automated guardrails.",
    tags: ["AWS", "Landing Zone", "Security"]
  },
  {
    title: "Event-Driven Data Platform",
    subtitle: "Real-time analytics at scale",
    description:
      "Designed a streaming architecture with Kafka, object storage, and serverless consumers for near real-time insights.",
    tags: ["Streaming", "Data Platform", "Serverless"]
  },
  {
    title: "Zero Trust Network",
    subtitle: "Secure-by-default architecture",
    description:
      "Implemented identity-aware access, mTLS, and policy-as-code for internal and external services.",
    tags: ["Zero Trust", "mTLS", "Policy-as-Code"]
  },
  {
    title: "Developer Experience Revamp",
    subtitle: "From tickets to self-service",
    description:
      "Introduced internal portals, templates, and paved roads to reduce lead time and cognitive load for teams.",
    tags: ["DevEx", "Platform", "Templates"]
  }
];

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-50">Projects</h1>
        <p className="mt-2 text-sm text-slate-300">
          A selection of cloud, platform, and reliability work that showcases
          how I approach real-world problems.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
