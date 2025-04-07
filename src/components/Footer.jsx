import WhatsappIcon from "../icons/WhatsappIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TiktokIcon from "../icons/TiktokIcon";

function Footer() {
  return (
    <footer className="min-h-32 bg-[#1c1c1c] font-Poppins text-white">
      <div className="p-3 flex flex-col gap-2">
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <img
            src="/images/logo.jpeg"
            alt=""
            className="rounded-full aspect-square size-40"
          />
        </div>
        <div>
          <div className="flex gap-5 flex-wrap justify-center">
            <a href="#" className="flex items-center gap-2">
              <span>
                <WhatsappIcon sizes={35} />
              </span>
            </a>
            <a href="#" className="flex items-center gap-2">
              <span>
                <InstagramIcon sizes={35} />
              </span>
            </a>
            <a href="#" className="flex items-center gap-2">
              <span>
                <TiktokIcon sizes={35} />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col text-xs border-t py-2 border-neutral-300">
        <p>Barranquilla - Colombia</p>
        <div>
          Made by{" "}
          <a href="https://osorio.netlify.app/" target="_blank">
            Carlos Osorio
          </a>
        </div>
        <p>2025 </p>
      </div>
    </footer>
  );
}

export default Footer;
