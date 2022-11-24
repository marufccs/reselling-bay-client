import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../UserContext/UserContext';
import Swal from 'sweetalert2';

const Signup = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();
    const {signUp, updateUser, signInWithGoogle} = useContext(AuthContext)
    const [error, setError] = useState(' ')
    const navigate = useNavigate()

    const handleSignUp = data => {
        signUp(data.email, data.password, data.type)
        .then((userCredential) => {
            const user = userCredential.user;
            const userInfo = {
              displayName: data.name,
              accountType: data.type
          }
          updateUser(userInfo)
              .then(() => {
                saveUserInDatabase(data.name, data.email, data.type)
              })
              .catch(err => console.log(err));
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
    }

    const handleGoogleSignIn = () => {
     signInWithGoogle()
    .then((result) => {
      const user = result.user;
      Swal.fire(
        'Congrats!',
        "You've been signed up successfully with Google!",
        'success'
      )
        setError( ' ')
        saveUserInDatabase(user.displayName, user.email, `Buyer` )
    }).catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
    });
    }

    const saveUserInDatabase = (name, email, type) =>{
      const user ={name, email, type};
      fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
          console.log(data);
          Swal.fire(
            'Congrats!',
            "You've been signed up successfully!",
            'success'
          )
          setError(' ');
          navigate('/')
      })
  }


    return (
        <div>
             <form onSubmit={handleSubmit(handleSignUp)} className="hero min-h-screen bg-base-200">
<div className="w-96 h-max">
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" {...register("name", { required: "Name is Required"})} placeholder="name" className="input input-bordered" />
      {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
    </div>
    <div>
    <label className="label">
        <span className="label-text">Account Type</span>
      </label>
    <select {...register("type", { required: "Account type is Required"})} className="select font-xl select-bordered w-full max-w-xs" required>
  <option>Seller</option>
  <option>Buyer</option>
  {errors.type && <p className='text-red-500'>{errors.type.message}</p>}
</select>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" {...register("email", {required: "Email is Required"})} name='email' placeholder="email" className="input input-bordered"/>
      {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" {...register("password", {required:"Password is Required"})} placeholder="password" className="input input-bordered"/>
      {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
      <label className="label">
        <Link className='text-cyan-800' to='/login'><p>Already registered? Log in right now!</p></Link>
      </label>
    </div>
    {
      error && <p className='text-red-500'> {error.slice(22, 42)} </p>
    }
    <div className="form-control mt-6">
      <button className="btn bg-accent">Sign Up</button>
    </div>
    <div className="form-control mt-6">
      <button onClick={handleGoogleSignIn} className="btn btn-ghost"><FaGoogle className='mr-2'></FaGoogle>Sign Up with Google Instead</button>
      </div>
  </div>
</div>
</div>
</form>
        </div>
    );
};

export default Signup;