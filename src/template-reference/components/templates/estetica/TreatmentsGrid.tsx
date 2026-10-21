import React from "react";

export type Treatment = {
  id?: string;
  title: string;
  description: string;
  image?: string;
  href?: string;
  label?: string;
  duration?: string;
};

type TreatmentsGridProps = {
  variant?: "cards" | "minimal" | "featured";
  eyebrow?: string;
  title?: string;
  description?: string;
  treatments: Treatment[];
};

export default function TreatmentsGrid({
  variant = "cards",
  eyebrow = "Nossos tratamentos",
  title = "Cuidados pensados para você",
  description,
  treatments,
}: TreatmentsGridProps) {
  if (variant === "minimal") {
    return (
      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-rose-700">
                {eyebrow}
              </p>
            )}

            <h2 className="font-serif text-3xl text-stone-900 md:text-5xl">
              {title}
            </h2>

            {description && (
              <p className="mt-5 leading-7 text-stone-600">{description}</p>
            )}
          </div>

          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {treatments.map((treatment, index) => (
              <article
                key={treatment.id ?? treatment.title}
                className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex gap-5">
                  <span className="pt-1 text-sm text-rose-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg font-medium text-stone-900">
                      {treatment.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-stone-600">
                      {treatment.description}
                    </p>

                    {treatment.duration && (
                      <p className="mt-2 text-xs uppercase tracking-wider text-stone-500">
                        {treatment.duration}
                      </p>
                    )}
                  </div>
                </div>

                {treatment.href && (
                  <a
                    href={treatment.href}
                    className="shrink-0 text-sm font-medium text-rose-800 underline decoration-rose-300 underline-offset-4 hover:text-rose-950"
                  >
                    {treatment.label ?? "Saiba mais"}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "featured") {
    const [featured, ...remaining] = treatments;

    if (!featured) return null;

    return (
      <section className="bg-[#faf6f3] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-rose-700">
                {eyebrow}
              </p>
            )}

            <h2 className="font-serif text-3xl text-stone-900 md:text-5xl">
              {title}
            </h2>

            {description && (
              <p className="mt-5 leading-7 text-stone-600">{description}</p>
            )}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="aspect-[4/3] bg-stone-200">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-stone-500">
                    Imagem do tratamento em destaque
                  </div>
                )}
              </div>

              <div className="p-7 md:p-9">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-rose-700">
                  Em destaque
                </p>

                <h3 className="font-serif text-2xl text-stone-900 md:text-3xl">
                  {featured.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-600">
                  {featured.description}
                </p>

                {featured.duration && (
                  <p className="mt-4 text-sm text-stone-500">
                    Duração: {featured.duration}
                  </p>
                )}

                {featured.href && (
                  <a
                    href={featured.href}
                    className="mt-6 inline-flex text-sm font-medium text-rose-800 underline decoration-rose-300 underline-offset-4 hover:text-rose-950"
                  >
                    {featured.label ?? "Conheça o tratamento"}
                  </a>
                )}
              </div>
            </article>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {remaining.map((treatment) => (
                <article
                  key={treatment.id ?? treatment.title}
                  className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-5 sm:flex-row sm:items-center"
                >
                  {treatment.image && (
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="h-28 w-full rounded-xl object-cover sm:w-32"
                    />
                  )}

                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-stone-900">
                      {treatment.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-stone-600">
                      {treatment.description}
                    </p>

                    {treatment.href && (
                      <a
                        href={treatment.href}
                        className="mt-3 inline-block text-sm font-medium text-rose-800 underline underline-offset-4"
                      >
                        {treatment.label ?? "Saiba mais"}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#faf6f3] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-rose-700">
              {eyebrow}
            </p>
          )}

          <h2 className="font-serif text-3xl text-stone-900 md:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mt-5 leading-7 text-stone-600">{description}</p>
          )}
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <article
              key={treatment.id ?? treatment.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                {treatment.image ? (
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-stone-500">
                    Imagem do tratamento
                  </div>
                )}
              </div>

              <div className="p-6">
                {treatment.duration && (
                  <p className="mb-2 text-xs uppercase tracking-wider text-rose-700">
                    {treatment.duration}
                  </p>
                )}

                <h3 className="font-serif text-xl text-stone-900">
                  {treatment.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {treatment.description}
                </p>

                {treatment.href && (
                  <a
                    href={treatment.href}
                    className="mt-5 inline-flex text-sm font-medium text-rose-800 underline decoration-rose-300 underline-offset-4 hover:text-rose-950"
                  >
                    {treatment.label ?? "Saiba mais"}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
