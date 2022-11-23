import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogIn = event => {
        event.preventDefault();
    }
    return (
        <div>
              <form onSubmit={handleLogIn} className="hero min-h-screen ">
  <div className="w-96 h-max">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
          <label className="label">
            <Link className='text-cyan-800' to='/signup'><p>New here? Register right now!</p></Link>
          </label>
          <p className='text-amber-600'></p>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-accent">Login</button>
        </div>
        <div className="form-control mt-6">
      <button className="btn btn-ghost"><FaGoogle className='mr-2'></FaGoogle>Sign In with Google </button>
      </div>
      </div>
    </div>
  </div>
</form>
        </div>
    );
};

export default Login;