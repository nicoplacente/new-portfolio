import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconExternalLink,
  IconFileCertificate,
  IconMail,
} from "@tabler/icons-react";
import { ImmersiveEffects } from "@/components/immersive-effects";
import { SiteHeader } from "@/components/site-header";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { siteConfig } from "@/lib/site";

const projects = [
  {
    name: "Codeluxe",
    type: "Software & Digital Solutions",
    image: "/projects/codeluxe.webp",
    description:
      "Página web oficial de Codeluxe, mi propia empresa de soluciones digitales. Diseñé y desarrollé la plataforma para presentar nuestros servicios de desarrollo web, aplicaciones a medida, automatización con IA y marketing digital, priorizando una experiencia moderna, rendimiento, SEO y conversión.",
    stack: ["Next.js", "Emprendimiento", "Branding"],
    previewUrl: "https://codeluxe.tech/",
  },
  {
    name: "Franco Bertello Store",
    type: "Streaming Store",
    image: "/projects/fb-store.webp",
    description:
      "Plataforma de interacción para streaming desarrollada para Franco Bertello. Integra una extensión conectada a Kick, sistema de puntos y recompensas, rankings, rachas, sorteos, tienda y múltiples herramientas interactivas en tiempo real, gestionadas desde un dashboard de administración.",
    stack: [
      "Extensión",
      "Next.js",
      "PostgreSQL",
      "Web Sockets",
      "Store",
      "Recompensas",
    ],
    previewUrl: "https://francobertello-store.codeluxe.tech/",
  },
  {
    name: "StreamCore",
    type: "Diseñado para kick",
    image: "/projects/streamcore.webp",
    description:
      "Recompensas, apuestas, overlays y herramientas de control para transformar tu stream de Kick en una experiencia más participativa.",
    stack: [
      "Extensión",
      "Next.js",
      "PostgreSQL",
      "Web Sockets",
      "Desktop & Web",
      "Recompensas",
    ],
    githubUrl: "https://github.com/nicoplacente/stream-core",
    previewUrl: "https://streamcore.codeluxe.tech/",
  },
  {
    name: "Cuida",
    type: "Cuidado familiar",
    image: "/projects/cuida.webp",
    description:
      "App gratuita para organizar el cuidado de personas con demencia, Alzheimer, o cualquier condición que requiera acompañamiento. La aplicación permite que una familia se registre, centralice información importante y mantenga a todos al tanto de medicamentos, eventos, tareas, historia clínica, anamnesis, síntomas, comportamientos y juegos de estimulación cognitiva.",
    stack: ["Tailwind", "Next.js", "PostgreSQL", "Mobile & Web", "PWA"],
    githubUrl: "https://github.com/nicoplacente/cuida",
    previewUrl: "https://cuida.codeluxe.tech/",
  },
  {
    name: "KC Interiorismo",
    type: "Landing profesional",
    image: "/projects/kc-interiorismo.webp",
    description:
      "Página web profesional para una diseñadora de interiores, desarrollado para presentar sus servicios, proyectos destacados, experiencia y formación en una experiencia visual elegante y cuidada, funcionando a la vez como portfolio y canal de captación de nuevos clientes.",
    stack: ["Tailwind", "Next.js", "GSAP"],
    previewUrl: "https://kcinteriorismo.codeluxe.tech/",
  },
  {
    name: "WK Services",
    type: "Servicios profesionales",
    image: "/projects/wkservices.webp",
    description:
      "Plataforma integral para una empresa dedicada a la reparación de electrodomésticos, venta de repuestos y materiales eléctricos. La solución combinó presencia comercial, flujo de reseñas, datos de contacto y un sistema administrativo con login seguro.",
    stack: ["Next.js", "Landing", "CRM", "Conversión", "PostgreSQL"],
    previewUrl: "https://wkservices.vercel.app/",
  },
  {
    name: "CaprichoSab",
    type: "Landing page",
    image: "/projects/caprichosab.webp",
    description:
      "Página web para un emprendimiento de repostería y comidas caseras, diseñado como catálogo digital para presentar sus productos de forma atractiva y facilitar la realización de pedidos directamente por WhatsApp.",
    stack: ["Tailwind", "Next.js"],
    previewUrl: "https://caprichosab.vercel.app/",
  },
  {
    name: "Alquirap",
    type: "Alquiler de herramientas",
    image: "/projects/alquirap.webp",
    description:
      "Plataforma de alquiler de herramientas y maquinaria en Coronel Suárez. El sitio mejora la exploración con carrusel, paginación y búsqueda, y se complementa con un CRM robusto para administrar toda la empresa.",
    stack: ["UX/UI", "Next.js", "Landing", "CRM", "SQLite"],
    previewUrl: "https://alquirap.com/",
  },
  {
    name: "Los Robles",
    type: "Organización de eventos",
    image: "/projects/los-robles.webp",
    description:
      "Empresa dedicada a la organización de eventos. Integramos una galería interactiva. Además, desarrollamos un script personalizado para la consola de Facebook, automatizando la descarga de imágenes desde publicaciones específicas, facilitando la actualización de nuevo contenido visual.",
    stack: ["Conversión", "Galería de imágenes", "Eventos", "Astro"],
    previewUrl: "https://los-robles-eventos.com/",
  },
  {
    name: "Auténticos",
    type: "Mentorías",
    image: "/projects/autenticos.webp",
    description:
      "Primer proyecto desarrollado para la venta y gestión de mentorías de Laureano Gieco. Incluyó autenticación de usuarios, gestión de roles, pasarela de pagos, panel administrativo y optimización SEO. Actualmente, solo está disponible la interfaz.",
    stack: ["UX/UI", "Aplicación Web", "Pasarelas de pago", "React", "MongoDB"],
    previewUrl: "https://autenticos.onrender.com/",
  },
];

const experience = [
  {
    period: "2024 — ACTUALIDAD",
    role: "Fundador y Full Stack Developer",
    company: "Codeluxe",
    description:
      "Agencia de rendimiento digital e ingeniería de conversión enfocada en el desarrollo de software, automatizaciones y embudos de venta de alta eficiencia.",
    websiteUrl: "https://codeluxe.tech",
  },
  {
    period: "ENE — FEB 2024",
    role: "Full Stack Developer",
    company: "Awaq ONGD",
    description:
      "Responsable del frontend con React, TypeScript, Redux y Tailwind dentro de un equipo de siete personas, trabajando en sprints ágiles e integraciones sobre Azure.",
    certificateUrl: "/awaq-certificado.pdf",
  },
];

const education = [
  {
    title: "Full Stack Developer",
    place: "Henry",
    period: "2023 — 2024",
    description:
      "Más de 800 horas de formación teórico-práctica en frontend, backend y bases de datos.",
    certificateUrl:
      "https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=4d3d8b3e513889b7c5688333a30f7d2234f57c2b09045688040e99972d60dab7",
  },
  {
    title: "Evolución continua",
    place: "Formación autodidacta",
    period: "SIEMPRE",
    description:
      "IA aplicada, n8n, agentes de desarrollo, producto digital, rendimiento y arquitectura web.",
  },
];

const skills = [
  "Next.js",
  "React",
  "JavaScript",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "Node.js",
  "SEO técnico",
  "Zustand",
  "API REST",
  "n8n",
  "Agentes de IA",
  "Meta Ads",
  "Publicidad Digital",
  "Gestión de Redes",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/nicoplacente.webp`,
      jobTitle: "Full Stack Developer",
      email: `mailto:${siteConfig.email}`,
      address: {
        "@type": "PostalAddress",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
      sameAs: [siteConfig.github, siteConfig.linkedin],
      knowsAbout: skills,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: `Portfolio de ${siteConfig.name}`,
      description: siteConfig.description,
      inLanguage: "es-AR",
      author: {
        "@id": `${siteConfig.url}/#person`,
      },
    },
  ],
};

function SectionLabel({ index, children }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <p>{children}</p>
    </div>
  );
}

function MacbookBadge() {
  return (
    <div className="macbook-badge" aria-hidden="true">
      <Image src="/nicoplacente-pixelart.webp" alt="" width={40} height={40} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <ImmersiveEffects cursorOnly />

      <main id="contenido-principal" tabIndex="-1">
        <ImmersiveEffects />

        <section id="inicio" className="hero">
          <div className="hero-signal" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="status-dot" />
              Full Stack Developer · Buenos Aires
            </div>
            <h1>
              Convierto código
              <span> en arquitectura digital.</span>
            </h1>
            <p>
              Diseño y desarrollo productos web donde estrategia, rendimiento y
              estética trabajan como un solo sistema.
            </p>
            <div className="hero-actions">
              <a href="#proyectos" className="primary-action">
                Explorar proyectos
                <ArrowDownRight size={17} />
              </a>
              <a href="/cv.pdf" className="text-action" download>
                Descargar CV
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section-shell experience-section">
          <SectionLabel index="01">Trayectoria profesional</SectionLabel>
          <div className="section-intro">
            <p>EXPERIENCIA</p>
            <h2>
              Construcción técnica.
              <br />
              Visión de producto.
            </h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={item.company} className="experience-row">
                <p className="experience-period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                </div>
                <p className="experience-description">{item.description}</p>
                {item.certificateUrl ? (
                  <a
                    href={item.certificateUrl}
                    className="certificate-link experience-certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconFileCertificate size={17} />
                    Ver certificado
                    <ArrowUpRight size={15} />
                  </a>
                ) : null}
                {item.websiteUrl ? (
                  <a
                    href={item.websiteUrl}
                    className="certificate-link experience-certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar el sitio web de ${item.company} (abre en una pestaña nueva)`}
                  >
                    <IconExternalLink size={17} />
                    Visitar sitio
                    <ArrowUpRight size={15} />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section
          className="macbook-section"
          aria-label="Presentación visual de proyectos"
        >
          <MacbookScroll
            title={
              <span className="macbook-title">
                Ideas que comienzan como código.
                <br />
                <strong>Productos que terminan generando valor.</strong>
              </span>
            }
            badge={<MacbookBadge />}
            src="/fondo-pantalla.webp"
            imageAlt="Captura del proyecto Codeluxe presentada en una MacBook"
            showGradient={false}
          />
        </section>

        <section id="proyectos" className="section-shell projects-section">
          <SectionLabel index="02">Proyectos seleccionados</SectionLabel>
          <div className="projects-heading">
            <div>
              <p>TRABAJO RECIENTE</p>
              <h2>Diseñado para funcionar. Construido para destacar.</h2>
            </div>
            <p>
              Cada producto responde a un problema real con una identidad
              propia, una base mantenible y decisiones técnicas medibles.
            </p>
          </div>

          <div className="project-stack">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-visual">
                  <Image
                    src={project.image}
                    alt={`Captura del proyecto ${project.name}`}
                    width={1920}
                    height={1440}
                    sizes="(min-width: 960px) 62vw, 100vw"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="project-details">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver el repositorio de ${project.name} en GitHub (abre en una pestaña nueva)`}
                      >
                        <IconBrandGithub size={17} />
                        Repositorio
                      </a>
                    ) : null}
                    {project.previewUrl ? (
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver ${project.name} (abre en una pestaña nueva)`}
                      >
                        <IconExternalLink size={17} />
                        Vista previa
                      </a>
                    ) : (
                      <button type="button" disabled>
                        <IconExternalLink size={17} />
                        Vista no disponible
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="educacion" className="education-section">
          <div className="section-shell">
            <SectionLabel index="03">Educación y evolución</SectionLabel>
            <h2 className="sr-only">Educación y formación continua</h2>
            <div className="education-grid">
              {education.map((item) => (
                <article key={item.title}>
                  <Sparkles size={24} strokeWidth={1.4} />
                  <p>{item.period}</p>
                  <h3>{item.title}</h3>
                  <span>{item.place}</span>
                  <div />
                  <p className="education-description">{item.description}</p>
                  {item.certificateUrl ? (
                    <a
                      href={item.certificateUrl}
                      className="certificate-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconFileCertificate size={17} />
                      Ver certificado
                      <ArrowUpRight size={15} />
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="about-section">
          <div className="section-shell about-grid">
            <div className="about-portrait">
              <Image
                src="/nicoplacente.webp"
                alt="Retrato de Nicolás Placente"
                width={441}
                height={441}
                sizes="(min-width: 960px) 36vw, 80vw"
              />
              <span className="portrait-corner portrait-corner-top" />
              <span className="portrait-corner portrait-corner-bottom" />
            </div>
            <div className="about-content">
              <SectionLabel index="04">Más allá del código</SectionLabel>
              <h2>
                Construyo con criterio.
                <br />
                Lidero con propósito.
              </h2>
              <p>
                Soy desarrollador Full Stack, emprendedor y Bombero Voluntario.
                Esa combinación me enseñó a resolver problemas bajo presión,
                comunicar con claridad y cuidar cada decisión que afecta al
                resultado final.
              </p>
              <p>
                Actualmente profundizo en marketing, publicidad digital y
                automatización con IA para crear mejores productos en menos
                tiempo, sin sacrificar calidad.
              </p>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="about-meta">
                <span>
                  <MapPin size={15} />
                  Buenos Aires, Argentina
                </span>
                <span>Español nativo · Inglés básico</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="contact-grid" aria-hidden="true" />
          <div className="section-shell contact-content">
            <p>¿TENÉS UNA IDEA AMBICIOSA?</p>
            <h2>Hagamos algo difícil de ignorar.</h2>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Iniciar una conversación por WhatsApp (abre en una pestaña nueva)"
            >
              Iniciar una conversación
              <IconBrandWhatsapp size={22} />
            </a>
            <div className="contact-links">
              <a href={`mailto:${siteConfig.email}`} className="contact-link">
                <span>
                  <IconMail size={20} />
                </span>
                <div>
                  <small>Escribime por</small>
                  Email
                </div>
                <ArrowUpRight size={17} />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Explorar el perfil de Nicolás Placente en GitHub (abre en una pestaña nueva)"
              >
                <span>
                  <IconBrandGithub size={20} />
                </span>
                <div>
                  <small>Explorá mi código</small>
                  GitHub
                </div>
                <ArrowUpRight size={17} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Conectar con Nicolás Placente en LinkedIn (abre en una pestaña nueva)"
              >
                <span>
                  <IconBrandLinkedin size={20} />
                </span>
                <div>
                  <small>Conectemos en</small>
                  LinkedIn
                </div>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>NICOLÁS PLACENTE © {new Date().getFullYear()}</span>
        <span>FULL STACK DEVELOPER · PRODUCT ORIENTED</span>
        <a href="#inicio">VOLVER ARRIBA ↑</a>
      </footer>
    </>
  );
}
