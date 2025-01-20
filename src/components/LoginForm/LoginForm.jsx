import Button from '../Button/Button.jsx'
import {useState} from "react";
import css from '../Auth/FormStyles.module.css';
import Input from "../Input/Input.jsx";

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleLogin = () => {
        console.log('Login clicked');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

return (
    <div className={css.formWrapper}>
        <form className={css.form} autoComplete="off" onSubmit={(e) => e.preventDefault()}>
            <Input
                name="email"
                type="email"
                placeholder="Mail: your@email.com"
                value={formData.email}
                onChange={handleChange}
            />
            <Input
                name="password"
                type="password"
                placeholder="Password: Yourpasswordhere"
                value={formData.password}
                onChange={handleChange}
                withIcon
            />
        </form>

        <div className={css.submitBlock}>
            <Button label="Login" onClick={handleLogin}></Button>
            <a className={css.link} href="/register">Don’t have an account?</a>
        </div>
    </div>)


}