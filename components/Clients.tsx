"use client";

import React from "react";

import { companies, testimonials, i18n } from "@/data";
import { useLanguage } from "@/app/provider";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  const { lang } = useLanguage();
  const items = testimonials.map((t) => ({
    quote: (lang as "en" | "pt") === "pt" ? (t as any).quotePt : (t as any).quoteEn,
    name: (t as any).name,
    title: (t as any).title,
    image: (t as any).image,
  }));
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        {i18n[lang as "en" | "pt"].sections.clients.heading1}
        <span className="text-purple"> {i18n[lang as "en" | "pt"].sections.clients.heading2}</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards items={items} direction="right" speed="slow" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
