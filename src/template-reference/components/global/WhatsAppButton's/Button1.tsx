type WhatsAppButtonProps = {
  phone: string;
  message?: string;
  label?: string;
  variant?: "floating" | "standard" | "pill";
  position?: "right" | "left";
};

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.04 2a9.9 9.9 0 0 0-8.48 15.02L2.2 22l5.15-1.35A9.98 9.98 0 1 0 12.04 2Zm0 18.18a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.06.8.82-2.98-.2-.31a8.18 8.18 0 1 1 6.92 3.81Zm4.49-6.13c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.11s.91 2.45 1.04 2.62c.13.17 1.79 2.73 4.33 3.83.6.26 1.07.41 1.44.52.61.19 1.16.16 1.6.1.49-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.17-.49-.29Z" />
    </svg>
  );
}

export default function WhatsAppButton({
  phone,
  message,
  label = "Fale conosco",
  variant = "floating",
  position = "right",
}: WhatsAppButtonProps) {
  const cleanPhone = phone.replace(/\D/g, "");

  const url = `https://wa.me/${cleanPhone}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  const base =
    "inline-flex items-center justify-center gap-2 bg-[#25D366] font-medium text-white transition duration-200 hover:bg-[#1ebe5d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#128C7E]";

  if (variant === "floating") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`${base} fixed bottom-5 z-50 h-14 w-14 rounded-full shadow-lg hover:scale-105 ${
          position === "left" ? "left-5" : "right-5"
        }`}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    );
  }

  if (variant === "pill") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} rounded-full px-5 py-3 text-sm shadow-sm`}
      >
        <WhatsAppIcon className="h-5 w-5" />
        {label}
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} rounded-lg px-6 py-4 text-sm shadow-sm`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span>{label}</span>
    </a>
  );
}

/*
  
Flutuante (Floating) - Botão redondo que fica fixo na tela, geralmente no canto inferior direito ou esquerdo. Ideal para chamar atenção e incentivar o usuário a iniciar uma conversa no WhatsApp.

<WhatsAppButton
  phone="5511999999999"
  variant="floating"
  position="right"
/>

Retangular (Standard) - Botão retangular que pode ser colocado em qualquer parte da página. É mais discreto que o botão flutuante, mas ainda assim eficaz para direcionar os usuários ao WhatsApp.

<WhatsAppButton
  phone="5511999999999"
  variant="standard"
  label="Solicitar orçamento"
/>

Pílula (Pill) - Botão com bordas arredondadas, geralmente usado em formulários ou seções de contato. É uma opção estilosa e moderna para incentivar a interação.

<WhatsAppButton
  phone="5511999999999"
  variant="pill"
  label="Fale com nossa equipe"
/>

*/
