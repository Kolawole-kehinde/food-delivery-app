import React from 'react'
import { useState } from 'react';
import Showcase from '../Components/Showcase';
import ExploreMenu from '../Components/Explore';
import FoodDisplay from '../Components/FoodDisplay';


const HomePage = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
        <Showcase/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default HomePage

