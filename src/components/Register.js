import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    passwordVerify: "",
  });

  async function registerUser(e) {
    e.preventDefault();
    try {
      const payload = {
        email: registerData.email,
        password: registerData.password,
        passwordVerify: registerData.passwordVerify,
      };
      const res = await axios.post(
        "http://localhost:5000/users/register",
        payload
      );
      console.log(res);
      //   await getLoggedIn();
      //   history.push("/");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="md:container md:mx-auto flex justify-center mt-8">
      <form className="w-full max-w-sm mt-8" onSubmit={registerUser}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
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
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
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
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Re-enter Password
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
              value={registerData.passwordVerify}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  passwordVerify: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Remeber Me!</span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="Submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
