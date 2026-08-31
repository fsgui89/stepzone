"use client";

import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6"
          />
        </div>
      </Link>

      <div className="p-5">
        <span className="text-xs font-bold uppercase tracking-widest text-lime-600">
          {product.category}
        </span>

        <Link href={`/product/${product.id}`}>
          <h2 className="mt-2 text-xl font-bold text-slate-900 transition hover:text-lime-600">
            {product.name}
          </h2>
        </Link>

        <p className="mt-3 text-2xl font-black text-slate-950">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-5 w-full rounded-xl bg-slate-950 px-4 py-3 font-bold text-white transition hover:bg-lime-400 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-lime-400"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </article>
  );
}