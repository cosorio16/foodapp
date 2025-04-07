import { createPortal } from "react-dom";
import CloseIcon from "../icons/CloseIcon";
import TrashIcon from "../icons/TrashIcon";
import useStore from "../store/store";

function Receipt({ state, onClose }) {
  const { cart, removeToCart } = useStore();

  console.log(cart);

  return (
    <>
      {createPortal(
        <div
          onClick={() => onClose()}
          className={`fixed w-screen h-dvh inset-0 bg-black/50 pb-10 font-Poppins ${
            state ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-all duration-500`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full h-full rounded bg-neutral-100 p-3 flex flex-col gap-3 shadow ${
              state ? "translate-y-0" : "-translate-y-full"
            } transition-all duration-300`}
          >
            <button
              onClick={() => onClose()}
              className="p-2 rounded-full bg-neutral-200 text-neutral-400 self-end"
            >
              <CloseIcon sizes={25} />
            </button>
            <div className="grow flex flex-col gap-2 max-h-full overflow-y-scroll">
              {cart && cart.length > 0 ? (
                cart.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 border px-3 py-4 rounded border-neutral-300 shadow bg-white"
                  >
                    <div className="flex flex-col gap-2 overflow-hidden">
                      <h1 className="font-Bungee text-2xl pl-2">
                        {item.esquite.name}
                      </h1>
                      <p className="line-clamp-1 pl-2 border-b pb-1 border-neutral-300 text-neutral-400 max-w-full">
                        {item.esquite.description}
                      </p>
                      <div className="flex items-center gap-2 max-w-full overflow-hidden">
                        {item.extras.map((n) => (
                          <span className="min-w-fit py-1 rounded-full px-5 text-sm bg-amber-200 text-amber-600">
                            {n.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => removeToCart(i)}
                        className="bg-neutral-300 text-neutral-600 rounded-full p-3 aspect-square size-10 flex items-center justify-center hover:bg-red-200 hover:text-red-500 transition-all duration-300"
                      >
                        <span>
                          <TrashIcon sizes={25} />
                        </span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full">
                  <p className="text-center text-neutral-500 font-medium text-lg">
                    Aun no haz seleccionado un producto.
                  </p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-5">
              <button className="rounded w-full py-2.5 font-medium bg-[#1c1c1c] text-white">
                Pagar
              </button>
              <button className="rounded w-full py-2.5 font-medium bg-green-600 text-white">
                Enviar Por Whatsapp
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Receipt;
