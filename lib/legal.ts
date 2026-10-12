/**
 * Legal data that only the owner can supply. Nothing here is invented:
 * every missing item is a visible [PENDIENTE: …] placeholder, rendered in the
 * legal pages so it cannot go unnoticed. Replace the strings with real data
 * (or set the value to a real string) and the pages update everywhere.
 */
import { CONTACT_EMAIL } from "@/lib/site";

export const LEGAL_UPDATED_ISO = "2026-10-12";
export const LEGAL_UPDATED_ES = "12 de octubre de 2026";

export const PENDING = {
  holder: "[PENDIENTE: NOMBRE O DENOMINACIÓN SOCIAL DEL TITULAR]",
  holderType: "[PENDIENTE: PERSONA FÍSICA O JURÍDICA]",
  nif: "[PENDIENTE: NIF DEL TITULAR]",
  address: "[PENDIENTE: DOMICILIO DEL TITULAR]",
  registry: "[PENDIENTE: DATOS DE INSCRIPCIÓN REGISTRAL, SI PROCEDE]",
  domainHolder: "[PENDIENTE: TITULAR DEL DOMINIO kervo.info]",
  productHolder: "[PENDIENTE: TITULAR DEL PRODUCTO MONEYNEST]",
  controller: "[PENDIENTE: RESPONSABLE DEL TRATAMIENTO]",
  supportEmail: "[PENDIENTE: EMAIL DE SOPORTE DE MONEYNEST]",
  privacyEmail: CONTACT_EMAIL,
  dpo: "[PENDIENTE: DELEGADO DE PROTECCIÓN DE DATOS, SI PROCEDE]",
  supabaseRegion: "[PENDIENTE: REGIÓN DEL PROYECTO SUPABASE]",
  jurisdiction: "[PENDIENTE: CONFIRMAR LEY Y FUERO APLICABLES]",
  retention: "[PENDIENTE: PLAZOS DE CONSERVACIÓN FINALES]",
} as const;

/** Rows for the identification table of the Aviso legal. */
export const LEGAL_DETAILS: { label: string; value: string }[] = [
  { label: "Marca", value: "KERVO" },
  { label: "Titular / responsable legal", value: PENDING.holder },
  { label: "Naturaleza del titular", value: PENDING.holderType },
  { label: "NIF", value: PENDING.nif },
  { label: "Domicilio", value: PENDING.address },
  { label: "Datos registrales", value: PENDING.registry },
  { label: "Titular del dominio kervo.info", value: PENDING.domainHolder },
  { label: "Titular del producto MoneyNest", value: PENDING.productHolder },
  { label: "Correo electrónico de contacto", value: CONTACT_EMAIL },
];
