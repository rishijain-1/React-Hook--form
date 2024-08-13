

export const Form = () => {
  return (
    <div>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Name" />

            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />

            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />

            <label>Confirm Password</label>
            <input type="password" name="Confirm-password" placeholder="Confirm Password" />

            <button type="submit">Submit</button>
        </form>
    </div>
  );
};
