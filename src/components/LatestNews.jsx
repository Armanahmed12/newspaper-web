import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="mx-15">
      <div className="bg-gray-100
       flex gap-4 align-center py-2 px-5 rounded">
        <div className="text-white bg-red-500 inline-block py-2 px-2 text-2xl rounded-lg">
          Latest
        </div>
        <Marquee>
          🚨 Breaking News: Bangladesh’s tech sector continues to grow rapidly
          as startups attract new investment, young developers gain global
          clients, and digital services expand nationwide, creating fresh job
          opportunities, boosting exports, improving skills, strengthening
          innovation, and positioning the country as a rising hub for modern
          software development and global recognition steadily.
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
