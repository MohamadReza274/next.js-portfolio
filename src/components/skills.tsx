"use client";
import { useTransition } from "react";
import useReveal from "../hooks/use-reveal";
import { useTranslations } from "next-intl";

const GROUPS = [
  {
    key: "frontend",
    label: "Front-End",
    comment: "// what I build interfaces with",
  },
  {
    key: "backend",
    label: "Back-End",
    comment: "// how I handle data & logic",
  },
  { key: "tools", label: "Tools & Workflow", comment: "// how I ship" },
  { key: "soft", label: "Soft Skills", comment: "// how I work with people" },
];

export default function Skills() {
  const ref = useReveal();
  const t = useTranslations("skills");

  return (
    <section id="skills">
      <div className="container-px py-16 sm:py-20">
        <div ref={ref as any} className="reveal">
          <p className="eyebrow mb-4">{t("title")}</p>
          <h2 className="section-heading">
            {t.rich("heading", {
              highlight: (chunks) => (
                <span className="text-mint-400">{chunks}</span>
              ),
            })}
          </h2>
          <p className="section-sub">{t("description")}</p>

          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {GROUPS.map((group) => (
              <div
                key={group.key}
                className="card p-6 card-hover-glow card-hover-scale transition-transform duration-300"
              >
                <p className="font-mono text-[11px] text-paper-500 mb-1">
                  {group.comment}
                </p>
                <h3 className="font-display text-lg font-semibold text-paper-100 mb-4">
                  {group.label}
                </h3>
                {/* <div className="flex flex-wrap gap-2">
                  {skills[group.key].map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded-full border border-ink-border text-paper-300 hover:border-mint-500/40 hover:text-mint-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
