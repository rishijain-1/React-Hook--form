import { useForm, } from "react-hook-form";
import type {FieldValues} from "react-hook-form"

export const Form = () => {


  const form = useForm<FieldValues>();
  const { register, handleSubmit, formState:{errors,isSubmitting},reset } = form;

  const onSubmit = (data: FieldValues) => {
    console.log("submit", data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Name" {...register("name",{required:"Name is required"})} />
        {errors.name &&(
          <p className="form-error-msg">{`${errors.name.message}`}</p>
        )}

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" {...register("email",{required:"Email is required"})} />
        {errors.email && (
          <p className="form-error-msg">{`${errors.email.message}`}</p>
        )} 

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password",{required:"Password is required", minLength:{
            value:6,
            message:"Password should be atleast 6 characters"
          }})}
        />

        {errors.password && (
          <p className="form-error-msg">{`${errors.password.message}`}</p>
        )}

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm-Password"
          {...register("confirmPassword",{required:"Confirm Password is required", validate: (value : string) => value === form.getValues("password") || "Password does not match"})}
        />

        <button disabled={isSubmitting} type="submit">Submit</button>
      </form>
    </div>
  );
};
