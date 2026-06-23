import Link from "next/link";

export function ServiceCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-6 hover:border-pool-500/50 hover:shadow-lg hover:shadow-pool-500/5 transition-all"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-pool-600 group-hover:text-pool-700 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-pool-700">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
        {description}
      </p>
      <span className="mt-4 text-sm font-medium text-pool-600 group-hover:text-pool-700">
        Learn more &rarr;
      </span>
    </Link>
  );
}
