import React from "react";

type HeroEsteticaProps = {
  variant?: "split" | "centered" | "banner";
  eyebrow?: string;
  title?: string;
  description?: string;
  image?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function HeroEstetica({
  variant = "split",
  eyebrow = "Beleza, cuidado e bem-estar",
  title = "Sua beleza merece um cuidado especial",
  description = "Descubra uma experiência de cuidado personalizada, em um ambiente pensado para acolher você.",
  image,
  primaryLabel = "Agendar avaliação",
  primaryHref = "#contato",
  secondaryLabel,
  secondaryHref,
}: HeroEsteticaProps) {
  const actions = (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      {primaryLabel && primaryHref && (
        <a
          href={primaryHref}
          className="inline-flex items-center justify-center rounded-full bg-rose-800 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-rose-900"
        >
          {primaryLabel}
        </a>
      )}

      {secondaryLabel && secondaryHref && (
        <a
          href={secondaryHref}
          className="inline-flex items-center justify-center rounded-full border border-stone-300 px-7 py-3.5 text-sm font-medium text-stone-800 transition hover:border-rose-800 hover:text-rose-800"
        >
          {secondaryLabel}
        </a>
      )}
    </div>
  );

  if (variant === "centered") {
    return (
      <section className="bg-[#faf5f2] px-6 py-20 text-center md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          {eyebrow && (
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-rose-800">
              {eyebrow}
            </p>
          )}

          <h1 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 md:text-lg">
              {description}
            </p>
          )}

          <div className="flex justify-center">{actions}</div>

          {image && (
            <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-[2rem]">
              <img
                src={image}
                alt="Ambiente ou tratamento de estética"
                className="max-h-[520px] w-full object-cover"
              />
            </div>
          )}
        </div>
      </section>
    );
  }

  if (variant === "banner") {
    return (
      <section className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-stone-800 px-6 py-20 md:min-h-[680px] md:px-12">
        {image ? (
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-stone-700 to-rose-950" />
        )}

        <div className="absolute inset-0 -z-10 bg-stone-950/55" />

        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl text-white">
            {eyebrow && (
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-rose-100">
                {eyebrow}
              </p>
            )}

            <h1 className="font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">
              {title}
            </h1>

            {description && (
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                {description}
              </p>
            )}

            {actions}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden bg-[#faf5f2] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          {eyebrow && (
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-rose-800">
              {eyebrow}
            </p>
          )}

          <h1 className="font-serif text-4xl leading-tight text-stone-900 md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 md:text-lg">
              {description}
            </p>
          )}

          {actions}
        </div>

        <div className="order-1 lg:order-2">
          {image ? (
            <img
              src={image}
              alt="Ambiente ou tratamento de estética"
              className="aspect-[4/5] max-h-[650px] w-full rounded-t-full object-cover"
            />
          ) : (
            <div className="flex aspect-[4/5] max-h-[650px] w-full items-center justify-center rounded-t-full bg-gradient-to-br from-rose-100 via-[#f5e5df] to-stone-200">
              <span className="px-8 text-center font-serif text-2xl text-stone-600">
                Imagem do espaço de estética
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
