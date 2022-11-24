import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {

    }).catch((error) => {

    });
  }

    return (
        <div className='lg:mx-20'>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link>About Us</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
        user && user.uid?
         <>
         <li><Link onClick={handleLogOut}>Log Out</Link></li>
         <li><Link to='/dashboard'>Dashboard</Link></li>
         </> 
         :
          <>
         <li><Link to='/login'>Log In</Link></li>
         </>
      }
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl" to='/'> <span className='text-2xl'>Reselling </span> <span className='text-2xl bg-accent mx-2 text-white px-2 rounded'> Bay</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link>About Us</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      {
        user && user.uid?
         <>
         <li><Link onClick={handleLogOut}>Log Out</Link></li>
         <li><Link to='/dashboard'>Dashboard</Link></li>
         </> 
         :
          <>
         <li><Link to='/login'>Log In</Link></li>
         </>
      }
     
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn">Get started</Link>
  </div>
</div>
</div>
    );
};

export default Header;