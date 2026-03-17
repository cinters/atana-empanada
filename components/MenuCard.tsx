import type { MenuItem } from "@/lib/menu";

type Props = {
  item: MenuItem;
};

export default function MenuCard({ item }: Props) {
  return (
    <div
      className={`relative rounded-2xl border-2 p-6 flex flex-col gap-3 transition-transform hover:-translate-y-1 ${
        item.highlight
          ? "border-gold bg-navy text-white shadow-lg shadow-gold/20"
          : "border-border bg-card-bg"
      }`}
    >
      {item.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gold text-white text-xs font-extrabold px-3 py-1 rounded-full tracking-wide uppercase whitespace-nowrap">
            ⭐ Fan Favorite
          </span>
        </div>
      )}
      <div className="text-4xl">{item.emoji}</div>
      <div>
        <h3 className={`font-black text-xl ${item.highlight ? "text-white" : "text-navy"}`}>
          {item.name}
        </h3>
        <p className={`text-sm mt-1 leading-relaxed ${item.highlight ? "text-blue-200" : "text-navy-dark/70"}`}>
          {item.description}
        </p>
      </div>
      <p className={`font-extrabold text-lg mt-auto pt-2 ${item.highlight ? "text-gold" : "text-gold"}`}>
        {item.price}
      </p>
    </div>
  );
}
