// import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import css from '../Auth/FormStyles.module.css';
import * as yup from 'yup';

import Button from '../Button/Button.jsx'
// import {useState} from "react";
import Input from '../Input/Input.jsx'
import {useForm} from "react-hook-form";

// Валідація за допомогою Yup
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(7, 'Password must be at least 7 characters').required('Password is required'),
});

export default function RegisterForm(){
    const {
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({resolver: yupResolver(schema),});

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={css.formWrapper}>
                <div>
                    <Input
                        // label="Name:"
                        name="name"
                        type="text"
                        placeholder="Name:Ilona Ratushniak"
                        value={watch("name") || ""}
                        onChange={(e) => setValue("name", e.target.value)}
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>
                <div>
                    <Input
                        // label="Mail:"
                        name="email"
                        type="email"
                        placeholder="Mail: your@email.com"
                        value={watch("email") || ""}
                        onChange={(e) => setValue("email", e.target.value)}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>
                <div>
                    <Input
                        // label="Password:"
                        name="password"
                        type="password"
                        placeholder="Password: Yourpasswordhere"
                        value={watch("password") || ""}
                        onChange={(e) => setValue("password", e.target.value)}
                        withIcon
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>
            </div>
            <div className={css.submitBlock}>
                    <Button
                        type="submit" // Кнопка автоматично викликає сабміт при натисканні Enter
                        label="Registation"
                    />
                    <a className={css.link} href="/login">Don’t have an account?</a>
                </div>
        </form>)
}