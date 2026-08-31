import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-lime-400 text-5xl">
          ✓
        </div>

        <span className="mt-8 block font-bold uppercase tracking-widest text-lime-600">
          Pedido confirmado
        </span>

        <h1 className="mt-3 text-4xl font-black md:text-5xl">
          Seu próximo passo está a caminho!
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-500">
          Pagamento aprovado com sucesso. Obrigado por comprar na StepZone.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-slate-950 px-7 py-4 font-black text-white transition hover:bg-lime-400 hover:text-slate-950"
        >
          Continuar comprando
        </Link>
      </div>
    </main>
  );
}