import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="flex w-screen h-[calc(100vh-4rem)] justify-center items-center">
        <div className="flex flex-col m-8 rounded-lg overflow-hidden w-96 border-indigo-800 b border-2 justify-center">
          <span className="text-center py-3 text-lg bg-indigo-800 text-white">LOGIN</span>
          <form className="flex flex-col px-8 my-4">
            <label for="email" className="block mb-2">Email</label>
            <input className="mb-5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="email" type="email" placeholder="example@mail.com"></input>
            <label for="password" className="block mb-2">Password</label>
            <input className="mb-8 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="password" id="password" placeholder="password"></input>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Login</button>
          </form>
          <Link className="m-2 self-center" to="/register">Don't have an account? <span className=" text-indigo-500">Create One</span></Link>          
        </div>
      </div>
    </>
  );
};

export default LoginPage;
