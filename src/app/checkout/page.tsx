"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useCart } from "@/hooks/useCart";

export default function CheckoutPage() {
  const router = useRouter();

  const {
    cart,
    total,
    clearCart,
  } = useCart();

  const [payment, setPayment] = useState("pix");

  function finishOrder() {
    clearCart();
    router.push("/success");
  }

  if (cart.length === 0) {
    return (
      <main className="mx-auto min-h-[65vh] max-w-7xl px-6 py-20 text-center">
        <h1 className="text-3xl font-black">
          Nenhum produto para finalizar.
        </h1>

        <Link
          href="/"
          className="mt-7 inline-block rounded-xl bg-lime-400 px-6 py-3 font-bold"
        >
          Voltar para a loja
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <span className="font-bold uppercase tracking-widest text-lime-600">
        Último passo
      </span>

      <h1 className="mt-2 text-4xl font-black">
        Finalizar compra
      </h1>

      <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-xl font-black">
          Método de pagamento
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ["pix", "⚡ Pix"],
            ["cartao", "💳 Cartão"],
            ["debito", "🏦 Débito"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setPayment(value)}
              className={`rounded-2xl border-2 p-5 font-bold transition ${
                payment === value
                  ? "border-lime-400 bg-lime-50"
                  : "border-slate-200 hover:border-slate-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-7">
          <div className="flex justify-between text-2xl font-black">
            <span>Total</span>

            <span>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>

          <button
            onClick={finishOrder}
            className="mt-8 w-full rounded-xl bg-slate-950 px-6 py-4 text-lg font-black text-white transition hover:bg-lime-400 hover:text-slate-950"
          >
            Confirmar pagamento
          </button>
        </div>
      </div>
    </main>
  );
}