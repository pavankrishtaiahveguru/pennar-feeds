"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Eye,
  ShoppingCart,
} from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function Products() {
  const { addToCart } = useCart();

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-red-700" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.35em] text-red-700">
              Our Products
            </span>
            <span className="h-[2px] w-8 bg-red-700" />
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
            Quality Feed for <span className="text-red-700">Better Growth</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            High-quality, high-protein floating fish feed for better growth and
            higher returns.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid items-stretch gap-6 xl:grid-cols-2 xl:gap-7">
          {products.map((product, index) => {
            const isBlue = product.theme === "blue";

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(15,23,42,0.09)] sm:grid-cols-[42%_58%]"
                id={`feed-${product.protein.replace("%", "")}`}
              >
                {/* Left: Product Image */}
                <div
                  className={`relative flex min-h-[300px] items-center justify-center overflow-hidden sm:min-h-[380px] ${isBlue ? "bg-[#eaf2ff]" : "bg-[#fff2e4]"}`}
                >
                  <div
                    className={`absolute -left-16 -top-16 h-48 w-48 rounded-full blur-3xl ${isBlue ? "bg-blue-200/50" : "bg-orange-200/50"}`}
                  />

                  <div
                    className={`absolute -bottom-16 -right-16 h-48 w-48 rounded-full blur-3xl ${isBlue ? "bg-sky-200/50" : "bg-amber-200/50"}`}
                  />

                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-[1] h-[280px] w-[85%] sm:h-[340px] sm:w-[92%]"
                  >
                    <Image
                      src={product.image}
                      alt={`Pennar Feeds ${product.protein} protein fish feed`}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 85vw, (max-width: 1280px) 40vw, 20vw"
                      className="object-contain drop-shadow-[0_10px_12px_rgba(15,23,42,0.12)]"
                    />
                  </motion.div>
                </div>

                {/* Right: Product Details */}
                <div className="flex flex-col justify-center p-5 sm:p-5 md:p-6">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-red-700">
                    Pennar Feeds
                  </span>

                  <h3 className="mt-3 text-xl font-black leading-tight text-blue-950 sm:text-xl lg:text-2xl">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-sm font-bold text-blue-950">
                    ({product.protein} Protein)
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    For Rohu, Catla, Mrigal, Pangasius and Tilapia.
                  </p>

                  {/* Features */}
                  <div className="mt-5 space-y-2.5">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 fill-red-700 text-red-700 [&>path:first-child]:stroke-white"
                        />
                        <span className="text-xs leading-5 text-slate-600 sm:text-[13px]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-2.5">
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={`/products/${product.id}`}
                        className="flex min-h-11 w-full items-center justify-center gap-1.5 rounded-lg border border-blue-950 bg-white px-2 py-2.5 text-xs font-bold text-blue-950 shadow-sm transition-all duration-300 hover:bg-blue-50 hover:shadow-md sm:gap-2 sm:px-3 sm:text-sm"
                      >
                        <Eye size={16} className="shrink-0" />
                        <span className="whitespace-nowrap">View Product</span>
                      </Link>
                    </motion.div>
                    <motion.button
                      type="button"
                      onClick={() => addToCart(product.id)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex min-h-11 w-full items-center justify-center gap-1.5 rounded-lg bg-red-700 px-2 py-2.5 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-red-800 hover:shadow-md sm:gap-2 sm:px-3 sm:text-sm"
                    >
                      <ShoppingCart size={16} className="shrink-0" />
                      <span className="whitespace-nowrap">Add to Cart</span>
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-sm text-slate-500">
            Need help selecting the right fish feed?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-red-700 transition-colors hover:text-blue-950"
          >
            Contact Our Team <ArrowUpRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
