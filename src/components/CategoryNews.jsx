import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';
import Loading from '../shared/Loading';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const {id} = useParams();
    const allNews = useLoaderData();
    useEffect(() => {
    if (id == "0") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCategoryNews(allNews);
    } else if (id == "1") {
      const filteredNews = allNews.filter(
        news => news.others.is_today_pick === true
      );
      setCategoryNews(filteredNews);
    } else {
      const matchedCategoryNews = allNews.filter(
        news => news.category_id == id
      );
      setCategoryNews(matchedCategoryNews);
    }
  }, [id, allNews]);
    return (
        <div>
          <strong className='block mb-5'>Total {categoryNews?.length} news Found</strong>
            {
              categoryNews.length > 0 ? categoryNews.map(eachNews => <NewsCard key={eachNews.id} newsInfo={eachNews}></NewsCard>) : <Loading></Loading>
            }
        </div>
    );
};

export default CategoryNews;