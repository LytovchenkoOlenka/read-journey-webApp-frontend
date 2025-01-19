import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './RegisterForm.module.css';
import * as yup from 'yup';

import Button from '../Button/Button.jsx'

// Валідація за допомогою Yup
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(7, 'Password must be at least 7 characters').required('Password is required'),
});

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleRegistration = () => {
        console.log('Registration clicked');
    };

    return (
        <>
        <form onSubmit={handleSubmit(handleRegistration)}>
            <input {...register('name')} placeholder="Name"/>
            {errors.name && <p>{errors.name.message}</p>}

            <input {...register('email')} placeholder="Email"/>
            {errors.email && <p>{errors.email.message}</p>}

            <input {...register('password')} placeholder="Password"/>
            {errors.password && <p>{errors.password.message}</p>}


            {/*<button type="submit" className={css.btn}>Register</button>*/}
        </form>
    <div className={css.submitBlock}>
        <Button label="Registation" onClick={handleRegistration}></Button>
        <p className={css.text}>Already have an account?</p>
    </div>
        </>
)
    ;
};

export default RegisterForm;