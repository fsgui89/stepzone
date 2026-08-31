"use client";

import { useMemo, useState } from "react";

import CTA from "@/components/CTA";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["Todos", "Running", "Casual", "Basket"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "Todos" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main>
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <span className="font-bold uppercase tracking-widest text-lime-400">
            Sneakers & Lifestyle
          </span>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Encontre o tênis para o seu próximo passo.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Performance, estilo e os modelos mais desejados em um só lugar.
          </p>
        </div>
      </section>

      <section id="produtos" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-black">Tênis em destaque</h2>

          <p className="mt-2 text-slate-500">
            Escolha seu modelo e dê o próximo passo.
          </p>
        </div>

        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="text"
            placeholder="Buscar tênis..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3 outline-none transition focus:border-lime-500 focus:ring-2 focus:ring-lime-200 lg:max-w-md"
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-xl px-5 py-2 font-semibold transition ${
                  category === item
                    ? "bg-slate-950 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            Nenhum produto encontrado.
          </div>
        )}
      </section>

      <CTA />
    </main>
  );
}