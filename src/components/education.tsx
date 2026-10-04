"use client";
import useData from "@/hooks/use-data";
import useReveal from "../hooks/use-reveal";
import { useTranslations } from "next-intl";

export default function Education() {
  const ref = useReveal();
  const { education, certifications } = useData();
  const t = useTranslations("certifications");
  const ed = useTranslations("education");

  return (
    <section id="education" className="container-px py-16 sm:py-20">
      <div ref={ref as any} className="reveal">
        <p className="eyebrow mb-4 justify-center">{ed("title")}</p>
        <h2 className="section-heading text-center mx-auto">
          {ed.rich("heading", {
            highlight: (chunks) => (
              <span className="text-mint-400">{chunks}</span>
            ),
          })}
        </h2>
        <p className="section-sub text-center mx-auto">{ed("description")}</p>

        {/* timeline */}
        <div className="mt-16 relative">
          <div className="hidden md:block absolute inset-x-0 top-6 h-px bg-ink-border" />
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, i) => (
              <div key={edu.id} className="relative">
                <div className="hidden md:flex absolute -top-[2.15rem] start-6 w-3 h-3 rounded-full bg-mint-500 ring-4 ring-ink-900" />
                <div className="card p-6 h-full card-hover-glow card-hover-scale transition-transform duration-300">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-xs text-mint-400 border border-mint-500/30 rounded-full px-3 py-1">
                      {edu.period}
                    </span>
                    <span className="font-mono text-[11px] text-paper-500">
                      {edu.meta}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-paper-100">
                    {edu.degree}
                  </h3>
                  <p className="text-mint-400 text-sm mt-1">{edu.field}</p>
                  <p className="text-paper-500 text-sm mt-3">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* certifications */}
        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-500 mb-5">
            // {t("heading")}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="flex items-start gap-4 card p-5 card-hover-glow card-hover-scale transition-transform duration-300"
              >
                <span className="mt-1 w-2 h-2 rounded-sm bg-mint-500 shrink-0" />
                <div>
                  <p className="text-paper-100 font-medium leading-snug">
                    {cert.title}
                  </p>
                  <p className="text-paper-500 text-sm mt-1">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
