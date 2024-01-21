import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="flex w-screen h-[calc(100vh-4rem)] justify-center items-center">
        <div className="flex flex-col m-8 rounded-lg overflow-hidden border-indigo-400 b border-2 justify-center">
          <span className="text-center pt-2 pb-2 bg-indigo-600 text-white">LOGIN</span>
          <form className="flex flex-col px-8 my-4">
            <label for="email" className="block mb-2">Email</label>
            <input className="mb-5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="email" type="email" placeholder="example@mail.com"></input>
            <label for="password" className="block mb-2">Password</label>
            <input className="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="password" id="password" placeholder="password"></input>
            <button className="bg-indigo-800 capitalize text-white p-2 w-3/4 self-center rounded-md">Login</button>
          </form>
          <Link className="mx-10 my-2" to="/register">Don't have an account? create one</Link>          
        </div>
        
      </div>
    </>
  );
};

export default LoginPage;
