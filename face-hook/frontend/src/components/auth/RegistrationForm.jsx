import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Field from "../common/Field";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError
  } = useForm();

  const password = watch("password");
  const { api } = useAxios();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { confirmPassword, ...formData } = data; // remove confirmPassword
    try {
      const response = await api.post(
        "http://localhost:3000/auth/register",
        formData
      );

      navigate("/login");
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: `An error occurred: ${error.message}`
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
    >
      {/* Root-level error */}
      {errors.root?.random && (
        <p className="text-red-500 mb-4">{errors.root.random.message}</p>
      )}

      {/* First Name */}
      <Field label="First Name" error={errors.firstName}>
        <input
          {...register("firstName", { required: "First name is required" })}
          className={`auth-input ${
            errors.firstName ? "border-red-500" : "border-gray-200"
          }`}
          type="text"
          id="firstName"
          placeholder="Enter your first name"
        />
      </Field>

      {/* Last Name */}
      <Field label="Last Name" error={errors.lastName}>
        <input
          {...register("lastName")}
          className={`auth-input ${
            errors.lastName ? "border-red-500" : "border-gray-200"
          }`}
          type="text"
          id="lastName"
          placeholder="Enter your last name"
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email ID is Required" })}
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
      </Field>

      {/* Password */}
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}
          className={`auth-input ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          id="password"
          placeholder="Create a password"
        />
      </Field>

      {/* Confirm Password */}
      <Field label="Confirm Password" error={errors.confirmPassword}>
        <input
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match"
          })}
          className={`auth-input ${
            errors.confirmPassword ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          id="confirmPassword"
          placeholder="Re-enter your password"
        />
      </Field>

      {/* Submit Button */}
      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Register
        </button>
      </Field>
    </form>
  );
}

export default RegistrationForm;
