import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftSide = () => {
  const [newsCategories, setNewsCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setNewsCategories(data))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <div>
        <strong className="block mb-5">All Categories {newsCategories.length}</strong>
      <ul>
         {
            newsCategories && newsCategories.map((eachNewsCategory => <li className="py-3 text-xl text-gray-950 hover:bg-red-500 hover:text-white px-2" key={eachNewsCategory.id}>
                <NavLink to={`/category/${eachNewsCategory.id}`}>{eachNewsCategory.name}</NavLink>
            </li>))
         }
      </ul>
    </div>
  );
};

export default LeftSide;
