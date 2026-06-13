"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { Check, iconMap, type IconKey } from "./icons";
import { SectionHeading } from "./SectionHeading";

type Project = (typeof projects)[number];

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 px-6 py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading>What I&apos;ve Built</SectionHeading>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Grow into place as it enters, settle back and dim as it leaves the top.
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.78, 1], [0.92, 1, 1, 0.97]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.82, 1], [0.45, 1, 1, 0.6]);

  const Icon = iconMap[project.icon as IconKey];

  return (
    <motion.article
      ref={ref}
      style={reduce ? undefined : { scale, opacity }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group cursor-default overflow-hidden rounded-2xl glass border border-surface transition-shadow hover:border-accent/30 hover:shadow-[0_24px_64px_-12px_rgba(37,99,235,0.18)]"
    >
      {/* Header */}
      <div className="relative overflow-hidden border-b border-surface bg-gradient-to-br from-surface to-ink p-6">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
        <div className="relative">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
              <Icon className="h-6 w-6" />
            </div>
            <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
              {project.duration}
            </span>
          </div>
          <h3 className="font-heading text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-muted">{project.subtitle}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="mb-5 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mb-6 space-y-3">
          {project.achievements.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-xs text-muted">{item}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface px-2 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
