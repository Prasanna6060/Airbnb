import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/register",{
      username,
      email,
      password
    });
    console.log(response.data);
    } catch (error) {
      console.log("resgistration failed" + error.message)
    } 
    
  };

  return (
    <div className="mt-4 grow ">
      <h1 className="text-4xl font-semibold text-center">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  mx-auto  max-w-md p-4 "
      >
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          Register
        </button>
      </form>
      <p className="text-center">
        Have an account?{" "}
        <Link to="/login " className="text-blue-500 ">
          Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default Register;
