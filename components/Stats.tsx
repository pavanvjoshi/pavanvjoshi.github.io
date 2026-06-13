"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { CountUp } from "./CountUp";

export function Stats() {
  return (
    <section className="px-6 py-12">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="group cursor-default rounded-2xl glass border border-surface p-6 text-center transition-colors hover:border-accent/30 hover:bg-accent/[0.06]"
          >
            <div className="mb-1 font-heading text-4xl font-bold text-accent">
              <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <div className="text-sm text-muted">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
