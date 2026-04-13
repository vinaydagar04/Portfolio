"use client";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built by{" "}
      <Link target="_blank" href="https://x.com/Vinaydagar_04">
        Vinay Kummar
      </Link>{" "}
      | Thanks to{" "}
      <Link target="_blank" href="https://x.com/mannupaaji">
        Manu Arora
      </Link>
    </div>
  );
};
