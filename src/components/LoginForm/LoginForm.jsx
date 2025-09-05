import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
// import {useState} from "react";
// import css from "../Auth/FormStyles.module.css";
import Input from "../Input/Input.jsx";
import { useForm } from "react-hook-form";

// Валідація за допомогою Yup
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-5 justify-between h-[210px] tablet:h-[312px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 tablet:gap-3.5 ">
        <Input label="Mail:" type="email" {...register("email")} />
        {errors.email && (
          <p className="text-red-500 text-[10px] m-0">{errors.email.message}</p>
        )}

        <Input label="Password:" type="password" {...register("password")} />
        {errors.password && (
          <p className="text-red-500 text-[10px] m-0">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3.5 tablet:gap-5">
        <Button type="submit">Log in</Button>
        <Link
          to="/register"
          className="text-xs underline text-gray-medium 
    hover:text-white transition-colors duration-300 tablet:text-sm tablet:leading-[1.29] tablet:tracking-tight"
        >
          Don’t have an account?
        </Link>
      </div>
    </form>
  );
}

// font-family: var(--font-family);
// font-weight: 500;
// font-size: 14px;
// line-height: 129%;
// letter-spacing: -0.02em;
// text-decoration: underline;
// text-decoration-skip-ink: none;
// text-align: center;
// color: #686868;
