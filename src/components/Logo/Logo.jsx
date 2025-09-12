import { Link } from "react-router-dom";
import logo from "/logo.svg";

export default function Logo({ textClasses = "hidden" }) {
  return (
    <Link to="/" className="flex items-center tablet:gap-1 ">
      <img src={logo} alt="LogoOfTheHeader" />
      <p
        className={`${textClasses} font-bold text-lg leading-nonehidden desktop:font-bold desktop:text-lg desktop:leading-none`}
      >
        READ JOURNEY
      </p>
    </Link>
  );
}
