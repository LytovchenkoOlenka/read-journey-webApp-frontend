import { Link } from "react-router-dom";
import logo from "/logo.svg";

export default function Logo() {
  return (
    <Link to="/" className="flex tablet:gap-1 ">
      <img src={logo} alt="LogoOfTheHeader" />
      <p className="hidden tablet:block tablet:font-bold tablet:text-lg tablet:leading-none">
        READ JOURNEY
      </p>
    </Link>
  );
}
