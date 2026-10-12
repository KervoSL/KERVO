import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import LegalPage, { LegalSection, Pending } from "@/components/legal/LegalPage";
import { PENDING } from "@/lib/legal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Política de privacidad",
  description:
    "Cómo se tratan los datos personales en kervo.info y en MoneyNest: responsable, finalidades, bases jurídicas, encargados, conservación y derechos.",
  path: "/privacy",
});

const mail = (
  <a href={`mailto:${CONTACT_EMAIL}`} className="link-draw text-ink">
    {CONTACT_EMAIL}
  </a>
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      intro="Esta política explica qué datos personales tratamos en el sitio web kervo.info y en la aplicación MoneyNest (moneynest.es), para qué, con qué base y qué derechos tiene."
    >
      <LegalSection title="1. Responsable del tratamiento">
        <p>
          Responsable: <Pending>{PENDING.controller}</Pending> · NIF: <Pending>{PENDING.nif}</Pending> ·
          Domicilio: <Pending>{PENDING.address}</Pending> · Contacto para privacidad: {mail}.
        </p>
        <p>
          Delegado de protección de datos: <Pending>{PENDING.dpo}</Pending> (solo si es obligatorio
          designarlo). KERVO es la marca; la identidad jurídica del responsable se detalla en el{" "}
          <Link href="/legal-notice" className="link-draw text-ink">Aviso legal</Link> cuando el titular
          la confirme.
        </p>
      </LegalSection>

      <LegalSection title="2. Sitio web kervo.info">
        <ul>
          <li>
            <strong>Formulario de boletín (newsletter).</strong> Si introduce su correo y acepta la casilla
            de consentimiento, lo enviamos al proveedor de boletines Buttondown para enviarle novedades de
            KERVO o de un producto concreto (MoneyNest, TradeVault). Base: su consentimiento (art. 6.1.a
            RGPD). Puede darse de baja en cualquier momento desde el propio correo y retirar el
            consentimiento sin que ello afecte a lo ya realizado. Puede recibir un correo de confirmación.
          </li>
          <li>
            <strong>Contacto por correo.</strong> Si nos escribe a {mail}, usamos sus datos para
            responderle (base: medidas precontractuales o interés legítimo en atender su consulta).
          </li>
          <li>
            <strong>Registros técnicos.</strong> El alojamiento (Vercel) puede registrar datos técnicos de
            la conexión (como la dirección IP) por seguridad y funcionamiento (interés legítimo).
          </li>
          <li>
            El sitio no usa analítica, publicidad ni cookies de seguimiento, ni carga fuentes o scripts de
            terceros en su navegador (véase <Link href="/cookies" className="link-draw text-ink">Cookies</Link>).
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Aplicación MoneyNest">
        <p>Según el funcionamiento actual de la aplicación, tratamos los siguientes datos:</p>
        <ul>
          <li>
            <strong>Cuenta y acceso:</strong> correo electrónico y credenciales de autenticación. Finalidad:
            crear y gestionar su cuenta. Base: ejecución del contrato (art. 6.1.b).
          </li>
          <li>
            <strong>Datos financieros que usted introduce</strong> (movimientos, presupuestos, categorías,
            etc.) y sincronización en la nube cuando proceda. Finalidad: prestarle el servicio. Base:
            ejecución del contrato. No accedemos a sus cuentas bancarias.
          </li>
          <li>
            <strong>Suscripción y pagos:</strong> estado del plan, identificadores de cliente y de pago,
            historial de eventos de facturación. Los datos de tarjeta los recoge directamente Stripe; no
            los almacenamos. Base: contrato y obligaciones legales (fiscales y contables).
          </li>
          <li>
            <strong>Correos transaccionales</strong> (confirmaciones, avisos del servicio), enviados con
            Resend. Base: contrato.
          </li>
          <li>
            <strong>Seguridad y antiabuso:</strong> comprobación anti-bot (Cloudflare Turnstile), límites
            de uso y registro de errores técnicos para detectar fallos y abusos. Base: interés legítimo
            (art. 6.1.f) en la seguridad y estabilidad del servicio.
          </li>
          <li>
            <strong>Eventos de uso del producto:</strong> la aplicación registra eventos de uso con un
            identificador de sesión guardado en su dispositivo. <Pending>[PENDIENTE: confirmar finalidad
            exacta, si se asocian a su cuenta y si requieren consentimiento previo]</Pending>.
          </li>
          <li>
            <strong>Exportación a Google Drive (función opcional):</strong> según el código revisado, esta
            función puede enviar un extracto limitado de sus datos a un proveedor de inteligencia
            artificial (Anthropic) para generar la exportación. <Pending>[PENDIENTE: verificar si está
            activa en producción; si lo está, informar y pedir consentimiento específico antes de
            usarla]</Pending>.
          </li>
        </ul>
        <p>
          No vendemos sus datos ni los usamos para publicidad. No tomamos decisiones automatizadas con
          efectos jurídicos sobre usted.
        </p>
      </LegalSection>

      <LegalSection title="4. Destinatarios y encargados del tratamiento">
        <p>Para prestar el servicio recurrimos a los siguientes proveedores, que actúan como encargados del tratamiento salvo indicación en contrario:</p>
        <ul>
          <li><strong>Supabase</strong> — autenticación, base de datos y funciones del backend. Región: <Pending>{PENDING.supabaseRegion}</Pending>.</li>
          <li><strong>Vercel</strong> — alojamiento de kervo.info y moneynest.es.</li>
          <li><strong>Stripe</strong> — pagos y facturación (también responsable de sus propios tratamientos, como la prevención del fraude).</li>
          <li><strong>Resend</strong> — envío de correos transaccionales.</li>
          <li><strong>Cloudflare (Turnstile)</strong> — verificación anti-bot en MoneyNest.</li>
          <li><strong>Buttondown</strong> — gestión del boletín (kervo.info y MoneyNest, si aplica).</li>
          <li><strong>Google Fonts y redes de distribución de librerías</strong> (jsDelivr, cdnjs) — MoneyNest carga recursos desde estos servidores, que reciben su dirección IP al servirlos.</li>
        </ul>
        <p>
          Algunos proveedores pueden tratar datos fuera del Espacio Económico Europeo. En tal caso,
          verificamos que existan garantías adecuadas (decisión de adecuación o cláusulas contractuales
          tipo): <Pending>[PENDIENTE: confirmar los acuerdos de tratamiento y transferencias de cada proveedor]</Pending>.
        </p>
      </LegalSection>

      <LegalSection title="5. Conservación">
        <ul>
          <li>Boletín: hasta que se dé de baja.</li>
          <li>Consultas por correo: el tiempo necesario para atenderlas y, después, bloqueadas durante los plazos de prescripción.</li>
          <li>Cuenta y datos de MoneyNest: mientras la cuenta esté activa; tras su eliminación, se borran salvo lo que deba conservarse por ley (p. ej., facturación) o existan copias de seguridad que se purgan en su ciclo.</li>
          <li>Datos de facturación: los plazos fiscales y mercantiles aplicables.</li>
        </ul>
        <p><Pending>{PENDING.retention}</Pending></p>
      </LegalSection>

      <LegalSection title="6. Cancelar, eliminar la cuenta y suprimir los datos">
        <p>Son tres acciones distintas:</p>
        <ul>
          <li><strong>Cancelar la suscripción</strong> detiene los cobros futuros; su cuenta y datos siguen existiendo.</li>
          <li><strong>Eliminar la cuenta</strong> desde la aplicación borra su cuenta y los datos asociados en MoneyNest.</li>
          <li><strong>Solicitar la supresión</strong> (art. 17 RGPD) abarca además los datos que mantengan los proveedores o el responsable fuera de la app, salvo los que deban conservarse por obligación legal. Puede pedirla escribiendo a {mail}.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Sus derechos">
        <p>
          Puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del
          tratamiento y portabilidad, y retirar su consentimiento, escribiendo a {mail} e indicando el
          derecho que ejerce. Responderemos en el plazo legal (un mes, prorrogable en casos complejos) y
          podemos pedirle que acredite su identidad.
        </p>
        <p>
          Si considera que el tratamiento no se ajusta a la normativa, puede reclamar ante la Agencia
          Española de Protección de Datos (
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="link-draw text-ink">
            aepd.es
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="8. Menores">
        <p>
          MoneyNest está dirigido a personas con capacidad para contratar. El borrador de sus términos
          fija una edad mínima de 16 años; <Pending>[PENDIENTE: confirmar edad mínima y verificación]</Pending>.
          Si detectamos datos de un menor sin autorización, los eliminaremos.
        </p>
      </LegalSection>

      <LegalSection title="9. Seguridad y cambios">
        <p>
          Aplicamos medidas técnicas y organizativas razonables (cifrado en tránsito, control de acceso,
          límites de uso). Ningún sistema es infalible; notificaremos las brechas cuando la ley lo
          exija. Publicaremos aquí cualquier cambio relevante con una nueva fecha de actualización.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
