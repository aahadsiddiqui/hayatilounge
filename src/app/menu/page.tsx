"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiStar, FiThermometer } from "react-icons/fi";

interface MenuItem {
  id: string;
  name: string;
  emoji: string;
  price: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  category: "drinks" | "desserts" | "food";
  subcategory: string;
  preparationTime?: string;
  temperature?: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  color: string;
  gradient: string;
}

const menuItems: MenuItem[] = [
  // Drinks - Soft Drinks
  {
    id: "coca-cola",
    name: "Coca Cola",
    emoji: "🥤",
    price: "$2.99",
    description: "Classic Coca Cola served chilled.",
    ingredients: ["Coca Cola"],
    allergens: [],
    category: "drinks",
    subcategory: "Soft Drinks",
    color: "var(--lion)",
    gradient: "from-[var(--lion)] to-[var(--rust)]"
  },
  {
    id: "coke-zero",
    name: "Coke Zero",
    emoji: "🥤",
    price: "$2.99",
    description: "Coke Zero Sugar served chilled.",
    ingredients: ["Coke Zero"],
    allergens: [],
    category: "drinks",
    subcategory: "Soft Drinks",
    color: "var(--lion)",
    gradient: "from-[var(--lion)] to-[var(--rust)]"
  },
  {
    id: "gingerale",
    name: "Gingerale",
    emoji: "🥤",
    price: "$2.99",
    description: "Refreshing gingerale served chilled.",
    ingredients: ["Gingerale"],
    allergens: [],
    category: "drinks",
    subcategory: "Soft Drinks",
    color: "var(--lion)",
    gradient: "from-[var(--lion)] to-[var(--rust)]"
  },
  {
    id: "sprite",
    name: "Sprite",
    emoji: "🥤",
    price: "$2.99",
    description: "Sprite lemon-lime soda served chilled.",
    ingredients: ["Sprite"],
    allergens: [],
    category: "drinks",
    subcategory: "Soft Drinks",
    color: "var(--lion)",
    gradient: "from-[var(--lion)] to-[var(--rust)]"
  },
  {
    id: "fuze",
    name: "Fuze",
    emoji: "🥤",
    price: "$2.99",
    description: "Fuze iced tea served chilled.",
    ingredients: ["Fuze"],
    allergens: [],
    category: "drinks",
    subcategory: "Soft Drinks",
    color: "var(--lion)",
    gradient: "from-[var(--lion)] to-[var(--rust)]"
  },
  // Drinks - Energy
  {
    id: "red-bull",
    name: "Red Bull",
    emoji: "🧃",
    price: "$4.99",
    description: "Red Bull energy drink served chilled.",
    ingredients: ["Red Bull"],
    allergens: [],
    category: "drinks",
    subcategory: "Energy Drink",
    color: "var(--prussian-blue)",
    gradient: "from-[var(--prussian-blue)] to-[var(--lion)]"
  },
  // Drinks - Teas
  {
    id: "green-tea",
    name: "Green Tea",
    emoji: "🍵",
    price: "$2.99",
    description: "Hot green tea.",
    ingredients: ["Green tea leaves", "Hot water"],
    allergens: [],
    category: "drinks",
    subcategory: "Tea",
    color: "var(--kobicha)",
    gradient: "from-[var(--kobicha)] to-[var(--lion)]"
  },
  {
    id: "black-tea",
    name: "Black Tea",
    emoji: "🍵",
    price: "$2.99",
    description: "Hot black tea.",
    ingredients: ["Black tea leaves", "Hot water"],
    allergens: [],
    category: "drinks",
    subcategory: "Tea",
    color: "var(--kobicha)",
    gradient: "from-[var(--kobicha)] to-[var(--lion)]"
  },
  {
    id: "tea-pot",
    name: "Tea Pot",
    emoji: "🫖",
    price: "$10.99",
    description: "A pot of tea to share.",
    ingredients: ["Tea leaves", "Hot water"],
    allergens: [],
    category: "drinks",
    subcategory: "Tea",
    color: "var(--kobicha)",
    gradient: "from-[var(--kobicha)] to-[var(--lion)]"
  },
  // Drinks - Mocktails
  {
    id: "cairo-breeze",
    name: "Cairo Breeze",
    emoji: "🍸",
    price: "$10.99",
    description: "Signature mocktail: Cairo Breeze.",
    ingredients: ["Mocktail blend"],
    allergens: [],
    category: "drinks",
    subcategory: "Mocktails",
    color: "var(--rust)",
    gradient: "from-[var(--rust)] to-[var(--lion)]"
  },
  {
    id: "moonlit",
    name: "Moonlit",
    emoji: "🍸",
    price: "$10.99",
    description: "Signature mocktail: Moonlit.",
    ingredients: ["Mocktail blend"],
    allergens: [],
    category: "drinks",
    subcategory: "Mocktails",
    color: "var(--rust)",
    gradient: "from-[var(--rust)] to-[var(--lion)]"
  },
  // Drinks - Frozen
  {
    id: "pina-colada",
    name: "Pina Colada",
    emoji: "🍹",
    price: "$10.99",
    description: "Frozen Pina Colada (non-alcoholic).",
    ingredients: ["Pineapple", "Coconut cream", "Ice"],
    allergens: [],
    category: "drinks",
    subcategory: "Frozen Drinks",
    color: "var(--prussian-blue)",
    gradient: "from-[var(--prussian-blue)] to-[var(--lion)]"
  },
  {
    id: "daiquiri",
    name: "Daiquiri",
    emoji: "🍹",
    price: "$10.99",
    description: "Frozen Daiquiri (non-alcoholic).",
    ingredients: ["Fruit", "Ice", "Syrup"],
    allergens: [],
    category: "drinks",
    subcategory: "Frozen Drinks",
    color: "var(--prussian-blue)",
    gradient: "from-[var(--prussian-blue)] to-[var(--lion)]"
  },
  {
    id: "cherry-chill",
    name: "Cherry Chill",
    emoji: "🍒",
    price: "$10.99",
    description: "Frozen cherry drink.",
    ingredients: ["Cherry", "Ice", "Syrup"],
    allergens: [],
    category: "drinks",
    subcategory: "Frozen Drinks",
    color: "var(--prussian-blue)",
    gradient: "from-[var(--prussian-blue)] to-[var(--lion)]"
  },

  // Desserts
  {
    id: "pudding",
    name: "Pudding (Lotus, Blueberry, Tiramisu)",
    emoji: "🍮",
    price: "$10.00",
    description: "Creamy pudding available in Lotus, Blueberry, or Tiramisu flavors. Please specify your choice when ordering!",
    ingredients: ["Milk", "Sugar", "Cream", "Lotus/Berry/Tiramisu toppings"],
    allergens: ["Dairy"],
    category: "desserts",
    subcategory: "Modern",
    color: "var(--kobicha)",
    gradient: "from-[var(--kobicha)] to-[var(--rust)]"
  },
];

const categories = [
  { id: "drinks", name: "Drinks", emoji: "🥤", color: "var(--lion)" },
  { id: "food", name: "Food", emoji: "🍽️", color: "var(--rust)" },
  { id: "desserts", name: "Desserts", emoji: "🍰", color: "var(--kobicha)" }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("drinks");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Grouping for drinks
  const drinkGroups = [
    {
      label: "Pops",
      subcategories: ["Soft Drinks", "Energy Drink"],
    },
    {
      label: "Teas",
      subcategories: ["Tea"],
    },
    {
      label: "Mocktails",
      subcategories: ["Mocktails"],
    },
    {
      label: "Frozen Drinks",
      subcategories: ["Frozen Drinks"],
    },
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[var(--platinum)] relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[50vw] h-[50vw] bg-gradient-to-br from-[var(--rust)] to-[var(--kobicha)] opacity-10 rounded-full blur-3xl animate-float1 top-[-15vw] left-[-15vw]" />
        <div className="absolute w-[40vw] h-[40vw] bg-gradient-to-br from-[var(--lion)] to-[var(--rust)] opacity-10 rounded-full blur-3xl animate-float2 bottom-[-10vw] right-[-10vw]" />
        <div className="absolute w-[30vw] h-[30vw] bg-gradient-to-br from-[var(--prussian-blue)] to-[var(--lion)] opacity-8 rounded-full blur-2xl animate-float3 top-[20vh] left-[80vw]" />
        <div className="absolute w-[25vw] h-[25vw] bg-gradient-to-br from-[var(--kobicha)] to-[var(--prussian-blue)] opacity-10 rounded-full blur-2xl animate-float4 top-[70vh] left-[5vw]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-5">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--lion)] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center pt-16 pb-8 px-4"
      >
        <h1 className="text-6xl md:text-7xl font-black mb-4 text-[var(--prussian-blue)] drop-shadow-lg tracking-tight">
          Our Menu
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-[var(--lion)] via-[var(--kobicha)] to-[var(--rust)] rounded-full mx-auto mb-4" />
        <p className="text-xl text-[var(--kobicha)] max-w-3xl mx-auto">
          Discover our carefully curated selection of drinks, food, and desserts - each crafted with passion and the finest ingredients
        </p>
      </motion.div>

      {/* Category Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.id === 'drinks' ? 'from-[var(--lion)] to-[var(--rust)]' : 
                     category.id === 'food' ? 'from-[var(--rust)] to-[var(--kobicha)]' : 
                     'from-[var(--kobicha)] to-[var(--prussian-blue)]'} text-white scale-105`
                  : 'bg-white/80 backdrop-blur-sm text-[var(--prussian-blue)] hover:bg-white'
              }`}
            >
              <span className="text-2xl">{category.emoji}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {activeCategory === "drinks" ? (
          <div className="space-y-12">
            {drinkGroups.map((group) => {
              const groupItems = filteredItems.filter(item => group.subcategories.includes(item.subcategory));
              if (groupItems.length === 0) return null;
              return (
                <div key={group.label}>
                  <h2 className="text-2xl font-bold mb-6 text-[var(--prussian-blue)] tracking-wide">{group.label}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          y: -8,
                          scale: 1.02,
                          transition: { duration: 0.3 }
                        }}
                        className="relative group"
                      >
                        <motion.div
                          className={`relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300${
                            expandedItems.has(item.id) ? ' ring-4 ring-[var(--lion)] ring-opacity-50' : ''
                          }`}
                        >
                          {/* Card Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90`} />
                          
                          {/* Content */}
                          <div className="relative p-6 sm:p-8 text-white flex flex-col min-h-[220px] sm:min-h-[260px]">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-3xl md:text-4xl">{item.emoji}</span>
                              <motion.span 
                                className="text-xl font-bold"
                              >
                                {item.price}
                              </motion.span>
                            </div>
                            
                            <h3 className="text-lg xs:text-xl md:text-2xl font-bold mb-2 leading-tight">{item.name}</h3>
                            
                            <p className="text-white/90 text-sm leading-relaxed mb-3 line-clamp-3">
                              {item.description}
                            </p>

                            {/* Quick Info */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {/* Removed preparation time */}
                              {item.temperature && (
                                <div className="flex items-center gap-1 bg-white/20 rounded-full px-2 py-1 text-xs backdrop-blur-sm">
                                  <FiThermometer className="w-3 h-3" />
                                  {item.temperature}
                                </div>
                              )}
                              {item.isVegetarian && (
                                <div className="bg-green-500/30 text-green-100 rounded-full px-2 py-1 text-xs font-medium">
                                  Veg
                                </div>
                              )}
                              {item.isSpicy && (
                                <div className="bg-red-500/30 text-red-100 rounded-full px-2 py-1 text-xs font-medium">
                                  Spicy
                                </div>
                              )}
                            </div>

                            {/* Ingredients Preview */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {item.ingredients.slice(0, 2).map((ingredient, idx) => (
                                <span 
                                  key={idx}
                                  className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm"
                                >
                                  {ingredient}
                                </span>
                              ))}
                              {item.ingredients.length > 2 && (
                                <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">
                                  +{item.ingredients.length - 2} more
                                </span>
                              )}
                            </div>

                            {/* Allergens */}
                            {item.allergens.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {item.allergens.slice(0, 2).map((allergen, idx) => (
                                  <span 
                                    key={idx}
                                    className="px-2 py-1 bg-red-500/30 rounded-full text-xs font-medium backdrop-blur-sm border border-red-400/50"
                                  >
                                    {allergen}
                                  </span>
                                ))}
                                {item.allergens.length > 2 && (
                                  <span className="px-2 py-1 bg-red-500/30 rounded-full text-xs font-medium backdrop-blur-sm border border-red-400/50">
                                    +{item.allergens.length - 2}
                                  </span>
                                )}
                              </div>
                            )}

                            {/* Popular Badge (moved to bottom right) */}
                            {item.isPopular && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-4 right-4 z-10"
                              >
                                <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                                  <FiStar className="w-3 h-3" />
                                  Popular
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : activeCategory === "food" ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h2 className="text-3xl font-bold text-[var(--prussian-blue)] mb-2">Food Menu</h2>
            <p className="text-xl text-[var(--kobicha)]">Coming Soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <motion.div
                  className={`relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300${
                    expandedItems.has(item.id) ? ' ring-4 ring-[var(--lion)] ring-opacity-50' : ''
                  }`}
                >
                  {/* Card Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90`} />
                  
                  {/* Content */}
                  <div className="relative p-6 sm:p-8 text-white flex flex-col min-h-[220px] sm:min-h-[260px]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl md:text-4xl">{item.emoji}</span>
                      <motion.span 
                        className="text-xl font-bold"
                      >
                        {item.price}
                      </motion.span>
                    </div>
                    
                    <h3 className="text-lg xs:text-xl md:text-2xl font-bold mb-2 leading-tight">{item.name}</h3>
                    
                    <p className="text-white/90 text-sm leading-relaxed mb-3 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Quick Info */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {/* Removed preparation time */}
                      {item.temperature && (
                        <div className="flex items-center gap-1 bg-white/20 rounded-full px-2 py-1 text-xs backdrop-blur-sm">
                          <FiThermometer className="w-3 h-3" />
                          {item.temperature}
                        </div>
                      )}
                      {item.isVegetarian && (
                        <div className="bg-green-500/30 text-green-100 rounded-full px-2 py-1 text-xs font-medium">
                          Veg
                        </div>
                      )}
                      {item.isSpicy && (
                        <div className="bg-red-500/30 text-red-100 rounded-full px-2 py-1 text-xs font-medium">
                          Spicy
                        </div>
                      )}
                    </div>

                    {/* Ingredients Preview */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.ingredients.slice(0, 2).map((ingredient, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm"
                        >
                          {ingredient}
                        </span>
                      ))}
                      {item.ingredients.length > 2 && (
                        <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">
                          +{item.ingredients.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Allergens */}
                    {item.allergens.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {item.allergens.slice(0, 2).map((allergen, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-red-500/30 rounded-full text-xs font-medium backdrop-blur-sm border border-red-400/50"
                          >
                            {allergen}
                          </span>
                        ))}
                        {item.allergens.length > 2 && (
                          <span className="px-2 py-1 bg-red-500/30 rounded-full text-xs font-medium backdrop-blur-sm border border-red-400/50">
                            +{item.allergens.length - 2}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Popular Badge (moved to bottom right) */}
                    {item.isPopular && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-4 right-4 z-10"
                      >
                        <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                          <FiStar className="w-3 h-3" />
                          Popular
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold text-[var(--prussian-blue)] mb-2">No items found</h3>
            <p className="text-[var(--kobicha)]">Try adjusting your filters or selecting a different category.</p>
          </motion.div>
        )}
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center pb-8"
      >
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[var(--prussian-blue)] to-[var(--lion)] text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
        >
          <span>←</span>
          Back to Home
        </motion.a>
      </motion.div>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(40px, -40px) scale(1.15) rotate(120deg); }
          66% { transform: translate(-30px, 50px) scale(0.9) rotate(240deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-50px, 30px) scale(1.1) rotate(-120deg); }
          66% { transform: translate(30px, -40px) scale(1.2) rotate(-240deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(20px, 50px) scale(1.12) rotate(60deg); }
          66% { transform: translate(-40px, -20px) scale(0.88) rotate(120deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(35px, 25px) scale(1.18) rotate(-60deg); }
          66% { transform: translate(-25px, 35px) scale(0.82) rotate(-120deg); }
        }
        .animate-float1 { animation: float1 25s ease-in-out infinite; }
        .animate-float2 { animation: float2 30s ease-in-out infinite; }
        .animate-float3 { animation: float3 22s ease-in-out infinite; }
        .animate-float4 { animation: float4 28s ease-in-out infinite; }
        /* Mobile optimization */
        @media (max-width: 640px) {
          .grid-cols-1 > div {
            min-width: 0 !important;
            max-width: 100vw !important;
          }
          .sm\\:p-8 { padding: 1.25rem !important; }
          .sm\\:min-h-\[260px\] { min-height: 180px !important; }
          .text-lg { font-size: 1.1rem !important; }
          .md\\:text-2xl { font-size: 1.2rem !important; }
        }
      `}</style>
    </div>
  );
}