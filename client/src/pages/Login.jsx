import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('localhost:3000/api/login')
  };

  return (
    <div className="mt-4 grow ">
      <h1 className="text-4xl font-semibold text-center">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  mx-auto  max-w-md p-4 "
      >
        <input type="email" placeholder="youremail@gmail.com" />
        <input type="password" placeholder="Enter your Password here" />
        <button
          className="rounded-3xl bg-primary py-1 px-2 text-white 
        text-xl"
        >
          Log in
        </button>
      </form>
      <p className="text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 ">
          Register
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
