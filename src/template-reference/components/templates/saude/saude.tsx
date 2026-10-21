type HeroSaudeProps = {
  variant?: "institucional" | "centralizado" | "profissional";
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  professionalName?: string;
  specialty?: string;
};

export default function HeroSaude({
  variant = "institucional",
  title,
  subtitle,
  description,
  image,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  professionalName,
  specialty,
}: HeroSaudeProps) {
  const PrimaryButton = () =>
    primaryLabel && primaryHref ? (
      <a
        href={primaryHref}
        className="inline-flex items-center justify-center rounded-lg bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
      >
        {primaryLabel}
      </a>
    ) : null;

  const SecondaryButton = () =>
    secondaryLabel && secondaryHref ? (
      <a
        href={secondaryHref}
        className="inline-flex items-center justify-center rounded-lg border border-teal-700 px-6 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
      >
        {secondaryLabel}
      </a>
    ) : null;

  // Modelo 1: institucional, texto à esquerda e imagem à direita
  if (variant === "institucional") {
    return (
      <section className="overflow-hidden bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="max-w-xl">
            {subtitle && (
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-700">
                {subtitle}
              </p>
            )}

            {title && (
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                {title}
              </h1>
            )}

            {description && (
              <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
                {description}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton />
              <SecondaryButton />
            </div>
          </div>

          <div className="flex min-h-64 items-center justify-center">
            {image ? (
              <img
                src={image}
                alt=""
                className="h-full max-h-[480px] w-full rounded-2xl object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex min-h-64 w-full items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white text-sm text-slate-400"
              >
                Espaço reservado para imagem
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Modelo 2: centralizado, com fundo claro
  if (variant === "centralizado") {
    return (
      <section className="bg-gradient-to-b from-teal-50 to-white px-6 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-4xl">
          {subtitle && (
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              {subtitle}
            </p>
          )}

          {title && (
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          )}

          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {description}
            </p>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryButton />
            <SecondaryButton />
          </div>

          {image && (
            <img
              src={image}
              alt=""
              className="mx-auto mt-12 max-h-[360px] w-full max-w-3xl rounded-2xl object-cover"
            />
          )}
        </div>
      </section>
    );
  }

  // Modelo 3: apresentação de profissional
  return (
    <section className="overflow-hidden bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          {specialty && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-300">
              {specialty}
            </p>
          )}

          {professionalName && (
            <p className="mb-2 text-lg font-medium text-slate-300">
              {professionalName}
            </p>
          )}

          {title && (
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {title}
            </h1>
          )}

          {description && (
            <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg">
              {description}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={primaryHref || "#"}
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-400"
            >
              {primaryLabel || " "}
            </a>

            <SecondaryButton />
          </div>
        </div>

        <div className="flex min-h-72 items-center justify-center">
          {image ? (
            <img
              src={image}
              alt=""
              className="h-full max-h-[520px] w-full rounded-2xl object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex min-h-72 w-full items-center justify-center rounded-2xl border border-dashed border-slate-600 bg-slate-900 text-sm text-slate-400"
            >
              Espaço reservado para foto profissional
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
