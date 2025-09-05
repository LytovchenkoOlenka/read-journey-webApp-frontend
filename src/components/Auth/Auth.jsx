import iphoneMobile from "../../img/iphone-mobile.png";
import iphoneDesktop from "../../img/iphone-desktop.png";
import Frame from "../Frame/Frame.jsx";
import Logo from "../Logo/Logo.jsx";
// import Button from '../Button/Button.jsx'

export default function Auth({ children }) {
  return (
    <>
      <Frame>
        <Logo />
        <h2 className={css.title}>
          Expand your mind, reading{" "}
          <span className={css.highlightedText}>a book</span>
        </h2>
        {children}
      </Frame>
      <Frame>
        <img src={iphone} alt="Phone" className={css.phoneImg} />
        <picture>
          <source media="(min-width: 1280px)" srcSet={iphoneDesktop} />
          <img
            src={iphoneMobile}
            alt="Phone"
            className="w-full h-full object-cover"
          />
        </picture>
      </Frame>
    </>
  );
}
