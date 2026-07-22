import { Resend } from "resend";

const MAX_BODY_BYTES = 16_384;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  privacy: boolean;
  website: string;
};

function jsonError(message: string, status: number) {
  return Response.json({ ok: false, message }, { status });
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(payload: Record<string, unknown>, key: string, minLength: number, maxLength: number, required: boolean) {
  const value = payload[key];
  if (value === undefined && !required) return "";
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if ((!required && trimmed.length === 0) || (trimmed.length >= minLength && trimmed.length <= maxLength)) return trimmed;
  return null;
}

function validatePayload(value: unknown): ContactPayload | null {
  if (!isPlainObject(value)) return null;
  const website = readString(value, "website", 0, 200, false);
  const name = readString(value, "name", 2, 120, true);
  const email = readString(value, "email", 3, 200, true);
  const phone = readString(value, "phone", 0, 40, false);
  const service = readString(value, "service", 0, 100, false);
  const message = readString(value, "message", 10, 5000, true);

  if (website === null || name === null || email === null || !EMAIL_PATTERN.test(email) || phone === null || service === null || message === null || value.privacy !== true) return null;
  return { name, email, phone, service, message, privacy: true, website };
}

function escapeHtml(value: string) {
  const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.startsWith("application/json")) return jsonError("La richiesta deve essere inviata in formato JSON.", 415);

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) return jsonError("La richiesta è troppo grande.", 413);

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonError("Non è stato possibile leggere la richiesta.", 400);
  }
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) return jsonError("La richiesta è troppo grande.", 413);

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    return jsonError("Il formato della richiesta non è valido.", 400);
  }

  if (isPlainObject(parsed) && typeof parsed.website === "string" && parsed.website.trim()) return Response.json({ ok: true });

  const payload = validatePayload(parsed);
  if (!payload) return jsonError("Controlla i dati inseriti e riprova.", 400);

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !toEmail || !fromEmail) return jsonError("Il servizio di invio non è momentaneamente disponibile.", 503);

  const requestedService = payload.service || "Richiesta generica";
  const subjectService = requestedService.replace(/[\r\n]+/g, " ");
  const requestedAt = new Intl.DateTimeFormat("it-IT", { dateStyle: "long", timeStyle: "medium", timeZone: "Europe/Rome" }).format(new Date());
  const text = [
    "Nuova richiesta dal sito Idolo Logistics",
    "",
    `Nome o ragione sociale: ${payload.name}`,
    `Email: ${payload.email}`,
    `Telefono: ${payload.phone || "Non indicato"}`,
    `Servizio richiesto: ${requestedService}`,
    `Data e ora: ${requestedAt}`,
    "",
    "Messaggio:",
    payload.message,
  ].join("\n");
  const html = `
    <h1>Nuova richiesta dal sito Idolo Logistics</h1>
    <p><strong>Nome o ragione sociale:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Telefono:</strong> ${escapeHtml(payload.phone || "Non indicato")}</p>
    <p><strong>Servizio richiesto:</strong> ${escapeHtml(requestedService)}</p>
    <p><strong>Data e ora:</strong> ${escapeHtml(requestedAt)}</p>
    <p><strong>Messaggio:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\r?\n/g, "<br>")}</p>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Idolo Logistics – Modulo sito <${fromEmail}>`,
      to: [toEmail],
      replyTo: payload.email,
      subject: `Nuova richiesta dal sito – ${subjectService}`,
      text,
      html,
    });
    if (error) return jsonError("Non è stato possibile inviare la richiesta. Riprova tra poco.", 502);
  } catch {
    return jsonError("Non è stato possibile inviare la richiesta. Riprova tra poco.", 502);
  }
  return Response.json({ ok: true });
}
