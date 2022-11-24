import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../UserContext/UserContext';

const Login = () => {

  const {register, handleSubmit, formState: { errors }} = useForm();
  const {signIn, signInWithGoogle} = useContext(AuthContext);
  const [error, setError] = useState(' ');
  const navigate = useNavigate();

    const handleLogIn = data => {
      signIn(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire(
          'Congrats!',
          "You've been logged in successfully!",
          'success'
        )
        console.log(user);
        setError(' ');
        navigate('/ ')
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
    }

    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire(
          'Congrats!',
          "You've been signed in successfully with Google!",
          'success'
        )
          setError( ' ')
          navigate('/')
          
      }).catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      });
    }
    return (
        <div>
              <form onSubmit={handleSubmit(handleLogIn)} className="hero min-h-screen ">
  <div className="w-96 h-max">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  {...register("email", { required: "Email is Required"})} placeholder="email" className="input input-bordered" required/>
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  {...register("password", { required: "Password is Required"})} placeholder="password"  className="input input-bordered" required/>
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          <label className="label">
            <Link className='text-cyan-800' to='/signup'><p>New here? Register right now!</p></Link>
          </label>
          <p className='text-amber-600'></p>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-accent">Login</button>
          {
      error && <p className='text-red-500'> {error.slice(22, 36)} </p>
    }
        </div>
        <div className="form-control mt-6">
      <button onClick={handleGoogleSignIn} className="btn btn-ghost"><FaGoogle className='mr-2'></FaGoogle>Sign In with Google </button>
      </div>
      </div>
    </div>
  </div>
</form>
        </div>
    );
};

export default Login;