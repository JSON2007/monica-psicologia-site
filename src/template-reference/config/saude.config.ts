export const saudeConfig = {
  niche: "saude",

  brand: {
    name: "Mônica Psicologia",
    description: "Um espaço para cuidar de você",
    logo: "/images/saude/logo.png",
    favicon: "/images/saude/favicon.png",
  },

  theme: {
    primary: "#6B8F7A",
    primaryHover: "#2E4032",
    background: "#F8F4EF",
    surface: "#FFFFFF",
    text: "#2E4032",
    muted: "#6B756B",
    border: "#D9C8B8",
    fontHeading: "Playfair Display",
    borderRadius: "xl",
  },

  header: {
    variant: "institutional",
    showLogo: true,
    showPhone: true,
    showWhatsapp: true,
    sticky: true,
    menu: [
      { label: "Início", href: "#inicio" },
      { label: "Sobre", href: "#sobre" },
      { label: "Especialidades", href: "#especialidades" },
      { label: "Profissionais", href: "#profissionais" },
      { label: "Contato", href: "#contato" },
    ],
  },

  hero: {
    component: "HeroSaude",
    variant: "institucional",
    eyebrow: "Psicologia e bem-estar",
    title: "Um espaço para cuidar de você",
    description:
      "Cuidar da sua saúde emocional também é um ato de amor próprio.",
    image: "/images/saude/hero.jpg",
    primaryLabel: "Agendar consulta",
    primaryHref: "#contato",
    secondaryLabel: "Conhecer a clínica",
    secondaryHref: "#sobre",
    professionalName: "",
    specialty: "",
  },

  credentials: {
    component: "CredentialsGrid",
    variant: "cards",
    title: "Escuta, acolhimento e respeito",
    description:
      "Projeto demonstrativo com informações profissionais fictícias.",
    items: [],
  },

  treatments: {
    component: "TreatmentsList",
    variant: "cards",
    title: "Áreas de atuação",
    description: "Conheça as áreas ilustradas neste projeto.",
    items: [],
  },

  testimonials: {
    enabled: true,
    title: "Cada história merece ser acolhida com respeito.",
    items: [],
  },

  faq: {
    enabled: true,
    variant: "accordion",
    title: "Perguntas frequentes",
    items: [],
  },

  contact: {
    title: "Vamos conversar",
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
    variant: "floating",
    label: "Agendar pelo WhatsApp",
    phone: "",
    message: "Olá! Gostaria de obter informações sobre o atendimento.",
    position: "bottom-right",
  },

  footer: {
    variant: "footer1",
    showSocialLinks: true,
    showAddress: true,
    showPhone: true,
    showCopyright: true,
  },

  seo: {
    title: "Mônica Psicologia | Saúde e Bem-estar",
    description: "Site demonstrativo fictício para portfólio. Nenhum atendimento real é oferecido.",
    keywords: ["saúde", "clínica", "atendimento"],
    ogImage: "/images/saude/og-image.jpg",
  },
} as const;
