type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags
}: ProjectCardProps) {
  return (
    <div className="gradient-border rounded-xl bg-slate-900/60 p-[1px]">
      <div className="h-full rounded-xl bg-slate-950/90 p-4">
        <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
        <p className="mt-1 text-xs text-sky-300">{subtitle}</p>
        <p className="mt-3 text-xs text-slate-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="rounded-full bg-slate-900 px-2 py-1 text-[10px] font-medium text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
