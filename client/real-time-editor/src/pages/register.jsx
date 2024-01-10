const RegisterPage = () => {
  return (
    <div className=" border-solid">
      <form
        className=" flex flex-col place-items-center h-screen"
        action="post"
      >
        <input
          className=" border placeholder:text-gray-400"
          type="text"
          placeholder="email"
        />
        <input
          className=" border placeholder:text-gray-400"
          type="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default RegisterPage;
