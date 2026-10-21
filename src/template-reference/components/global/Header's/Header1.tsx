export default function NorthLakeHero() {
  return (
    <main
      id="home"
      className="relative isolate h-screen min-h-[500px] max-h-[900px] w-full overflow-hidden bg-slate-800 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/images/north-lake.jpg')",
      }}
    >
      {/* Camada de contraste sobre a imagem */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-950/40 via-slate-900/10 to-slate-950/40" />

      {/* Cabeçalho */}
      <header className="relative z-10 flex flex-wrap items-center justify-between gap-5 px-5 py-6 sm:px-8 lg:flex-nowrap lg:px-12">
        <a
          href="#home"
          aria-label="North Lake - início"
          className="text-2xl font-bold tracking-wide"
        >
          <span aria-hidden="true">⛰</span>
        </a>

        <nav
          aria-label="Menu principal"
          className="order-3 flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-3 lg:order-none lg:w-auto lg:gap-6"
        >
          {[
            ["Home", "#home"],
            ["Discover", "#discover"],
            ["Experiences", "#experiences"],
            ["Gallery", "#gallery"],
            ["Find Us⌄", "#find-us"],
            ["Fees", "#fees"],
          ].map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`border-b pb-1 text-[9px] uppercase tracking-wide text-white/90 transition hover:border-white ${
                index === 0 ? "border-white" : "border-transparent"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Ícones sociais provisórios */}
        <div className="flex items-center gap-2">
          {["f", "◎", "♥", "•"].map((icon, index) => (
            <a
              key={index}
              href="#social"
              aria-label={`Rede social ${index + 1}`}
              className="flex h-5 w-5 items-center justify-center rounded-full border border-white/40 text-[10px] transition hover:bg-white hover:text-slate-800"
            >
              {icon}
            </a>
          ))}
        </div>
      </header>

      {/* Conteúdo central */}
      <section
        id="discover"
        className="absolute left-1/2 top-[48%] z-10 w-[92%] -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <p className="mb-0 font-serif text-xl font-bold italic sm:text-2xl">
          Discover
        </p>

        <h1 className="mb-7 font-serif text-6xl font-medium italic tracking-tight drop-shadow-md sm:text-7xl md:text-8xl lg:text-9xl">
          North Lake
        </h1>

        <a
          href="#experiences"
          className="inline-flex min-h-9 min-w-28 items-center justify-center bg-white px-6 py-3 text-[9px] uppercase tracking-wide text-slate-800 transition hover:bg-slate-800 hover:text-white"
        >
          Explore Now
        </a>
      </section>

      {/* Sombra inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[15%] bg-gradient-to-t from-slate-950/20 to-transparent" />
    </main>
  );
}
