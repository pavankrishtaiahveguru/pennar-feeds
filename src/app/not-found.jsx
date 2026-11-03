"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Fish, Home } from "lucide-react";
import { BRAND_TAGLINE } from "@/lib/brand";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100dvh-80px)] items-center justify-center overflow-hidden bg-white px-5 py-16 sm:px-8">
      {/* Subtle Background */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-blue-50 blur-[90px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-red-50 blur-[90px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto w-full max-w-2xl text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-3xl border border-red-100 bg-red-50 text-red-700 shadow-sm"
        >
          <Fish size={38} strokeWidth={1.7} />
        </motion.div>

        {/* Error Number */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[110px] font-black leading-none tracking-[-0.08em] text-blue-950 sm:text-[160px] lg:text-[190px]"
          >
            4<span className="text-red-700">0</span>4
          </motion.h1>
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="mb-4 mt-6 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-red-700" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-red-700">
              Page Not Found
            </span>
            <span className="h-[2px] w-8 bg-red-700" />
          </div>

          <h2 className="text-2xl font-black tracking-tight text-blue-950 sm:text-3xl lg:text-4xl">
            Looks Like You're Off Course!
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-8 text-slate-500 sm:text-base">
            The page you're looking for may have been moved, removed, or doesn't
            exist. Let's get you back to Pennar Feeds.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-700/15 transition-all duration-300 hover:-translate-y-1 hover:bg-red-800 sm:w-auto"
          >
            <Home size={17} />
            Back to Home
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </Link>

          <Link
            href="/products"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-blue-950 transition-all duration-300 hover:-translate-y-1 hover:border-blue-950 sm:w-auto"
          >
            Explore Our Products
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        {/* Bottom Branding */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-xs font-semibold tracking-wide text-slate-400"
        >
          PENNAR FEEDS · {BRAND_TAGLINE}
        </motion.p>
      </motion.div>
    </main>
  );
}
