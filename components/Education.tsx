"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { scaleIn, viewportOnce } from "@/lib/motion";
import { Cap } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>where I studied</SectionHeading>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl rounded-2xl glass border border-surface p-8 transition-colors hover:border-accent/25"
        >
          <div className="flex items-start gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
              <Cap className="h-7 w-7" />
            </div>
            <div>
              <h3 className="mb-1 font-heading text-lg font-bold">{education.degree}</h3>
              <div className="mb-1 text-sm font-semibold text-accent">{education.school}</div>
              <div className="mb-3 text-sm text-muted">{education.place}</div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-lg border border-edge bg-surface px-3 py-1.5 font-mono text-xs text-muted">
                  {education.year}
                </span>
                <span className="rounded-lg border border-accent/20 bg-accent/10 px-3 py-1.5 font-mono text-xs text-accent">
                  {education.grade}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
