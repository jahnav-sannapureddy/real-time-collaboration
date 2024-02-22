import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../functions/user_functions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {


  const [inputs,setInputs] = useState({})
  
  const showToastMessage = () => {
      toast.success("Login Successful");
    }
  const handleSubmit = (e) =>{
    e.preventDefault();
    loginUser(inputs.email,inputs.password)
  }

  

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setInputs({...inputs, [name]:value})
  }
  return (
    <>
      <ToastContainer/>
      <div className="flex w-screen h-[calc(100vh-4rem)] justify-center items-center">
        <div className="flex flex-col m-8 rounded-lg overflow-hidden w-96 border-indigo-800 b border-2 justify-center">
          <span className="text-center py-3 text-lg bg-indigo-800 text-white">
            LOGIN
          </span>
          <form className="flex flex-col px-8 my-4" onSubmit={handleSubmit}>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              className="mb-5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="email"
              name="email"
              type="email"
              value={inputs.email || ""}
              onChange={handleChange}
              placeholder="example@mail.com"
            ></input>
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              className="mb-8 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="password"
              id="password"
              name="password" 
              value={inputs.password || ""}
              onChange={handleChange}
              placeholder="password"
            ></input>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Login
            </button>
          </form>
          <Link className="m-2 self-center" to="/register">
            Don't have an account?{" "}
            <span className=" text-indigo-500">Create One</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
