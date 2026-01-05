import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="flex items-center gap-2 bg-red-500 text-white  px-5 py-2 rounded font-semibold w-full">
            <FaFacebook className="text-white"></FaFacebook> Facebook
          </button>
          <button  className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded font-semibold my-2 w-full">
            <FaTwitter className="text-white"></FaTwitter> Twitter
          </button>
           <button className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded font-semibold w-full">
            <FaInstagram className="text-white"></FaInstagram> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
