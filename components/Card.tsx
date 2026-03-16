import { data } from "@/store/data";

export default function Card() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-100 py-4 gap-4 mx-auto">
      {data.card.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="card bg-(--accent-3) rounded-lg p-6 flex flex-col items-center gap-2 hover:scale-105 "
          >
            <Icon size={60} className=""/>
            <h2 className=" md:text-[0.6rem] xl:text-xl  capitalize max-w-[10ch] text-center  ">
              {item.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
