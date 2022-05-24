import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const loginUser = async (e) => {
    try {
      e.preventDefault();
      const payload = {
        email: loginData.email,
        password: loginData.password,
      };
      await axios.post("http://localhost:5000/users/login", payload);
    } catch (e) {
      setErrorMessage(e.response.data.errorMessage);
    }
  };
  return (
    <div className="md:container md:mx-auto flex justify-center mt-8">
      <form className="w-full max-w-sm mt-8" onSubmit={loginUser}>
        {errorMessage != "" && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8"
            role="alert"
          >
            <strong className="font-bold whitespace-no-wrap">
              Holy smokes!{" "}
            </strong>
            <span className="block sm:inline whitespace-no-wrap overflow-x-auto">
              {errorMessage}
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                classNAME="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
        <div className="md:flex md:items-center mb-6">
          <div className="mr-8">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="email"
              placeholder="Jane Doe"
              required
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="mr-1">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="******************"
              minLength={"4"}
              maxLength={"10"}
              required
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="Submit"
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
