import { createPortal } from "react-dom";
import CloseIcon from "../icons/CloseIcon";
import useStore from "../store/store";

function Receipt({ state, onClose }) {
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
            className={`w-full h-full rounded bg-white p-4 flex flex-col gap-3 shadow ${
              state ? "translate-y-0" : "-translate-y-full"
            } transition-all duration-300`}
          >
            <button
              onClick={(e) => {
                onClose();
                e.stopPropagation();
              }}
              className="p-2 rounded-full bg-neutral-200 text-neutral-400 self-end"
            >
              <CloseIcon sizes={25} />
            </button>
            <div className="grow"></div>
            <div className="grid grid-cols-2 gap-5">
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
