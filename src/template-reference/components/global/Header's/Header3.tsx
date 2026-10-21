export default function KiddyHero() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Classes", href: "#classes" },
    { label: "Parents", href: "#parents" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-white p-2 sm:p-4">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1400px] flex-col overflow-hidden border border-gray-200 shadow-xl">
        {/* Cabeçalho */}
        <header className="relative z-20 flex min-h-[72px] flex-wrap items-center justify-between gap-4 bg-white px-5 py-4 sm:px-8 lg:px-12">
          {/* Logotipo */}
          <a
            href="#home"
            aria-label="Kiddy - início"
            className="font-sans text-2xl font-black tracking-tight text-yellow-400 sm:text-3xl"
          >
            KID<span className="relative">D</span>Y
          </a>

          {/* Menu de navegação */}
          <nav
            aria-label="Menu principal"
            className="flex flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-3 lg:gap-x-7"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-300 transition-colors hover:text-amber-500 sm:text-[10px]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        {/* Banner principal */}
        <section
          id="home"
          className="relative flex min-h-[480px] flex-1 items-center justify-center overflow-hidden bg-gray-200 bg-cover bg-center px-5 py-24 text-center sm:min-h-[600px] lg:min-h-[680px]"
          style={{
            backgroundImage: "url('/images/kiddy-school.jpg')",
          }}
        >
          {/* Leve contraste para o título */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Texto central */}
          <div className="relative z-10 -mt-4 text-white">
            <h1 className="text-5xl font-black uppercase leading-none tracking-tight drop-shadow-sm sm:text-6xl md:text-7xl lg:text-8xl">
              School
            </h1>

            <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide sm:text-xs">
              Ages 2 to 5 years old
            </p>
          </div>

          {/* Nuvens decorativas inferiores */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 overflow-hidden bg-white"
            style={{
              clipPath:
                "polygon(0 42%, 3% 35%, 6% 55%, 9% 82%, 12% 72%, 15% 88%, 18% 75%, 21% 100%, 25% 100%, 29% 80%, 32% 55%, 36% 65%, 40% 20%, 44% 5%, 48% 35%, 51% 10%, 55% 30%, 59% 75%, 63% 55%, 67% 72%, 71% 45%, 75% 70%, 79% 50%, 83% 78%, 87% 42%, 91% 62%, 95% 48%, 100% 68%, 100% 100%, 0 100%)",
            }}
          />
        </section>
      </div>
    </main>
  );
}
