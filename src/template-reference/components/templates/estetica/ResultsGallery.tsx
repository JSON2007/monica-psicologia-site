import React from "react";

export type GalleryItem = {
  id?: string;
  title?: string;
  description?: string;
  image: string;
  alt?: string;
};

export type ComparisonItem = {
  id?: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  note?: string;
};

type ResultsGalleryProps = {
  variant?: "grid" | "masonry" | "comparison";
  eyebrow?: string;
  title?: string;
  description?: string;
  images?: GalleryItem[];
  comparisons?: ComparisonItem[];
};

export default function ResultsGallery({
  variant = "grid",
  eyebrow = "Nossa galeria",
  title = "Cuidado em cada detalhe",
  description,
  images = [],
  comparisons = [],
}: ResultsGalleryProps) {
  const heading = (
    <div className="mb-10 max-w-2xl">
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
  );

  if (variant === "comparison") {
    return (
      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          {heading}

          {comparisons.length === 0 ? (
            <p className="rounded-xl border border-dashed border-stone-300 p-8 text-center text-sm text-stone-500">
              Adicione imagens de comparação para exibir esta galeria.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {comparisons.map((item) => (
                <article
                  key={item.id ?? item.title}
                  className="overflow-hidden rounded-2xl border border-stone-200 bg-white"
                >
                  <div className="grid grid-cols-2 gap-1 bg-stone-100">
                    <div>
                      <img
                        src={item.beforeImage}
                        alt={item.beforeAlt ?? `Antes — ${item.title}`}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover"
                      />
                      <p className="bg-stone-100 px-3 py-2 text-center text-xs uppercase tracking-wider text-stone-600">
                        Antes
                      </p>
                    </div>

                    <div>
                      <img
                        src={item.afterImage}
                        alt={item.afterAlt ?? `Depois — ${item.title}`}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover"
                      />
                      <p className="bg-stone-100 px-3 py-2 text-center text-xs uppercase tracking-wider text-stone-600">
                        Depois
                      </p>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-xl text-stone-900">
                      {item.title}
                    </h3>

                    {item.note && (
                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        {item.note}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  if (variant === "masonry") {
    return (
      <section className="bg-[#faf6f3] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          {heading}

          {images.length === 0 ? (
            <p className="rounded-xl border border-dashed border-stone-300 p-8 text-center text-sm text-stone-500">
              Adicione imagens para montar a galeria.
            </p>
          ) : (
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
              {images.map((item) => (
                <figure
                  key={item.id ?? item.image}
                  className="mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.alt ?? item.title ?? "Imagem da galeria"}
                    loading="lazy"
                    className="w-full object-cover"
                  />

                  {(item.title || item.description) && (
                    <figcaption className="p-5">
                      {item.title && (
                        <h3 className="font-serif text-lg text-stone-900">
                          {item.title}
                        </h3>
                      )}

                      {item.description && (
                        <p className="mt-2 text-sm leading-6 text-stone-600">
                          {item.description}
                        </p>
                      )}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        {heading}

        {images.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 p-8 text-center text-sm text-stone-500">
            Adicione imagens para montar a galeria.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((item) => (
              <figure
                key={item.id ?? item.image}
                className="group overflow-hidden rounded-2xl bg-[#faf6f3]"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt ?? item.title ?? "Imagem da galeria"}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {(item.title || item.description) && (
                  <figcaption className="p-5">
                    {item.title && (
                      <h3 className="font-serif text-lg text-stone-900">
                        {item.title}
                      </h3>
                    )}

                    {item.description && (
                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        {item.description}
                      </p>
                    )}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
