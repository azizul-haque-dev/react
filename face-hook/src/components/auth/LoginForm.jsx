import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Field from "../common/Field";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  function submitForm(data) {
    console.log(data);
    navigate("/");
  }
  const navigate = useNavigate();
  return (
    <div className="card">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      >
        {/* email */}
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Email id is required" })}
            className={`auth-input ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
            name="email"
            type="email"
            id="email"
          />
        </Field>

        {/* password */}
        <Field label="password" error={errors.password}>
          <input
            {...register("password", {
              required: "password id is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              }
            })}
            className={`auth-input ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
            name="password"
            type="password"
            id="password"
          />
        </Field>
        {/* Submit */}

        <Field>
          <button
            className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
            type="submit"
          >
            Login
          </button>
        </Field>
      </form>
      <div className="py-4 lg:py-6">
        <p className="text-center text-xs text-gray-600/95 lg:text-sm">
          Don’t have account?
          <Link
            className="text-white transition-all hover:text-lwsGreen hover:underline"
            to="/register"
          >
            Create New
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
