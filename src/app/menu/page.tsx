"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SiInstagram } from "react-icons/si";

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
  { id: "coca-cola",  name: "Coca Cola",  price: "$2.99",  description: "Classic Coca Cola served ice cold.",             ingredients: ["Coca Cola"],                        allergens: [], category: "drinks", subcategory: "Soft Drinks" },
  { id: "coke-zero", name: "Coke Zero",  price: "$2.99",  description: "Coke Zero Sugar, served ice cold.",               ingredients: ["Coke Zero"],                        allergens: [], category: "drinks", subcategory: "Soft Drinks" },
  { id: "gingerale", name: "Ginger Ale", price: "$2.99",  description: "Refreshing ginger ale, perfectly chilled.",       ingredients: ["Ginger Ale"],                       allergens: [], category: "drinks", subcategory: "Soft Drinks" },
  { id: "sprite",    name: "Sprite",     price: "$2.99",  description: "Lemon-lime soda served ice cold.",                 ingredients: ["Sprite"],                           allergens: [], category: "drinks", subcategory: "Soft Drinks" },
  { id: "fuze",      name: "Fuze",       price: "$2.99",  description: "Fuze iced tea, chilled and refreshing.",           ingredients: ["Fuze Iced Tea"],                    allergens: [], category: "drinks", subcategory: "Soft Drinks" },
  // ── Energy ──
  { id: "red-bull",  name: "Red Bull",   price: "$4.99",  description: "Red Bull energy drink, served ice cold.",          ingredients: ["Red Bull"],                         allergens: [], category: "drinks", subcategory: "Energy Drink" },
  // ── Tea ──
  { id: "green-tea", name: "Green Tea",  price: "$2.99",  description: "Hot green tea, brewed fresh.",                     ingredients: ["Green Tea", "Water"],               allergens: [], category: "drinks", subcategory: "Tea" },
  { id: "black-tea", name: "Black Tea",  price: "$2.99",  description: "Hot black tea, rich and smooth.",                  ingredients: ["Black Tea", "Water"],               allergens: [], category: "drinks", subcategory: "Tea" },
  { id: "tea-pot",   name: "Tea Pot",    price: "$10.99", description: "A full pot of tea — perfect to share.",            ingredients: ["Tea Leaves", "Water"],              allergens: [], category: "drinks", subcategory: "Tea" },
  // ── Mocktails ──
  { id: "cairo-breeze", name: "Cairo Breeze", price: "$10.99", description: "A signature blend that evokes warm evenings and cool breezes.", ingredients: ["Mocktail Blend"], allergens: [], category: "drinks", subcategory: "Mocktails", isPopular: true },
  { id: "moonlit",      name: "Moonlit",      price: "$10.99", description: "A mysterious, delicate mocktail with subtle floral notes.",      ingredients: ["Mocktail Blend"], allergens: [], category: "drinks", subcategory: "Mocktails", isPopular: true },
  // ── Frozen ──
  { id: "pina-colada",  name: "Piña Colada",  price: "$10.99", description: "Frozen, non-alcoholic piña colada — tropical and refreshing.", ingredients: ["Pineapple", "Coconut Cream", "Ice"], allergens: [], category: "drinks", subcategory: "Frozen Drinks" },
  { id: "daiquiri",     name: "Daiquiri",      price: "$10.99", description: "Frozen fruit daiquiri — smooth, icy, and vibrant.",             ingredients: ["Fruit", "Syrup", "Ice"],             allergens: [], category: "drinks", subcategory: "Frozen Drinks" },
  { id: "cherry-chill", name: "Cherry Chill",  price: "$10.99", description: "Frozen cherry drink with a subtle sweet-tart finish.",          ingredients: ["Cherry", "Syrup", "Ice"],            allergens: [], category: "drinks", subcategory: "Frozen Drinks" },

  // ── Food — Apps ──
  {
    id: "fries",
    name: "Fries",
    price: "$5.99",
    description: "Golden, hand-cut fries seasoned with sea salt — crispy and perfectly golden.",
    ingredients: ["Potatoes", "Sea Salt", "House Spice"],
    allergens: [],
    category: "food",
    subcategory: "Apps",
    image: "/frenchfries.png",
  },
  {
    id: "truffle-fries",
    name: "Truffle Fries",
    price: "$9.99",
    description: "Crispy fries tossed in truffle oil and finished with shaved parmesan and fresh herbs.",
    ingredients: ["Potatoes", "Truffle Oil", "Parmesan", "Fresh Herbs"],
    allergens: ["Dairy"],
    category: "food",
    subcategory: "Apps",
    image: "/truffle.png",
    isPopular: true,
  },
  {
    id: "shish-kabob-fries",
    name: "Shish Kabob w/ Fries",
    price: "$15.99",
    description: "Tender, seasoned shish kabob skewers served alongside crispy golden fries.",
    ingredients: ["Seasoned Meat", "House Spice", "Fries"],
    allergens: [],
    category: "food",
    subcategory: "Apps",
    image: "/shishkebab.png",
  },
  {
    id: "garlic-shrimp-app",
    name: "Garlic Shrimp",
    price: "$9.99",
    description: "Plump shrimp sautéed in rich garlic butter with a hint of lemon and fresh parsley.",
    ingredients: ["Tiger Shrimp", "Garlic Butter", "Lemon", "Parsley"],
    allergens: ["Shellfish", "Dairy"],
    category: "food",
    subcategory: "Apps",
    image: "/garlicshrimp.png",
    isPopular: true,
  },
  {
    id: "beef-tacos",
    name: "Beef Tacos",
    price: "$15.99",
    description: "Three soft-shell tacos filled with seasoned beef, pico de gallo, and house crema.",
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
    description: "Three soft-shell tacos with seasoned shrimp, slaw, and a zesty lime crema.",
    ingredients: ["Shrimp", "Soft Tortilla", "Slaw", "Lime Crema"],
    allergens: ["Shellfish", "Gluten"],
    category: "food",
    subcategory: "Apps",
    image: "/tacos.png",
  },
  {
    id: "sliders",
    name: "Sliders",
    price: "$15.99",
    description: "Three juicy sliders on toasted brioche buns with caramelised onions and house aioli.",
    ingredients: ["Beef Patty", "Brioche Bun", "Caramelised Onion", "House Aioli"],
    allergens: ["Gluten", "Dairy"],
    category: "food",
    subcategory: "Apps",
    image: "/sliders.png",
  },
  {
    id: "chicken-wings-fries",
    name: "Chicken Wings w/ Fries",
    price: "$18.99",
    description: "Crispy golden chicken wings tossed in your choice of sauce, served with a side of hand-cut fries.",
    ingredients: ["Chicken Wings", "House Spice Rub", "Choice of Sauce", "Fries"],
    allergens: ["Gluten"],
    category: "food",
    subcategory: "Apps",
    image: "/wingsfries.png",
  },

  // ── Food — Salads ──
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    price: "$10.99",
    description: "Crisp romaine, shaved parmesan, house-made croutons, and our signature Caesar dressing. Add chicken +$4.99 · Add shrimp +$5.99",
    ingredients: ["Romaine", "Parmesan", "Croutons", "Caesar Dressing"],
    allergens: ["Gluten", "Dairy", "Egg"],
    category: "food",
    subcategory: "Salads",
    image: "/cesar.png",
  },
  {
    id: "greek-salad",
    name: "Greek Salad",
    price: "$11.99",
    description: "Sun-ripened tomatoes, cucumber, kalamata olives, red onion, and creamy feta with house vinaigrette.",
    ingredients: ["Tomato", "Cucumber", "Kalamata Olives", "Feta", "Red Onion"],
    allergens: ["Dairy"],
    category: "food",
    subcategory: "Salads",
    image: "/greek.png",
  },

  // ── Food — Wraps ──
  {
    id: "beef-wrap",
    name: "Beef Wrap w/ Fries",
    price: "$14.99",
    description: "Seasoned beef in a warm toasted wrap with fresh vegetables and house garlic sauce, served with crispy fries.",
    ingredients: ["Seasoned Beef", "Wrap", "Garlic Sauce", "Fresh Veg", "Fries"],
    allergens: ["Gluten"],
    category: "food",
    subcategory: "Wraps",
    image: "/beefwrap.png",
  },
  {
    id: "shawarma-wrap",
    name: "Chicken Shawarma Wrap w/ Fries",
    price: "$13.99",
    description: "Slow-roasted spiced chicken in a warm wrap with garlic sauce, pickles, and fresh tomato, served with fries.",
    ingredients: ["Spiced Chicken", "Flatbread", "Garlic Sauce", "Pickles", "Fries"],
    allergens: ["Gluten"],
    category: "food",
    subcategory: "Wraps",
    image: "/chickenshawarma.png",
    isPopular: true,
  },

  // ── Food — Mains ──
  {
    id: "salmon",
    name: "Salmon",
    price: "$25.00",
    description: "Pan-seared Atlantic salmon served with mash potato or rice and a fresh side salad.",
    ingredients: ["Atlantic Salmon", "Mash Potato or Rice", "Side Salad"],
    allergens: ["Fish"],
    category: "food",
    subcategory: "Mains",
    image: "/salmon.png",
    isPopular: true,
  },
  {
    id: "short-ribs",
    name: "Beef Short Ribs",
    price: "$30.00",
    description: "Slow-braised beef short ribs, fall-off-the-bone tender, served with mash potato, rice, or fries.",
    ingredients: ["Beef Short Ribs", "Mash Potato or Rice or Fries"],
    allergens: [],
    category: "food",
    subcategory: "Mains",
    image: "/ribs.png",
    isPopular: true,
  },
  {
    id: "mix-kabob",
    name: "Mix Kabob Plate",
    price: "$26.99",
    description: "A generous mix kabob plate served with fragrant rice and a fresh side salad.",
    ingredients: ["Mixed Kabob", "Basmati Rice", "Side Salad"],
    allergens: [],
    category: "food",
    subcategory: "Mains",
    image: "/mixplate.png",
  },

  // ── Desserts ──
  {
    id: "creme-brulee",
    name: "Crème Brûlée",
    price: "$11.99",
    description: "Classic French custard with a perfectly caramelised sugar crust, cracked tableside for the full experience.",
    ingredients: ["Egg Yolk", "Heavy Cream", "Vanilla Bean", "Caramelised Sugar"],
    allergens: ["Dairy", "Egg"],
    category: "desserts",
    subcategory: "Modern",
    image: "/brulee.png",
    isPopular: true,
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    price: "$10.99",
    description: "Velvety New York-style cheesecake on a buttery graham crust, topped with a fresh berry compote.",
    ingredients: ["Cream Cheese", "Graham Crust", "Berry Compote", "Vanilla"],
    allergens: ["Dairy", "Gluten", "Egg"],
    category: "desserts",
    subcategory: "Modern",
    image: "/cheesecake.png",
  },
];

/* ─── Groups ─── */
const drinkGroups: { label: string; sub: string[] }[] = [
  { label: "Pops",          sub: ["Soft Drinks", "Energy Drink"] },
  { label: "Teas",          sub: ["Tea"] },
  { label: "Mocktails",     sub: ["Mocktails"] },
  { label: "Frozen Drinks", sub: ["Frozen Drinks"] },
];

const foodGroups: { label: string; sub: string[] }[] = [
  { label: "Apps",   sub: ["Apps"]   },
  { label: "Salads", sub: ["Salads"] },
  { label: "Wraps",  sub: ["Wraps"]  },
  { label: "Mains",  sub: ["Mains"]  },
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
      <div className="relative h-56 sm:h-64 overflow-hidden shrink-0">
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
          />
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

        <p className="text-[var(--cream-muted)] text-sm leading-relaxed flex-1">
          {item.description}
        </p>

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

        <p className="text-[var(--cream-muted)] text-sm leading-relaxed line-clamp-3 flex-1">
          {item.description}
        </p>

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
  const [activeCategory, setActiveCategory] = useState<string>("drinks");
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
