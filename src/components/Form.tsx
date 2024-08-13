import { useForm } from "react-hook-form";

export const Form = () => {
  type FormValues = {
    name: string;
    email: string;
    password: string;
  };

  const form = useForm<FormValues>();
  const { register, handleSubmit, formState:{errors,isSubmitting},reset } = form;

  const onSubmit = (data: FormValues) => {
    console.log("submit", data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Name" {...register("name",{required:"Name is required"})} />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" {...register("email",{required:"Email is required"})} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password",{required:"Password is required", minLength:{
            value:6,
            message:"Password should be atleast 6 characters"
          }})}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="Confirm-password"
          placeholder="Confirm Password"
        />

        <button disabled={isSubmitting} type="submit">Submit</button>
      </form>
    </div>
  );
};
