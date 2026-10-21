export const esteticaConfig = {
  niche: "estetica",

  brand: {
    name: "Nome do Espaço",
    description: "Beleza, cuidado e bem-estar",
    logo: "/images/estetica/logo.png",
    favicon: "/images/estetica/favicon.png",
  },

  theme: {
    primary: "#9F5265",
    primaryHover: "#843F51",
    background: "#FAF5F2",
    surface: "#FFFFFF",
    text: "#292524",
    muted: "#78716C",
    border: "#E7DCD7",
    fontHeading: "serif",
    borderRadius: "2xl",
  },

  header: {
    variant: "elegant",
    showLogo: true,
    showPhone: true,
    showWhatsapp: true,
    sticky: true,
    menu: [
      { label: "Início", href: "#inicio" },
      { label: "Sobre", href: "#sobre" },
      { label: "Tratamentos", href: "#tratamentos" },
      { label: "Galeria", href: "#galeria" },
      { label: "Contato", href: "#contato" },
    ],
  },

  hero: {
    component: "HeroEstetica",
    variant: "split",
    eyebrow: "Seu momento de cuidado",
    title: "Realce sua beleza com leveza e naturalidade",
    description:
      "Conheça nossos tratamentos e descubra uma experiência de cuidado pensada para você.",
    image: "/images/estetica/hero-estetica.jpg",
    primaryLabel: "Agendar horário",
    primaryHref: "#contato",
    secondaryLabel: "Conhecer tratamentos",
    secondaryHref: "#tratamentos",
  },

  treatments: {
    component: "TreatmentsGrid",
    variant: "cards",
    title: "Nossos tratamentos",
    description: "Conheça as opções de cuidado disponíveis em nosso espaço.",
    items: [],
  },

  gallery: {
    component: "ResultsGallery",
    variant: "grid",
    title: "Nosso espaço e nossos cuidados",
    description:
      "Conheça o ambiente, os procedimentos e os detalhes da nossa experiência de atendimento.",
    images: [],
    comparisons: [],
  },

  about: {
    enabled: true,
    title: "Cuidado que valoriza você",
    description:
      "Apresente a história do espaço, a filosofia de atendimento e os diferenciais profissionais.",
    image: "/images/estetica/sobre.jpg",
  },

  professionals: {
    enabled: true,
    title: "Quem cuida de você",
    items: [],
  },

  testimonials: {
    enabled: true,
    title: "Relatos de clientes",
    items: [],
  },

  faq: {
    enabled: true,
    variant: "accordion",
    title: "Perguntas frequentes",
    items: [],
  },

  contact: {
    title: "Agende seu momento de cuidado",
    whatsapp: "",
    phone: "",
    email: "",
    address: "",
    openingHours: "",
    instagram: "",
    mapUrl: "",
  },

  whatsappButton: {
    enabled: true,
    variant: "pill",
    label: "Agendar pelo WhatsApp",
    phone: "",
    message: "Olá! Gostaria de conhecer os tratamentos e agendar um horário.",
    position: "bottom-right",
  },

  footer: {
    variant: "footer3",
    showSocialLinks: true,
    showAddress: true,
    showPhone: true,
    showCopyright: true,
  },

  seo: {
    title: "Nome do Espaço | Estética e Bem-estar",
    description:
      "Conheça nossos tratamentos estéticos e agende seu atendimento.",
    keywords: ["estética", "beleza", "bem-estar", "tratamentos estéticos"],
    ogImage: "/images/estetica/og-image.jpg",
  },
} as const;
