import  { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
     e.preventDefault();
     
  }

  return (
    <div className='mt-32 flex flex-col gap-1   p-4  '>
        <h1 className='text-4xl font-semibold text-center'>Login</h1>
     <form  
       onSubmit={handleSubmit}
     className='flex flex-col  mx-auto gap-5 max-w-7xl p-4 '>
        <input type="email" placeholder='youremail@gmail.com' className='py-2 px-4 rounded-3xl' 
        />
        <input type="password" placeholder='Enter your Password here' className='py-2 px-4 rounded-3xl' />
        <button className='rounded-3xl bg-primary py-1 px-2 text-white 
        text-xl'>Log in</button>
     </form>
     <p className='text-center'>Don't have an account? <Link to='/register' className='text-blue-500 '>Register</Link> </p>
    </div>
  )
}

export default Login
