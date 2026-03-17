export type MenuItem = {
  name: string;
  description: string;
  price: string;
  emoji: string;
  highlight?: boolean;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    title: "Empanadas",
    items: [
      {
        name: "Chicken",
        description: "Braised chicken seasoned with our family blend of herbs and spices, wrapped in a golden fried shell.",
        price: "$5.00",
        emoji: "🍗",
      },
      {
        name: "Beef",
        description: "Perfectly seasoned ground beef, slow-cooked the way abuela used to make it.",
        price: "$5.00",
        emoji: "🥩",
      },
      {
        name: "La Tanita",
        description: "Our signature — ground beef, pork chorizo, black beans, and melted cheese. The one that started it all.",
        price: "$5.00",
        emoji: "⭐",
        highlight: true,
      },
      {
        name: "Spinach & Cheese",
        description: "Fresh spinach and melted mozzarella cheese in a crispy fried shell. The vegetarian crowd-pleaser.",
        price: "$5.00",
        emoji: "🌿",
      },
    ],
  },
  {
    title: "Sides",
    items: [
      {
        name: "Crispy Fries",
        description: "Extra crispy straight-cut fries. Get them with our house-made A Tana sauce — you won't go back to ketchup.",
        price: "$5.00",
        emoji: "🍟",
      },
    ],
  },
  {
    title: "House-Made Sauces",
    items: [
      {
        name: "Chipotle Sauce",
        description: "Smoky, creamy, and just the right amount of heat.",
        price: "$0.50",
        emoji: "🫙",
      },
      {
        name: "Aji Sauce",
        description: "Our hot sauce — made from scratch with fresh ingredients and real kick.",
        price: "$0.50",
        emoji: "🌶️",
      },
      {
        name: "Cilantro Sauce",
        description: "Fresh and bright, mild enough for everyone. Perfect on everything.",
        price: "$0.50",
        emoji: "🌿",
      },
    ],
  },
];
