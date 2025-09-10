import sprite from "../../assets/icons.svg";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <div className="flex flex-row justify-between rounded-[15px] px-5 py-3 bg-charcoal ">
      <Logo />
      <div className="flex gap-[10px]">
        <div className="w-[35px] h-[35px] bg-gray-dark rounded-full border border-white/20 flex items-center justify-center ">
          <p className="text-base font-bold uppercase">i</p>
        </div>
        <button
          type="button"
          //   onClick={}
          className="p-0 bg-transparent border-none cursor-pointer text-[#888] hover:text-white transition"
        >
          <svg width={28} height={28}>
            <use href={`${sprite}#icon-menu`} />
          </svg>
        </button>
      </div>
    </div>
  );
}
