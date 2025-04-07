import { useState } from "react";
import ArrowLineIcon from "../icons/ArrowLineIcon";
import VerifiedIcon from "../icons/VerifiedIcon";
import HeartIcon from "../icons/HeartIcon";
import HeartFill from "../icons/HeartFill";
import useStore from "../store/store";

function Card({ image, price, description, name, notes }) {
  const { setModal, setProduct } = useStore();
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

  const updateProduct = () => {
    setModal(true);
    setProduct({
      price,
      description,
      name,
      notes,
      image,
    });
  };

  return (
    <div
      data-aos="fade-up"
      className="border-2 border-orange-100 rounded  gap-2 items-center shadow-sm w-full h-full md:max-w-96 flex flex-col pb-5 bg-white max-h-fit md:max-h-full"
    >
      <div className="overflow-hidden w-full relative">
        <img
          src="/images/1.jpeg"
          alt=""
          className="min-w-full hidden md:inline h-48 xl:h-72 object-cover object-center rounded-t hover:scale-125 transition-all duration-500"
        />
        <button
          data-aos="zoom-out"
          className="absolute top-3 right-3 text-neutral-600 pointer-events-auto"
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
      </div>
      <div className="px-4 flex flex-col gap-2 grow py-5 border-b border-neutral-300 relative">
        <button
          onClick={() => handleIsFav()}
          className="absolute top-3 right-3 text-neutral-600 md:hidden z-10"
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
        <h1
          data-aos="fade-down"
          className="text-4xl font-Bungee flex items-center gap-3"
        >
          {name}{" "}
          <span className="text-sky-600">
            <VerifiedIcon sizes={35} />
          </span>
        </h1>
        <p
          data-aos="zoom-in"
          className="line-clamp-2 font-medium text-yellow-600"
        >
          {`${description}.`}
        </p>
        {/* <p>{product.image}</p> */}
        <p
          data-aos="zoom-in"
          className="text-2xl font-semibold text-amber-800"
        >{`${handleCurrency(price)}`}</p>
        <div className="flex items-center gap-2 flex-wrap capitalize">
          {notes &&
            notes.map((n, i) => (
              <span
                key={i}
                data-aos="fade-left"
                className="bg-amber-200 text-amber-800 min-w-fit px-5 py-1.5 rounded-full text-xs md:text-base"
              >
                {n}
              </span>
            ))}
        </div>
      </div>
      <button
        onClick={() => updateProduct()}
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
