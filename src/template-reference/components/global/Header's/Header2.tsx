export default function FreshFoodHero() {
  const navigation = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu", dropdown: true },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-white p-2 sm:p-4">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1400px] flex-col overflow-hidden border border-gray-200 shadow-xl sm:min-h-[calc(100vh-2rem)]">
        {/* Cabeçalho */}
        <header className="relative z-20 grid min-h-[76px] grid-cols-2 items-center gap-4 bg-white px-5 py-4 md:grid-cols-[1fr_auto_1fr] md:px-8">
          {/* Redes sociais */}
          <div className="flex items-center gap-3 text-gray-800">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="text-xs font-bold hover:text-gray-500"
            >
              f
            </a>
            <a
              href="#twitter"
              aria-label="Twitter"
              className="text-xs font-bold hover:text-gray-500"
            >
              ♥
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="text-xs hover:text-gray-500"
            >
              ◎
            </a>
            <a
              href="#social"
              aria-label="Outra rede social"
              className="text-xs hover:text-gray-500"
            >
              ✳
            </a>
          </div>

          {/* Navegação */}
          <nav
            aria-label="Navegação principal"
            className="col-span-2 row-start-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11px] text-gray-700 md:col-span-1 md:col-start-2 md:row-start-1 md:gap-x-6"
          >
            {navigation.slice(0, 2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 transition hover:text-black"
              >
                {item.label}
                {item.dropdown && <span className="text-[9px]">⌄</span>}
              </a>
            ))}

            {/* Logotipo central */}
            <a
              href="#home"
              aria-label="Fresh Food - início"
              className="flex flex-col items-center leading-none text-gray-900"
            >
              <span className="text-[6px] tracking-[0.2em] text-gray-400">
                EST. 2012
              </span>
              <span className="mt-1 font-serif text-xl tracking-tight sm:text-2xl">
                FRESH FOOD
              </span>
              <span className="mt-1 text-[6px] tracking-[0.12em]">
                LOCAL GOURMET
              </span>
            </a>

            {navigation.slice(2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botão do cabeçalho */}
          <div className="col-start-2 row-start-1 flex justify-end md:col-start-3">
            <a
              href="#reservation"
              className="inline-flex min-h-9 items-center justify-center border border-gray-800 px-4 text-[10px] text-gray-800 transition hover:bg-gray-900 hover:text-white sm:min-w-[130px]"
            >
              Find a Table
            </a>
          </div>
        </header>

        {/* Banner principal */}
        <section
          id="home"
          className="relative flex flex-1 items-center justify-center bg-gray-900 bg-cover bg-center px-5 py-20 text-center text-white"
          style={{
            backgroundImage: "url('/images/fresh-food.jpg')",
          }}
        >
          {/* Escurecimento da imagem */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Conteúdo */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-[10px] uppercase tracking-wide sm:text-xs">
              Welcome to Fresh Food Local Gourmet
            </p>

            <h1 className="font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Serving delicious
              <br />
              healthy food
            </h1>

            <a
              href="#reservation"
              className="mt-7 inline-flex min-h-10 min-w-[120px] items-center justify-center bg-white px-6 py-3 text-[11px] text-gray-800 transition hover:bg-gray-900 hover:text-white"
            >
              Find a Table
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
