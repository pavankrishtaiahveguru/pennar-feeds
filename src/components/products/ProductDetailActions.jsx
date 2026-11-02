"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductDetailActions({ productId }) {
  const { addToCart } = useCart();

  return (
    <motion.button
      type="button"
      onClick={() => addToCart(productId)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-red-800"
    >
      <ShoppingCart size={18} />
      Add to Cart
    </motion.button>
  );
}
