import React, { use, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const LogIn = () => {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const { logIn, resetPassword } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.search ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  const handleResetPassword = () => {
    const emailInput = emailRef.current;
    if (emailInput.checkValidity()) {
      resetPassword(emailInput.value)
        .then(() => {
          // Password reset email sent!
          // ..
          alert(`Password reset email sent to ${emailInput.value}`);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      alert("Please write a valid email");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Login your account
        </h2>

        {/* Form */}
        <form onSubmit={handleLogIn} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-none"
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

          {/* Forgot password */}
          <div onClick={handleResetPassword} className="text-right">
            <a href="#" className="text-sm text-red-600 hover:underline">
              Forgot password?
            </a>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t Have An Account?{" "}
          <NavLink
            to={"/auth/register"}
            className="text-red-600 font-medium hover:underline"
          >
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
