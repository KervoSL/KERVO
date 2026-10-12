import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import LegalPage, { LegalSection, Pending } from "@/components/legal/LegalPage";

export const metadata: Metadata = pageMeta({
  title: "Política de cookies",
  description:
    "Qué cookies y almacenamiento local usan kervo.info y MoneyNest, para qué sirven y cómo gestionarlos.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de cookies"
      intro="Información sobre las cookies y tecnologías similares de almacenamiento en su dispositivo (art. 22.2 LSSI-CE) en kervo.info y en MoneyNest."
    >
      <LegalSection title="1. Qué son">
        <p>
          Las cookies y tecnologías similares (como el almacenamiento local del navegador, o
          <em> localStorage</em>) guardan o leen información en su dispositivo. Se necesita su
          consentimiento previo salvo cuando sean estrictamente necesarias para prestar un servicio que
          usted ha solicitado expresamente.
        </p>
      </LegalSection>

      <LegalSection title="2. Sitio web kervo.info">
        <p>
          Según la revisión del código actual, kervo.info <strong>no instala cookies</strong> ni usa
          localStorage, analítica, publicidad ni scripts o fuentes de terceros en el navegador. Por eso
          no muestra un banner de cookies. Si en el futuro se añadiera algo que requiera consentimiento,
          se pediría antes, con los botones de aceptar y rechazar al mismo nivel.
        </p>
        <p>
          El formulario de boletín envía su correo a nuestro servidor al pulsar «Suscribirme»; eso es un
          tratamiento de datos (véase <Link href="/privacy" className="link-draw text-ink">Privacidad</Link>),
          no una cookie.
        </p>
      </LegalSection>

      <LegalSection title="3. Aplicación MoneyNest (moneynest.es)">
        <p>
          MoneyNest es un servicio independiente. Según el código revisado, usa almacenamiento en el
          navegador para estas finalidades:
        </p>
        <div className="overflow-x-auto" role="region" aria-label="Almacenamiento usado por MoneyNest" tabIndex={0}>
          <table className="w-full min-w-[34rem] border-collapse text-left text-[15px]">
            <thead>
              <tr className="border-b border-line text-muted">
                <th className="py-2 pr-4 font-medium">Elemento</th>
                <th className="py-2 pr-4 font-medium">Finalidad</th>
                <th className="py-2 font-medium">Tipo</th>
              </tr>
            </thead>
            <tbody className="align-top [&_td]:border-b [&_td]:border-line [&_td]:py-3 [&_td]:pr-4">
              <tr><td>Sesión de autenticación (Supabase)</td><td>Mantener su sesión iniciada</td><td>Técnico / necesario</td></tr>
              <tr><td>Datos locales de la app (movimientos, ajustes, plan)</td><td>Funcionamiento de la aplicación en su dispositivo</td><td>Técnico / necesario</td></tr>
              <tr><td>Stripe (pago)</td><td>Procesar el pago y prevenir fraude, al contratar</td><td>Necesario para el pago; <Pending>[PENDIENTE: verificar]</Pending></td></tr>
              <tr><td>Cloudflare Turnstile</td><td>Verificación anti-bot</td><td>Seguridad; <Pending>[PENDIENTE: verificar]</Pending></td></tr>
              <tr><td><code>mn_analytics_session_id</code></td><td>Identificador de sesión para eventos de uso del producto</td><td><Pending>[PENDIENTE: analítica; probablemente requiere consentimiento previo]</Pending></td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Además, MoneyNest carga Google Fonts y librerías desde jsDelivr y cdnjs, lo que revela su IP a
          esos servidores. <Pending>[PENDIENTE: alojar estos recursos en el propio dominio o informar y
          valorar el consentimiento]</Pending>.
        </p>
        <p>
          <strong>Aviso:</strong> el listado anterior procede de revisar el código y debe contrastarse con
          el navegador en producción (pestaña Aplicación / Almacenamiento) antes del lanzamiento.
          MoneyNest <Pending>[PENDIENTE: no muestra todavía banner de consentimiento; añadirlo si se
          confirma analítica u otros elementos no esenciales]</Pending>.
        </p>
      </LegalSection>

      <LegalSection title="4. Cómo gestionarlas">
        <p>
          Puede bloquear o borrar cookies y datos del sitio desde la configuración de su navegador
          (Chrome, Firefox, Safari, Edge). Borrar el almacenamiento local de MoneyNest puede cerrar su
          sesión y eliminar datos que no estén sincronizados en la nube.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
