import React from 'react';
import NewsDetailsCard from '../components/NewsDetailsCard';
import Header from '../shared/Header';
import RightSide from '../components/RightSide';

const NewsDetails = () => {
    return (
         <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          <NewsDetailsCard></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
            <RightSide></RightSide>
        </aside>
      </main>
    </div>
    );
};

export default NewsDetails;