const LoginPage = () => {
  return (
    <div className="border-solid">
      <form
        className=" flex flex-col place-items-center"
        action="post"
      >
        <input
          className=" border placeholder:text-gray-400"
          type="text"
          placeholder="username"
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

export default LoginPage;
