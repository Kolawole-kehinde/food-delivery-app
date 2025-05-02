import React from 'react'
import { useState } from 'react';
import Showcase from '../Components/Showcase';
import ExploreMenu from '../Components/Explore';
import TopDishes from '../Components/TopDishes';
import { RecommendedDishes } from '../Components/RecommendedDishes';




const HomePage = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
        <Showcase/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <TopDishes category={category}/>
      <RecommendedDishes/>
     
    </div>
  )
}

export default HomePage

