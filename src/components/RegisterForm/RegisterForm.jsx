// React & React DOM hooks
import { useActionState } from "react";

// React Router for navigation
import { Link, useNavigate } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations.js";

// Client-side validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// UI Components
import SubmitButton from "../Button/SubmitButton.jsx";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerAction = async (previousState, formData) => {
    const credentials = Object.fromEntries(formData.entries());
    try {
      const result = await dispatch(register(credentials)).unwrap();
      navigate("/recommended");
      console.log(result);
      return { success: true, message: "Registration successful!" };
    } catch (error) {
      return { success: false, message: error };
    }
  };

  const {
    register: registerField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [state, formAction] = useActionState(registerAction, {
    success: false,
    message: null,
  });

  return (
    <form
      className="flex flex-col justify-between h-[210px] tablet:h-[312px] "
      action={formAction}
    >
      <div className="flex flex-col gap-2 tablet:gap-3.5">
        <Input
          label="Name:"
          name="name"
          type="text"
          {...registerField("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}

        <Input
          label="Mail:"
          name="email"
          type="email"
          {...registerField("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}

        <Input
          label="Password:"
          name="password"
          type="password"
          {...registerField("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>
      <div className="flex items-center gap-3.5 tablet:gap-5">
        <SubmitButton pendingText="Registering...">Registration</SubmitButton>
        <Link
          to="/login"
          className="text-xs underline text-gray-medium 
    hover:text-white transition-colors duration-300 tablet:text-sm tablet:leading-[1.29] tablet:tracking-tight"
        >
          Already have an account?
        </Link>
      </div>

      {/* Потім це буде сприваюче віконце NOTIFICATION */}
      {!state.success && state.message && (
        <p className="text-red-500 text-xs mt-1">{state.message}</p>
      )}
    </form>
  );
}
