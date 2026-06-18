"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { profile } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import { ArrowRight, Mail } from "./icons";
import { MagneticButton } from "./MagneticButton";
import { TypeWriter } from "./TypeWriter";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 pb-16 pt-28"
    >
      {/* Aurora background blobs */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-aurora rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[400px] w-[400px] animate-aurora rounded-full bg-iris/10 blur-3xl [animation-delay:-6s]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* Left column */}
        <motion.div variants={stagger(0.12)} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-2 font-mono text-sm text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mb-4 font-heading text-5xl font-bold leading-tight lg:text-7xl"
          >
            {profile.firstName}
            <br />
            <span className="text-accent">{profile.lastName}</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mb-6 flex h-7 items-center font-mono text-lg text-accent"
          >
            <TypeWriter words={profile.roles} />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-lg text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <MagneticButton
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-ink transition-colors hover:bg-blue-700"
            >
              <Mail className="h-5 w-5" />
              Get in touch
            </MagneticButton>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 rounded-xl border border-edge px-6 py-3 font-semibold text-ink50 transition-colors hover:border-accent hover:text-accent"
            >
              View Projects
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right column: tilting profile card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
}

const stack = ["LangGraph", "LangChain", "FastAPI", "Azure OpenAI", "PostgreSQL", "Qdrant"];

function ProfileCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  function handleMouse(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="animate-float rounded-2xl gradient-border p-px shadow-[0_30px_60px_-20px_rgba(37,99,235,0.28)] [transform-style:preserve-3d]"
    >
      <div className="relative overflow-hidden rounded-2xl bg-surface p-6">
        {/* Abstract blobs */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-accent/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-iris/15 blur-2xl" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: "radial-gradient(circle, #2563EB 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/15">
              <span className="font-heading text-base font-bold text-accent">PJ</span>
            </div>
            <div className="min-w-0">
              <p className="font-heading font-bold text-ink50">{profile.firstName} {profile.lastName}</p>
              <p className="truncate text-sm text-accent">AI Backend Engineer</p>
            </div>
            <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Open to work
            </span>
          </div>

          <div className="mb-4 h-px bg-edge" />

          {/* Stack */}
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-muted">Stack</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-accent/20 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Stat */}
          <div className="rounded-xl border border-accent/20 bg-accent/10 p-4">
            <div className="font-heading text-3xl font-bold text-accent">75%</div>
            <p className="mt-0.5 text-sm text-muted">API cost reduction in production LLM systems</p>
          </div>

          <p className="mt-3 text-xs text-muted">2 yrs · Production LLM Systems</p>
        </div>
      </div>
    </motion.div>
  );
}
