"use client";

import { navItems } from "@/data";
import { i18n } from "@/data";
import { useLanguage } from "@/app/provider";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import dynamic from "next/dynamic";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });

const Home = () => {
  const { lang } = useLanguage();
  const t = i18n[lang as "en" | "pt"]; 
  const [cursor, setCursor] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [sectionCursor, setSectionCursor] = useState<{ x: number; y: number }>({ x: -9999, y: -9999 });
  const [hovered, setHovered] = useState(false);
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <section
          className="py-20 relative"
          id="about-me"
          onMouseMove={(e) => {
            const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
            setSectionCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
          onMouseLeave={() => setSectionCursor({ x: -9999, y: -9999 })}
        >
          <div className="absolute inset-0 -z-10 dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]" />
          <div
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              left: sectionCursor.x,
              top: sectionCursor.y,
              width: 320,
              height: 320,
              background: "radial-gradient(closest-side, rgba(59,130,246,0.12), transparent 70%)",
            }}
          />
          <h1 className="heading relative z-10">
            {(t as any).sections?.aboutMe?.heading || (lang === "pt" ? "Sobre mim" : "About me")}
          </h1>
          <div className="relative z-10 mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
            <div
              className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-lg dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]"
              style={{ width: "320px", height: "420px" }}
              onMouseMove={(e) => {
                const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => {
                setHovered(false);
                setCursor({ x: -9999, y: -9999 });
              }}
            >
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ width: 280, height: 280, borderRadius: 9999, filter: "blur(24px)", background: "radial-gradient(closest-side, rgba(139,92,246,0.3), rgba(59,130,246,0.18) 40%, transparent 70%)" }}
                animate={{ rotate: hovered ? 25 : 0, scale: hovered ? 1.12 : 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              />
              <div
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                style={{
                  left: cursor.x,
                  top: cursor.y,
                  width: 200,
                  height: 200,
                  background: "radial-gradient(closest-side, rgba(59,130,246,0.20), transparent 70%)",
                }}
              />
              <Image
                src="/kaiop.png"
                alt="foto kaio"
                fill
                sizes="(min-width: 768px) 320px, 100vw"
                className="relative z-10 object-cover"
                priority
              />
            </div>
            <div className="md:max-w-sm max-w-sm md:text-left text-center mt-10 md:mt-0">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                {(t as any).sections?.aboutMe?.title || (lang === "pt" ? "Desenvolvedor full‑stack" : "Full‑stack developer")}
              </h2>
              <p className="text-white-200 leading-relaxed md:text-lg">
                {(t as any).sections?.aboutMe?.text || (lang === "pt"
                  ? "Sou desenvolvedor full‑stack focado em criar experiências web rápidas e fluidas com Next.js, React e Python. Gosto de unir design e engenharia para entregar produtos claros, bem documentados e fáceis de evoluir."
                  : "I'm a full‑stack developer focused on building fast, fluid web experiences with Next.js, React, and Python. I love combining design and engineering to deliver clear, well‑documented products that are easy to evolve.")}
              </p>
            </div>
          </div>
        </section>
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
