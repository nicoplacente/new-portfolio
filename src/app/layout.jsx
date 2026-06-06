import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://nicoplacente.codeluxe.tech"),
  title: {
    default: "Nicolás Placente | Full Stack Developer",
    template: "%s | Nicolás Placente",
  },
  description:
    "Portfolio de Nicolás Placente, desarrollador Full Stack especializado en productos web, rendimiento, SEO técnico y automatización con IA.",
  keywords: [
    "Nicolás Placente",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Prisma",
    "Tailwind CSS",
    "SEO técnico",
    "desarrollo web",
  ],
  authors: [{ name: "Nicolás Placente" }],
  creator: "Nicolás Placente",
  openGraph: {
    title: "Nicolás Placente | Full Stack Developer",
    description:
      "Desarrollo productos web rápidos, claros y orientados a resultados.",
    url: "https://nicoplacente.codeluxe.tech",
    siteName: "Portfolio de Nicolás Placente",
    images: [
      {
        url: "/nicoplacente.png",
        width: 400,
        height: 400,
        alt: "Nicolás Placente",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolás Placente | Full Stack Developer",
    description:
      "Productos web, SEO técnico, rendimiento y automatización con IA.",
    images: ["/nicoplacente.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
