import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const {createUser, updateUser, setUser} = use(AuthContext);
  const handleUserRegister = (e) => {
    e.preventDefault();
    const {email, password, name, photoUrl} = Object.fromEntries(new FormData(e.target));

   createUser(email, password)
   .then((result)=>{

    const user = result.user;

    updateUser({ displayName : name, photoURL : photoUrl }).then(()=>{

         setUser({...user, displayName : name, photoURL : photoUrl})
    }).catch(error=>{

        console.log(error);
        setUser(user);
    })


   }).catch(error=>{

       const errorCode = error.code;
       const errorMessage = error.message;
       alert(errorMessage, errorCode);
   });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-5">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Register your account
        </h2>

        {/* Form */}
        <form onSubmit={handleUserRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="url"
              name="photoUrl"
              placeholder="Photo URL"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already Have An Account?{" "}
          <NavLink
            to={"/auth/logIn"}
            className="text-red-600 font-medium hover:underline"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
