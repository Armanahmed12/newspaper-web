import React, { use } from "react";
import { NavLink } from "react-router";
import { FcBusinessman } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
  const {user, logOut} = use(AuthContext);
  const handleLogout = () =>{

       logOut().then(()=>{
        alert("You logged out successfully");
       }).catch(error =>{
        console.log(error);
       })
      
  };
  return (
    <div className="flex justify-between items-center mx-15 my-5">
        <div></div>
      <div>
        <NavLink to='/' className="text-red-500 mr-7 text-lg font-bold">Home</NavLink>
        <NavLink className="text-red-500 mr-7 text-lg font-bold">About</NavLink>
        <NavLink className="text-red-500 mr-7 text-lg font-bold">Career</NavLink>
      </div>
      <div className="flex items-center justify-center gap-4">
        {
           user ?  <div className="w-10 rounded-full">
              <img className='block rounded-full' src={user.photoURL} alt={"user-photo"} />
            </div> : <FcBusinessman className="text-4xl"/>
        }
        <button className="text-white bg-red-500 px-4 py-2 rounded font-bold ">
         {
            user ? <NavLink onClick={handleLogout}>LogOut</NavLink>  : <NavLink to="/auth/logIn">LogIn</NavLink> 
         }
        </button>
      </div>
    </div>
  );
};

export default Navbar;
