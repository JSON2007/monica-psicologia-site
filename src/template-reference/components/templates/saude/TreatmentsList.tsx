import { useState } from "react";

type Treatment = {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  label?: string;
};

type TreatmentsListProps = {
  variant?: "cards" | "accordion" | "editorial";
  title?: string;
  description?: string;
  treatments: Treatment[];
};

export default function TreatmentsList({
  variant = "cards",
  title,
  description,
  treatments,
}: TreatmentsListProps) {
  const [expanded, setExpanded] = useState<number[]>([]);

  function toggleTreatment(index: number) {
    setExpanded((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }

  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {(title || description) && (
          <header className="mb-10 max-w-3xl">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 leading-7 text-slate-600">{description}</p>
            )}
          </header>
        )}

        {/* Modelo 1: cartões de tratamentos */}
        {variant === "cards" && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment, index) => (
              <article
                key={`${treatment.title}-${index}`}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-lg"
              >
                {treatment.image ? (
                  <img
                    src={treatment.image}
                    alt=""
                    loading="lazy"
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-36 items-center justify-center bg-teal-50 text-sm text-teal-700"
                  >
                    Espaço reservado para imagem
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {treatment.title}
                  </h3>

                  {treatment.description && (
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {treatment.description}
                    </p>
                  )}

                  {treatment.href && treatment.label && (
                    <a
                      href={treatment.href}
                      className="mt-5 inline-flex text-sm font-semibold text-teal-700 hover:text-teal-900"
                    >
                      {treatment.label}
                      <span aria-hidden="true" className="ml-2">
                        →
                      </span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Modelo 2: lista expansível */}
        {variant === "accordion" && (
          <div className="mx-auto max-w-4xl divide-y divide-slate-200 border-y border-slate-200">
            {treatments.map((treatment, index) => {
              const isOpen = expanded.includes(index);

              return (
                <article key={`${treatment.title}-${index}`}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`treatment-panel-${index}`}
                    onClick={() => toggleTreatment(index)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-slate-900">
                      {treatment.title}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal-200 text-xl text-teal-700"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`treatment-panel-${index}`}
                      className="pb-6 pr-10 text-sm leading-7 text-slate-600"
                    >
                      {treatment.description}

                      {treatment.image && (
                        <img
                          src={treatment.image}
                          alt=""
                          loading="lazy"
                          className="mt-4 max-h-64 w-full rounded-xl object-cover"
                        />
                      )}

                      {treatment.href && treatment.label && (
                        <a
                          href={treatment.href}
                          className="mt-4 inline-block font-semibold text-teal-700 hover:underline"
                        >
                          {treatment.label}
                        </a>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}

        {/* Modelo 3: seções editoriais alternadas */}
        {variant === "editorial" && (
          <div className="space-y-16">
            {treatments.map((treatment, index) => {
              const imageFirst = index % 2 === 1;

              return (
                <article
                  key={`${treatment.title}-${index}`}
                  className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
                >
                  <div
                    className={`flex min-h-48 items-center justify-center ${
                      imageFirst ? "md:order-2" : ""
                    }`}
                  >
                    {treatment.image ? (
                      <img
                        src={treatment.image}
                        alt=""
                        loading="lazy"
                        className="max-h-[420px] w-full rounded-2xl object-cover"
                      />
                    ) : (
                      <div className="flex min-h-56 w-full items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
                        Espaço reservado para imagem
                      </div>
                    )}
                  </div>

                  <div className={imageFirst ? "md:order-1" : ""}>
                    <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                      {treatment.title}
                    </h3>

                    {treatment.description && (
                      <p className="mt-4 text-base leading-7 text-slate-600">
                        {treatment.description}
                      </p>
                    )}

                    {treatment.href && treatment.label && (
                      <a
                        href={treatment.href}
                        className="mt-6 inline-flex items-center rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                      >
                        {treatment.label}
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
