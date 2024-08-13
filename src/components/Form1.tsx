import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
const form1Schema = z.object
    ({
        name: z.string(),
        email: z.string().email({ message: "Email is invalid" }),
        password: z.string()
            .min(6, { message: "Password is required" }),
        confirmPassword: z
            .string()
            .min(6, { message: "Confirm password is required" })
    }).refine(data=> data.password === data.confirmPassword,{
        message: "Password does not match",
        path: ["confirmPassword"],
    })

type TForm1Schema =z.infer<typeof form1Schema>
export const Form1 = () => {
  
    const Form1 = useForm<TForm1Schema>({
    resolver: zodResolver(form1Schema),
  });


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    
  } = Form1;

  const onSubmit = (data: TForm1Schema) => {
    console.log("submit", data);
    reset();
  };
  return (
    <div>
        <h1>Form 1 With Zod</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register("name")}
        />
        {errors.name && (
          <p className="form-error-msg">{`${errors.name.message}`}</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="form-error-msg">{`${errors.email.message}`}</p>
        )}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        {errors.password && (
          <p className="form-error-msg">{`${errors.password.message}`}</p>
        )}

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm-Password"
          {...register("confirmPassword")}
        />

        {errors.confirmPassword && (
          <p className="form-error-msg">{`${errors.confirmPassword.message}`}</p>
        )}

        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
      <div className="Link">
        <Link to="/">Form1</Link>
      </div>
    </div>
  );
};
