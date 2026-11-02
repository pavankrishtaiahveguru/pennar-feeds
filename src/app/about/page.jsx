"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Fish,
  ShieldCheck,
  Sprout,
  Truck,
  Target,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality Over Quantity",
    description:
      "We focus on delivering consistent feed quality for healthier fish and better harvests.",
  },
  {
    icon: HeartHandshake,
    title: "Farmer First Pricing",
    description:
      "Affordable feed solutions designed to support farmers and improve profitability.",
  },
  {
    icon: Sprout,
    title: "Ingredient Transparency",
    description:
      "We believe in honest communication and transparency in the quality of our ingredients.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description:
      "Reliable delivery support to help farmers maintain their pond feeding schedules.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* About Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-sky-100/60 blur-[100px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-red-50/70 blur-[100px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-[580px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-sky-100 sm:rounded-[36px]">
                <Image
                  src="/images/about-fish-farming.png"
                  alt="Fish farming and aquaculture at a pond"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/45 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/15 p-5 text-white shadow-xl backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-700 text-white">
                      <Fish size={25} />
                    </div>
                    <div>
                      <p className="text-lg font-extrabold">
                        Better Feed, Better Growth
                      </p>
                      <p className="mt-1 text-xs font-medium text-white/85">
                        Supporting farmers with quality nutrition
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 -z-10 h-36 w-36 rounded-[30px] border-[10px] border-red-700/10 sm:-bottom-7 sm:-right-7 sm:h-48 sm:w-48" />
              <div className="absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-full border-[10px] border-sky-100 sm:-left-6 sm:-top-6 sm:h-32 sm:w-32" />
            </motion.div>

            {/* About Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full"
            >
              <motion.div
                variants={itemVariants}
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-[2px] w-9 bg-red-700" />
                <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-red-700">
                  About Pennar Feeds
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl font-black leading-[1.15] tracking-tight text-blue-950 sm:text-4xl lg:text-[48px]"
              >
                Nourishing Fish.
                <br />
                <span className="text-red-700">Empowering Farmers.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 text-sm leading-8 text-slate-600 sm:text-base"
              >
                PENNAR FEEDS is dedicated to manufacturing premium floating fish
                feed using carefully selected quality raw materials. We
                understand the soil, water, and everyday challenges faced by
                aquaculture farmers.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="mt-4 text-sm leading-8 text-slate-600 sm:text-base"
              >
                Our goal is to provide farmers with an honest and affordable
                alternative to overpriced feed products. Through high-protein
                nutrition, low feed conversion ratios, dust-free pellets, and
                water-stable formulations, we aim to support healthier fish
                growth and better farming profitability.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-7 grid gap-4 sm:grid-cols-2"
              >
                {[
                  "Premium quality raw materials",
                  "High-protein fish nutrition",
                  "Water-stable floating pellets",
                  "Farmer-focused pricing",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <CheckCircle2 size={19} className="shrink-0 text-red-700" />
                    <span className="text-xs font-bold text-blue-950 sm:text-sm">
                      {text}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="mt-9">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-3 rounded-xl bg-blue-950 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-950/15 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-red-700/20"
                >
                  Explore Our Products
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Mission and Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-24 grid gap-5 md:grid-cols-2 lg:mt-32"
          >
            <div className="group relative overflow-hidden rounded-3xl bg-blue-950 p-8 text-white sm:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[25px] border-white/5 transition-transform duration-500 group-hover:scale-125" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-red-400">
                  <Target size={28} />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">
                  Our Mission
                </p>
                <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  Better Nutrition, Better Returns.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-blue-100/80">
                  To provide affordable, scientifically formulated, high-growth
                  fish and shrimp feed that improves farmer profitability and
                  helps reduce crop duration.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-[#f7fafc] p-8 sm:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[25px] border-red-700/5 transition-transform duration-500 group-hover:scale-125" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-700">
                  <Sprout size={28} />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-700">
                  Our Commitment
                </p>
                <h2 className="mt-3 text-2xl font-extrabold text-blue-950 sm:text-3xl">
                  Farmers Always Come First.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
                  We are committed to quality, fair pricing, transparent
                  ingredients, and dependable delivery — helping farmers make
                  confident aquaculture decisions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <div className="mt-24 lg:mt-32">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto mb-12 max-w-2xl text-center"
            >
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-[2px] w-8 bg-red-700" />
                <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-red-700">
                  What We Stand For
                </span>
                <span className="h-[2px] w-8 bg-red-700" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">
                Our Core <span className="text-red-700">Values</span>
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                The principles behind every product we make and every farmer we
                serve.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_5px_25px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-[0_15px_35px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-700 transition-all duration-300 group-hover:bg-red-700 group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-5 text-base font-extrabold text-blue-950">
                    {title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
