"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";
import { fadeUp, scaleIn, stagger, viewportOnce } from "@/lib/motion";
import { Check, Mail, MapPin, Phone, Send } from "./icons";
import { MagneticButton } from "./MagneticButton";

// Get a free access key at web3forms.com (enter your email, copy the key, paste it here).
const WEB3FORMS_KEY = "4c3f75d3-06ed-4b10-be52-90110b364f5d";

type FormState = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: fields.name,
          email: fields.email,
          message: fields.message,
          subject: `Portfolio note from ${fields.name}`,
        }),
      });
      if (res.ok) {
        setState("sent");
        setFields({ name: "", email: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-6xl rounded-3xl gradient-border p-px"
      >
        <div className="relative overflow-hidden rounded-3xl bg-ink p-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[400px] -translate-x-1/2 bg-accent/[0.07] blur-3xl" />

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative"
          >
            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="mb-6 text-center font-heading text-4xl font-bold lg:text-5xl"
            >
              wanna work{" "}
              <span className="text-accent">together?</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-lg text-center text-lg text-muted">
              Open to backend AI engineering roles, LLM system design, and challenging SaaS
              architecture projects.
            </motion.p>

            {/* Contact buttons */}
            <motion.div
              variants={fadeUp}
              className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
              className="mb-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-faint"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
              <span className="hidden sm:inline">·</span>
              <span>{profile.languages.join(" · ")}</span>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeUp} className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-edge" />
              <span className="font-mono text-xs text-faint">or drop a note</span>
              <div className="h-px flex-1 bg-edge" />
            </motion.div>

            {/* Message form */}
            <motion.div variants={fadeUp}>
              <AnimatePresence mode="wait">
                {state === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center gap-3 py-8 text-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-6 w-6" />
                    </div>
                    <p className="font-heading font-semibold text-ink50">note received!</p>
                    <p className="text-sm text-muted">I read everything - I&apos;ll get back to you soon.</p>
                    <button
                      onClick={() => setState("idle")}
                      className="mt-2 font-mono text-xs text-faint underline underline-offset-2 transition-colors hover:text-accent"
                    >
                      send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mx-auto max-w-2xl space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="block font-mono text-xs text-faint">
                          your name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={fields.name}
                          onChange={onChange}
                          placeholder="Alex Chen"
                          className="w-full rounded-xl border border-edge bg-white/60 px-4 py-3 text-sm text-ink50 placeholder:text-faint/60 transition-all focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block font-mono text-xs text-faint">
                          your email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={fields.email}
                          onChange={onChange}
                          placeholder="alex@example.com"
                          className="w-full rounded-xl border border-edge bg-white/60 px-4 py-3 text-sm text-ink50 placeholder:text-faint/60 transition-all focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block font-mono text-xs text-faint">
                        message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={fields.message}
                        onChange={onChange}
                        placeholder="Hey Pavan, I came across your portfolio and wanted to say..."
                        className="w-full resize-none rounded-xl border border-edge bg-white/60 px-4 py-3 text-sm text-ink50 placeholder:text-faint/60 transition-all focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
                      />
                    </div>

                    {state === "error" && (
                      <p className="text-center font-mono text-xs text-red-500">
                        something went wrong - try emailing directly instead
                      </p>
                    )}

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={state === "sending"}
                        className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 disabled:opacity-60 active:scale-[0.98]"
                      >
                        <Send className="h-4 w-4" />
                        {state === "sending" ? "sending..." : "send it"}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
