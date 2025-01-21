import Button from '../Button/Button.jsx'
// import {useState} from "react";
import css from '../Auth/FormStyles.module.css';
import Input from "../Input/Input.jsx";
import {useForm} from "react-hook-form";

export default function LoginForm() {
    const {
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={css.formWrapper}>
            <div>
                <Input
                    type="email"
                    placeholder="Mail: your@email.com"
                    value={watch("email") || ""}
                    onChange={(e) => setValue("email", e.target.value)}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div>
                <Input
                    type="password"
                    placeholder="Password: Yourpasswordhere"
                    withIcon
                    value={watch("password") || ""}
                    onChange={(e) => setValue("password", e.target.value)}
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
            </div>
            </div>


            <div className={css.submitBlock}>
                <Button
                    type="submit" // Кнопка автоматично викликає сабміт при натисканні Enter
                    label="Log in"
                />
                <a className={css.link} href="/register">Don’t have an account?</a>
            </div>
        </form>)

}