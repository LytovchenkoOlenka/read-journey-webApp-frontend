import { useState } from "react";
import sprite from "../../assets/icons.svg";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import Navigation from "../Navigation/Navigation";
import UserInfo from "../UserInfo/UserInfo";
import Button from "../Button/Button";
import { signOut } from "../../redux/auth/operations.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleSignOut = async () => {
    try {
      await dispatch(signOut()).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return (
    <header className="flex flex-row justify-between rounded-[15px] px-5 py-3 bg-charcoal relative">
      <div className="flex w-full justify-between">
        <Logo textClasses="hidden desktop:block" />

        <div className="flex items-center gap-3 tablet:gap-4">
          <UserInfo />

          {/* Ця кнопка з'являється тільки на екранах від 'tablet' і ширше */}
          <Button
            variant="transparent"
            onClick={handleSignOut}
            className="hidden min-w-[100px] py-3 px-7 tablet:block"
          >
            Log out
          </Button>
          {/* Ця кнопка з'являється тільки на мобільних екранах  */}
          <button
            type="button"
            onClick={toggleMenu}
            className="p-0 bg-transparent border-none tablet:hidden"
          >
            <svg width={28} height={28} className="stroke-white">
              <use href={`${sprite}#icon-menu`} />
            </svg>
          </button>
        </div>
      </div>

      {/* Цей блок з'являється тільки на екранах від 'tablet' і ширше */}
      <div className="hidden tablet:block  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Navigation />
      </div>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        onSignOut={handleSignOut}
      />
    </header>
  );
}
