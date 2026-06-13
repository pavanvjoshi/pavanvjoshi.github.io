"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { fadeUp, fromRight, stagger, viewportOnce } from "@/lib/motion";
import { Calendar } from "./icons";
import { SectionHeading } from "./SectionHeading";

/**
 * Renders inline emphasis markers from the data file:
 *   **bold**  -> white/medium    ::text:: -> accent green    __text__ -> red
 */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.+?\*\*|::.+?::|__.+?__)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**")) {
          return (
            <span key={i} className="font-semibold text-ink50">
              {part.slice(2, -2)}
            </span>
          );
        }
        if (part.startsWith("::")) {
          return (
            <span key={i} className="font-medium text-accent">
              {part.slice(2, -2)}
            </span>
          );
        }
        if (part.startsWith("__")) {
          return (
            <span key={i} className="font-semibold text-[#EF4444]">
              {part.slice(2, -2)}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>Where I&apos;ve Worked</SectionHeading>

        <div className="relative">
          {/* Timeline spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute bottom-0 left-8 top-0 hidden w-px origin-top bg-gradient-to-b from-accent via-iris to-transparent lg:block"
          />

          <div className="space-y-8 lg:pl-20">
            {experience.map((job) => (
              <motion.div
                key={job.company}
                variants={fromRight}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="relative rounded-2xl glass border border-surface p-8 transition-colors hover:border-accent/30"
              >
                {/* Timeline node */}
                <span className="absolute -left-[3.75rem] top-8 hidden h-4 w-4 rounded-full border-4 border-ink bg-accent lg:block">
                  {job.current && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
                  )}
                </span>

                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold">{job.role}</h3>
                    <div className="mt-1 font-semibold text-accent">{job.company}</div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 rounded-lg border border-edge bg-surface px-4 py-2 font-mono text-sm text-muted">
                    <Calendar className="h-4 w-4" />
                    {job.period}
                  </div>
                </div>

                <motion.ul
                  variants={stagger(0.08)}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="mb-6 space-y-4"
                >
                  {job.points.map((point, i) => (
                    <motion.li key={i} variants={fadeUp} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <p className="text-sm leading-relaxed text-muted">
                        <RichText text={point} />
                      </p>
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="flex flex-wrap gap-2 border-t border-surface pt-6">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
