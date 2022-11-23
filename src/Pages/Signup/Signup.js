import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div>
             <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
<div className="w-96 h-max">
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
    </div>
    <div>
    <label className="label">
        <span className="label-text">Name</span>
      </label>
    <select className="select font-xl select-bordered w-full max-w-xs">
  <option disabled selected >Type of account</option>
  <option>Seller</option>
  <option>Buyer</option>
</select>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
      <label className="label">
        <Link className='text-cyan-800' to='/login'><p>Already registered? Log in right now!</p></Link>
      </label>
        <p className='text-amber-600'></p>
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-accent">Sign Up</button>
    </div>
    <div className="form-control mt-6">
      <button  className="btn btn-ghost"><FaGoogle className='mr-2'></FaGoogle>Sign Up with Google Instead</button>
      </div>
  </div>
</div>
</div>
</form>
        </div>
    );
};

export default Signup;