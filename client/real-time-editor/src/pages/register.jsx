import { useState } from "react";
import { registerUser } from "../functions/user_functions";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [message, setMessage] = useState("info");
  const [showMessage, setShowMessage] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfmpassword, setCnfmPassword] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    if (
      username.trim() == "" ||
      email.trim() == "" ||
      password.trim() == "" ||
      cnfmpassword.trim() == ""
    ) {
      setMessage("Please fill all the fields.!!!");
      setShowMessage(true);
      return;
    }
    if (password != cnfmpassword) {
      setMessage("Both the passwords should match");
      setShowMessage(true);
      return;
    }
    setShowMessage(false);
    registerUser(username, email, password);
    setUsername("");
    setEmail("");
    setPassword("");
    setCnfmPassword("");
  };

  return (
    <div className="flex w-screen h-[calc(100vh-4rem)] justify-center items-center">
      <div className="flex flex-col m-8  rounded-lg w-96 overflow-hidden border-indigo-800 b border-2 justify-center">
        <span className="text-center py-3 text-lg bg-indigo-800 text-white">
          SIGN UP
        </span>
        {showMessage && (
          <span className="text-red-600 mx-8">{`${message}`}</span>
        )}
        <form className="flex flex-col px-8 my-4" onSubmit={handleSubmission}>
          <label for="name" className="block mb-2">
            Name
          </label>
          <input
            id="name"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className=" mb-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            placeholder="Name"
          />
          <label for="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            className="mb-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label for="password" className="block mb-1">
            Password
          </label>
          <input
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="mb-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="password"
            placeholder="password"
          />
          <label for="cnfrmpassword" className="block mb-1">
            Confirm Password
          </label>
          <input
            id="cnfrmpassword"
            className="mb-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="password"
            placeholder="password"
            value={cnfmpassword}
            onChange={(e) => {
              setCnfmPassword(e.target.value);
            }}
          />
          <button
            className="bg-indigo-600 mb-6 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            type="submit"
          >
            Create
          </button>
          <Link className="m-2 self-center" to="/login">
            Already have an account?{" "}
            <span className="text-indigo-500">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
