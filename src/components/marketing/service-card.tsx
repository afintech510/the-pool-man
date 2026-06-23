import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 hover:border-pool-300 hover:shadow-lg transition-all duration-200"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-pool-50 text-pool-600 group-hover:bg-pool-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-slate-900 group-hover:text-pool-700">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-slate-500 leading-relaxed flex-1">
        {description}
      </p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-pool-600 group-hover:text-pool-700">
        Learn more
        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
}
