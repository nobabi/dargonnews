import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
           <h2 className="text-2xl font-semibold text-center">Register your account</h2>
 <form className="card-body">


 <div className="form-control">
     <label className="label">
       <span className="label-text">Name</span>
     </label>
     <input type="text" placeholder="Name" className="input input-bordered" required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Photo</span>
     </label>
     <input type="text" placeholder="Photo" className="input input-bordered" required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text">Email</span>
     </label>
     <input type="email" placeholder="email" className="input input-bordered" required />
   </div>



   <div className="form-control">
     <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input type="password" placeholder="password" className="input input-bordered" required />
     <label className="label">
       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
     </label>
   </div>
   <div className="form-control mt-6">
     <button className="btn btn-neutral rounded-none">Login</button>
   </div>
 </form>
 <p className="text-center font-semibold">
  Allready Have Account ? <Link to="/auth/Login" className="text-red-500">Login</Link>

 </p>
</div>
   </div>
    );
};

export default Register;