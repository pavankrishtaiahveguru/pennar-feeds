"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Fish,
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 81069 73783",
    link: "tel:+918106973783",
    description: "Speak directly with our team",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "Pennarfeeds67@gmail.com",
    link: "mailto:Pennarfeeds67@gmail.com",
    description: "Send us your enquiries",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value:
      "Chakrayagudem, Pedavegi Mandal, Eluru District, Andhra Pradesh - 534452",
    link: "https://www.google.com/maps/search/?api=1&query=Chakrayagudem+Pedavegi+Eluru+Andhra+Pradesh",
    description: "Visit our manufacturing location",
  },
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  subject: "Product Enquiry",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Pennar Feeds,

I would like to make an enquiry.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}
Subject: ${form.subject}

Message:
${form.message}`;

    const whatsappUrl = `https://wa.me/918106973783?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0c2450] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full border-[45px] border-white/[0.04]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-red-700/15 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl px-5 text-center sm:px-8"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
            <MessageCircle size={15} className="text-red-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
              We're Here to Help
            </span>
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in <span className="text-red-500">Touch</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-blue-100/75 sm:text-base">
            Have questions about our premium floating fish feed? Contact Pennar
            Feeds. Our team is ready to help you find the right nutrition for
            your fish farm.
          </p>

          <div className="mt-7 flex items-center justify-center gap-2 text-xs text-blue-100/70">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-red-400">Contact Us</span>
          </div>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="relative bg-[#f7f9fc] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Left Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-red-700" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-red-700">
                Contact Information
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight text-blue-950 sm:text-4xl">
              Let's Start a
              <span className="block text-red-700">Conversation.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-8 text-slate-600">
              Whether you need product information, pricing details, or help
              choosing the right fish feed, get in touch with our team.
            </p>

            <div className="mt-9 space-y-4">
              {contactDetails.map(
                ({ icon: Icon, title, value, link, description }) => (
                  <a
                    key={title}
                    href={link}
                    target={title === "Our Location" ? "_blank" : undefined}
                    rel={
                      title === "Our Location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700 transition-colors duration-300 group-hover:bg-red-700 group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-extrabold text-blue-950">
                        {title}
                      </h3>
                      <p className="mt-1 break-words text-sm font-semibold text-slate-700">
                        {value}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="mt-1 shrink-0 text-slate-400 transition-colors group-hover:text-red-700"
                    />
                  </a>
                ),
              )}
            </div>

            {/* Business Highlight */}
            <div className="mt-6 rounded-2xl bg-[#0c2450] p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-700">
                  <Fish size={23} />
                </div>
                <div>
                  <h3 className="font-bold">Pennar Feeds</h3>
                  <p className="text-xs text-blue-200">
                    Premium Floating Fish Feed
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-blue-100/75">
                Quality nutrition, farmer-friendly pricing, and a commitment to
                better aquaculture.
              </p>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_45px_rgba(15,23,42,0.05)] sm:p-9 lg:p-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-black text-blue-950 sm:text-3xl">
                Send Us an Enquiry
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                Fill in your details and we'll connect with you through
                WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-bold text-blue-950"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-red-600 focus:bg-white focus:ring-4 focus:ring-red-600/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-bold text-blue-950"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[0-9+\-\s()]{10,16}"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-red-600 focus:bg-white focus:ring-4 focus:ring-red-600/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-bold text-blue-950"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-red-600 focus:bg-white focus:ring-4 focus:ring-red-600/10"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-bold text-blue-950"
                >
                  Enquiry Type *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition-all focus:border-red-600 focus:bg-white focus:ring-4 focus:ring-red-600/10"
                >
                  <option>Product Enquiry</option>
                  <option>Pricing Information</option>
                  <option>Bulk Orders</option>
                  <option>Dealership Enquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold text-blue-950"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-red-600 focus:bg-white focus:ring-4 focus:ring-red-600/10"
                />
              </div>

              <button
                type="submit"
                className="group flex min-h-13 w-full items-center justify-center gap-3 rounded-xl bg-red-700 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-red-700/15 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-950"
              >
                Send Enquiry on WhatsApp
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-[11px] leading-5 text-slate-400">
                Your enquiry will open in WhatsApp so you can review and send
                it.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 rounded-2xl bg-[#f7f9fc] p-7 text-center sm:flex-row sm:text-left sm:p-9">
          <div>
            <h2 className="text-xl font-black text-blue-950 sm:text-2xl">
              Have a question? We're happy to help.
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Connect with Pennar Feeds for product and business enquiries.
            </p>
          </div>
          <a
            href="tel:+918106973783"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-950 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-red-700"
          >
            <Phone size={17} /> Call Now
          </a>
        </div>
      </section>
    </main>
  );
}
