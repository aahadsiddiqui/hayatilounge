"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiInstagram, SiGoogle } from "react-icons/si";

/* ─── Data ─── */
const featuredDishes = [
  { name: "Loaded Fries",      price: "$16.99", image: "/loaded-fries.png",    tag: "Apps"      },
  { name: "Wings w/ Fries",    price: "$17.99", image: "/wingsfries.png",      tag: "Apps"      },
  { name: "Chicken Burger",    price: "$15.99", image: "/chicken-burger.png", tag: "Handhelds" },
  { name: "Bruschetta",        price: "$11.99", image: "/bruschetta.png",      tag: "Apps"      },
  { name: "Beef Tacos",        price: "$14.99", image: "/beeftaco.png",        tag: "Apps"      },
  { name: "Cheesecake",        price: "$11.99", image: "/cheesecake.png",      tag: "Desserts"  },
];

const menuCategories = [
  { name: "Food",     sub: "Apps, salads & handhelds", image: "/loaded-fries.png", gradient: false },
  { name: "Drinks",   sub: "Soft drinks, tea & more",  image: null,              gradient: true  },
  { name: "Desserts", sub: "Sweet endings",           image: "/cheesecake.png", gradient: false },
];

const stats = [
  { value: "10+",  label: "Drinks"       },
  { value: "15",   label: "Food picks"  },
  { value: "Ajax", label: "Ontario"     },
];

const venueAddress = "190 Station St Unit 1, Ajax, ON L1S 2G3";
const googleMapsVenueUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`;
const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(venueAddress)}&z=17&ie=UTF8&iwloc=&output=embed`;

/* ─── Variants ─── */
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] },
  }),
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const bgY          = useTransform(scrollY, [0, 700],  [0, 100]);
  const heroOpacity  = useTransform(scrollY, [0, 400],  [1, 0]);
  const heroY        = useTransform(scrollY, [0, 400],  [0, -55]);

  const [navSolid, setNavSolid] = useState(false);
  useEffect(() => {
    const fn = () => setNavSolid(window.scrollY > 70);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[var(--bg)] text-[var(--cream)] overflow-x-hidden">

      {/* ── Ambient orbs ── */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        <div className="orb-a absolute top-[-18%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] bg-[var(--gold)]/4" />
        <div className="orb-b absolute bottom-[-15%] right-[-8%]  w-[520px] h-[520px] rounded-full blur-[110px] bg-[var(--terracotta)]/5" />
      </div>

      {/* ── Nav ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navSolid
            ? "bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        {!navSolid && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-transparent pointer-events-none" />
        )}
        <div className="relative flex items-center justify-between px-5 sm:px-10 py-4">
          <img
            src="/logo.jpg"
            alt="Hayati Lounge"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-[var(--gold)]/30"
          />
          <div className="flex items-center gap-1 sm:gap-2">
            <a href="#dishes" className="hidden sm:block px-4 py-2 text-[11px] tracking-[0.18em] uppercase text-[var(--cream-muted)] hover:text-[var(--gold)] transition-colors duration-300">
              Kitchen
            </a>
            <a href="#about" className="hidden sm:block px-4 py-2 text-[11px] tracking-[0.18em] uppercase text-[var(--cream-muted)] hover:text-[var(--gold)] transition-colors duration-300">
              About
            </a>
            <a href="#visit" className="hidden sm:block px-4 py-2 text-[11px] tracking-[0.18em] uppercase text-[var(--cream-muted)] hover:text-[var(--gold)] transition-colors duration-300">
              Visit
            </a>
            <a
              href="/menu"
              className="ml-2 text-[11px] tracking-[0.2em] uppercase text-[var(--gold)] border border-[var(--gold)]/35 px-5 py-2.5 rounded-full hover:bg-[var(--gold)]/12 hover:border-[var(--gold)]/60 transition-all duration-300"
            >
              Menu
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Parallax image */}
        <motion.div style={{ y: bgY }} className="absolute inset-[-14%] -z-10">
          <img src="/hero.jpg" alt="" className="w-full h-full object-cover object-center" />
        </motion.div>
        {/* Base dark tint — lighter so image shows */}
        <div className="absolute inset-0 bg-[#0a0806]/52 -z-10" />
        {/* Vignette: dark top for nav legibility, strong bottom fade to body */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0d0b]/60 via-transparent to-[#0f0d0b]/90 -z-10" />
        {/* Subtle side vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0b]/30 via-transparent to-[#0f0d0b]/30 -z-10" />
        {/* Warm gold bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] bg-[var(--gold)]/8 -z-10 pointer-events-none" />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 flex flex-col items-center text-center px-5 w-full max-w-4xl mx-auto"
        >
          {/* Location tag */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.48em" }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
            className="text-[var(--gold)] text-[10px] sm:text-[11px] tracking-[0.48em] uppercase mb-7 font-light drop-shadow-sm"
          >
            Ajax · Ontario
          </motion.p>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="font-playfair font-light text-[var(--cream)] leading-[1.0] tracking-tight drop-shadow-lg"
            style={{ fontSize: "clamp(3.4rem, 13vw, 8rem)" }}
          >
            Hayati
            <br />
            <em className="italic text-[var(--gold)]">Lounge</em>
          </motion.h1>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.88, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/65 to-transparent my-7 sm:my-8"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05 }}
            className="text-[var(--cream)]/70 text-[14px] sm:text-[16px] max-w-[280px] sm:max-w-sm leading-relaxed mb-10 tracking-wide"
          >
            Elevated food · drinks & tea · sweet endings
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.22 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              href="/menu"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-[var(--gold)] text-[#0c0a08] font-semibold rounded-full hover:bg-[var(--gold-light)] transition-all duration-300 text-[12px] uppercase tracking-[0.15em] shadow-lg shadow-[var(--gold)]/20"
            >
              Explore Menu
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              href="#dishes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 border border-[var(--cream)]/20 text-[var(--cream)]/85 hover:border-[var(--gold)]/45 hover:text-[var(--gold)] rounded-full transition-all duration-300 text-[12px] uppercase tracking-[0.15em]"
            >
              See the Kitchen
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="animate-bob flex flex-col items-center gap-2 opacity-35">
            <div className="w-px h-9 bg-gradient-to-b from-[var(--gold)] to-transparent" />
            <p className="text-[var(--gold)] text-[8px] tracking-[0.4em] uppercase">Scroll</p>
          </div>
        </motion.div>
      </section>

      {/* ── Stats strip ── */}
      <section className="py-7 sm:py-10 border-y border-[var(--border)] bg-[var(--bg-card)]/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-5 grid grid-cols-3 divide-x divide-[var(--border)]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i * 0.08}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center px-3 sm:px-10"
            >
              <div className="font-playfair text-xl sm:text-3xl text-[var(--gold)] font-light mb-1">
                {s.value}
              </div>
              <div className="text-[8px] sm:text-[9px] text-[var(--cream-muted)] tracking-[0.25em] uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Featured Dishes ── */}
      <section id="dishes" className="pt-20 pb-12 sm:pt-28 sm:pb-20">
        <div className="px-5 sm:px-10 max-w-6xl mx-auto flex items-end justify-between mb-8 sm:mb-10">
          <motion.div
            variants={fadeUp} custom={0}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <p className="text-[var(--gold)] text-[10px] tracking-[0.35em] uppercase mb-3">From the Kitchen</p>
            <h2 className="font-playfair text-3xl sm:text-5xl font-light text-[var(--cream)]">Featured Dishes</h2>
          </motion.div>
          <motion.a
            href="/menu"
            variants={fadeUp} custom={0.1}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="hidden sm:flex items-center gap-2 text-[var(--gold)] text-sm hover:gap-3 transition-all duration-300 shrink-0"
          >
            View all <span>→</span>
          </motion.a>
        </div>

        {/* Snap-scroll row — mobile: horizontal scroll, desktop: 3-col grid */}
        <div className="px-5 sm:px-10">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 sm:pb-0 no-scrollbar sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
            {featuredDishes.map((dish, i) => (
              <motion.a
                key={dish.name}
                href="/menu"
                variants={fadeUp} custom={Math.min(i * 0.07, 0.35)}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -7 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative shrink-0 w-[200px] sm:w-auto snap-center rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--border-hover)] bg-[var(--bg-card)] transition-all duration-400 cursor-pointer"
              >
                <div className="relative h-[250px] sm:h-[290px] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0b]/95 via-[#0f0d0b]/15 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] tracking-[0.22em] text-[var(--gold)] uppercase border border-[var(--gold)]/35 bg-[var(--bg)]/70 backdrop-blur-sm rounded-full px-2.5 py-1">
                      {dish.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-playfair text-[var(--cream)] text-[15px] font-light leading-snug mb-0.5">
                      {dish.name}
                    </h3>
                    <span className="text-[var(--gold)] text-sm font-light">{dish.price}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile see-all CTA */}
        <div className="sm:hidden px-5 mt-6">
          <a
            href="/menu"
            className="flex items-center justify-center w-full py-4 border border-[var(--gold)]/25 text-[var(--gold)] rounded-full text-[12px] uppercase tracking-[0.2em]"
          >
            View Full Menu →
          </a>
        </div>
      </section>

      {/* ── Menu Categories ── */}
      <section className="py-14 sm:py-24 px-5 sm:px-10 border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} custom={0}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <p className="text-[var(--gold)] text-[10px] tracking-[0.35em] uppercase mb-3">Explore</p>
            <h2 className="font-playfair text-3xl sm:text-5xl font-light text-[var(--cream)]">The Menu</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {menuCategories.map((cat, i) => (
              <motion.a
                key={cat.name}
                href="/menu"
                variants={fadeUp} custom={i * 0.1}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative h-[180px] sm:h-[240px] rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-400 cursor-pointer"
              >
                {cat.image ? (
                  <>
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-[#0f0d0b]/60 group-hover:bg-[#0f0d0b]/50 transition-colors duration-400" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-2)] to-[var(--bg)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent" />
                  </div>
                )}

                <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6">
                  <p className="text-[9px] tracking-[0.3em] text-[var(--gold)]/75 uppercase mb-1.5">{cat.sub}</p>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-light text-[var(--cream)]">{cat.name}</h3>
                  <div className="mt-3 flex items-center gap-1.5 text-[var(--gold)] text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Browse</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-16 sm:py-28 px-5 sm:px-10 border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-[var(--gold)] text-[10px] tracking-[0.35em] uppercase mb-5">Our Story</p>
            <h2 className="font-playfair text-4xl sm:text-5xl md:text-[3.5rem] font-light leading-[1.12] text-[var(--cream)]">
              Where every<br />moment<br /><em className="italic">lingers.</em>
            </h2>
            <div className="mt-8 w-10 h-px bg-[var(--gold)]/35" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-[var(--cream-muted)] text-[15px] sm:text-[16px] leading-[1.9] mb-7">
              Hayati Lounge is more than a place to eat and drink — it&apos;s a sanctuary for those who appreciate the finer details. Carefully crafted dishes, handcrafted drinks, and a space designed for genuine connection.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Elevated Kitchen", "Drinks & Tea", "Sweet Desserts", "Ajax, Ontario"].map((t) => (
                <span key={t} className="px-3.5 py-1.5 text-[10px] tracking-wide text-[var(--gold)] border border-[var(--gold)]/20 rounded-full uppercase">
                  {t}
                </span>
              ))}
            </div>
            <a
              href="/menu"
              className="group inline-flex items-center gap-2 text-[13px] text-[var(--gold)] hover:gap-3 transition-all duration-300 uppercase tracking-wide"
            >
              View our full menu
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Visit ── */}
      <section id="visit" className="py-16 sm:py-28 px-5 sm:px-10 border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} custom={0}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-9 sm:mb-14"
          >
            <p className="text-[var(--gold)] text-[10px] tracking-[0.35em] uppercase mb-4">Find Us</p>
            <h2 className="font-playfair text-3xl sm:text-5xl font-light text-[var(--cream)] mb-4">Visit Us</h2>
            <p className="text-[var(--cream-muted)] text-[15px] max-w-sm mx-auto leading-relaxed">
              We&apos;re in the heart of Ajax — come by and stay a while.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp} custom={0.1}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              href={googleMapsVenueUrl}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 border border-[var(--gold)]/28 text-[var(--gold)] rounded-full hover:bg-[var(--gold)]/8 hover:border-[var(--gold)]/55 transition-all duration-300 text-sm"
            >
              <SiGoogle className="text-base" /> Google Maps
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              href="https://instagram.com/hayatilounge"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 border border-[var(--gold)]/28 text-[var(--gold)] rounded-full hover:bg-[var(--gold)]/8 hover:border-[var(--gold)]/55 transition-all duration-300 text-sm"
            >
              <SiInstagram className="text-base" /> Instagram
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp} custom={0.2}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-[var(--border)]"
          >
            <iframe
              title="Hayati Lounge Location"
              src={googleMapsEmbedUrl}
              width="100%"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[var(--gold)]/10 py-10 px-5 sm:px-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Hayati Lounge" className="w-8 h-8 rounded-full object-cover border border-[var(--gold)]/20" />
            <span className="font-playfair text-[var(--cream-muted)] text-sm italic">Hayati Lounge</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://instagram.com/hayatilounge" target="_blank" rel="noopener noreferrer"
              className="text-[var(--cream-muted)] hover:text-[var(--gold)] transition-colors duration-300 text-sm flex items-center gap-1.5">
              <SiInstagram /> Instagram
            </a>
            <a href={googleMapsVenueUrl} target="_blank" rel="noopener noreferrer"
              className="text-[var(--cream-muted)] hover:text-[var(--gold)] transition-colors duration-300 text-sm flex items-center gap-1.5">
              <SiGoogle /> Maps
            </a>
          </div>
          <p className="text-[var(--cream-muted)] text-xs">
            &copy; {new Date().getFullYear()} Hayati Lounge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
