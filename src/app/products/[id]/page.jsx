import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getProductById, products } from "@/lib/products";
import ProductDetailActions from "@/components/products/ProductDetailActions";

export function generateStaticParams() {
  return products.map((product) => ({ id: String(product.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product Not Found | Pennar Feeds" };

  return {
    title: `${product.name} (${product.protein} Protein) | Pennar Feeds`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const isBlue = product.theme === "blue";

  return (
    <section className="bg-[#f7f9fc] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/products"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-950 transition-colors hover:text-red-700"
        >
          <ArrowLeft size={17} />
          All Products
        </Link>

        <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.07)] sm:grid-cols-2">
          <div
            className={`relative flex min-h-[300px] items-center justify-center overflow-hidden p-8 sm:min-h-[480px] ${isBlue ? "bg-[#eaf2ff]" : "bg-[#fff2e4]"}`}
          >
            <Image
              src={product.image}
              alt={`Pennar Feeds ${product.protein} protein fish feed`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-contain p-8 drop-shadow-[0_12px_16px_rgba(15,23,42,0.12)]"
              priority
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-red-700">
              Pennar Feeds
            </span>
            <h1 className="mt-3 text-3xl font-black leading-tight text-blue-950 sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-lg font-bold text-blue-950">
              {product.protein} Protein
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              {product.description}
            </p>

            <div className="mt-7 space-y-3">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 fill-red-700 text-red-700 [&>path:first-child]:stroke-white"
                  />
                  <span className="text-sm text-slate-600">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <ProductDetailActions productId={product.id} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
