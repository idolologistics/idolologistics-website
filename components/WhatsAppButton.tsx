import { company } from "@/data/company";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={company.social.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivi a Idolo Logistics su WhatsApp"
      title="Scrivi a Idolo Logistics su WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2.3 21.7l5.2-1.3A9.7 9.7 0 1 0 12 2Zm0 17.5c-1.5 0-3-.4-4.2-1.2l-.4-.2-3 .8.8-2.9-.2-.5A7.8 7.8 0 1 1 12 19.5Zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-1.4-.7-2.4-1.5-3.1-2.8-.2-.3.2-.5.6-1 .1-.2.1-.4 0-.6l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.7.7-1 1.5-1 2.4 0 2.1 1.5 4.1 1.8 4.4.2.3 3 4.6 7.3 5.1 1 .1 1.8 0 2.5-.3.8-.4 1.4-1.2 1.6-2 .1-.5.1-1 0-1.1-.2-.2-.4-.3-.7-.4Z" /></svg>
      <span className="whatsapp-label">WhatsApp</span>
    </a>
  );
}
