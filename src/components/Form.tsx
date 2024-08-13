import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";

export const Form = () => {
  const form = useForm<FieldValues>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = form;

  const onSubmit = (data: FieldValues) => {
    alert("your Form is now submitted");
    console.log(data);
    reset();
  };
  return (
    <div>
      <h1>Form </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="form-error-msg">{`${errors.name.message}`}</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="form-error-msg">{`${errors.email.message}`}</p>
        )}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password should be atleast 6 characters",
            },
          })}
        />

        {errors.password && (
          <p className="form-error-msg">{`${errors.password.message}`}</p>
        )}

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm-Password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value: string) =>
              value === getValues("password") || "Password does not match",
          })}
        />

        {errors.confirmPassword && (
          <p className="form-error-msg">{`${errors.confirmPassword.message}`}</p>
        )}

        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>

      <div className="Link">
        <Link to="/form1">Form1</Link>
      </div>
    </div>
  );
};
