"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { skillGroups } from "@/lib/data";
import { iconMap, type IconKey } from "./icons";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Skills() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // Scrub reveals only on desktop, and only when motion is welcome.
      // On mobile / reduced-motion the cards keep their default visible state.
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.utils.toArray<HTMLElement>(".skill-card").forEach((card) => {
            gsap.fromTo(
              card,
              { opacity: 0.15, y: 48, scale: 0.96 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top 92%",
                  end: "top 58%",
                  scrub: true,
                },
              }
            );
          });
        }
      );
    },
    { scope: root }
  );

  return (
    <section id="skills" className="relative scroll-mt-24 px-6 py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent" />
      <div
        ref={root}
        className="relative mx-auto max-w-6xl lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-14"
      >
        {/* Left: heading sticks while the cards scrub past on the right */}
        <div className="mb-12 lg:sticky lg:top-28 lg:mb-0 lg:h-fit lg:self-start">
          <h2 className="font-heading text-4xl font-bold lg:text-5xl">
            Core Competencies
          </h2>
          <p className="mt-5 max-w-xs text-muted">
            The stack behind the systems I ship, from LLM orchestration down to
            the data layer.
          </p>
        </div>

        {/* Right: skill groups */}
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon as IconKey];
            return (
              <div
                key={group.title}
                className="skill-card rounded-2xl glass border border-surface p-6 transition-colors hover:border-accent/30"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-heading font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-lg border border-edge bg-ink px-3 py-1.5 font-mono text-xs text-muted transition-all hover:-translate-y-0.5 hover:border-accent/45 hover:bg-accent/10 hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
