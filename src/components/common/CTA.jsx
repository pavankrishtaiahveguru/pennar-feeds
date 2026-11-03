"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Fish } from "lucide-react";
import { BRAND_TAGLINE } from "@/lib/brand";

export default function CTA() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl bg-[#0c2450] px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20 lg:py-20"
      >
        {/* Subtle Decoration */}
        <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute -right-10 -top-16 h-52 w-52 rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-red-700/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2">
            <Fish size={15} className="text-red-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-100">
              {BRAND_TAGLINE}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Give Your Fish the
            <span className="block text-red-400">Nutrition They Deserve.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100/75 sm:text-base">
            Choose Pennar Premium Floating Fish Feed for quality nutrition,
            healthy fish growth, and better aquaculture results.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-red-700 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 sm:w-auto"
            >
              Get in Touch
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="tel:+918106973783"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-950 sm:w-auto"
            >
              <Phone size={16} />
              Call Us Now
            </a>
          </div>

          {/* Bottom Trust Text */}
          <p className="mt-8 text-xs font-medium tracking-wide text-blue-200/60">
            Pennar Feeds · Quality Nutrition · Better Growth
          </p>
        </div>
      </motion.div>
    </section>
  );
}
