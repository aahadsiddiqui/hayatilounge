export interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  /** Second word rendered in caps beside the script title, e.g. "Cold" + "DRINKS". */
  subtitle?: string;
  note?: string;
  items: MenuItem[];
}

export const foodMenu: MenuSection[] = [
  {
    id: "shareables",
    title: "Shareables",
    items: [
      { name: "Mediterranean Mezze Board", price: 25, description: "A curated selection of Mediterranean dips, fresh vegetables & warm pita." },
      { name: "Truffle Fries", price: 13, description: "Crispy golden fries tossed with truffle, Parmesan & fresh herbs." },
      { name: "Samyang Corn Ribs", price: 15, description: "Crispy corn ribs tossed in a bold, spicy Samyang glaze." },
      { name: "Korean Soy Garlic Wings", price: 20, description: "Crispy wings glazed in a sweet & savoury Korean soy garlic sauce, served with a side of fries or salad." },
      { name: "Birria Quesadilla", price: 25, description: "Tender birria beef and melted cheese grilled in a golden tortilla." },
      { name: "Smash Burger Sliders", price: 22, description: "Juicy smashed beef patties layered with melted cheese and house sauce, served with a side of fries or salad." },
    ],
  },
  {
    id: "handhelds",
    title: "Handhelds",
    note: "Served with your choice of fries or salad",
    items: [
      { name: "Chicken Shawarma Wrap", price: 18, description: "Seasoned chicken shawarma wrapped with fresh toppings and creamy garlic sauce." },
      { name: "Falafel Wrap", price: 14, description: "Crispy falafel wrapped with fresh vegetables, pickles and tahini sauce." },
      { name: "Pulled BBQ Chicken Sandwich", price: 24, description: "Tender pulled chicken tossed in smoky BBQ sauce and served on a toasted bun." },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      { name: "Fattoush Salad", price: 16, description: "Crisp vegetables, fresh herbs and toasted pita tossed in a tangy sumac dressing." },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Dubai Pistachio Brownie", price: 15, description: "Rich chocolate brownie layered with pistachio cream and a crunchy kunafa topping." },
      { name: "Tres Leches", price: 12, description: "Classic three-milk cake topped with whipped cream and a hint of cinnamon." },
    ],
  },
];

export const drinksMenu: MenuSection[] = [
  {
    id: "cold-drinks",
    title: "Cold",
    subtitle: "Drinks",
    items: [
      { name: "Water", price: 3 },
      { name: "Perrier", price: 5 },
      { name: "Red Bull", price: 6 },
      { name: "Barbican", price: 6 },
      { name: "Coca-Cola", price: 3 },
      { name: "Diet Coke", price: 3 },
      { name: "Coke Zero", price: 3 },
      { name: "Gingerale", price: 3 },
      { name: "Nestea", price: 3 },
      { name: "Sprite", price: 3 },
    ],
  },
  {
    id: "juices",
    title: "Juices",
    items: [
      { name: "Orange Juice", price: 8 },
      { name: "Pineapple Juice", price: 8 },
      { name: "Mango Juice", price: 9 },
    ],
  },
  {
    id: "mocktails",
    title: "Mocktails",
    items: [
      { name: "Pink Lemonade", price: 12, description: "Strawberry · Pineapple · Lime" },
      { name: "Peach Bellini", price: 12, description: "Peach · Sparkling" },
      { name: "Tropical Passion", price: 12, description: "Passion Fruit · Orange · Mango" },
      { name: "Blue Ocean", price: 12, description: "Blue Raspberry · Citrus · Lemonade with Red Bull" },
      { name: "Berry Bliss", price: 12, description: "Mixed Berries · Mint · Lemon" },
    ],
  },
  {
    id: "hot-drinks",
    title: "Hot",
    subtitle: "Drinks",
    items: [
      { name: "Tea", price: 4, description: "Black, green, mint, ginger & lemon, chamomile, peppermint" },
      { name: "Tea Pot", price: 13 },
      { name: "Coffee", price: 4 },
      { name: "Espresso", price: 4 },
      { name: "Double Espresso", price: 5 },
      { name: "Americano", price: 4 },
      { name: "Cappuccino", price: 5 },
      { name: "Latte", price: 5 },
      { name: "French Vanilla", price: 5 },
      { name: "Hot Chocolate", price: 5 },
      { name: "Karak Chai", price: 6 },
      { name: "Saffron Tea", price: 7 },
    ],
  },
  {
    id: "iced-coffee",
    title: "Iced",
    subtitle: "Coffee",
    items: [
      { name: "Iced Coffee", price: 5 },
      { name: "Iced Americano", price: 5 },
      { name: "Iced Cappuccino", price: 6 },
      { name: "Iced Latte", price: 6 },
      { name: "Iced French Vanilla", price: 6 },
    ],
  },
];

export function findSection(sections: MenuSection[], id: string): MenuSection {
  const section = sections.find((s) => s.id === id);
  if (!section) throw new Error(`Unknown menu section: ${id}`);
  return section;
}
