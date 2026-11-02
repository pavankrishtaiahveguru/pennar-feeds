"use client";

import { Toaster } from "sonner";
import { CartProvider } from "@/context/CartContext";

export default function AppProviders({ children }) {
  return (
    <CartProvider>
      {children}
      <Toaster position="top-right" richColors />
    </CartProvider>
  );
}
