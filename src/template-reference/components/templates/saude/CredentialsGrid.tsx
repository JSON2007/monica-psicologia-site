type Credential = {
  title: string;
  description?: string;
  institution?: string;
  year?: string;
  value?: string;
  icon?: string;
};

type CredentialsGridProps = {
  variant?: "cards" | "highlights" | "timeline";
  title?: string;
  description?: string;
  credentials: Credential[];
};

export default function CredentialsGrid({
  variant = "cards",
  title,
  description,
  credentials,
}: CredentialsGridProps) {
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

        {/* Modelo 1: cartões de credenciais */}
        {variant === "cards" && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                {item.icon && (
                  <div
                    aria-hidden="true"
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl text-teal-700"
                  >
                    {item.icon}
                  </div>
                )}

                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                {item.institution && (
                  <p className="mt-2 text-sm font-medium text-teal-700">
                    {item.institution}
                  </p>
                )}

                {item.description && (
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                )}

                {item.year && (
                  <p className="mt-4 text-xs text-slate-500">{item.year}</p>
                )}
              </article>
            ))}
          </div>
        )}

        {/* Modelo 2: credenciais e indicadores em destaque */}
        {variant === "highlights" && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="rounded-xl bg-slate-50 p-6 text-center"
              >
                {item.value && (
                  <p className="text-3xl font-bold tracking-tight text-teal-700">
                    {item.value}
                  </p>
                )}

                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                )}

                {item.institution && (
                  <p className="mt-3 text-xs text-slate-500">
                    {item.institution}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}

        {/* Modelo 3: formação e trajetória cronológica */}
        {variant === "timeline" && (
          <div className="mx-auto max-w-3xl">
            {credentials.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="relative border-l-2 border-teal-200 pb-9 pl-7 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-teal-600 bg-white"
                />

                {item.year && (
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-700">
                    {item.year}
                  </p>
                )}

                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                {item.institution && (
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {item.institution}
                  </p>
                )}

                {item.description && (
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
