import SearchIcon from "../icons/SearchIcon";
import HeartIcon from "../icons/HeartIcon";
import HistoryIcon from "../icons/HistoryIcon";
import ReceiptIcon from "../icons/ReceiptIcon";

function Header() {
  return (
    <header className="flex flex-col w-full shadow-xl bg-white px-5 xl:px-16 py-2 gap-3 font-Poppins">
      <div className="flex items-center justify-between">
        <img
          src="/images/logo.jpeg"
          alt=""
          className="rounded-full size-20 scale-x-105"
        />
        <div className="flex items-center gap-5 text-neutral-700">
          <button>
            <ReceiptIcon sizes={30} />
          </button>
          <button>
            <HeartIcon sizes={30} />
          </button>
          <button>
            <HistoryIcon sizes={30} />
          </button>
        </div>
      </div>
      <div className="border-2 border-neutral-300 bg-white rounded flex items-center px-5 focus-within:border-yellow-400 transition-all">
        <span className="flex items-center justify-center text-yellow-400">
          <SearchIcon sizes={30} />
        </span>
        <input
          type="text"
          placeholder="Buscar productos"
          className="bg-white py-3 px-5 rounded focus:outline-none w-full placeholder:font-medium placeholder:text-neutral-400"
        />
      </div>
    </header>
  );
}

export default Header;
