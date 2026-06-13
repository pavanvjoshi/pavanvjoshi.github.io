"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { fadeUp, scaleIn, stagger, viewportOnce } from "@/lib/motion";
import { Mail, MapPin, Phone } from "./icons";
import { MagneticButton } from "./MagneticButton";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-6xl rounded-3xl gradient-border p-px"
      >
        <div className="relative overflow-hidden rounded-3xl bg-ink p-12 text-center">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[400px] -translate-x-1/2 bg-accent/[0.07] blur-3xl" />

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative"
          >
            <motion.h2
              variants={fadeUp}
              className="mb-6 font-heading text-4xl font-bold lg:text-5xl"
            >
              Ready to Build
              <br />
              <span className="text-accent">Something Great?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-lg text-lg text-muted">
              Open to backend AI engineering roles, LLM system design, and challenging SaaS
              architecture projects.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <MagneticButton
                href={`mailto:${profile.email}`}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-8 py-4 font-semibold text-ink transition-colors hover:bg-blue-700 sm:w-auto"
              >
                <Mail className="h-5 w-5" />
                {profile.email}
              </MagneticButton>
              <motion.a
                href={`tel:${profile.phoneHref}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-edge px-8 py-4 font-semibold text-ink50 transition-colors hover:border-accent hover:text-accent sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                {profile.phone}
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-faint"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
              <span className="hidden sm:inline">·</span>
              <span>{profile.languages.join(" · ")}</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
