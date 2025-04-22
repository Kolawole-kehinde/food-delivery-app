import React from 'react'
import { useState } from 'react';
import Showcase from '../Components/Showcase';
import ExploreMenu from '../Components/Explore';


const HomePage = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
        <Showcase/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default HomePage

