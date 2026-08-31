export default function CTA() {
  return (
    <section className="mx-auto my-20 max-w-7xl px-6">
      <div className="overflow-hidden rounded-3xl bg-slate-950 px-8 py-14 text-white md:px-14">
        <span className="font-bold uppercase tracking-widest text-lime-400">
          StepZone+
        </span>

        <h2 className="mt-3 max-w-2xl text-4xl font-black">
          Mais benefícios a cada novo passo.
        </h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          Frete grátis, ofertas exclusivas e acesso antecipado aos principais
          lançamentos.
        </p>

        <a
          href="#produtos"
          className="mt-8 inline-block rounded-xl bg-lime-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-lime-300"
        >
          Explorar produtos
        </a>
      </div>
    </section>
  );
}