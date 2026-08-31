export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
        <div>
          <strong className="text-xl text-white">
            STEP<span className="text-lime-400">ZONE</span>
          </strong>

          <p className="mt-2 text-sm">
            Seu próximo passo começa aqui.
          </p>
        </div>

        <p className="text-sm">
          © 2026 StepZone. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}