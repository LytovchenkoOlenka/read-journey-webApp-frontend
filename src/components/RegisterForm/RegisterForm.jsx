import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

// Валідація за допомогою Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export default function RegisterForm() {
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
      className="flex flex-col justify-between h-[210px] tablet:h-[312px] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2 tablet:gap-3.5">
        <Input label="Name:" name="name" type="text" {...register("name")} />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}

        <Input label="Mail:" name="email" type="email" {...register("email")} />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}

        <Input
          label="Password:"
          name="password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>
      <div className="flex items-center gap-3.5 tablet:gap-5">
        <Button type="submit">Registration</Button>
        <Link
          to="/login"
          className="text-xs underline text-gray-medium 
    hover:text-white transition-colors duration-300 tablet:text-sm tablet:leading-[1.29] tablet:tracking-tight"
        >
          Already have an account?
        </Link>
      </div>
    </form>
  );
}
