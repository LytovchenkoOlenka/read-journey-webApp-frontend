// import css from "./Input.module.css";
import { useState } from "react";
import sprite from "../../assets/icons.svg";

export default function Input({ label, type, name, ...rest }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div
      className="
        flex items-center  rounded-xl border border-transparent 
        bg-gray-dark p-3.5 transition duration-300 ease-in-out
        focus-within:border-white/10 hover:border-white/10
      "
    >
      <label
        htmlFor={name}
        className="font-medium text-xs leading-[1.33] tracking-tight text-gray-medium pr-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type === "password" && showPassword ? "text" : type}
        className="
          w-full bg-transparent text-white font-medium text-xs 
          leading-[1.33] tracking-tight outline-none
        "
        autoComplete="off"
        {...rest}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="p-0 bg-transparent border-none cursor-pointer text-[#888] hover:text-white transition"
        >
          <svg width={20} height={20} className="stroke-current">
            <use
              href={
                showPassword ? `${sprite}#icon-eye-off` : `${sprite}#icon-eye`
              }
            />
          </svg>
        </button>
      )}
    </div>
  );
}
