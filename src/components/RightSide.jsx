import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./Qzone";



const RightSide = () => {
  return (
    <div className="px-4">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
    </div>
  );
};

export default RightSide;
