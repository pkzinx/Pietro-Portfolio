"use client";

import { FaLocationArrow } from "react-icons/fa6";
import React, { useState } from "react";

import { projects, i18n } from "@/data";
import { useLanguage } from "@/app/provider";
import { PinContainer } from "./ui/Pin";
import ConfirmModal from "./ui/ConfirmModal";
import Image from "next/image";

const RecentProjects = () => {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const t = i18n[lang as "en" | "pt"].sections.modal;
  const handleCardClick = (link: string) => {
    setSelectedLink(link);
    setOpen(true);
  };
  const handleConfirm = () => {
    if (selectedLink) {
      window.open(selectedLink, "_blank", "noopener,noreferrer");
    }
    setOpen(false);
  };
  return (
    <div className="py-20">
      <h1 className="heading">
        {i18n[lang as "en" | "pt"].sections.recent.heading1}{" "}
        <span className="text-purple">{i18n[lang as "en" | "pt"].sections.recent.heading2}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
            onClick={() => handleCardClick(item.link)}
          >
            <PinContainer
              title={item.link}
              href={undefined}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bgimg" fill sizes="(min-width: 1024px) 384px, 80vw" className="object-cover" />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  fill
                  sizes="(min-width: 1024px) 384px, 80vw"
                  className="z-10 object-contain"
                  style={{ objectPosition: "bottom" }}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {lang === "pt" ? (item as any).desPt : (item as any).desEn}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon5" width={24} height={24} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {i18n[lang as "en" | "pt"].sections.recent.cta}
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <ConfirmModal
        open={open}
        title={t.title}
        message={t.message}
        link={selectedLink || undefined}
        acceptLabel={t.accept}
        laterLabel={t.later}
        onConfirm={handleConfirm}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default RecentProjects;
