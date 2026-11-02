"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Droplets,
  TrendingUp,
  Fish,
  Package,
  Microscope,
  Leaf,
  Target,
  Award,
} from "lucide-react";
import CTA from "@/components/common/CTA";

const qualityFeatures = [
  {
    icon: ShieldCheck,
    title: "Quality Raw Materials",
    description:
      "Carefully selected raw materials to support consistent feed quality and fish nutrition.",
  },
  {
    icon: Droplets,
    title: "Water-Stable Pellets",
    description:
      "Formulated floating pellets designed to remain stable in water during feeding.",
  },
  {
    icon: TrendingUp,
    title: "Low FCR",
    description:
      "Designed to support efficient feed utilisation, with a stated FCR range of 1.2–1.4.",
  },
  {
    icon: Fish,
    title: "Floating Feed",
    description:
      "Floating pellets make feeding activity easier to observe and monitor in the pond.",
  },
  {
    icon: Microscope,
    title: "Nutritional Options",
    description:
      "Available in 24% and 28% protein formulations to suit different feeding requirements.",
  },
  {
    icon: Package,
    title: "Convenient Packaging",
    description:
      "Supplied in 40kg PP bags for convenient storage, handling, and transportation.",
  },
];

const specifications = [
  { label: "Protein Options", value: "24% & 28%" },
  { label: "Fat Options", value: "4% & 5%" },
  { label: "Pellet Size", value: "4mm" },
  { label: "FCR Range", value: "1.2 – 1.4" },
  { label: "Feed Type", value: "Floating Pellets" },
  { label: "Pack Size", value: "40kg" },
];

const qualitySteps = [
  {
    number: "01",
    title: "Raw Material Selection",
    description:
      "We focus on carefully selecting quality raw materials for our floating fish feed.",
  },
  {
    number: "02",
    title: "Feed Formulation",
    description:
      "Our feed formulations offer different protein and fat options for aquaculture needs.",
  },
  {
    number: "03",
    title: "Floating Pellets",
    description:
      "Extruded floating pellets help farmers observe feeding activity and manage pond feeding.",
  },
  {
    number: "04",
    title: "Product Packaging",
    description: "Finished feed is supplied in convenient 40kg PP bags.",
  },
];

export default function QualityPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0c2450] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
        <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full border-[45px] border-white/[0.04]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-red-700/15 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
            <ShieldCheck size={15} className="text-red-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
              Our Quality Commitment
            </span>
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Quality You Can Trust.
            <span className="block text-red-500">Nutrition That Matters.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-blue-100/75 sm:text-base">
            At Pennar Feeds, we focus on quality raw materials, carefully
            formulated nutrition, and premium floating fish feed to support
            healthier fish and better farming results.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-blue-100/80">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-red-400" /> Quality Raw
              Materials
            </span>
            <span className="hidden text-white/30 sm:block">|</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-red-400" /> Floating
              Pellets
            </span>
            <span className="hidden text-white/30 sm:block">|</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-red-400" />{" "}
              Farmer-Friendly Pricing
            </span>
          </div>
        </motion.div>
      </section>

      {/* Quality Introduction */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sky-100">
              <Image
                src="/images/quality-fish-farming.png"
                alt="Fish farming and aquaculture pond"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-4 -z-10 h-32 w-32 rounded-3xl bg-red-700/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-red-700" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-red-700">
                The Pennar Quality
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-[46px]">
              Better Nutrition for
              <span className="block text-red-700">Better Fish Growth.</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              We understand the soil, water, and struggles of our farmers.
              Pennar Feeds was started to provide an honest alternative to
              overpriced multinational feeds.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Our premium floating fish feed focuses on high protein, low FCR,
              dust-free, and water-stable pellets at a fair price. Our aim is to
              support fish growth while helping farmers improve their farming
              profitability.
            </p>

            <Link
              href="/products"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-red-700 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-950"
            >
              Explore Our Products
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="bg-[#f7f9fc] px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-red-700" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-red-700">
                Why Pennar Feeds
              </span>
              <span className="h-[2px] w-8 bg-red-700" />
            </div>

            <h2 className="text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">
              Our Commitment to <span className="text-red-700">Quality</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Every aspect of our feed is focused on quality nutrition,
              practical feeding, and farmer value.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {qualityFeatures.map(
              ({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-700 transition-colors duration-300 group-hover:bg-red-700 group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold text-blue-950">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {description}
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-red-700" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-red-700">
                Feed Specifications
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight text-blue-950 sm:text-4xl">
              Nutrition Designed for
              <span className="block text-red-700">Aquaculture Needs.</span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              Pennar Feeds offers two floating fish feed formulations with
              different protein and fat levels to meet varied feeding
              requirements.
            </p>

            <div className="mt-7 flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50 p-5">
              <Target size={25} className="shrink-0 text-red-700" />
              <p className="text-sm font-semibold leading-6 text-blue-950">
                Designed for Rohu, Catla, Mrigal, Pangasius, and Tilapia.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
          >
            <div className="border-b border-slate-100 bg-[#0c2450] px-6 py-5">
              <h3 className="text-lg font-extrabold text-white">
                Product Quality Specifications
              </h3>
              <p className="mt-1 text-xs text-blue-200">
                Pennar Premium Floating Fish Feed
              </p>
            </div>

            <div className="grid grid-cols-2">
              {specifications.map((item, index) => (
                <div
                  key={item.label}
                  className={`border-b border-slate-100 p-5 sm:p-6 ${index % 2 === 0 ? "border-r" : ""}`}
                >
                  <p className="text-xs font-semibold text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xl font-black text-blue-950 sm:text-2xl">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#f8fafc] px-6 py-4">
              <p className="text-xs leading-6 text-slate-500">
                Specifications shown reflect the two product variants currently
                offered. Pellet sizes other than 4mm are not listed here.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="bg-[#f7f9fc] px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-red-700" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-red-700">
                Our Approach
              </span>
              <span className="h-[2px] w-8 bg-red-700" />
            </div>

            <h2 className="text-3xl font-black text-blue-950 sm:text-4xl">
              From Raw Materials to{" "}
              <span className="text-red-700">Your Pond.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Our approach focuses on the key stages involved in providing
              quality floating fish feed.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualitySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-4xl font-black text-red-100">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-blue-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}
