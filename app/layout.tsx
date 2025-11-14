import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaio Pietro Portfolio",
  description: "Portfolio de Kaio Pietro — Next.js, React e Python.",
  keywords: [
    "Kaio Pietro",
    "Portfolio",
    "Next.js",
    "React",
    "Python",
    "Full‑stack",
    "Web Developer",
  ],
  applicationName: "Kaio Pietro Portfolio",
  openGraph: {
    title: "Kaio Pietro Portfolio",
    description: "Projetos, experiência e contato — Next.js, React e Python.",
    url: "https://pietro-portfolio.vercel.app/",
    siteName: "Kaio Pietro Portfolio",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Kaio Pietro Portfolio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaio Pietro Portfolio",
    description: "Projetos, experiência e contato — Next.js, React e Python.",
    images: ["/portfolio.png"],
  },
  icons: {
    icon: "/portfolio.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/portfolio.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
