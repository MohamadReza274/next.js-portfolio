"use client";
import useData from "@/hooks/use-data";
import useReveal from "../hooks/use-reveal";
import { useTranslations } from "next-intl";

export default function Experience() {
  const ref = useReveal();
  const { experience } = useData();
  const exp = useTranslations("experience");

  return (
    <section id="experience" className="container-px py-16 sm:py-20">
      <div ref={ref as any} className="reveal">
        <p className="eyebrow mb-4">{exp("title")}</p>
        <h2 className="section-heading">
          {exp.rich("heading", {
            highlight: (chunks) => (
              <span className="text-mint-400">{chunks}</span>
            ),
          })}
        </h2>
        <p className="section-sub">{exp("description")}</p>

        <div className="mt-14 space-y-6">
          {experience.map((job) => (
            <div
              key={job.id}
              className="card p-6 sm:p-8 card-hover-glow card-hover-scale transition-transform duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-paper-100">
                    {job.role}
                  </h3>
                  <p className="text-mint-400 mt-1">{job.company}</p>
                </div>
                <span className="font-mono text-xs text-paper-500 border border-ink-border rounded-full px-3 py-1.5 shrink-0">
                  {job.period}
                </span>
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-paper-300 text-sm leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-mint-500/10 text-mint-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
