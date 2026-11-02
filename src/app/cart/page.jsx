"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  UserRound,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { createWhatsAppOrderMessage } from "@/lib/whatsapp-order";

const initialCustomer = {
  fullName: "",
  contactNumber: "",
  deliveryAddress: "",
  additionalMessage: "",
};

function ProductSpecifications({ product }) {
  return (
    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
      {product.protein} Protein <span aria-hidden="true">·</span> {product.fat}{" "}
      Fat <span aria-hidden="true">·</span> {product.size} pellets{" "}
      <span aria-hidden="true">·</span> {product.weight} bag
    </p>
  );
}

function CartProduct({ item, setItemQuantity, removeFromCart }) {
  const { product, quantity } = item;

  return (
    <motion.article
      layout
      className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:p-5"
    >
      <Link
        href={`/products/${product.id}`}
        aria-label={`View ${product.name}, ${product.protein} protein`}
        className={`relative h-36 w-full shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-32 ${product.theme === "blue" ? "bg-[#eaf2ff]" : "bg-[#fff2e4]"}`}
      >
        <Image
          src={product.image}
          alt={`${product.name}, ${product.protein} protein`}
          fill
          sizes="(max-width: 640px) 100vw, 128px"
          className="object-contain p-2"
        />
      </Link>

      <div className="min-w-0 flex-1">
        <Link
          href={`/products/${product.id}`}
          className="font-bold leading-6 text-[#0c2450] transition-colors hover:text-[#b91c1c]"
        >
          {product.name}
        </Link>
        <ProductSpecifications product={product} />
      </div>

      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <div
          className="flex items-center rounded-lg border border-slate-200"
          aria-label={`Quantity: ${quantity} bags`}
        >
          <button
            type="button"
            onClick={() => setItemQuantity(product.id, quantity - 1)}
            disabled={quantity <= 1}
            aria-label={`Decrease ${product.protein} feed quantity`}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-l-lg text-[#0c2450] transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:text-slate-300"
          >
            <Minus size={15} />
          </button>
          <span className="min-w-10 text-center text-sm font-bold text-[#0c2450]">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setItemQuantity(product.id, quantity + 1)}
            aria-label={`Increase ${product.protein} feed quantity`}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-r-lg text-[#0c2450] transition-colors hover:bg-slate-50"
          >
            <Plus size={15} />
          </button>
        </div>
        <button
          type="button"
          onClick={() => removeFromCart(product.id)}
          aria-label={`Remove ${product.protein} feed from cart`}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-red-50 hover:text-[#b91c1c]"
        >
          <Trash2 size={17} />
        </button>
      </div>
    </motion.article>
  );
}

function CartSummary({ distinctProducts, itemCount, onBook }) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-28">
      <h2 className="text-lg font-extrabold text-[#0c2450]">Cart Summary</h2>
      <dl className="mt-5 space-y-4 text-sm">
        <div className="flex items-center justify-between gap-3">
          <dt className="text-slate-500">Different products</dt>
          <dd className="font-bold text-[#0c2450]">{distinctProducts}</dd>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <dt className="text-slate-500">Total bags</dt>
          <dd className="font-bold text-[#0c2450]">{itemCount}</dd>
        </div>
      </dl>
      <button
        type="button"
        onClick={onBook}
        className="mt-6 inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#b91c1c] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-md"
      >
        <FaWhatsapp size={19} />
        Book via WhatsApp
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-slate-500">
        No online payment or prices are required for booking.
      </p>
    </aside>
  );
}

function CustomerDetailsForm({
  customer,
  errors,
  onChange,
  onCancel,
  onContinue,
}) {
  const fieldClassName =
    "mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0c2450] focus:ring-2 focus:ring-blue-950/10";

  const renderError = (field) =>
    errors[field] ? (
      <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
        {errors[field]}
      </p>
    ) : null;

  return (
    <motion.section
      key="customer-details"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
      aria-labelledby="customer-details-heading"
    >
      <div className="mb-7 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0c2450]">
          <UserRound size={21} />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
            Step 1 of 2
          </p>
          <h2
            id="customer-details-heading"
            className="mt-1 text-xl font-extrabold text-[#0c2450] sm:text-2xl"
          >
            Your delivery details
          </h2>
        </div>
      </div>

      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          onContinue();
        }}
        className="space-y-5"
      >
        <div>
          <label
            htmlFor="fullName"
            className="text-sm font-bold text-[#0c2450]"
          >
            Full Name <span className="text-[#b91c1c]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={customer.fullName}
            onChange={onChange}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`${fieldClassName} ${errors.fullName ? "border-red-500" : ""}`}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p
              id="fullName-error"
              className="mt-1.5 text-xs font-medium text-red-700"
              role="alert"
            >
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contactNumber"
            className="text-sm font-bold text-[#0c2450]"
          >
            Contact Number <span className="text-[#b91c1c]">*</span>
          </label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={customer.contactNumber}
            onChange={onChange}
            aria-invalid={Boolean(errors.contactNumber)}
            aria-describedby={
              errors.contactNumber ? "contactNumber-error" : undefined
            }
            className={`${fieldClassName} ${errors.contactNumber ? "border-red-500" : ""}`}
            placeholder="e.g. 9876543210"
          />
          {errors.contactNumber && (
            <p
              id="contactNumber-error"
              className="mt-1.5 text-xs font-medium text-red-700"
              role="alert"
            >
              {errors.contactNumber}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="deliveryAddress"
            className="text-sm font-bold text-[#0c2450]"
          >
            Delivery Address <span className="text-[#b91c1c]">*</span>
          </label>
          <textarea
            id="deliveryAddress"
            name="deliveryAddress"
            rows={3}
            required
            value={customer.deliveryAddress}
            onChange={onChange}
            aria-invalid={Boolean(errors.deliveryAddress)}
            aria-describedby={
              errors.deliveryAddress ? "deliveryAddress-error" : undefined
            }
            className={`${fieldClassName} resize-y ${errors.deliveryAddress ? "border-red-500" : ""}`}
            placeholder="Enter the complete delivery address"
          />
          {errors.deliveryAddress && (
            <p
              id="deliveryAddress-error"
              className="mt-1.5 text-xs font-medium text-red-700"
              role="alert"
            >
              {errors.deliveryAddress}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="additionalMessage"
            className="text-sm font-bold text-[#0c2450]"
          >
            Additional Message{" "}
            <span className="font-normal text-slate-400">(Optional)</span>
          </label>
          <textarea
            id="additionalMessage"
            name="additionalMessage"
            rows={3}
            value={customer.additionalMessage}
            onChange={onChange}
            className={`${fieldClassName} resize-y`}
            placeholder="Add delivery instructions or a note"
          />
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-[#0c2450] transition-colors hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0c2450] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-950"
          >
            Continue
            <ArrowRight size={17} />
          </button>
        </div>
      </form>
    </motion.section>
  );
}

function OrderSummary({
  customer,
  items,
  itemCount,
  onBack,
  onBookNow,
  whatsappOpened,
  whatsappUrl,
}) {
  return (
    <motion.section
      key="order-summary"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      className="mx-auto max-w-4xl space-y-5"
      aria-labelledby="order-summary-heading"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <p className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">
          Step 2 of 2
        </p>
        <h2
          id="order-summary-heading"
          className="mt-1 text-2xl font-extrabold text-[#0c2450]"
        >
          Review your booking
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Check your details and products before opening WhatsApp.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <h3 className="text-base font-extrabold text-[#0c2450]">
          Customer Details
        </h3>
        <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Full Name
            </dt>
            <dd className="mt-1 break-words font-semibold text-slate-800">
              {customer.fullName}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Contact Number
            </dt>
            <dd className="mt-1 break-words font-semibold text-slate-800">
              {customer.contactNumber}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Delivery Address
            </dt>
            <dd className="mt-1 whitespace-pre-wrap break-words font-semibold text-slate-800">
              {customer.deliveryAddress}
            </dd>
          </div>
          {customer.additionalMessage.trim() && (
            <div className="sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Additional Message
              </dt>
              <dd className="mt-1 whitespace-pre-wrap break-words font-semibold text-slate-800">
                {customer.additionalMessage}
              </dd>
            </div>
          )}
        </dl>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-base font-extrabold text-[#0c2450]">
            Order Details
          </h3>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#0c2450]">
            {items.length} {items.length === 1 ? "product" : "products"} ·{" "}
            {itemCount} {itemCount === 1 ? "bag" : "bags"}
          </span>
        </div>

        <div className="mt-5 space-y-4">
          {items.map(({ product, quantity }, index) => (
            <article
              key={product.id}
              className="flex flex-col gap-4 rounded-xl border border-slate-100 p-4 sm:flex-row sm:items-center"
            >
              <div
                className={`relative h-28 w-full shrink-0 overflow-hidden rounded-lg sm:w-28 ${product.theme === "blue" ? "bg-[#eaf2ff]" : "bg-[#fff2e4]"}`}
              >
                <Image
                  src={product.image}
                  alt={`${product.name}, ${product.protein} protein`}
                  fill
                  sizes="112px"
                  className="object-contain p-2"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-wide text-[#b91c1c]">
                  Product {index + 1}
                </p>
                <h4 className="mt-1 font-bold leading-6 text-[#0c2450]">
                  {product.name} – {product.protein} Protein
                </h4>
                <ProductSpecifications product={product} />
                <p className="mt-2 text-sm font-bold text-[#0c2450]">
                  Quantity: {quantity} {quantity === 1 ? "Bag" : "Bags"}
                </p>
              </div>
            </article>
          ))}
        </div>

        <dl className="mt-5 grid gap-3 border-t border-slate-100 pt-5 text-sm sm:grid-cols-2">
          <div className="flex items-center justify-between gap-3">
            <dt className="text-slate-500">Different products</dt>
            <dd className="font-bold text-[#0c2450]">{items.length}</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-slate-500">Total bags</dt>
            <dd className="font-bold text-[#0c2450]">{itemCount}</dd>
          </div>
        </dl>
      </div>

      {whatsappOpened && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-900"
        >
          <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
          <div>
            <p>
              Your booking message is ready. Please press <strong>Send</strong>{" "}
              in WhatsApp to submit your booking. Your cart has not been
              cleared.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex cursor-pointer font-bold text-green-900 underline underline-offset-2"
            >
              Open WhatsApp message
            </a>
            <p className="mt-1 text-xs">
              If WhatsApp did not open automatically, use the link above.
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#0c2450] transition-colors hover:bg-slate-50"
        >
          <ArrowLeft size={17} />
          Back to Details
        </button>
        <button
          type="button"
          onClick={onBookNow}
          className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#b91c1c] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-md"
        >
          <FaWhatsapp size={19} />
          Book Now
        </button>
      </div>
      <p className="text-center text-xs leading-5 text-slate-500">
        Your booking is not submitted until you send the message in WhatsApp.
        No prices or payment are included.
      </p>
    </motion.section>
  );
}

export default function CartPage() {
  const { items, itemCount, isReady, setItemQuantity, removeFromCart } =
    useCart();
  const [step, setStep] = useState("cart");
  const [customer, setCustomer] = useState(initialCustomer);
  const [errors, setErrors] = useState({});
  const [whatsappOpened, setWhatsappOpened] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleCustomerChange = (event) => {
    const { name, value } = event.target;
    setCustomer((currentCustomer) => ({
      ...currentCustomer,
      [name]: value,
    }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
  };

  const handleContinue = () => {
    const nextErrors = {};
    if (!customer.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    const normalizedPhone = customer.contactNumber.trim().replace(/[\s()-]/g, "");
    if (!normalizedPhone) {
      nextErrors.contactNumber = "Please enter your contact number.";
    } else if (!/^(?:\+?91)?[6-9]\d{9}$/.test(normalizedPhone)) {
      nextErrors.contactNumber =
        "Enter a valid 10-digit mobile number, optionally with +91.";
    }

    if (!customer.deliveryAddress.trim()) {
      nextErrors.deliveryAddress = "Please enter your delivery address.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      toast.error("Please check the highlighted customer details.");
      return;
    }

    setWhatsappOpened(false);
    setStep("summary");
  };

  const handleBookNow = () => {
    const message = createWhatsAppOrderMessage(customer, items, itemCount);
    const url = `https://wa.me/918106973783?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setWhatsappOpened(true);
    toast.info(
      "Send the prepared message in WhatsApp to submit your booking. If it did not open, use the link on this page.",
    );
  };

  return (
    <section className="min-h-[55vh] bg-[#f7f9fc] px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#b91c1c]">
            Pennar Feeds
          </span>
          <h1 className="mt-2 text-3xl font-black text-[#0c2450] sm:text-4xl">
            {step === "cart"
              ? "Your Cart"
              : step === "details"
                ? "Book Your Order"
                : "Order Summary"}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {step === "cart" ? (
              <>
                {itemCount} {itemCount === 1 ? "bag" : "bags"} in your cart
              </>
            ) : (
              "Your order booking will be completed through WhatsApp."
            )}
          </p>
        </header>

        <AnimatePresence mode="wait" initial={false}>
          {step === "cart" && !isReady && (
            <motion.div
              key="cart-loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="status"
              className="rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center text-sm font-medium text-slate-500 shadow-sm"
            >
              Loading your saved cart…
            </motion.div>
          )}

          {step === "cart" &&
            isReady &&
            (items.length === 0 ? (
              <motion.div
                key="empty-cart"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm"
              >
                <ShoppingCart
                  size={40}
                  className="mx-auto text-slate-300"
                  aria-hidden="true"
                />
                <h2 className="mt-4 text-xl font-bold text-[#0c2450]">
                  Your cart is empty
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Explore our fish-feed products and add the bags you need.
                </p>
                <Link
                  href="/products"
                  className="mt-6 inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg bg-[#b91c1c] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-800"
                >
                  Explore Products
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="cart-items"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]"
              >
                <div className="space-y-4">
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <CartProduct
                        key={item.product.id}
                        item={item}
                        setItemQuantity={setItemQuantity}
                        removeFromCart={removeFromCart}
                      />
                    ))}
                  </AnimatePresence>
                </div>
                <CartSummary
                  distinctProducts={items.length}
                  itemCount={itemCount}
                  onBook={() => setStep("details")}
                />
              </motion.div>
            ))}

          {step === "details" && (
            <CustomerDetailsForm
              key="customer-details-form"
              customer={customer}
              errors={errors}
              onChange={handleCustomerChange}
              onCancel={() => setStep("cart")}
              onContinue={handleContinue}
            />
          )}

          {step === "summary" && (
            <OrderSummary
              key="order-summary"
              customer={customer}
              items={items}
              itemCount={itemCount}
              onBack={() => setStep("details")}
              onBookNow={handleBookNow}
              whatsappOpened={whatsappOpened}
              whatsappUrl={whatsappUrl}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
