import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const NewsDetailsCard = () => {
    const allNews = useLoaderData();
    const {id} = useParams();
    const filteredNews = allNews.filter(eachNews => eachNews.id == id);
    const matchedNews = filteredNews[0];
    return (
    <div className="space-y-5">
      <img
        className="w-full h-[350px] object-cover"
        src={matchedNews.image_url}
        alt=""
      />
      <h2 className="text-2xl">{matchedNews.title}</h2>

      <p>{matchedNews.details}</p>
      <Link className="text-white bg-red-500 px-4 py-2 rounded font-bold" to={`/category/${matchedNews.category_id}`}>
        {" "}
        Back to Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;