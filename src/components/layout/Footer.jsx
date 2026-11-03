"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Fish,
  ShieldCheck,
  Truck,
  ChevronRight,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import DevelopedByStaffArc from "../common/DevelopedByStaffArc";
import { BRAND_TAGLINE } from "@/lib/brand";
import HomeLink from "@/components/layout/HomeLink";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/products" },
  { name: "Quality", href: "/quality" },
  { name: "Contact Us", href: "/contact" },
];

const productLinks = [
  { name: "Floating Fish Feed - 24% Protein", href: "/products/1" },
  { name: "Floating Fish Feed - 28% Protein", href: "/products/2" },
];

const benefits = [
  { icon: ShieldCheck, title: "Premium Quality" },
  { icon: Fish, title: "100% Floating Pellets" },
  { icon: Truck, title: "Timely Delivery" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#071D42] text-white">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

      {/* Benefits Section */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-8 sm:grid-cols-3 lg:px-8">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-red-400">
                <item.icon size={23} />
              </div>
              <span className="text-sm font-semibold text-white/90">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:px-8">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1"
        >
          <HomeLink aria-label="Pennar Feeds home" className="mb-5 inline-flex items-center gap-3">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white">
              <img
                src="/logo/logo.png"
                alt="Pennar Feeds Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white">
                PENNAR FEEDS
              </h2>
              <p className="text-xs font-medium tracking-wide text-blue-200">
                {BRAND_TAGLINE}
              </p>
            </div>
          </HomeLink>

          <p className="max-w-sm text-sm leading-7 text-blue-100/70">
            Premium quality floating fish feed manufactured using quality raw
            materials. We are committed to helping farmers achieve better fish
            growth, higher profits, and healthier harvests.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>

          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                {link.href === "/" ? (
                  <HomeLink
                    className="group flex items-center gap-2 text-sm text-blue-100/70 transition-colors hover:text-red-400"
                  >
                    <ChevronRight
                      size={15}
                      className="text-red-500 transition-transform group-hover:translate-x-1"
                    />
                    {link.name}
                  </HomeLink>
                ) : (
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-blue-100/70 transition-colors hover:text-red-400"
                  >
                    <ChevronRight
                      size={15}
                      className="text-red-500 transition-transform group-hover:translate-x-1"
                    />
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Products */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="mb-6 text-lg font-bold text-white">Our Products</h3>

          <ul className="space-y-4">
            {productLinks.map((product) => (
              <li key={product.name}>
                <Link
                  href={product.href}
                  className="group flex items-start gap-2 text-sm leading-6 text-blue-100/70 transition-colors hover:text-red-400"
                >
                  <Fish size={16} className="mt-1 shrink-0 text-red-500" />
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-blue-100">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available in 40kg Bags
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="mb-6 text-lg font-bold text-white">Get In Touch</h3>

          <div className="space-y-5">
            <a
              href="tel:+918106973783"
              className="group flex items-start gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-red-400 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-blue-200/60">Call Us</p>
                <p className="mt-1 text-sm font-semibold text-white transition-colors group-hover:text-red-400">
                  81069 73783
                </p>
              </div>
            </a>

            <a
              href="mailto:Pennarfeeds67@gmail.com"
              className="group flex items-start gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-red-400 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-blue-200/60">Email Us</p>
                <p className="mt-1 break-all text-sm font-semibold text-white transition-colors group-hover:text-red-400">
                  Pennarfeeds67@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-red-400">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-blue-200/60">Our Location</p>
                <p className="mt-1 text-sm leading-6 text-blue-100/80">
                  Chakrayagudem, Pedavegi Mandal, Eluru District, Andhra Pradesh
                  - 534452.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
          >
            Contact Us <ArrowUpRight size={17} />
          </Link>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-xs text-blue-100/60">
            © {new Date().getFullYear()} Pennar Feeds. All Rights Reserved.
          </p>

          <DevelopedByStaffArc />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
