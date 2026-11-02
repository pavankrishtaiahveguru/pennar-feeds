"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  Award,
  Droplet,
  Layers,
  ArrowRight,
  ShieldCheck,
  Fish,
  Sparkles,
} from "lucide-react";

const features = [
  { icon: BarChart3, title: "High", subtitle: "Growth Rate" },
  { icon: Award, title: "Premium", subtitle: "Ingredients" },
  { icon: Droplet, title: "Low", subtitle: "FCR 1.2 - 1.4" },
  { icon: Layers, title: "100%", subtitle: "Floating Pellets" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-80px)] w-full items-center overflow-hidden bg-[#eaf5fc]">
      {/* Background image */}
      <Image
        src="/images/pennar-hero.png"
        alt="Fish feeding in an aquaculture pond"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-[68%_center] sm:object-center"
      />

      {/* Background overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/5 to-white/25 sm:via-white/50 sm:to-white/10" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-sky-100/40 via-transparent to-white/20" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 z-[2] h-96 w-96 rounded-full bg-sky-200/30 blur-[100px]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] w-full max-w-[1600px] items-center px-5 py-16 sm:px-10 lg:px-16 xl:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[720px]"
        >
          {/* Top label */}
          <motion.div
            variants={itemVariants}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-red-700" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-950/65 sm:text-xs">
              Premium Quality • Trusted Nutrition
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="whitespace-nowrap text-[clamp(2.2rem,5.6vw,5.5rem)] font-black leading-[1.05] tracking-[-0.065em]"
          >
            <span className="text-red-700">PENNAR</span>{" "}
            <span className="text-blue-950">FEEDS</span>
          </motion.h1>

          {/* Heading description */}
          <motion.div variants={itemVariants} className="mt-5">
            <h2 className="text-xl font-extrabold tracking-tight text-blue-950 sm:text-2xl lg:text-[30px]">
              High Protein Floating Fish Feed
            </h2>
            <p className="mt-2 max-w-lg text-sm font-medium leading-relaxed text-blue-950/75 sm:text-base">
              For Better Growth, Higher Profit & Healthier Fish.
            </p>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-8 grid max-w-[490px] grid-cols-4 gap-2 sm:mt-10 sm:gap-5"
          >
            {features.map(({ icon: Icon, title, subtitle }) => (
              <div
                key={subtitle}
                className="group flex flex-col items-center text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/90 bg-white/90 text-blue-950 shadow-[0_8px_25px_rgba(15,45,90,0.10)] backdrop-blur-md transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-red-700 group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Icon size={23} strokeWidth={2.4} />
                </div>
                <p className="mt-3 text-[10px] font-extrabold text-blue-950 sm:text-xs">
                  {title}
                </p>
                <p className="text-[9px] font-medium leading-tight text-blue-950/70 sm:text-[10px]">
                  {subtitle}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
          >
            <Link
              href="/products"
              className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-red-700 px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(185,28,28,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-800 hover:shadow-[0_15px_30px_rgba(185,28,28,0.3)]"
            >
              Explore Products
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-blue-950/25 bg-white/85 px-7 py-3.5 text-sm font-bold text-blue-950 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-950 hover:bg-blue-950 hover:text-white"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Trust message */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-2 text-xs font-semibold text-blue-950/65"
          >
            <ShieldCheck size={17} className="text-red-700" />
            Quality Feed. Healthy Fish. Better Harvest.
          </motion.div>
        </motion.div>
      </div>

      {/* Floating information card */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 15 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="absolute bottom-10 right-8 z-20 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_15px_45px_rgba(15,45,90,0.16)] backdrop-blur-xl lg:flex xl:right-16"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-700">
          <Fish size={24} />
        </div>
        <div>
          <p className="text-sm font-extrabold text-blue-950">
            100% Floating Feed
          </p>
          <p className="mt-1 text-[10px] font-medium text-slate-500">
            Easy feeding observation
          </p>
        </div>
        <Sparkles size={17} className="ml-2 text-red-600" />
      </motion.div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 z-10 h-1 w-full bg-gradient-to-r from-red-700 via-red-500 to-blue-950" />
    </section>
  );
}
