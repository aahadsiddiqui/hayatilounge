"use client";

import { motion } from "framer-motion";
import { drinksMenu, findSection, foodMenu, type MenuItem, type MenuSection } from "@/data/menu";
import { Diamond, DiamondRule, OliveBranch, PalmFrond, Sparkle, Wordmark } from "./ornaments";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Food ─── */

export function FoodItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="group">
      <div className="flex items-baseline gap-3 sm:gap-4">
        <h4 className="font-serif font-medium uppercase tracking-[0.05em] text-[1.08rem] sm:text-[1.35rem] leading-tight text-[var(--cream)] group-hover:text-[var(--gold-light)] transition-colors duration-300">
          {item.name}
        </h4>
        <span className="flex-1 min-w-6 h-px self-center bg-gradient-to-r from-[var(--gold)]/55 to-[var(--gold)]/25" />
        <span className="font-serif text-xl sm:text-2xl text-[var(--gold-light)] tabular-nums">{item.price}</span>
      </div>
      {item.description && (
        <p className="mt-1 pr-10 sm:pr-14 font-serif text-[0.98rem] sm:text-[1.05rem] leading-snug text-[var(--cream)]/70">
          {item.description}
        </p>
      )}
    </div>
  );
}

function FoodSection({ section }: { section: MenuSection }) {
  return (
    <Reveal>
      <div className="flex items-end gap-4 sm:gap-6">
        <h3 className="font-script text-gold-gradient text-[3.4rem] sm:text-[4.6rem] leading-[0.9] -ml-1 sm:-ml-3 pr-2 shrink-0">
          {section.title}
        </h3>
        <span className="flex-1 h-px mb-4 sm:mb-6 bg-gradient-to-r from-[var(--gold)]/60 to-[var(--gold)]/10" />
      </div>
      {section.note && (
        <p className="font-caps text-[0.68rem] sm:text-xs tracking-[0.2em] uppercase text-[var(--gold)] mt-1 text-center sm:text-left sm:pl-16">
          {section.note}
        </p>
      )}
      <div className="mt-5 space-y-5 sm:pl-6 md:pl-10">
        {section.items.map((item) => (
          <FoodItemRow key={item.name} item={item} />
        ))}
      </div>
    </Reveal>
  );
}

export function FoodBoard() {
  return (
    <div className="marble frame rounded-[2px] overflow-hidden shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
      <OliveBranch className="absolute -top-2 -right-2 w-40 sm:w-64 opacity-90 animate-sway pointer-events-none" />
      <OliveBranch className="absolute -bottom-2 -left-2 w-32 sm:w-52 rotate-180 opacity-80 pointer-events-none" />

      <div className="relative px-5 sm:px-12 md:px-16 pt-14 sm:pt-16 pb-16 sm:pb-20">
        <Wordmark />
        <DiamondRule className="mt-4" width="w-16" />

        <div className="mt-10 sm:mt-12 space-y-12 sm:space-y-14">
          {foodMenu.map((section) => (
            <FoodSection key={section.id} section={section} />
          ))}
        </div>

        <DiamondRule className="mt-16" width="w-20" />
      </div>
    </div>
  );
}

/* ─── Drinks ─── */

export function DrinkItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="group py-[0.45rem]">
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-caps uppercase tracking-[0.14em] text-[0.82rem] sm:text-[0.9rem] text-[var(--cream)] group-hover:text-[var(--gold-light)] transition-colors duration-300">
          {item.name}
        </span>
        <span className="font-caps text-[0.9rem] sm:text-[0.95rem] text-[var(--gold-light)] tabular-nums">${item.price}</span>
      </div>
      {item.description && (
        <p className="font-caps uppercase tracking-[0.12em] text-[0.6rem] sm:text-[0.64rem] leading-relaxed text-[var(--gold)] mt-0.5 pr-12">
          {item.description}
        </p>
      )}
    </li>
  );
}

function DrinkSection({ section, heading }: { section: MenuSection; heading: "script" | "caps" }) {
  return (
    <Reveal>
      <h3 className="flex items-baseline gap-3 leading-none">
        {heading === "script" ? (
          <>
            <span className="font-script text-gold-gradient text-[3.2rem] sm:text-[3.8rem] leading-[1.05] pr-1">{section.title}</span>
            {section.subtitle && (
              <span className="font-caps uppercase tracking-[0.3em] text-lg sm:text-xl text-[var(--cream)]">{section.subtitle}</span>
            )}
          </>
        ) : (
          <span className="font-caps uppercase tracking-[0.3em] text-xl sm:text-2xl text-[var(--cream)] pt-3">{section.title}</span>
        )}
      </h3>
      <div className="relative mt-2 mb-3 h-px bg-[var(--gold)]/45">
        <Diamond className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 text-[var(--gold)] bg-[var(--bg)]" />
      </div>
      <ul>
        {section.items.map((item) => (
          <DrinkItemRow key={item.name} item={item} />
        ))}
      </ul>
    </Reveal>
  );
}

export function DrinksBoard() {
  return (
    <div className="lattice rounded-[2px] p-3 sm:p-6 border border-[var(--line-soft)] bg-[var(--bg)]">
      <div className="marble frame arch overflow-hidden shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
        <PalmFrond className="absolute -bottom-4 -left-4 w-36 sm:w-56 opacity-50 -scale-x-100 pointer-events-none" />
        <PalmFrond className="absolute -bottom-4 -right-4 w-36 sm:w-56 opacity-50 pointer-events-none" />

        <div className="relative px-6 sm:px-12 md:px-16 pt-10 sm:pt-14 pb-12">
          <Sparkle className="mx-auto w-6 h-6 text-[var(--gold)] mb-4 sm:mb-6" />
          <Wordmark />
          <DiamondRule className="mt-3" width="w-20" />

          <div className="mt-10 grid md:grid-cols-2 gap-x-14 gap-y-12 relative">
            <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/45 to-transparent" />
            <div className="space-y-10">
              <DrinkSection section={findSection(drinksMenu, "cold-drinks")} heading="script" />
              <DrinkSection section={findSection(drinksMenu, "juices")} heading="caps" />
              <DrinkSection section={findSection(drinksMenu, "mocktails")} heading="script" />
            </div>
            <div className="space-y-10">
              <DrinkSection section={findSection(drinksMenu, "hot-drinks")} heading="script" />
              <DrinkSection section={findSection(drinksMenu, "iced-coffee")} heading="script" />
            </div>
          </div>

          <Sparkle className="mx-auto w-5 h-5 text-[var(--gold)] mt-14" />
          <p className="mt-4 text-center font-caps uppercase tracking-[0.3em] text-[0.65rem] sm:text-xs text-[var(--gold)]">
            Good Drinks &nbsp;·&nbsp; Better Company
          </p>
        </div>
      </div>
    </div>
  );
}
