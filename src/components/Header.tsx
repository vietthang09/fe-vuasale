"use client";

import React from "react";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";

export default function Header() {
  return (
    <header
      className={
        "py-4 bg-white shadow-lg dark:bg-accent sticky top-0 z-30 transition-all"
      }
    >
      <div className="container mx-auto">
        <div className="flex items-center gap-x-6">
          <Nav
            containerStyles="flex justify-between w-full hidden xl:flex gap-x-8 items-center"
            linkStyles="relative hover:text-[#8A3EAF] transition-all font-semibold"
            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
          />
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
