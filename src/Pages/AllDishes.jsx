import React from 'react';
import TopDishes from '../Components/TopDishes';
import Banner from '../Components/Banner/Banner';


const AllDishes = () => {
  return (
    <section>
      <TopDishes title="All Dishes" start={0} end={32} showMoreButton = {false} subTitle = {false} />
    </section>
  );
};

export default AllDishes;
