import Navigation from "../Navigation/Navigation";
import sprite from "../../assets/icons.svg";
import Button from "../Button/Button";

export default function MobileMenu({ isOpen, onClose, onSignOut }) {
  return (
    <div
      className={`
        fixed inset-0 z-50 transition-opacity duration-300 tablet:hidden
        ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div
        className={`absolute top-0 right-0 bottom-0 min-w-[200px] bg-charcoal pt-[280px] pb-9 px-10  transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={onClose} className="absolute top-9 right-10">
          <svg width={28} height={28}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
        <div className="flex flex-col items-center justify-between h-full">
          <Navigation />
          <Button
            variant="transparent"
            onClick={onSignOut}
            className="min-w-[100px] p-2"
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
}
