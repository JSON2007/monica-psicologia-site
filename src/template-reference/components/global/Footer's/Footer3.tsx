type FooterCenteredProps = {
  sections?: { label: string; href: string }[];
  description?: string;
  socialLinks?: { label: string; href: string; icon?: string }[];
  copyright?: string;
  backgroundColor?: string;
};

export default function FooterCentered({
  sections = [],
  description,
  socialLinks = [],
  copyright,
  backgroundColor = "#4055b5",
}: FooterCenteredProps) {
  return (
    <footer
      className="w-full overflow-hidden rounded-md text-white"
      style={{ backgroundColor }}
    >
      {/* Navegação superior */}
      <nav
        aria-label="Navegação do rodapé"
        className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 px-6 py-9 sm:gap-x-16"
      >
        {sections.map((section) => (
          <a
            key={section.label}
            href={section.href}
            className="text-xs font-bold uppercase transition-opacity hover:opacity-70"
          >
            {section.label}
          </a>
        ))}
      </nav>

      <div className="mx-6 border-t border-white/20" />

      {/* Descrição institucional */}
      {description && (
        <div className="mx-auto max-w-4xl px-6 py-10 text-center">
          <p className="text-sm leading-6 text-white/90">{description}</p>
        </div>
      )}

      {/* Redes sociais */}
      {socialLinks.length > 0 && (
        <nav
          aria-label="Redes sociais"
          className="flex flex-wrap items-center justify-center gap-6 px-6 pb-10"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="text-sm font-semibold transition-opacity hover:opacity-60"
            >
              {social.icon ?? social.label}
            </a>
          ))}
        </nav>
      )}

      {/* Copyright */}
      <div className="bg-black/10 px-5 py-5 text-center text-sm">
        {copyright ?? ""}
      </div>
    </footer>
  );
}
