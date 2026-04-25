"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SiInstagram } from "react-icons/si";
import { HalalBadge } from "@/components/HalalBadge";

/* ─── Types ─── */
interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  category: "drinks" | "desserts" | "food";
  subcategory: string;
  image?: string;
  isPopular?: boolean;
}

/* ─── Menu Data ─── */
const menuItems: MenuItem[] = [
  // ── Soft Drinks ──
  {
    id: "soft-drinks",
    name: "Soft Drinks",
    price: "$2.99",
    description: "Coke, Coke Zero, Fuze, Ginger Ale, and Sprite — served chilled.",
    ingredients: [],
    allergens: [],
    category: "drinks",
    subcategory: "Soft Drinks",
  },
  // ── Energy ──
  { id: "red-bull",  name: "Red Bull",   price: "$5.50",  description: "Red Bull energy drink, served ice cold.",          ingredients: ["Red Bull"],                         allergens: [], category: "drinks", subcategory: "Energy Drink" },
  { id: "barbican",  name: "Barbican",  price: "$5.50",  description: "Malt beverage, served chilled.",                 ingredients: ["Barbican"],                        allergens: ["Gluten"], category: "drinks", subcategory: "Bottled" },
  // ── Tea ──
  { id: "green-tea", name: "Green Tea",  price: "$3.99",  description: "Hot green tea, brewed fresh.",                     ingredients: ["Green Tea", "Water"],               allergens: [], category: "drinks", subcategory: "Tea" },
  { id: "black-tea", name: "Black Tea",  price: "$3.99",  description: "Hot black tea, rich and smooth.",                  ingredients: ["Black Tea", "Water"],               allergens: [], category: "drinks", subcategory: "Tea" },
  { id: "peppermint-tea", name: "Peppermint Tea", price: "$3.99", description: "Refreshing hot peppermint tea.",         ingredients: ["Peppermint", "Water"],            allergens: [], category: "drinks", subcategory: "Tea" },
  { id: "mint-tea",  name: "Mint Tea",   price: "$3.99",  description: "Hot mint tea, bright and soothing.",            ingredients: ["Mint", "Water"],                  allergens: [], category: "drinks", subcategory: "Tea" },
  { id: "karak-chai", name: "Karak Chai", price: "$5.99",  description: "Rich, spiced tea brewed with milk — full-bodied and aromatic.", ingredients: ["Tea", "Milk", "Spices"], allergens: ["Dairy"], category: "drinks", subcategory: "Tea" },
  { id: "saffron-tea", name: "Saffron Tea", price: "$6.99", description: "Aromatic saffron-infused tea, served hot.",      ingredients: ["Saffron", "Tea", "Water"],         allergens: [], category: "drinks", subcategory: "Tea" },
  { id: "tea-pot",   name: "Tea Pot",    price: "$12.99", description: "A full pot of tea — perfect to share.",            ingredients: ["Tea Leaves", "Water"],              allergens: [], category: "drinks", subcategory: "Tea" },

  // ── Food — Apps ──
  {
    id: "fries",
    name: "Fries",
    price: "$7.99",
    description: "",
    ingredients: ["Potatoes", "Sea Salt", "House Spice"],
    allergens: [],
    category: "food",
    subcategory: "Apps",
    image: "/frenchfries.png",
  },
  {
    id: "cajun-fries",
    name: "Cajun Fries",
    price: "$8.99",
    description: "",
    ingredients: ["Potatoes", "Cajun Spice", "Sea Salt"],
    allergens: [],
    category: "food",
    subcategory: "Apps",
    image: "/frenchfries.png",
  },
  {
    id: "truffle-fries",
    name: "Truffle Fries",
    price: "$11.99",
    description: "",
    ingredients: ["Potatoes", "Truffle Oil", "Parmesan", "Fresh Herbs"],
    allergens: ["Dairy"],
    category: "food",
    subcategory: "Apps",
    image: "/truffle.png",
  },
  {
    id: "poutine",
    name: "Poutine",
    price: "$12.99",
    description: "",
    ingredients: ["Fries", "Cheese Curds", "Gravy"],
    allergens: ["Dairy", "Gluten"],
    category: "food",
    subcategory: "Apps",
    image: "/poutine.png",
  },
  {
    id: "loaded-fries",
    name: "Loaded Fries",
    price: "$16.99",
    description: "",
    ingredients: ["Fries", "Cheese", "Toppings"],
    allergens: ["Dairy", "Gluten"],
    category: "food",
    subcategory: "Apps",
    image: "/loaded-fries.png",
  },
  {
    id: "beef-tacos",
    name: "Beef Tacos",
    price: "$14.99",
    description: "",
    ingredients: ["Seasoned Beef", "Soft Tortilla", "Pico de Gallo", "House Crema"],
    allergens: ["Gluten"],
    category: "food",
    subcategory: "Apps",
    image: "/beeftaco.png",
  },
  {
    id: "shrimp-tacos",
    name: "Shrimp Tacos",
    price: "$15.99",
    description: "",
    ingredients: ["Shrimp", "Soft Tortilla", "Slaw", "Lime Crema"],
    allergens: ["Shellfish", "Gluten"],
    category: "food",
    subcategory: "Apps",
    image: "/tacos.png",
  },
  {
    id: "chicken-wings-fries",
    name: "Wings w/ Fries",
    price: "$17.99",
    description: "Sauces: mild, medium, hot, honey garlic, BBQ.",
    ingredients: ["Chicken wings", "Fries"],
    allergens: ["Gluten"],
    category: "food",
    subcategory: "Apps",
    image: "/wingsfries.png",
  },
  {
    id: "bruschetta",
    name: "Bruschetta",
    price: "$11.99",
    description: "",
    ingredients: ["Baguette", "Tomato", "Basil", "Garlic", "Olive Oil"],
    allergens: ["Gluten"],
    category: "food",
    subcategory: "Apps",
    image: "/bruschetta.png",
  },

  // ── Food — Salads ──
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    price: "$11.99",
    description: "",
    ingredients: ["Romaine", "Parmesan", "Croutons", "Caesar Dressing"],
    allergens: ["Gluten", "Dairy", "Egg"],
    category: "food",
    subcategory: "Salads",
    image: "/cesar.png",
  },
  {
    id: "greek-salad",
    name: "Greek Salad",
    price: "$12.99",
    description: "",
    ingredients: ["Tomato", "Cucumber", "Kalamata Olives", "Feta", "Red Onion"],
    allergens: ["Dairy"],
    category: "food",
    subcategory: "Salads",
    image: "/greek.png",
  },

  // ── Food — Handhelds (w/ fries) ──
  {
    id: "buffalo-sandwich",
    name: "Buffalo Sandwich",
    price: "$16.99",
    description: "",
    ingredients: ["Chicken", "Buffalo Sauce", "Bun", "Fries"],
    allergens: ["Gluten", "Dairy"],
    category: "food",
    subcategory: "Handhelds",
    image: "/buffalo-sandwich.png",
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    price: "$15.99",
    description: "",
    ingredients: ["Chicken", "Bun", "Lettuce", "Tomato", "Fries"],
    allergens: ["Gluten"],
    category: "food",
    subcategory: "Handhelds",
    image: "/chicken-burger.png",
  },
  {
    id: "beef-burger",
    name: "Beef Burger",
    price: "$16.99",
    description: "",
    ingredients: ["Beef Patty", "Bun", "Cheese", "Fries"],
    allergens: ["Gluten", "Dairy"],
    category: "food",
    subcategory: "Handhelds",
    image: "/beef-burger.png",
  },
  {
    id: "club-wrap",
    name: "Club Wrap",
    price: "$14.99",
    description: "",
    ingredients: ["Chicken", "Beef bacon", "Wrap", "Lettuce", "Fries"],
    allergens: ["Gluten"],
    category: "food",
    subcategory: "Handhelds",
    image: "/club-wrap.png",
  },

  // ── Desserts ──
  {
    id: "cheesecake",
    name: "Cheesecake",
    price: "$11.99",
    description: "Velvety New York–style cheesecake on a buttery graham crust. Choose strawberry, vanilla, or chocolate drizzle.",
    ingredients: ["Cream Cheese", "Graham Crust", "Drizzle"],
    allergens: ["Dairy", "Gluten", "Egg"],
    category: "desserts",
    subcategory: "Modern",
    image: "/cheesecake.png",
  },
];

/* ─── Groups ─── */
const drinkGroups: { label: string; sub: string[] }[] = [
  { label: "Pops & Bottles", sub: ["Soft Drinks", "Energy Drink", "Bottled"] },
  { label: "Teas",           sub: ["Tea"] },
];

const foodGroups: { label: string; sub: string[] }[] = [
  { label: "Apps",      sub: ["Apps"]      },
  { label: "Salads",    sub: ["Salads"]    },
  { label: "Handhelds", sub: ["Handhelds"] },
];

const categories = [
  { id: "drinks",   name: "Drinks"   },
  { id: "food",     name: "Food"     },
  { id: "desserts", name: "Desserts" },
];

/* ─── Variants ─── */
const pageFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35 } },
  exit:    { opacity: 0, transition: { duration: 0.2  } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: {
      duration: 0.55,
      delay: Math.min(i * 0.07, 0.45),
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

/* ─── Section heading ─── */
function SectionHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-5 mb-8">
      <h2 className="font-playfair text-2xl sm:text-3xl font-light text-[var(--cream)] shrink-0">
        {label}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-[var(--gold)]/20 to-transparent" />
    </div>
  );
}

/* ─── Food Card (image-forward) ─── */
function FoodCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 280, damping: 22 } }}
      className="group relative border border-[var(--border)] rounded-2xl bg-[var(--bg-card)] hover:border-[var(--border-hover)] overflow-hidden flex flex-col"
    >
      {/* ── Image ── */}
      <div className="relative h-56 sm:h-64 overflow-hidden shrink-0 bg-gradient-to-br from-[var(--bg)] to-[var(--bg-card)]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <span className="font-playfair text-2xl sm:text-3xl text-center text-[var(--gold)]/35 leading-snug">
              {item.name}
            </span>
          </div>
        )}
        {/* Deep gradient to bleed into card bg */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/30 to-transparent" />

        {/* Popular badge */}
        {item.isPopular && (
          <div className="absolute top-4 left-4 text-[10px] tracking-[0.22em] text-[var(--gold)] uppercase border border-[var(--gold)]/40 bg-[var(--bg)]/75 backdrop-blur-sm rounded-full px-3 py-1">
            Popular
          </div>
        )}

        {/* Price overlaid on image bottom-right */}
        <div className="absolute bottom-4 right-4">
          <span className="font-playfair text-xl text-[var(--gold)] drop-shadow-lg">
            {item.price}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col gap-3 px-6 pt-4 pb-6 sm:px-7 sm:pb-7 flex-1">
        <h3 className="font-playfair text-xl sm:text-2xl font-light text-[var(--cream)] leading-snug">
          {item.name}
        </h3>

        {item.description.trim() && (
          <p className="text-[var(--cream-muted)] text-sm leading-relaxed flex-1">
            {item.description}
          </p>
        )}

        {/* Ingredient chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.ingredients.slice(0, 4).map((ing) => (
            <span
              key={ing}
              className="text-[11px] text-[var(--cream-muted)] border border-[var(--border)] rounded-full px-2.5 py-0.5 group-hover:border-[var(--gold)]/20 transition-colors duration-300"
            >
              {ing}
            </span>
          ))}
        </div>

        {/* Allergens */}
        {item.allergens.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.allergens.map((a) => (
              <span
                key={a}
                className="text-[11px] text-amber-300/70 border border-amber-400/15 rounded-full px-2.5 py-0.5"
              >
                Contains {a}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom gold shimmer line — appears on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/0 to-transparent group-hover:via-[var(--gold)]/40 transition-all duration-500" />
    </motion.div>
  );
}

/* ─── Drinks / Desserts Card (text-only) ─── */
function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 280, damping: 22 } }}
      className="group relative border border-[var(--border)] rounded-2xl bg-[var(--bg-card)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-h)] transition-colors duration-400 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/0 to-transparent group-hover:via-[var(--gold)]/45 transition-all duration-500" />

      <div className="p-7 sm:p-8 flex flex-col gap-3 h-full">
        <div className="flex items-start justify-between gap-2">
          <span className="font-playfair text-[var(--gold)] text-xl font-light">{item.price}</span>
          {item.isPopular && (
            <span className="text-[10px] tracking-[0.22em] text-[var(--gold)] uppercase border border-[var(--gold)]/28 rounded-full px-2.5 py-0.5 shrink-0">
              Popular
            </span>
          )}
        </div>

        <h3 className="font-playfair text-lg sm:text-xl font-light text-[var(--cream)] leading-snug">
          {item.name}
        </h3>

        {item.description.trim() ? (
          <p className="text-[var(--cream-muted)] text-sm leading-relaxed flex-1">
            {item.description}
          </p>
        ) : null}

        {item.ingredients.length > 0 && item.ingredients[0] !== item.name && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.ingredients.slice(0, 3).map((ing) => (
              <span key={ing} className="text-[11px] text-[var(--cream-muted)] border border-[var(--border)] rounded-full px-2.5 py-0.5">
                {ing}
              </span>
            ))}
            {item.ingredients.length > 3 && (
              <span className="text-[11px] text-[var(--cream-muted)] border border-[var(--border)] rounded-full px-2.5 py-0.5">
                +{item.ingredients.length - 3}
              </span>
            )}
          </div>
        )}

        {item.allergens.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.allergens.map((a) => (
              <span key={a} className="text-[11px] text-amber-300/70 border border-amber-400/15 rounded-full px-2.5 py-0.5">
                Contains {a}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Page ─── */
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("food");
  const handleCategory = useCallback((id: string) => setActiveCategory(id), []);

  const filteredItems = menuItems.filter((i) => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--cream)] overflow-x-hidden">

      {/* Ambient background */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        <div className="orb-a absolute top-[-18%] right-[-12%] w-[580px] h-[580px] rounded-full blur-[120px] bg-[var(--gold)]/4" />
        <div className="orb-b absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] bg-[var(--terracotta)]/5" />
      </div>

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pt-16 pb-10 px-6 text-center"
      >
        <motion.a
          href="/"
          whileHover={{ x: -3 }}
          className="inline-flex items-center gap-2 text-[var(--cream-muted)] hover:text-[var(--gold)] text-sm transition-colors duration-300 mb-10"
        >
          ← Back to Home
        </motion.a>

        <p className="text-[var(--gold)] text-[11px] tracking-[0.38em] uppercase mb-5">
          Hayati Lounge
        </p>
        <h1 className="font-playfair text-5xl sm:text-7xl md:text-8xl font-light text-[var(--cream)] mb-5">
          Our Menu
        </h1>
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent mx-auto mb-5" />
        <p className="text-[var(--cream-muted)] text-base max-w-md mx-auto leading-relaxed">
          Each item crafted with care, the finest ingredients, and a passion for exceptional taste.
        </p>
        <div className="mt-6 flex justify-center">
          <HalalBadge />
        </div>
      </motion.div>

      {/* ── Sticky Category Nav ── */}
      <div className="sticky top-0 z-40 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleCategory(cat.id)}
              className={`relative px-7 sm:px-10 py-4 text-sm tracking-[0.18em] uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? "text-[var(--gold)]"
                  : "text-[var(--cream-muted)] hover:text-[var(--cream)]"
              }`}
            >
              {cat.name}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="category-underline"
                  className="absolute bottom-0 left-6 sm:left-10 right-6 sm:right-10 h-px bg-[var(--gold)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Menu Content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 pb-24">
        <AnimatePresence mode="wait">

          {/* Drinks */}
          {activeCategory === "drinks" && (
            <motion.div key="drinks" {...pageFade} className="space-y-14">
              {drinkGroups.map((group) => {
                const items = filteredItems.filter((item) => group.sub.includes(item.subcategory));
                if (!items.length) return null;
                return (
                  <div key={group.label}>
                    <SectionHeading label={group.label} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {items.map((item, idx) => (
                        <MenuCard key={item.id} item={item} index={idx} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* Food */}
          {activeCategory === "food" && (
            <motion.div key="food" {...pageFade} className="space-y-14">
              {foodGroups.map((group) => {
                const items = filteredItems.filter((item) => group.sub.includes(item.subcategory));
                if (!items.length) return null;
                return (
                  <div key={group.label}>
                    <SectionHeading label={group.label} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {items.map((item, idx) => (
                        <FoodCard key={item.id} item={item} index={idx} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* Desserts */}
          {activeCategory === "desserts" && (
            <motion.div key="desserts" {...pageFade}>
              <SectionHeading label="Desserts" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, idx) =>
                  item.image ? (
                    <FoodCard key={item.id} item={item} index={idx} />
                  ) : (
                    <MenuCard key={item.id} item={item} index={idx} />
                  )
                )}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-[var(--gold)]/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link href="/" className="font-playfair text-[var(--cream-muted)] text-sm italic hover:text-[var(--gold)] transition-colors duration-300">
            Hayati Lounge
          </Link>
          <a
            href="https://instagram.com/hayatilounge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--cream-muted)] hover:text-[var(--gold)] text-sm transition-colors duration-300"
          >
            <SiInstagram />
            @hayatilounge
          </a>
          <p className="text-[var(--cream-muted)] text-xs">
            &copy; {new Date().getFullYear()} Hayati Lounge
          </p>
        </div>
      </footer>
    </div>
  );
}
