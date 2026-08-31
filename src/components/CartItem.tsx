"use client";

import Image from "next/image";

import type { StoredCartItem } from "@/lib/storage";
import { useCart } from "@/hooks/useCart";

export default function CartItem({ item }: { item: StoredCartItem }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <article className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center">
      <div className="relative h-32 w-full shrink-0 sm:w-32">
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex-1">
        <span className="text-xs font-bold uppercase tracking-widest text-lime-600">
          {item.product.category}
        </span>

        <h2 className="mt-1 text-xl font-bold">
          {item.product.name}
        </h2>

        <p className="mt-2 font-black">
          {item.product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() =>
            updateQuantity(item.product.id, item.quantity - 1)
          }
          className="h-10 w-10 rounded-lg bg-slate-200 font-bold hover:bg-slate-300"
        >
          −
        </button>

        <span className="w-8 text-center font-bold">
          {item.quantity}
        </span>

        <button
          onClick={() =>
            updateQuantity(item.product.id, item.quantity + 1)
          }
          className="h-10 w-10 rounded-lg bg-slate-950 font-bold text-white hover:bg-lime-400 hover:text-slate-950"
        >
          +
        </button>
      </div>

      <button
        onClick={() => removeFromCart(item.product.id)}
        className="font-semibold text-red-500 hover:text-red-700"
      >
        Remover
      </button>
    </article>
  );
}