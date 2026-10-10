"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DrinksBoard, FoodBoard } from "@/components/MenuBoards";
import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { HalalBadge } from "@/components/HalalBadge";
import { DiamondRule } from "@/components/ornaments";

const tabs = [
  { id: "food", label: "Food" },
  { id: "drinks", label: "Drinks" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function MenuPage() {
  const [active, setActive] = useState<TabId>("food");

  const select = (id: TabId) => {
    setActive(id);
    const tabBar = document.getElementById("menu-tabs");
    const board = document.getElementById("menu-board");
    if (!tabBar || !board) return;
    const offset = tabBar.getBoundingClientRect().bottom;
    const boardTop = board.getBoundingClientRect().top;
    if (boardTop < offset) {
      window.scrollTo({ top: window.scrollY + boardTop - offset, behavior: "smooth" });
    }
  };

  return (
    <div className="marble min-h-screen">
      <SiteNav />

      <header className="pt-32 sm:pt-36 pb-10 px-5 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.7em" }}
          animate={{ opacity: 1, letterSpacing: "0.45em" }}
          transition={{ duration: 1.2 }}
          className="font-caps uppercase text-[0.68rem] text-[var(--gold)]"
        >
          Hayati Lounge
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-script text-gold-gradient text-[5rem] sm:text-[7.5rem] leading-[1.1] mt-1"
        >
          Our Menu
        </motion.h1>
        <DiamondRule className="mt-2" />
        <HalalBadge size="sm" className="mt-7" />
      </header>

      <div
        id="menu-tabs"
        className="sticky top-[67px] z-40 flex justify-center px-5 py-2.5 bg-[var(--bg)]/85 backdrop-blur-md border-y border-[var(--line-soft)]"
      >
        <div className="flex border border-[var(--gold)]/40" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => select(t.id)}
              className={`relative px-8 sm:px-12 py-2.5 font-caps uppercase text-[0.72rem] tracking-[0.3em] transition-colors duration-300 ${
                active === t.id ? "text-[var(--bg)]" : "text-[var(--cream)]/70 hover:text-[var(--gold-light)]"
              }`}
            >
              {active === t.id && (
                <motion.span
                  layoutId="menu-tab"
                  className="absolute inset-0 bg-gradient-to-b from-[var(--gold-light)] to-[var(--gold)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      <main id="menu-board" className="max-w-4xl mx-auto px-3 sm:px-6 py-12 sm:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
          >
            {active === "food" ? <FoodBoard /> : <DrinksBoard />}
          </motion.div>
        </AnimatePresence>
      </main>

      <SiteFooter />
    </div>
  );
}
