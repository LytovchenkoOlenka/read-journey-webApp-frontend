// import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
// import UserInfo from "../UserInfo/UserInfo";

export default function Navigation() {
  const getNavLinkClass = ({ isActive }) => {
    const commonClasses =
      "text-sm tracking-tight transition hover:text-white relative desktop:text-xl";
    const activeClasses = "text-white active-nav-link";
    const inactiveClasses = "text-gray-medium";
    return `${commonClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav>
      <ul className="flex flex-col gap-5 tablet:flex-row">
        <li>
          <NavLink to="/recommended" className={getNavLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/library" className={getNavLinkClass}>
            My library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
