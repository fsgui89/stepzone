"use client";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-black tracking-tight">
          STEP<span className="text-lime-400">ZONE</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="hidden transition hover:text-lime-400 sm:block"
          >
            Produtos
          </Link>

          <Link
            href="/cart"
            className="relative rounded-xl bg-lime-400 px-4 py-2 font-bold text-slate-950 transition hover:bg-lime-300"
          >
            🛒 Carrinho

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}