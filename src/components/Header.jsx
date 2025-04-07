import { useState } from "react";
import Receipt from "./Receipt";
import SearchIcon from "../icons/SearchIcon";
import HeartIcon from "../icons/HeartIcon";
import HistoryIcon from "../icons/HistoryIcon";
import ReceiptIcon from "../icons/ReceiptIcon";
import useStore from "../store/store";

function Header({ products, setProducts }) {
  const { cart } = useStore();
  const [showReceipt, setShowReceipt] = useState(false);

  const handleChangeInput = (input) => {
    if (input !== undefined && input.trim !== "") {
      let filter = products.filter((p) =>
        p.name.toLowerCase().includes(input.toLowerCase())
      );
      setProducts(filter);
    }
  };

  return (
    <header className="flex flex-col w-full shadow-xl text-neutral-700 px-5 xl:px-16 py-2 gap-3 font-Poppins bg-white">
      <div className="flex items-center justify-between">
        <img
          src="/images/logo.jpeg"
          alt=""
          className="rounded-full size-20 scale-x-105"
        />
        <div className="flex items-center gap-5 text-neutral-700">
          <button onClick={() => setShowReceipt(true)} className="relative">
            <ReceiptIcon sizes={30} />
            {cart.length > 0 && (
              <>
                <span className="size-3 rounded-full absolute top-0 right-0 bg-blue-400"></span>
                <span className="size-3 rounded-full absolute top-0 right-0 bg-blue-400 animate-ping"></span>
              </>
            )}
          </button>
          <button>
            <HeartIcon sizes={30} />
          </button>
          <button>
            <HistoryIcon sizes={30} />
          </button>
        </div>
      </div>
      <div className="border-2 border-neutral-300  rounded flex items-center px-5 focus-within:border-yellow-400 transition-all">
        <span className="flex items-center justify-center text-yellow-400">
          <SearchIcon sizes={30} />
        </span>
        <input
          type="text"
          placeholder="Buscar productos"
          className="bg-transparent py-3 px-5 rounded focus:outline-none w-full placeholder:font-medium placeholder:text-neutral-400"
          onChange={(e) => handleChangeInput(e.target.value)}
        />
      </div>

      <Receipt state={showReceipt} onClose={() => setShowReceipt(false)} />
    </header>
  );
}

export default Header;
