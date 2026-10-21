const footerColumns = [
  {
    title: "FOOTER CONTENT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi cum ipsam ad, illo possimus laborum ut reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque? Reiciendis assumenda iusto sapiente inventore animi!",
  },
  {
    title: "LINKS",
    links: ["Link 1", "Link 2", "Link 3", "Link 4"],
  },
  {
    title: "LINKS",
    links: ["Link 1", "Link 2", "Link 3", "Link 4"],
  },
  {
    title: "LINKS",
    links: ["Link 1", "Link 2", "Link 3", "Link 4"],
  },
  {
    title: "LINKS",
    links: ["Link 1", "Link 2", "Link 3", "Link 4"],
  },
];

const socialLinks = [
  { label: "Facebook", icon: "f", href: "#facebook" },
  { label: "Twitter", icon: "♥", href: "#twitter" },
  { label: "Google", icon: "G", href: "#google" },
  { label: "Instagram", icon: "◎", href: "#instagram" },
  { label: "LinkedIn", icon: "in", href: "#linkedin" },
  { label: "GitHub", icon: "⌘", href: "#github" },
];

export default function Footer() {
  return (
    <footer className="bg-[#30313a] px-3 py-5 text-gray-100 sm:px-4">
      <div className="overflow-hidden rounded-md">
        {/* Colunas de conteúdo */}
        <div className="grid grid-cols-1 gap-8 bg-[#3d4554] px-5 py-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6 lg:px-5">
          {footerColumns.map((column, index) => (
            <section key={`${column.title}-${index}`}>
              <h2 className="mb-2 text-base font-semibold uppercase">
                {column.title}
              </h2>

              {column.description ? (
                <p className="text-sm leading-[1.6] text-gray-200">
                  {column.description}
                </p>
              ) : (
                <ul className="space-y-1">
                  {column.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={`#link-${index}-${linkIndex + 1}`}
                        className="text-sm text-gray-200 transition hover:text-white hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Cadastro */}
        <div className="flex flex-col items-center justify-center gap-3 border-t border-gray-500/60 bg-[#3d4554] px-4 py-6 sm:flex-row sm:gap-4">
          <span className="text-sm">Register for free</span>

          <a
            href="#signup"
            className="rounded-full border-2 border-gray-200 px-5 py-2 text-[11px] font-semibold transition hover:bg-white hover:text-gray-800"
          >
            SIGN UP!
          </a>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-wrap items-center justify-center gap-3 border-t border-gray-500/60 bg-[#3d4554] px-4 py-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 text-xs font-semibold text-gray-100 transition hover:border-white hover:bg-white hover:text-gray-800"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="bg-[#30313a] px-4 py-4 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} Copyright:{" "}
          <a
            href="#home"
            className="font-medium hover:text-white hover:underline"
          >
            SeuSite.com
          </a>
        </div>
      </div>
    </footer>
  );
}
