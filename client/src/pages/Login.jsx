import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/auth/login", {
      email,
      password
    });
  };

  return (
    <div className="mt-4 grow ">
      <h1 className="text-4xl font-semibold text-center">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  mx-auto  max-w-md p-4 "
      >
        <input
          type="email"
          placeholder="youremail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your Password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
