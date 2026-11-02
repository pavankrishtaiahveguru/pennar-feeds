"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Premium quality raw materials",
  "High-protein, low-FCR fish feed",
  "Dust-free and water-stable pellets",
  "Affordable pricing for farmers",
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-14">
        {/* About Image */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sky-100">
            <Image
              src="/images/about.png"
              alt="Pennar Feeds supporting fish farmers at an aquaculture pond"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-5 -right-4 -z-10 h-32 w-32 rounded-3xl bg-red-700/10" />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-red-700" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-red-700">
              About Pennar Feeds
            </span>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-[46px]">
            Quality Fish Feed,
            <span className="block text-red-700">Made for Farmers.</span>
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 sm:text-base">
            <p>
              We are a manufacturer of premium floating fish feed, made using
              carefully selected, high-quality raw materials.
            </p>

            <p>
              We understand the soil, water, and struggles of our farmers.
              Pennar Fish Feed was started to give farmers an honest alternative
              to overpriced multinational feeds.
            </p>

            <p>
              We deliver{" "}
              <strong className="font-bold text-blue-950">
                high-protein, low-FCR, dust-free, and water-stable pellets
              </strong>{" "}
              at a fair price, helping farmers achieve better fish growth and
              profitability.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-red-700"
                />
                <span className="text-sm font-semibold text-blue-950">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/about"
            className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-red-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-red-700/15 transition-all duration-300 hover:-translate-y-1 hover:bg-red-800"
          >
            Read More About Us
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
