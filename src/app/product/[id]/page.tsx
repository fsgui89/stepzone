"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-4xl font-black">Produto não encontrado</h1>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-lime-400 px-6 py-3 font-bold"
        >
          Voltar para a loja
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <Link
        href="/"
        className="font-semibold text-slate-500 transition hover:text-lime-600"
      >
        ← Voltar aos produtos
      </Link>

      <section className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-white shadow-sm">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-10"
            priority
          />
        </div>

        <div>
          <span className="font-bold uppercase tracking-widest text-lime-600">
            {product.category}
          </span>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            {product.name}
          </h1>

          <p className="mt-6 text-3xl font-black">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 rounded-xl bg-lime-400 px-8 py-4 font-black text-slate-950 transition hover:bg-lime-300"
          >
            🛒 Adicionar ao carrinho
          </button>
        </div>
      </section>
    </main>
  );
}