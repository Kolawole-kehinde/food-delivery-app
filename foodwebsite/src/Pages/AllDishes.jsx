import React from 'react';
import TopDishes from '../Components/TopDishes';


const AllDishes = () => {
  return (
    <section>
      <TopDishes title="All Dishes" start={0} end={32} showMoreButton = {false} />
    </section>
  );
};

export default AllDishes;
