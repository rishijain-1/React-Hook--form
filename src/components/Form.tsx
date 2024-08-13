import {useForm} from 'react-hook-form';

export const Form = () => {

  type FormValues={
    name:string,
    email:string,
    password:string
  }

  const form =useForm<FormValues>();
  const {register,handleSubmit}=form;

  const onSubmit=(data:FormValues)=>{
    console.log("submit",data);
  }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' placeholder="Name" {...register("name")} />

            <label htmlFor="email" >Email</label>
            <input type="email"  placeholder="Email" {...register("email")} />

            <label htmlFor="password" >Password</label>
            <input type="password"  placeholder="Password" {...register("password")} />

            <label>Confirm Password</label>
            <input type="password" name="Confirm-password" placeholder="Confirm Password" />

            <button type="submit">Submit</button>
        </form>
    </div>
  );
};
