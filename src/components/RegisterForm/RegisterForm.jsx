import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import css from '../../styles/RegisterForm.module.css';
import * as yup from 'yup';

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

    const onSubmit = data => {
        console.log(data); // Можете замінити на відправку на бекенд
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} placeholder="Name" />
            {errors.name && <p>{errors.name.message}</p>}

            <input {...register('email')} placeholder="Email" />
            {errors.email && <p>{errors.email.message}</p>}

            <input {...register('password')} placeholder="Password" />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit" className={css.btn}>Register</button>
        </form>
    );
};

export default RegisterForm;