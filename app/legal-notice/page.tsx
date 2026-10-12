import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import LegalPage, { LegalSection, Pending } from "@/components/legal/LegalPage";
import { LEGAL_DETAILS } from "@/lib/legal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Aviso legal",
  description:
    "Identificación del titular, condiciones de uso y propiedad intelectual de kervo.info y de los productos de KERVO.",
  path: "/legal-notice",
});

const isPending = (v: string) => v.startsWith("[PENDIENTE");

export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Aviso legal"
      intro="Información general sobre el titular de este sitio web, en cumplimiento del artículo 10 de la Ley 34/2002 (LSSI-CE)."
    >
      <LegalSection title="1. Identificación">
        <p>
          KERVO es la marca bajo la que se publica el sitio web <strong>https://kervo.info</strong> y se
          ofrecen los productos MoneyNest (<strong>https://moneynest.es</strong>) y TradeVault. Los datos
          del titular responsable se indican a continuación; los que aparecen como pendientes aún no han
          sido facilitados y no se suponen ni se inventan.
        </p>
        <dl className="divide-y divide-line border-y border-line">
          {LEGAL_DETAILS.map((d) => (
            <div key={d.label} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-6">
              <dt className="text-[15px] text-muted">{d.label}</dt>
              <dd className="break-words text-[16px] text-ink sm:col-span-2">
                {isPending(d.value) ? <Pending>{d.value}</Pending> : d.value}
              </dd>
            </div>
          ))}
        </dl>
        <p>
          Marca, titular del dominio, titular del producto y responsable del tratamiento de datos son
          conceptos distintos y pueden recaer en la misma persona o en personas diferentes. Esta
          información se actualizará cuando el titular la confirme.
        </p>
      </LegalSection>

      <LegalSection title="2. Objeto y ámbito">
        <p>
          Este sitio web tiene carácter informativo: presenta a KERVO y sus productos y permite contactar
          y suscribirse a un boletín. MoneyNest es un servicio independiente alojado en moneynest.es, con
          sus propios términos y política de privacidad.
        </p>
      </LegalSection>

      <LegalSection title="3. Condiciones de uso">
        <p>
          El acceso al sitio es gratuito y atribuye la condición de usuario. El usuario se compromete a
          hacer un uso lícito del sitio, sin dañar su funcionamiento, intentar acceder sin autorización a
          sistemas o datos ni realizar acciones que vulneren derechos de terceros.
        </p>
        <p>
          El titular procura que la información sea exacta y actual, pero no puede garantizar la ausencia
          absoluta de errores ni la disponibilidad ininterrumpida del sitio. Nada de lo aquí previsto
          limita los derechos que la normativa reconoce a los consumidores y usuarios.
        </p>
      </LegalSection>

      <LegalSection title="4. Propiedad intelectual e industrial">
        <p>
          Los textos, diseños, código, logotipos, marcas y nombres de producto del sitio pertenecen al
          titular o a sus licenciantes y están protegidos por la normativa de propiedad intelectual e
          industrial. No se permite su reproducción, distribución ni transformación sin autorización,
          salvo los usos permitidos por la ley (por ejemplo, la cita). Las marcas de terceros
          mencionadas pertenecen a sus respectivos propietarios.
        </p>
        <p>
          Si considera que algún contenido vulnera sus derechos, escriba a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="link-draw text-ink">
            {CONTACT_EMAIL}
          </a>{" "}
          indicando el contenido y el fundamento de su reclamación.
        </p>
      </LegalSection>

      <LegalSection title="5. Enlaces y servicios de terceros">
        <p>
          El sitio enlaza a servicios ajenos (MoneyNest, redes sociales como Instagram y TikTok). El
          titular no controla ni responde de sus contenidos o políticas; consulte las de cada servicio.
        </p>
      </LegalSection>

      <LegalSection title="6. Protección de datos y cookies">
        <p>
          El tratamiento de datos personales se describe en la <Link className="link-draw text-ink" href="/privacy">Política de privacidad</Link> y
          el uso de almacenamiento en el dispositivo en la <Link className="link-draw text-ink" href="/cookies">Política de cookies</Link>. Las
          condiciones de contratación de MoneyNest figuran en los <Link className="link-draw text-ink" href="/terms">Términos y condiciones</Link>.
        </p>
      </LegalSection>

      <LegalSection title="7. Ley aplicable y resolución de litigios">
        <p>
          Con carácter general, se aplica la legislación española, sin perjuicio de las normas
          imperativas de protección de los consumidores de su país de residencia. Los consumidores
          pueden acudir a las autoridades de consumo y a los mecanismos de resolución alternativa de litigios disponibles (la plataforma europea ODR dejó de operar en julio de 2025). La jurisdicción competente se confirmará por el titular: <Pending>[PENDIENTE: CONFIRMAR FUERO]</Pending>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
