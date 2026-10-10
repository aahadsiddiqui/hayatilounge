"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiGoogle, SiInstagram } from "react-icons/si";
import { drinksMenu, foodMenu, type MenuItem, type MenuSection } from "@/data/menu";
import { DrinkItemRow, FoodItemRow } from "@/components/MenuBoards";
import {
  SiteFooter,
  SiteNav,
  googleMapsVenueUrl,
  instagramUrl,
  phoneDisplay,
  phoneHref,
  venueAddress,
} from "@/components/SiteChrome";
import { HalalBadge } from "@/components/HalalBadge";
import { DiamondRule, OliveBranch, PalmFrond, Sparkle, Wordmark } from "@/components/ornaments";

const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(venueAddress)}&z=17&ie=UTF8&iwloc=&output=embed`;

function pick(sections: MenuSection[], names: string[]): MenuItem[] {
  const all = sections.flatMap((s) => s.items);
  return names.map((name) => {
    const item = all.find((i) => i.name === name);
    if (!item) throw new Error(`Unknown menu item: ${name}`);
    return item;
  });
}

const kitchenPicks = pick(foodMenu, [
  "Mediterranean Mezze Board",
  "Korean Soy Garlic Wings",
  "Birria Quesadilla",
  "Dubai Pistachio Brownie",
]);

const barPicks = pick(drinksMenu, ["Karak Chai", "Saffron Tea", "Blue Ocean", "Pink Lemonade", "Peach Bellini", "Iced French Vanilla"]);

const hours = [
  { days: "Monday – Thursday", time: "12 PM – 11 PM" },
  { days: "Friday – Saturday", time: "12 PM – 1 AM" },
  { days: "Sunday", time: "12 PM – 11 PM" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease } }),
};

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="font-caps uppercase tracking-[0.4em] text-[0.65rem] sm:text-[0.7rem] text-[var(--gold)]">{eyebrow}</p>
      <h2 className="font-script text-gold-gradient text-[4rem] sm:text-[5.5rem] leading-[1.1] mt-1">{title}</h2>
      <DiamondRule className="mt-1" />
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteNav />

      {/* ── Hero ── */}
      <section className="marble relative min-h-[100svh] flex items-center justify-center px-4 pt-24 pb-14 overflow-hidden">
        <div className="lattice absolute inset-0 opacity-[0.07] pointer-events-none" />
        <OliveBranch className="absolute top-16 right-0 w-44 sm:w-80 opacity-90 animate-sway pointer-events-none" />
        <OliveBranch className="absolute bottom-0 left-0 w-36 sm:w-64 rotate-180 opacity-75 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease }}
          className="frame arch relative w-full max-w-2xl bg-[var(--bg)]/55 backdrop-blur-[2px] px-6 sm:px-14 pt-16 sm:pt-24 pb-12 sm:pb-16 text-center"
        >
          <PalmFrond className="absolute -bottom-3 -left-3 w-24 sm:w-36 opacity-40 -scale-x-100 pointer-events-none" />
          <PalmFrond className="absolute -bottom-3 -right-3 w-24 sm:w-36 opacity-40 pointer-events-none" />

          <motion.div initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 1.2, delay: 0.3 }}>
            <Sparkle className="mx-auto w-7 h-7 text-[var(--gold)]" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, delay: 0.45, ease }}>
            <Wordmark size="lg" className="mt-6" />
          </motion.div>

          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 1.2, delay: 0.9, ease }}>
            <DiamondRule className="mt-6" width="w-20 sm:w-28" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="font-script text-gold-gradient text-[2rem] sm:text-[3.2rem] leading-tight mt-6"
          >
            Good drinks, better company
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="font-caps uppercase tracking-[0.4em] text-[0.65rem] sm:text-xs text-[var(--cream)]/70 mt-3"
          >
            Ajax &nbsp;·&nbsp; Ontario
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              href="/menu"
              className="w-full sm:w-auto px-10 py-3.5 font-caps uppercase tracking-[0.3em] text-[0.72rem] text-[var(--bg)] bg-gradient-to-b from-[var(--gold-light)] to-[var(--gold)] hover:brightness-110 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(212,165,116,0.5)]"
            >
              View Menu
            </Link>
            <a
              href="#visit"
              className="w-full sm:w-auto px-10 py-3.5 font-caps uppercase tracking-[0.3em] text-[0.72rem] text-[var(--gold-light)] border border-[var(--gold)]/50 hover:bg-[var(--gold)]/10 hover:border-[var(--gold)] transition-all duration-300"
            >
              Visit Us
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.6 }}>
            <HalalBadge size="sm" className="mt-10" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Signatures ── */}
      <section id="signatures" className="marble border-t border-[var(--line-soft)] px-4 sm:px-8 py-24 sm:py-32 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="A taste of the menu" title="Signatures" />

          <div className="mt-14 grid lg:grid-cols-[1.25fr_1fr] gap-6 sm:gap-8">
            <motion.div
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="frame relative bg-[var(--bg)]/60 px-6 sm:px-10 py-10 sm:py-12"
            >
              <p className="font-caps uppercase tracking-[0.35em] text-[0.68rem] text-[var(--gold)] text-center">From the Kitchen</p>
              <div className="mt-8 space-y-6">
                {kitchenPicks.map((item) => (
                  <FoodItemRow key={item.name} item={item} />
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="frame arch relative bg-[var(--bg)]/60 px-6 sm:px-10 pt-16 sm:pt-20 pb-10 sm:pb-12"
            >
              <Sparkle className="mx-auto w-5 h-5 text-[var(--gold)] mb-4" />
              <p className="font-caps uppercase tracking-[0.35em] text-[0.68rem] text-[var(--gold)] text-center">From the Bar</p>
              <ul className="mt-6">
                {barPicks.map((item) => (
                  <DrinkItemRow key={item.name} item={item} />
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 text-center">
            <Link
              href="/menu"
              className="inline-block px-10 py-3.5 font-caps uppercase tracking-[0.3em] text-[0.72rem] text-[var(--gold-light)] border border-[var(--gold)]/50 hover:bg-[var(--gold)]/10 hover:border-[var(--gold)] transition-all duration-300"
            >
              See the Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section id="story" className="relative border-t border-[var(--line-soft)] bg-[var(--bg)] px-4 sm:px-8 py-24 sm:py-32 overflow-hidden scroll-mt-16">
        <div className="lattice absolute inset-0 opacity-[0.09] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--bg)_35%,transparent_85%)] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <SectionTitle eyebrow="Welcome to Hayati" title="Our Story" />

          <motion.h3
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 font-serif font-light uppercase tracking-[0.12em] text-2xl sm:text-4xl leading-snug text-[var(--cream)]"
          >
            Where every moment <span className="text-gold-gradient">lingers</span>
          </motion.h3>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 font-serif text-lg sm:text-xl leading-relaxed text-[var(--cream)]/75"
          >
            <em>Hayati</em>{" "}means &ldquo;my life&rdquo; — and that&apos;s the spirit we pour into every plate and every cup. From Mediterranean mezze and
            shawarma to Korean-glazed wings and birria, from slow-brewed karak chai to handcrafted mocktails, Hayati Lounge is a place to
            gather, linger, and share. Good drinks, better company.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-caps uppercase tracking-[0.25em] text-[0.65rem] sm:text-[0.7rem] text-[var(--gold)]"
          >
            {["Shareables", "Handhelds", "Mocktails", "Tea & Coffee", "Desserts"].map((t, i) => (
              <span key={t} className="flex items-center gap-5">
                {i > 0 && <span className="w-1 h-1 rotate-45 bg-[var(--gold)]/60" aria-hidden />}
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Visit ── */}
      <section id="visit" className="marble border-t border-[var(--line-soft)] px-4 sm:px-8 py-24 sm:py-32 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Find us in Ajax" title="Visit Us" />

          <div className="mt-14 grid lg:grid-cols-[1fr_1.4fr] gap-6 sm:gap-8 items-stretch">
            <motion.div
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="frame bg-[var(--bg)]/60 px-7 sm:px-10 py-10 flex flex-col"
            >
              <p className="font-caps uppercase tracking-[0.35em] text-[0.68rem] text-[var(--gold)]">Address</p>
              <p className="mt-3 font-serif text-xl sm:text-2xl leading-snug text-[var(--cream)]">
                190 Station St, Unit 1
                <br />
                Ajax, ON L1S 2G3
              </p>

              <p className="mt-9 font-caps uppercase tracking-[0.35em] text-[0.68rem] text-[var(--gold)]">Phone</p>
              <a
                href={phoneHref}
                className="mt-3 inline-block font-serif text-xl sm:text-2xl text-[var(--cream)] hover:text-[var(--gold-light)] transition-colors"
              >
                {phoneDisplay}
              </a>

              <p className="mt-9 font-caps uppercase tracking-[0.35em] text-[0.68rem] text-[var(--gold)]">Hours</p>
              <ul className="mt-3 space-y-2.5">
                {hours.map((h) => (
                  <li key={h.days} className="flex items-baseline gap-3">
                    <span className="font-serif text-lg text-[var(--cream)]">{h.days}</span>
                    <span className="flex-1 h-px self-center bg-[var(--gold)]/30" />
                    <span className="font-caps text-[0.78rem] tracking-[0.1em] text-[var(--gold-light)]">{h.time}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href={googleMapsVenueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3 font-caps uppercase tracking-[0.22em] text-[0.68rem] text-[var(--bg)] bg-gradient-to-b from-[var(--gold-light)] to-[var(--gold)] hover:brightness-110 transition-all"
                >
                  <SiGoogle /> Directions
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3 font-caps uppercase tracking-[0.22em] text-[0.68rem] text-[var(--gold-light)] border border-[var(--gold)]/50 hover:bg-[var(--gold)]/10 hover:border-[var(--gold)] transition-all"
                >
                  <SiInstagram /> Instagram
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="frame p-2 min-h-[320px]"
            >
              <iframe
                title="Hayati Lounge Location"
                src={googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full h-full min-h-[300px] [filter:grayscale(1)_invert(0.92)_sepia(0.35)_contrast(0.9)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
