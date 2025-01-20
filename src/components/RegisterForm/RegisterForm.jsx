// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import css from '../Auth/FormStyles.module.css';
// import * as yup from 'yup';

import Button from '../Button/Button.jsx'
import {useState} from "react";
import Input from '../Input/Input.jsx'

// Валідація за допомогою Yup
// const schema = yup.object().shape({
//     name: yup.string().required('Name is required'),
//     email: yup.string().email('Invalid email').required('Email is required'),
//     password: yup.string().min(7, 'Password must be at least 7 characters').required('Password is required'),
// });

export default function RegisterForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleRegistration = () => {
        console.log('Registration clicked');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className={css.formWrapper}>
        <form className={css.form} autoComplete="off">
            <Input
                name="name"
                type="text"
                placeholder="Name: Ilona Ratushniak"
                value={formData.name}
                onChange={handleChange}
            />
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
            {/*<button type="submit" className={css.btn}>Register</button>*/}
        </form>

    <div className={css.submitBlock}>
        <Button label="Registation" onClick={handleRegistration}></Button>
        <a className={css.link} href="/login" >Already have an account?</a>
    </div>
        </div>
)
    ;
};
