import { useState } from "react";
import ArrowLineIcon from "../icons/ArrowLineIcon";
import VerifiedIcon from "../icons/VerifiedIcon";
import HeartIcon from "../icons/HeartIcon";
import HeartFill from "../icons/HeartFill";
import useStore from "../store/store";

function Card({ image, price, description, name, notes }) {
  const { setModal } = useStore();
  const [isFav, setIsFav] = useState(false);

  const handleCurrency = (p) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(p);
  };

  const handleIsFav = () => {
    setIsFav((isFav) => !isFav);
  };

  return (
    <div className="border border-slate-100 rounded  gap-2 items-center shadow-sm w-full h-full md:max-w-96 flex flex-col pb-5 bg-white">
      <div className="overflow-hidden w-full relative">
        <img
          src="/images/1.jpeg"
          alt=""
          className="min-w-full hidden md:inline h-48 xl:h-72 object-cover object-center rounded-t hover:scale-125 transition-all duration-500"
        />
        <button className="absolute top-3 right-3 text-neutral-600">
          <HeartIcon sizes={30} />
        </button>
      </div>
      <div className="px-4 flex flex-col gap-2 grow py-5 border-b border-neutral-300 relative">
        <button
          onClick={() => handleIsFav()}
          className="absolute top-3 right-3 text-neutral-600 md:hidden"
        >
          {isFav ? (
            <span className="text-yellow-500">
              <HeartFill sizes={30} />
            </span>
          ) : (
            <span>
              <HeartIcon sizes={30} />
            </span>
          )}
        </button>
        <h1 className="text-4xl font-medium font-Bungee flex items-center gap-3">
          {name}{" "}
          <span className="text-amber-400">
            <VerifiedIcon sizes={35} />
          </span>
        </h1>
        <p className="line-clamp-2 font-medium text-yellow-600">
          {`${description}.`}
        </p>
        {/* <p>{product.image}</p> */}
        <p className="text-2xl font-semibold text-amber-800">{`${handleCurrency(
          price
        )}`}</p>
        <div className="flex items-center gap-2 flex-wrap capitalize">
          {notes &&
            notes.map((n, i) => (
              <span
                key={i}
                className="bg-amber-200 text-amber-800 min-w-fit px-5 py-1.5 rounded-full text-xs md:text-base"
              >
                {n}
              </span>
            ))}
        </div>
      </div>
      <button
        onClick={() => setModal(true)}
        className="rounded px-16 py-3 mt-3 text-lg lg:text-xl font-medium bg-amber-600 text-white hover:bg-amber-500 hover:gap-7 flex items-center gap-5 transition-all duration-300"
      >
        Armar Pedido
        <span>
          <ArrowLineIcon sizes={25} />
        </span>
      </button>
    </div>
  );
}

export default Card;
