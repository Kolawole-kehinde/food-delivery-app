import React from 'react'
import './Home.css'
import Header from '../../Header/Header'
import Explore from '../../Explore/Explore'
import { useState } from 'react'

const Home = () => {
  const [category, setCategory] = useState ("All");
  return (
    <div>
      <Header/>
      <Explore category={category} setCategory={setCategory }/>
    </div>
  )
}

export default Home