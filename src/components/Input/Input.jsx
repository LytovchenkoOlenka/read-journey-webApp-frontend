import css from './Input.module.css'
import {useState} from "react";

export default function Input({label,type,placeholder,value,onChange,withIcon}) {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState)
    }
return(
    <div className={css.inputContainer}>
        <p className={css.label} >
            {label}
        </p>
        <input className={css.input}
               type={type === "password" && showPassword ? "text" : type}
               placeholder={placeholder}
               value={value || ""}
               onChange={onChange}
               autoComplete="off"/>
        {withIcon && type === "password" && (
            <button
                className={css.iconButton}
                type="button"
                onClick={togglePasswordVisibility}
            >
                {showPassword ? "👁️" : "🙈"}
            </button>)
        }

    </div>
)
}