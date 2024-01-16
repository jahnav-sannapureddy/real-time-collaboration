import axios from "axios";

const RegisterPage = () => {
  const register = () => {
    axios
      .post("http://localhost:5000/register", {
        email: "test",
        password: "test",
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className=" border-solid">
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
      <button type="submit" onClick={register}>
        Login
      </button>
    </div>
  );
};

export default RegisterPage;
