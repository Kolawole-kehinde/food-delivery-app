import React from 'react'
import Showcase from '../Showcase';
import { useState } from 'react';
import Explorew from '../../Component/Explorew'

const HomePage = () => {
    const [category, setCategory] = useState ("All");
  return (
    <div>
        <Showcase/>
      <Explorew category={category} setCategory={setCategory }/>
    </div>
  )
}

export default HomePage

