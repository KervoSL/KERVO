import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import LegalPage, { LegalSection, Pending } from "@/components/legal/LegalPage";
import { PENDING } from "@/lib/legal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Términos y condiciones",
  description:
    "Condiciones de uso y contratación de MoneyNest: planes, precios, suscripción, desistimiento, cancelación y eliminación de cuenta.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Términos y condiciones"
      intro="Condiciones aplicables al uso y a la contratación de MoneyNest (moneynest.es). El sitio kervo.info se rige por el Aviso legal."
    >
      <LegalSection title="1. Quién presta el servicio">
        <p>
          Titular del servicio: <Pending>{PENDING.productHolder}</Pending> · NIF:{" "}
          <Pending>{PENDING.nif}</Pending> · Domicilio: <Pending>{PENDING.address}</Pending> · Contacto:{" "}
          {CONTACT_EMAIL}. Soporte: <Pending>{PENDING.supportEmail}</Pending>. KERVO es la marca; véase el{" "}
          <Link href="/legal-notice" className="link-draw text-ink">Aviso legal</Link>.
        </p>
      </LegalSection>

      <LegalSection title="2. El servicio">
        <p>
          MoneyNest es una aplicación web de gestión de finanzas personales: registro de movimientos,
          presupuestos y análisis. Es una herramienta de organización; no proporciona asesoramiento
          financiero, fiscal ni de inversión y no se conecta a sus cuentas bancarias.
        </p>
      </LegalSection>

      <LegalSection title="3. Cuenta y uso aceptable">
        <p>
          Para usar determinadas funciones debe crear una cuenta con datos veraces y custodiar sus
          credenciales. Edad mínima prevista: 16 años <Pending>[PENDIENTE: confirmar]</Pending>. No puede
          usar el servicio para fines ilícitos, intentar vulnerar su seguridad, automatizar abusivamente
          el acceso ni afectar a otros usuarios.
        </p>
      </LegalSection>

      <LegalSection title="4. Planes y precios">
        <ul>
          <li><strong>Gratuito:</strong> periodo de prueba sin coste.</li>
          <li><strong>Local:</strong> 1 € al mes o 9,99 € al año.</li>
          <li><strong>Pro:</strong> 2 € al mes o 19,99 € al año. Según el código de la aplicación, incluye una prueba gratuita de 7 días la primera vez <Pending>[PENDIENTE: confirmar condiciones de la prueba]</Pending>.</li>
        </ul>
        <p>
          Los precios se muestran con los impuestos aplicables, salvo indicación contraria, <Pending>[PENDIENTE: confirmar IVA incluido y facturación]</Pending>. Antes
          de pagar verá el importe, la periodicidad y el plan elegido, y la renovación automática.
          Cambios de precio se comunicarán con antelación y no afectarán al periodo ya pagado.
        </p>
      </LegalSection>

      <LegalSection title="5. Suscripción, renovación y cancelación">
        <p>
          Las suscripciones mensuales o anuales se renuevan automáticamente al final de cada periodo hasta
          que las cancele. Puede cancelar en cualquier momento desde la gestión de su suscripción (portal
          de Stripe, accesible desde la aplicación); la cancelación impide renovaciones futuras y,
          salvo que la ley o estos términos disponga otra cosa, conserva el acceso hasta el fin del
          periodo ya pagado. Los pagos los procesa Stripe.
        </p>
      </LegalSection>

      <LegalSection title="6. Derecho de desistimiento">
        <p>
          Si es consumidor, tiene derecho a desistir del contrato en 14 días naturales sin indicar el
          motivo (arts. 68 y ss. del Real Decreto Legislativo 1/2007). Para ejercerlo, comuníquelo de forma
          inequívoca a {CONTACT_EMAIL}; si lo desea puede usar el modelo de formulario de la normativa.
        </p>
        <p>
          En contratos de servicios, si solicita expresamente que la prestación comience antes de que
          termine ese plazo, deberá pagar la parte proporcional al servicio ya recibido. En el suministro
          de contenido o servicios digitales, el desistimiento solo se pierde cuando la ejecución ha
          comenzado con su consentimiento previo y expreso, y con el reconocimiento de que pierde el
          derecho una vez completada la ejecución, y tras recibir la confirmación del contrato en
          soporte duradero (art. 103 del mismo texto). <strong>No se presume</strong> esa pérdida: se
          solicitará su consentimiento expreso antes del pago, <Pending>[PENDIENTE: implementar y registrar este consentimiento en el checkout de MoneyNest]</Pending>.
        </p>
        <p>
          <Pending>[PENDIENTE: el borrador de MoneyNest menciona una garantía de devolución de 14 días;
          confirmar si existe y bajo qué condiciones, y coordinarla con este apartado.]</Pending>
        </p>
      </LegalSection>

      <LegalSection title="7. Eliminar la cuenta no es cancelar ni suprimir datos">
        <p>
          Cancelar la suscripción detiene los cobros; eliminar la cuenta borra su cuenta y sus datos en
          MoneyNest; solicitar la supresión de datos (art. 17 RGPD) se rige por la{" "}
          <Link href="/privacy" className="link-draw text-ink">Política de privacidad</Link>. Eliminar la
          cuenta <strong>no equivale a pedir un reembolso</strong> y conviene cancelar antes la
          suscripción. <Pending>[PENDIENTE: comprobar que la eliminación de cuenta cancela la suscripción en Stripe]</Pending>
        </p>
      </LegalSection>

      <LegalSection title="8. Disponibilidad y responsabilidad">
        <p>
          Procuramos un servicio estable, pero pueden producirse interrupciones por mantenimiento o
          causas ajenas. Es recomendable que conserve copia de sus datos. Respondemos de los daños en los
          términos que la ley establece; nada en estos términos excluye ni limita la responsabilidad que
          no pueda limitarse legalmente ni los derechos imperativos de los consumidores, incluida la
          garantía legal de conformidad de los contenidos y servicios digitales.
        </p>
      </LegalSection>

      <LegalSection title="9. Propiedad intelectual y sus datos">
        <p>
          La aplicación, su código, marca y diseño pertenecen al titular. Los datos que usted introduce
          siguen siendo suyos; nos concede solo la licencia necesaria para prestarle el servicio.
        </p>
      </LegalSection>

      <LegalSection title="10. Modificaciones">
        <p>
          Podemos actualizar estos términos por razones legales, técnicas o de negocio, avisando con
          antelación razonable cuando afecten materialmente a su contrato; podrá cancelar si no los
          acepta.
        </p>
      </LegalSection>

      <LegalSection title="11. Ley aplicable y reclamaciones">
        <p>
          Ley española, sin perjuicio de las normas imperativas del país de residencia del consumidor
          en la UE. Puede reclamarnos escribiendo a {CONTACT_EMAIL} y acudir a las autoridades de consumo o
          a sistemas de resolución alternativa de litigios. <Pending>{PENDING.jurisdiction}</Pending>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
