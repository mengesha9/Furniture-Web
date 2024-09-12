import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [login, setLogin] = useState({ email: "", password: "" });


  const onSubmitHandler = async(e)=>{
    e.preventDefault();
  }

  const toggleState = () => {
    setCurrentState(currentState === "Sign Up" ? "Login" : "Sign Up");
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
      </div>
      {currentState === "Sign Up" ? (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      ) : null}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />

      <div className=" flex justify-between text-sm mt-4">
        <p className="cursor-pointer">Forgot your password?</p>
        <button type="button" className="cursor-pointer " onClick={toggleState}>
          {currentState === "Sign Up" ? "Login Here" : "Create Account"}
        </button>
      </div>
      <button
        type="submit"
        className=" py-2 px-8 mt-4 bg-gray-800 text-white" >{currentState}</button>
    </form>
  );
};

export default Login;
