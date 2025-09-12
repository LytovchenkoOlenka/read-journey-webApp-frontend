import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../Button/SubmitButton.jsx";
import Input from "../Input/Input.jsx";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useActionState } from "react";
import { signIn } from "../../redux/auth/operations.js";

// Валідація за допомогою Yup
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInAction = async (previousState, formData) => {
    const credentials = Object.fromEntries(formData.entries());
    try {
      const result = await dispatch(signIn(credentials)).unwrap();
      navigate("/recommended");
      console.log(result);
      return { success: true, message: "Authentication successful!" };
    } catch (error) {
      return { success: false, message: error };
    }
  };

  const {
    register: signInField,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const [state, formAction] = useActionState(signInAction, {
    success: false,
    message: null,
  });

  return (
    <form
      className="flex flex-col gap-5 justify-between h-[210px] tablet:h-[312px]"
      action={formAction}
    >
      <div className="flex flex-col gap-2 tablet:gap-3.5 ">
        <Input label="Mail:" type="email" {...signInField("email")} />
        {errors.email && (
          <p className="text-red-500 text-[10px] m-0">{errors.email.message}</p>
        )}

        <Input label="Password:" type="password" {...signInField("password")} />
        {errors.password && (
          <p className="text-red-500 text-[10px] m-0">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3.5 tablet:gap-5">
        <SubmitButton pendingText="Log in...">Log in</SubmitButton>
        <Link
          to="/register"
          className="text-xs underline text-gray-medium 
    hover:text-white transition-colors duration-300 tablet:text-sm tablet:leading-[1.29] tablet:tracking-tight"
        >
          Don’t have an account?
        </Link>
      </div>

      {/* Потім це буде сприваюче віконце NOTIFICATION */}
      {!state.success && state.message && (
        <p className="text-red-500 text-xs mt-1">{state.message}</p>
      )}
    </form>
  );
}
