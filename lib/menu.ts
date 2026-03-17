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
    title: "Wings",
    items: [
      {
        name: "Wings",
        description: "3 jumbo whole wings (drum and flat together) — seasoned and fried to perfection.",
        price: "$14.00",
        emoji: "🍗",
      },
      {
        name: "Mango Habanero Wings",
        description: "3 jumbo whole wings tossed in sweet, fiery mango habanero sauce.",
        price: "$14.00",
        emoji: "🥭",
      },
      {
        name: "Bourbon Wings",
        description: "3 jumbo whole wings tossed in rich, smoky bourbon sauce.",
        price: "$14.00",
        emoji: "🥃",
      },
      {
        name: "Buffalo Wings",
        description: "3 jumbo whole wings tossed in classic buffalo sauce.",
        price: "$14.00",
        emoji: "🔥",
      },
      {
        name: "BBQ Wings",
        description: "3 jumbo whole wings tossed in bold, tangy BBQ sauce.",
        price: "$14.00",
        emoji: "🍖",
      },
    ],
  },
  {
    title: "Wing Combos",
    items: [
      {
        name: "Flavored Wings & Fries",
        description: "3 jumbo whole wings tossed in your choice of sauce (Bourbon, Buffalo, BBQ, or Mango Habanero), served with crispy golden fries.",
        price: "$17.00",
        emoji: "🍗🍟",
      },
      {
        name: "Wings & Fries",
        description: "3 jumbo whole savory naked wings served with crispy golden fries.",
        price: "$15.00",
        emoji: "🍗🍟",
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
