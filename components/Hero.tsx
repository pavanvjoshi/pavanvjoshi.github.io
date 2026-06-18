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

        {/* Right column: tilting code card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <CodeCard />
        </motion.div>
      </div>
    </section>
  );
}

function CodeCard() {
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
      {/* Dark terminal: a contained code block, intentionally dark on the light page */}
      <div className="rounded-2xl bg-[#0B1020] p-6">
        <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
          <span className="h-3 w-3 rounded-full bg-[#EF4444]" />
          <span className="h-3 w-3 rounded-full bg-[#F59E0B]" />
          <span className="h-3 w-3 rounded-full bg-[#22C55E]" />
          <span className="ml-3 font-mono text-sm text-slate-500">pavan.py</span>
        </div>
        <pre className="overflow-x-auto font-mono text-sm leading-loose">
          <code>
            <span className="text-[#7AA2F7]">class </span>
            <span className="text-[#7DCFFF]">PavanJoshi</span>
            <span className="text-[#C0CAF5]">:</span>
            {"\n  "}
            <span className="text-[#7AA2F7]">def </span>
            <span className="text-[#C0CAF5]">__init__(</span>
            <span className="text-[#E0AF68]">self</span>
            <span className="text-[#C0CAF5]">):</span>
            {"\n    "}
            <span className="text-[#E0AF68]">self</span>
            <span className="text-[#C0CAF5]">.role = </span>
            <span className="text-[#9ECE6A]">&quot;AI Backend Engineer&quot;</span>
            {"\n    "}
            <span className="text-[#E0AF68]">self</span>
            <span className="text-[#C0CAF5]">.stack = [</span>
            {"\n      "}
            <span className="text-[#9ECE6A]">&quot;LangGraph&quot;</span>
            <span className="text-[#C0CAF5]">, </span>
            <span className="text-[#9ECE6A]">&quot;LangChain&quot;</span>
            <span className="text-[#C0CAF5]">,</span>
            {"\n      "}
            <span className="text-[#9ECE6A]">&quot;FastAPI&quot;</span>
            <span className="text-[#C0CAF5]">, </span>
            <span className="text-[#9ECE6A]">&quot;Azure OpenAI&quot;</span>
            <span className="text-[#C0CAF5]">,</span>
            {"\n      "}
            <span className="text-[#9ECE6A]">&quot;PostgreSQL&quot;</span>
            <span className="text-[#C0CAF5]">, </span>
            <span className="text-[#9ECE6A]">&quot;Qdrant&quot;</span>
            {"\n    "}
            <span className="text-[#C0CAF5]">]</span>
            {"\n    "}
            <span className="text-[#E0AF68]">self</span>
            <span className="text-[#C0CAF5]">.focus = </span>
            <span className="text-[#9ECE6A]">&quot;Production LLM Systems&quot;</span>
            {"\n    "}
            <span className="text-[#E0AF68]">self</span>
            <span className="text-[#C0CAF5]">.exp = </span>
            <span className="text-[#FF9E64]">2</span>
            <span className="text-[#565F89]">  # years</span>
            {"\n\n  "}
            <span className="text-[#7AA2F7]">def </span>
            <span className="text-[#C0CAF5]">superpower(</span>
            <span className="text-[#E0AF68]">self</span>
            <span className="text-[#C0CAF5]">):</span>
            {"\n    "}
            <span className="text-[#7AA2F7]">return </span>
            <span className="text-[#9ECE6A]">&quot;75% API cost reduction&quot;</span>
          </code>
        </pre>
      </div>
    </motion.div>
  );
}
