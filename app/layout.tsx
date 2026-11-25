import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Paulino Jerónimo | Soluções Digitais",
    template: "%s | Paulino Jerónimo",
  },
  description:
    "Desenvolvimento de websites, aplicações web e soluções tecnológicas para empresas e negócios.",
  applicationName: "Paulino Jerónimo — Portfólio",
  authors: [{ name: "Paulino Jerónimo" }],
  openGraph: {
    title: "Paulino Jerónimo | Soluções Digitais",
    description:
      "Desenvolvimento de websites, aplicações web e soluções tecnológicas para empresas e negócios.",
    type: "website",
    locale: "pt_AO",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="pt-AO"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}