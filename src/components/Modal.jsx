import { createPortal } from "react-dom";
import { useState } from "react";
import data from "../data/data";
// import MinusIcon from "../icons/MinusIcon";
// import PlusIcon from "../icons/PlusIcon";
import ArrowIcon from "../icons/ArrowIcon";
import CloseIcon from "../icons/CloseIcon";
import CheckIcon from "../icons/CheckIcon";
import useStore from "../store/store";

function Modal() {
  const [selected, setSelected] = useState([]);
  const [price, setPrice] = useState(0);
  const { modal, setModal } = useStore();

  const handleSelectValue = (val) => {
    if (selected.includes(val)) {
      setPrice((price) => price - val.price);
      let filter = selected.filter((s) => s !== val);
      setSelected(filter);
    } else {
      setPrice((price) => price + val.price);
      setSelected([...selected, val]);
    }
  };

  const handleCurrency = (p) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(p);
  };

  const handleClose = () => {
    setModal(false);
    setSelected([]);
    setPrice(0);
  };

  console.log(selected);

  return (
    <>
      {createPortal(
        <div
          onClick={() => setModal(false)}
          className={`fixed inset-0 bg-black/50 pt-10 flex items-center justify-center font-Poppins ${
            modal ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-all duration-300`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-160 max-h-150  h-full bg-white relative flex flex-col p-3 gap-5 ${
              modal ? "translate-y-0" : "translate-y-full"
            } transition-all duration-300`}
          >
            <button
              onClick={() => handleClose()}
              className="p-2 rounded-full bg-neutral-200 text-neutral-400 self-end"
            >
              <CloseIcon sizes={25} />
            </button>
            <div className="overflow-y-scroll max-h-full pb-32 flex flex-col gap-3">
              <div className="flex flex-col gap-2 border border-neutral-300 py-4 px-3">
                <h1 className="font-Bungee text-xl">Agrega Toppings</h1>
                <div className="flex flex-wrap items-center gap-2 text-lg">
                  {data.toppings.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectValue(t)}
                      className={`px-5 py-1 rounded-full border text-sm flex items-center gap-1 ${
                        selected.includes(t)
                          ? "bg-amber-200 text-amber-700 border-transparent"
                          : "text-neutral-500  border-neutral-400 bg-white "
                      } font-medium transition-all duration-300`}
                    >
                      <span
                        className={`${
                          selected.includes(t)
                            ? "scale-100 opacity-100"
                            : "scale-0 absolute opacity-0 -z-10"
                        } transition-all duration-300 `}
                      >
                        <CheckIcon sizes={20} />
                      </span>
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 border border-neutral-300 py-4 px-3">
                <h1 className="font-Bungee text-xl">Escoge una bebida</h1>
                <div className="flex flex-wrap items-center gap-2 text-lg">
                  {data.bebidas.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectValue(t)}
                      className={`px-5 py-1 rounded-full border text-sm flex items-center gap-1 ${
                        selected.includes(t)
                          ? "bg-amber-200 text-amber-700 border-transparent"
                          : "text-neutral-500  border-neutral-400 bg-white"
                      } font-medium transition-all duration-300`}
                    >
                      <span
                        className={`${
                          selected.includes(t)
                            ? "scale-100 opacity-100"
                            : "scale-0 absolute opacity-0"
                        } transition-all duration-300 `}
                      >
                        <CheckIcon sizes={20} />
                      </span>
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 border border-neutral-300 py-4 px-3">
                <h1 className="font-Bungee text-xl">Escoge Salsas</h1>
                <div className="flex flex-wrap items-center gap-2 text-lg">
                  {data.salsas.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectValue(t)}
                      className={`px-5 py-1 rounded-full border text-sm flex items-center gap-1 ${
                        selected.includes(t)
                          ? "bg-amber-200 text-amber-700 border-transparent"
                          : "text-neutral-500  border-neutral-400 bg-white"
                      } font-medium transition-all duration-300`}
                    >
                      <span
                        className={`${
                          selected.includes(t)
                            ? "scale-100 opacity-100"
                            : "scale-0 absolute opacity-0"
                        } transition-all duration-300 `}
                      >
                        <CheckIcon sizes={20} />
                      </span>
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bg-white border-t border-neutral-300 rounded-t w-full min-h-fit py-4 px-10 bottom-0 left-0 shadow flex items-center justify-between">
              <div className="flex items-center gap-2 justify-center  w-fit">
                {/* <button className="border p-2 rounded border-neutral-300 text-neutral-600">
                  <MinusIcon sizes={25} />
                </button> */}
                <div className="text-lg font-medium text-amber-900">
                  <p className=""> Total</p>
                  <p className="text-2xl">{handleCurrency(price)}</p>
                </div>

                {/* <button className="border p-2 rounded border-neutral-300 text-neutral-600">
                  <PlusIcon sizes={25} />
                </button> */}
              </div>

              <button className="p-2 rounded-full text-white bg-amber-500">
                <ArrowIcon sizes={30} />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Modal;

{
  /* <input
                  type="checkbox"
                  name=""
                  id=""
                  className="size-6 accent-orange-600 "
                /> */
}
