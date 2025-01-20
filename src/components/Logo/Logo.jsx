import css from "./Logo.module.css";
import logo from "/logo.svg";


export default function Logo() {

    return (
            <a href="/" className={css.logoLink}>
                <img src={logo} alt="LogoOfTheHeader" />
            </a>
    );
}