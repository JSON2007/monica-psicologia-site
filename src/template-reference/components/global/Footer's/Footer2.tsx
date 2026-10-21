type FooterCorporateProps = {
  socialLinks?: { label: string; href: string }[];
  companyName?: string;
  products?: { label: string; href: string }[];
  usefulLinks?: { label: string; href: string }[];
  contact?: {
    address?: string;
    email?: string;
    phone?: string;
    fax?: string;
  };
  copyright?: string;
};

export default function FooterCorporate({
  socialLinks = [],
  companyName,
  products = [],
  usefulLinks = [],
  contact = {},
  copyright,
}: FooterCorporateProps) {
  return (
    <footer className="w-full bg-[#1c2331] text-white">
      {/* Faixa superior: redes sociais */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#6351c8] px-5 py-5 md:px-8">
        <div className="text-sm">
          {/* Texto introdutório configurável */}
          <span data-slot="social-intro">
            Get connected with us on social networks:
          </span>
        </div>

        <nav
          aria-label="Redes sociais"
          className="flex flex-wrap items-center gap-5"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="text-sm font-semibold transition-opacity hover:opacity-70"
            >
              {social.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Área principal: quatro colunas */}
      <div className="grid grid-cols-1 gap-10 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Coluna 1: empresa */}
        <section>
          <h2 className="mb-8 text-sm font-bold uppercase">
            {companyName ?? "Company Name"}
          </h2>

          <div data-slot="company-description">
            {/* Descrição fornecida pela configuração do agente */}
          </div>
        </section>

        {/* Coluna 2: produtos */}
        <section>
          <h2 className="mb-8 text-sm font-bold uppercase">Products</h2>

          <ul className="space-y-4 text-sm">
            {products.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-gray-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Coluna 3: links úteis */}
        <section>
          <h2 className="mb-8 text-sm font-bold uppercase">Useful Links</h2>

          <ul className="space-y-4 text-sm">
            {usefulLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-gray-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Coluna 4: contato */}
        <section>
          <h2 className="mb-8 text-sm font-bold uppercase">Contact</h2>

          <ul className="space-y-5 text-sm">
            {contact.address && <li>{contact.address}</li>}
            {contact.email && <li>{contact.email}</li>}
            {contact.phone && <li>{contact.phone}</li>}
            {contact.fax && <li>{contact.fax}</li>}
          </ul>
        </section>
      </div>

      {/* Faixa inferior: direitos autorais */}
      <div className="bg-[#151c29] px-5 py-5 text-center text-sm">
        {copyright ?? ""}
      </div>
    </footer>
  );
}
