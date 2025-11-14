"use client";
import React from "react";
import MagicButton from "@/components/MagicButton";

export default function ConfirmModal({
  open,
  title,
  message,
  link,
  acceptLabel,
  laterLabel,
  onConfirm,
  onClose,
}: {
  open: boolean;
  title: string;
  message: string;
  link?: string;
  acceptLabel: string;
  laterLabel: string;
  onConfirm: () => void;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative max-w-md w-[90%] rounded-2xl border border-white/10 bg-[#0B1020] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white/80 text-sm mt-3">
          {message}
          {link && (
            <>
              {" "}
              <a
                href={link}
                target="_blank"
                className="text-purple underline"
                rel="noreferrer noopener"
              >
                {link}
              </a>
            </>
          )}
        </p>
        <div className="flex gap-3 mt-6">
          <MagicButton
            title={acceptLabel}
            icon={<span />}
            position="right"
            handleClick={onConfirm}
          />
          <MagicButton
            title={laterLabel}
            icon={<span />}
            position="right"
            otherClasses="!bg-[#13162D]"
            handleClick={onClose}
          />
        </div>
      </div>
    </div>
  );
}