import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const id = useParams();
    console.log(id, "seeId");
    return (
        <div>
            categoryies
        </div>
    );
};

export default CategoryNews;