"use client";

import Link from "next/link";

import CartItem from "@/components/CartItem";
import { useCart } from "@/hooks/useCart";

export default function CartPage() {
  const {
    cart,
    subtotal,
    discount,
    total,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="mx-auto min-h-[65vh] max-w-7xl px-6 py-20 text-center">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-12 shadow-sm">
          <div className="text-6xl">🛒</div>

          <h1 className="mt-6 text-3xl font-black">
            Seu carrinho está vazio
          </h1>

          <p className="mt-3 text-slate-500">
            Escolha um tênis e dê seu próximo passo.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-lime-400 px-6 py-3 font-bold"
          >
            Ver produtos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-black">Seu carrinho</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {cart.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
            />
          ))}
        </div>

        <aside className="h-fit rounded-3xl bg-slate-950 p-7 text-white">
          <h2 className="text-2xl font-black">
            Resumo do pedido
          </h2>

          <div className="mt-7 space-y-4 border-b border-slate-700 pb-6">
            <div className="flex justify-between">
              <span className="text-slate-400">Subtotal</span>
              <span>
                {subtotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">
                Desconto
              </span>

              <span className="text-lime-400">
                -
                {discount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>

          <div className="mt-6 flex justify-between text-xl font-black">
            <span>Total</span>

            <span>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>

          {discount > 0 && (
            <p className="mt-4 text-sm text-lime-400">
              🎉 Você ganhou 10% de desconto!
            </p>
          )}

          <Link
            href="/checkout"
            className="mt-7 block rounded-xl bg-lime-400 px-5 py-4 text-center font-black text-slate-950 transition hover:bg-lime-300"
          >
            Ir para o checkout
          </Link>
        </aside>
      </div>
    </main>
  );
}