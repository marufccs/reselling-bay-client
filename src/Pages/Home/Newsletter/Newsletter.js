import React from 'react';

const Newsletter = () => {
    return (
        <div>
                  <div className="hero mt-0 mb-12 rounded lg:mx-24 lg:w-11/12 lg:relative lg:right-6 min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Subscribe to Our NewsLetter</h1>
      <p className="py-6">Every week we send newsletters about what's going on into the photographic world, all kind of updates and even some photographic knowledges! If you don't want to miss those, subscribe right now!</p>
      <form >
      <input className='mr-2 py-3 rounded' type="email" name="email" placeholder='Type your email here'/>
      <button className="btn bg-cyan-800">Join Now</button>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Newsletter;