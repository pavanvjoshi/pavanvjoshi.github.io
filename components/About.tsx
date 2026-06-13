"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";
import { fadeUp, fromLeft, fromRight, stagger, viewportOnce } from "@/lib/motion";
import { iconMap, type IconKey } from "./icons";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.h2
            variants={fadeUp}
            className="mb-6 font-heading text-4xl font-bold lg:text-5xl"
          >
            {about.heading[0]} <span className="text-accent">{about.heading[1]}</span>
            <br />
            {about.heading[2]}
          </motion.h2>
          {about.paragraphs.map((p, i) => (
            <ScrollReveal
              key={i}
              text={p}
              className="mb-5 text-lg leading-relaxed text-muted"
            />
          ))}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
            {about.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-edge bg-surface px-3 py-2 font-mono text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Capability cards */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4"
        >
          {about.highlights.map((card, i) => {
            const Icon = iconMap[card.icon as IconKey];
            return (
              <motion.div
                key={card.title}
                variants={i % 2 === 0 ? fromLeft : fromRight}
                whileHover={{ y: -4 }}
                className="cursor-default rounded-2xl glass border border-surface p-6 transition-colors hover:border-accent/25"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mb-1 font-heading text-sm font-semibold">{card.title}</div>
                <div className="text-xs leading-relaxed text-muted">{card.text}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
