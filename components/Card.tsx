import { data } from "@/store/data";

export default function Card() {
  return (
    <div className=" grid grid-cols-3 py-10 gap-4">
      {data.card.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="card bg-(--accent-3) rounded-lg p-10 flex flex-col items-center gap-4"
          >
            <Icon size={80} />
            <h2 className="text-xl capitalize max-w-[10ch] text-center">
              {item.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
